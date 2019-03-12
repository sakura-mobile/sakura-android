import QtQuick 2.12
import QtQuick.Controls 2.5
import QtQuick.Particles 2.12

import "GenerationBranch.js" as GenerationBranchScript
import "Util.js" as UtilScript

Item {
    id: cardPage

    property int currentLevel: 0
    property int currentLocation: 0
    property int currentCampaign: 0
    property int isCampaign: 0
    property int isRelax: 0

    property var listGameBranchObject: []
    property var listGameBranchCard: []
    property var arrRectTrasparent: []

    property real lastMouseX: 0
    property real lastMouseY: 0

    property int countPetalsMax: 250
    property int countPetalsMin: 10
    property int countPetals: 10

    property int emitRatePetalsMax: 70
    property int emitRatePetalsMin: 2
    property int emitRatePetals: 2
    property int isMaxPetals: 0
    property int isPetals: 1
    property int isTextCard: 0

    Keys.onReleased: {
        if (event.key === Qt.Key_Back) {
            mainStackView.pop();

            event.accepted = true;
        }
    }

    Rectangle {
        id: backgroundRectangle
        anchors.fill: parent
        color: "black"

        Image {
            id: imageBackgroundMainMap
            anchors.centerIn: parent
            width: parent.width
            height: parent.height
            fillMode: Image.PreserveAspectCrop

            ParticleSystem {
                id: particleSystem1
                running: false
            }

            Emitter {
                id: emitter1
                anchors.fill: parent
                system: particleSystem1
                lifeSpan: 5000
                size: 16
                emitRate: cardPage.emitRatePetals
                maximumEmitted: cardPage.countPetals

                velocity: AngleDirection {
                    angle: 90.0
                    angleVariation: 50
                    magnitude: 80.0
                    magnitudeVariation: 20
                }

                ImageParticle {
                    rotationVelocity: 30.0
                    rotationVariation: 10.0
                    opacity: 0.75
                    system: particleSystem1
                    source: "qrc:/resources/images/petal_big_2.png"
                }

                Age {
                    id: age1
                    anchors.fill: parent
                    system: particleSystem1
                    enabled: false
                    lifeLeft: 0
                }
            }

            ParticleSystem {
                id: particleSystem2
                running: false
            }

            Emitter {
                id: emitter2
                anchors.fill: parent
                system: particleSystem2
                lifeSpan: 5000
                size: 8
                emitRate: cardPage.emitRatePetals
                maximumEmitted: cardPage.countPetals

                velocity: AngleDirection {
                    angle: 90.0
                    angleVariation: 30
                    magnitude: 30.0
                    magnitudeVariation: 10
                }

                ImageParticle {
                    rotationVelocity: 30.0
                    rotationVariation: 10.0
                    opacity: 0.75
                    system: particleSystem2
                    source: "qrc:/resources/images/petal_small_1.png"
                }

                Age {
                    id: age2
                    anchors.fill: parent
                    system: particleSystem2
                    enabled: false
                    lifeLeft: 0
                }
            }

            Flickable {
                id: backgroundFlickable
                boundsBehavior: Flickable.StopAtBounds
                anchors.fill: parent

                property real initialContentWidth: 0.0
                property real initialContentHeight: 0.0

                function initialResize(grid_width, grid_height) {
                    if (grid_width > 0.0 && grid_height > 0.0) {
                        var scale = Math.min(width / grid_width,
                                             height / grid_height)

                        if (scale < 0.25) {
                            scale = 0.25
                        }
                        if (scale > 3.0) {
                            scale = 3.0
                        }

                        resizeContent(initialContentWidth * scale,
                                      initialContentHeight * scale,
                                      Qt.point(contentWidth / 2,
                                               contentHeight / 2))

                        contentX = (contentWidth - width) / 2
                        contentY = (contentHeight - height) / 2

                        returnToBounds()
                    }
                }

                PinchArea {
                    id: pinchAreaZoom
                    anchors.fill: parent

                    Rectangle {
                        width: Math.max(gridMapCard.width,
                                        backgroundFlickable.width) * 4
                        height: Math.max(gridMapCard.height,
                                         backgroundFlickable.height) * 4
                        scale: backgroundFlickable.initialContentWidth > 0.0
                               && backgroundFlickable.contentWidth
                               > 0.0 ? backgroundFlickable.contentWidth
                                       / backgroundFlickable.initialContentWidth : 1.0
                        transformOrigin: Item.TopLeft
                        color: "transparent"

                        onWidthChanged: {
                            backgroundFlickable.initialContentWidth = width

                            backgroundFlickable.initialResize(
                                        gridMapCard.width, gridMapCard.height)
                        }

                        onHeightChanged: {
                            backgroundFlickable.initialContentHeight = height

                            backgroundFlickable.initialResize(
                                        gridMapCard.width, gridMapCard.height)
                        }

                        Grid {
                            id: gridMapCard
                            anchors.centerIn: parent
                            spacing: 0

                            onWidthChanged: {
                                backgroundFlickable.initialResize(
                                            gridMapCard.width,
                                            gridMapCard.height)
                            }

                            onHeightChanged: {
                                backgroundFlickable.initialResize(
                                            gridMapCard.width,
                                            gridMapCard.height)
                            }
                        }

                        MouseArea {
                            id: mouseAreaRectBranch
                            anchors.fill: parent
                            propagateComposedEvents: true

                            onClicked: {
                                lastMouseX = mouse.x
                                lastMouseY = mouse.y

                                mouse.accepted = false
                            }

                            onDoubleClicked: {
                                if (Math.abs(mouse.x - lastMouseX) * scale < 16
                                        && Math.abs(
                                            mouse.y - lastMouseY) * scale < 16) {
                                    backgroundFlickable.initialResize(
                                                gridMapCard.width,
                                                gridMapCard.height)
                                }
                            }
                        }
                    }

                    onPinchStarted: {
                        backgroundFlickable.interactive = false
                    }

                    onPinchUpdated: {
                        backgroundFlickable.contentX += pinch.previousCenter.x - pinch.center.x
                        backgroundFlickable.contentY += pinch.previousCenter.y - pinch.center.y

                        var scale = 1.0 + pinch.scale - pinch.previousScale

                        if (backgroundFlickable.contentWidth * scale
                                / backgroundFlickable.initialContentWidth >= 0.25
                                && backgroundFlickable.contentWidth * scale
                                / backgroundFlickable.initialContentWidth <= 3.0) {
                            backgroundFlickable.resizeContent(
                                        backgroundFlickable.contentWidth * scale,
                                        backgroundFlickable.contentHeight * scale,
                                        pinch.center)
                        }
                    }

                    onPinchFinished: {
                        backgroundFlickable.interactive = true
                        backgroundFlickable.returnToBounds()
                    }
                }

                Component.onCompleted: {
                    contentWidth = width
                    contentHeight = height
                }
            }

            Image {
                id: backgroundTextCard
                anchors.horizontalCenter: parent.horizontalCenter
                y: imageBackgroundMainMap.height
                width: parent.width - UtilScript.pt(100)
                height: sourceSize.height * (width / sourceSize.width)
                source: "qrc:/resources/images/background_card.png"
                fillMode: Image.PreserveAspectFit

                Flickable {
                    id: flick
                    anchors.fill: parent
                    anchors.margins: UtilScript.pt(15)
                    contentWidth: textAreaCard.paintedWidth
                    contentHeight: textAreaCard.paintedHeight
                    clip: true

                    function ensureVisible(r) {
                        if (contentX >= r.x)
                            contentX = r.x
                        else if (contentX + width <= r.x + r.width)
                            contentX = r.x + r.width - width
                        if (contentY >= r.y)
                            contentY = r.y
                        else if (contentY + height <= r.y + r.height)
                            contentY = r.y + r.height - height
                    }

                    TextArea {
                        id: textAreaCard
                        width: flick.width
                        height: Math.max(flick.height, contentHeight)
                        font.pointSize: 20
                        font.bold: true
                        color: "black"
                        font.family: "Helvetica"
                        wrapMode: TextEdit.Wrap
                        inputMethodHints: Qt.ImhNoPredictiveText
                        verticalAlignment: TextEdit.AlignVCenter
                        horizontalAlignment: TextEdit.AlignHCenter
                        onCursorRectangleChanged: flick.ensureVisible(
                                                      cursorRectangle)
                    }
                }

                PropertyAnimation {
                    id: animationBackgroundTextCardUp
                    duration: 200
                    from: imageBackgroundMainMap.height
                    target: backgroundTextCard
                    properties: "y"
                    easing.type: Easing.InQuad
                    to: imageBackgroundMainMap.height - backgroundTextCard.height - UtilScript.pt(15)
                    onStopped: {
                        textAreaCard.forceActiveFocus();
                    }
                }
                PropertyAnimation {
                    id: animationBackgroundTextCardDown
                    duration: 200
                    from: backgroundTextCard.y
                    target: backgroundTextCard
                    properties: "y"
                    easing.type: Easing.InQuad
                    to: imageBackgroundMainMap.height
                }
            }
        }

        Rectangle {
            id: waitRectangle
            anchors.fill: parent
            z: 30
            color: "black"
            opacity: 0.75
            visible: false

            BusyIndicator {
                anchors.centerIn: parent
                running: parent.visible
            }

            MouseArea {
                anchors.fill: parent
            }
        }
    }

    Column {
        anchors.left: parent.left
        anchors.top: parent.top
        anchors.topMargin: UtilScript.pt(40)
        anchors.leftMargin: UtilScript.pt(10)
        z: 1
        spacing: UtilScript.pt(15)

        Image {
            id: backButton
            source: "qrc:/resources/images/back.png"
            width: UtilScript.pt(40)
            height: UtilScript.pt(40)
            z: 1
            MouseArea {
                id: mouseAreaBackButton
                anchors.fill: parent
                onClicked: {
                    mainStackView.pop()
                }
            }
        }

        Image {
            id: imageButton
            source: "qrc:/resources/images/button_image.png"
            width: UtilScript.pt(40)
            height: UtilScript.pt(40)

            MouseArea {
                id: mouseAreaTextButtonImage
                anchors.fill: parent
                onClicked: {
                    textAreaCard.focus = false;

                    cardPage.forceActiveFocus();

                    captureImage();
                }
            }
        }

        Image {
            id: gifButton
            source: "qrc:/resources/images/button_gif.png"
            width: UtilScript.pt(40)
            height: UtilScript.pt(40)

            MouseArea {
                id: mouseAreaTextButtonGif
                anchors.fill: parent
                onClicked: {
                    textAreaCard.focus = false;

                    cardPage.forceActiveFocus();

                    captureGIFTimer.start();
                }
            }
        }
    }

    Column {
        anchors.right: parent.right
        anchors.top: parent.top
        anchors.topMargin: UtilScript.pt(40)
        anchors.rightMargin: UtilScript.pt(10)
        z: 1
        spacing: UtilScript.pt(15)

        Image {
            id: petalsButton
            source: "qrc:/resources/images/button_petals.png"
            width: UtilScript.pt(40)
            height: UtilScript.pt(40)

            MouseArea {
                id: mouseAreaPetalsButton
                anchors.fill: parent
                onClicked: {
                    visiblePetals()
                }
            }
        }

        Image {
            id: rectButton
            source: "qrc:/resources/images/button_rect.png"
            width: UtilScript.pt(40)
            height: UtilScript.pt(40)

            MouseArea {
                id: mouseAreaRectButton
                anchors.fill: parent
                onClicked: {
                    visibleRectanglesMap()
                }
            }
        }
        Image {
            id: textEnableButton
            source: "qrc:/resources/images/button_text_enable.png"
            width: UtilScript.pt(40)
            height: UtilScript.pt(40)

            MouseArea {
                id: mouseAreaTextButtonEnable
                anchors.fill: parent
                onClicked: {
                    visibleTextCard()
                }
            }
        }
    }

    Timer {
        id: captureGIFTimer
        interval: 200
        repeat: true
        triggeredOnStart: true

        property int frameNumber: 0
        property int framesCount: 5

        onRunningChanged: {
            if (running) {
                waitRectangle.visible = true

                frameNumber = 0
            } else {
                if (frameNumber >= framesCount) {
                    if (GIFCreator.createGIF(framesCount, interval / 10)) {
                        ShareHelper.shareImage(GIFCreator.gifFilePath)
                    } else {
                        console.log("createGIF() failed")
                    }
                }

                waitRectangle.visible = false
            }
        }

        onTriggered: {
            if (frameNumber < framesCount) {
                var frame_number = frameNumber
                if (!imageBackgroundMainMap.grabToImage(function (result) {
                    result.saveToFile(GIFCreator.imageFilePathMask.arg(
                                          frame_number))
                })) {
                    console.log("grabToImage() failed for frame %1".arg(
                                    frame_number))
                }

                frameNumber = frameNumber + 1
            } else {
                stop()
            }
        }
    }

    Component.onCompleted: {

        if (isMaxPetals === 1) {
            cardPage.countPetals = cardPage.countPetalsMax
            cardPage.emitRatePetals = cardPage.emitRatePetalsMax
        } else {
            cardPage.countPetals = cardPage.countPetalsMin
            cardPage.emitRatePetals = cardPage.emitRatePetalsMin
        }
        resetParticleSystems()
        loadBranchOnMap()
    }

    function captureImage() {
        waitRectangle.visible = true

        if (!imageBackgroundMainMap.grabToImage(function (result) {
            result.saveToFile(ShareHelper.imageFilePath)

            ShareHelper.shareImage(ShareHelper.imageFilePath)

            waitRectangle.visible = false
        })) {
            console.log("grabToImage() failed")

            waitRectangle.visible = false
        }
    }

    function visibleTextCard() {
        if (isTextCard === 0) {
            animationBackgroundTextCardUp.running = true
            isTextCard = 1
        } else {
            animationBackgroundTextCardDown.running = true
            isTextCard = 0
        }
    }

    function visiblePetals() {
        if (isPetals === 1) {
            emitter1.enabled = false
            emitter2.enabled = false
            age1.enabled = true
            age2.enabled = true
            isPetals = 0
        } else {
            isPetals = 1
            age1.enabled = false
            age2.enabled = false
            emitter1.enabled = true
            emitter2.enabled = true
        }
    }

    function resetParticleSystems() {
        emitter1.enabled = true
        emitter2.enabled = true
        particleSystem1.running = true
        particleSystem2.running = true
        particleSystem1.reset()
        particleSystem2.reset()
    }

    function visibleRectanglesMap() {
        if (listGameBranchCard.length !== 0) {
            for (var keyI in listGameBranchCard) {
                if (listGameBranchCard[keyI].length !== 0) {
                    for (var keyJ in listGameBranchCard[keyI]) {
                        if (listGameBranchCard[keyI][keyJ] !== null)
                            listGameBranchCard[keyI][keyJ].visibleRectangleBranch()
                    }
                }
            }
        }
    }

    function loadBranchOnMap() {
        var widthGame
        var heightGame
        var component
        var object
        var objMap
        if (isRelax === 1) {
            GenerationBranchScript.initObjectRelaxLevels()
            imageBackgroundMainMap.source = "qrc:/resources/images/background_relax.jpg"
            objMap = GenerationBranchScript.listObjectRelaxLevels[currentLevel]
            widthGame = objMap.width
            heightGame = objMap.height
        } else if (isCampaign === 1) {
            GenerationBranchScript.initObjectCampaigns()
            imageBackgroundMainMap.source = GenerationBranchScript.listObjectCampaigns[currentCampaign].listLocations[currentLocation].background
            objMap = GenerationBranchScript.listObjectCampaigns[currentCampaign].listLocations[currentLocation].listLevels[currentLevel]
            widthGame = objMap.width
            heightGame = objMap.height
        } else {
            imageBackgroundMainMap.source = "qrc:/resources/images/background_main.png"
            GenerationBranchScript.initObjectSingleLevels()
            objMap = GenerationBranchScript.listObjectSingleLevels[currentLevel]
            widthGame = objMap.width
            heightGame = objMap.height
            if (objMap.map.length === 0) {
                for (var i = 0; i < objMap.height; i++) {
                    for (var j = 0; j < objMap.width; j++) {
                        objMap.map[objMap.map.length] = 1
                    }
                }
            }
        }

        var listMap = []
        var pos = 0
        for (var i = 0; i < heightGame; i++) {
            listMap[i] = []
            for (var j = 0; j < widthGame; j++) {
                listMap[i][j] = objMap.map[pos]
                pos++
            }
        }

        objMap.mapArray = listMap

        if (arrRectTrasparent.length > 0) {
            for (var key in arrRectTrasparent) {
                arrRectTrasparent[key].destroy()
            }
        }
        arrRectTrasparent = []

        if (listGameBranchCard.length !== 0) {
            for (var keyI in listGameBranchCard) {
                if (listGameBranchCard[keyI].length !== 0) {
                    for (var keyJ in listGameBranchCard[keyI]) {
                        if (listGameBranchCard[keyI][keyJ] !== null)
                            listGameBranchCard[keyI][keyJ].destroy()
                    }
                }
            }
        }

        listGameBranchCard = []
        for (var i = 0; i < heightGame; i++) {
            listGameBranchCard[i] = []
            for (var j = 0; j < widthGame; j++) {
                listGameBranchCard[i][j] = null
            }
        }

        gridMapCard.columns = 0
        gridMapCard.columns = widthGame
        var typeColorBranch = ""
        for (var i = 0; i < heightGame; i++) {
            for (var j = 0; j < widthGame; j++) {
                if ((objMap.mapArray[i][j] === 1)
                        || (objMap.mapArray[i][j] === 2)
                        || (objMap.mapArray[i][j] === 3)) {
                    component = Qt.createComponent("Branch.qml")
                    typeColorBranch = ""
                    if (listGameBranchObject[i][j].typeColor === 2)
                        typeColorBranch = "_1"
                    if (listGameBranchObject[i][j].typeColor === 3)
                        typeColorBranch = "_2"
                    object = component.createObject(gridMapCard)
                    object.source = "qrc:/resources/images/branch/"
                            + listGameBranchObject[i][j].nameItem + "_3e" + typeColorBranch + ".png"
                    object.rotationBranch = listGameBranchObject[i][j].rotationBranch
                    object.posLeft = listGameBranchObject[i][j].posLeft
                    object.posRight = listGameBranchObject[i][j].posRight
                    object.posTop = listGameBranchObject[i][j].posTop
                    object.posBottom = listGameBranchObject[i][j].posBottom
                    object.nameItem = listGameBranchObject[i][j].nameItem
                    object.typeColor = listGameBranchObject[i][j].typeColor
                    object.typeItem = 1
                    object.typeAnimation = 1
                    object.posI = i
                    object.posJ = j
                    object.stopRotation = 0
                    object.glareBranchCard()
                    listGameBranchCard[i][j] = object
                } else {
                    component = Qt.createQmlObject(
                                'import QtQuick 2.9; Rectangle {color: "transparent"; width: 30; height: 20}',
                                gridMapCard)
                    arrRectTrasparent[arrRectTrasparent.length] = component
                }
            }
        }
    }
}
