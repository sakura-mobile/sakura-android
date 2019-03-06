import QtQuick 2.9
import QtQuick.Controls 2.2
import QtQuick.Particles 2.0
import QtMultimedia 5.9

import "GenerationBranch.js" as GenerationBranchScript
import "Util.js" as UtilScript

Item {
    id: tutorialPage
    property int currentLevel: 0
    property var arrRectTrasparent: []
    property int currentTutorialLevel: 0
    property var arrBranchRotation: []
    property var posFlickering: ""
    property int stateTutorial: 1

    property int countPetalsMax: 250
    property int countPetalsMin: 10
    property int countPetals: 10

    property int emitRatePetalsMax: 70
    property int emitRatePetalsMin: 2
    property int emitRatePetals: 2

    property real lastMouseX: 0
    property real lastMouseY: 0

    Image {
        id: imageBackgroundMainLevel
        source: "qrc:/resources/images/background_main.png"
        anchors.fill: parent
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
            emitRate: tutorialPage.emitRatePetals
            maximumEmitted: tutorialPage.countPetals

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
            emitRate: tutorialPage.emitRatePetals
            maximumEmitted: tutorialPage.countPetals

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
        }

        Flickable {
            id: backgroundFlickable
            boundsBehavior: Flickable.StopAtBounds
            anchors.centerIn: parent
            width: Math.min(parent.width, parent.height)
            height: Math.min(parent.width, parent.height)
            clip: true

            property real initialContentWidth: 0.0
            property real initialContentHeight: 0.0

            function initialResize(grid_width, grid_height) {
                if (grid_width > 0.0 && grid_height > 0.0) {
                    var scale = 2.5
                    resizeContent(initialContentWidth * scale,
                                  initialContentHeight * scale,
                                  Qt.point(contentWidth / 2, contentHeight / 2))

                    contentX = (contentWidth - width) / 2
                    contentY = (contentHeight - height) / 2

                    returnToBounds()
                }
            }

            PinchArea {
                id: pinchAreaZoom
                anchors.fill: parent

                Rectangle {
                    width: Math.max(gridMapTutorialGame.width,
                                    backgroundFlickable.width)
                    height: Math.max(gridMapTutorialGame.height,
                                     backgroundFlickable.height)
                    scale: backgroundFlickable.initialContentWidth > 0.0
                           && backgroundFlickable.contentWidth
                           > 0.0 ? backgroundFlickable.contentWidth
                                   / backgroundFlickable.initialContentWidth : 1.0
                    transformOrigin: Item.TopLeft
                    color: "transparent"

                    onWidthChanged: {
                        backgroundFlickable.initialContentWidth = width

                        backgroundFlickable.initialResize(
                                    gridMapTutorialGame.width,
                                    gridMapTutorialGame.height)
                    }

                    onHeightChanged: {
                        backgroundFlickable.initialContentHeight = height

                        backgroundFlickable.initialResize(
                                    gridMapTutorialGame.width,
                                    gridMapTutorialGame.height)
                    }

                    Grid {
                        id: gridMapTutorialGame
                        anchors.centerIn: parent
                        spacing: 1

                        onWidthChanged: {
                            backgroundFlickable.initialResize(
                                        gridMapTutorialGame.width,
                                        gridMapTutorialGame.height)
                        }

                        onHeightChanged: {
                            backgroundFlickable.initialResize(
                                        gridMapTutorialGame.width,
                                        gridMapTutorialGame.height)
                        }
                    }
                    Image {
                        id: imageTutorial
                        anchors.centerIn: parent
                        width: 50
                        height: 50
                        z: 10
                        visible: false
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
                                if (stateTutorial === 5) {
                                    timer.start()
                                    stateTutorial = 6
                                }
                                backgroundFlickable.initialResize(
                                            gridMapTutorialGame.width,
                                            gridMapTutorialGame.height)
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
                            / backgroundFlickable.initialContentWidth >= 1.0
                            && backgroundFlickable.contentWidth * scale
                            / backgroundFlickable.initialContentWidth <= 3.0) {
                        backgroundFlickable.resizeContent(
                                    backgroundFlickable.contentWidth * scale,
                                    backgroundFlickable.contentHeight * scale,
                                    pinch.center)
                        if (stateTutorial === 1)
                            stateTutorial = 2
                    }
                }

                onPinchFinished: {
                    backgroundFlickable.interactive = true

                    backgroundFlickable.returnToBounds()

                    if (stateTutorial === 2) {
                        textPinchMap.visible = false
                        textFlickMap.visible = true
                        imageTutorial.visible = true
                        imageTutorial.source = "qrc:/resources/images/flick.png"
                        stateTutorial = 3
                    }
                }
            }

            Component.onCompleted: {
                contentWidth = width
                contentHeight = height
            }

            onMovementEnded: {
                if (stateTutorial === 4) {
                    stateTutorial = 5
                    textFlickMap.visible = false
                    textPinchMap.visible = false
                    textDisassembleBranch.visible = false
                    textDoubleTapBranch.visible = true
                    imageTutorial.source = "qrc:/resources/images/doubletap.png"
                }
            }
            onMovementStarted: {
                if (stateTutorial === 3) {
                    stateTutorial = 4
                }
            }
        }

        Image {
            id: backButton
            source: "qrc:/resources/images/back.png"
            width: UtilScript.pt(60)
            height: UtilScript.pt(60)
            anchors.left: parent.left
            anchors.bottom: parent.bottom
            anchors.leftMargin: UtilScript.pt(40)
            anchors.bottomMargin: UtilScript.pt(16)
            MouseArea {
                id: mouseAreaBackButton
                anchors.fill: parent
                onClicked: {
                    mainStackView.pop()
                }
            }
        }

        Image {
            id: refreshButton
            source: "qrc:/resources/images/refresh.png"
            anchors.right: parent.right
            anchors.bottom: parent.bottom
            anchors.rightMargin: UtilScript.pt(40)
            anchors.bottomMargin: UtilScript.pt(16)
            width: UtilScript.pt(60)
            height: UtilScript.pt(60)
            MouseArea {
                id: mouseAreaRefreshButton
                anchors.fill: parent
                onClicked: {
                    repeatGame()
                }
            }
        }

        Rectangle {
            id: rectCompletedGame
            anchors.horizontalCenter: parent.horizontalCenter
            y: imageBackgroundMainLevel.height
            width: UtilScript.pt(300)
            height: UtilScript.pt(200)
            color: "transparent"
            Image {
                id: backgroundCompletedGame
                source: "qrc:/resources/images/background_rect_score.png"
                width: parent.width
                height: parent.height

                Row {
                    id: rowTextCompletedGame
                    anchors.top: parent.top
                    anchors.horizontalCenter: parent.horizontalCenter
                    anchors.topMargin: UtilScript.pt(50)
                    z: 15
                    spacing: UtilScript.pt(5)
                    Text {
                        id: textCompletedGame
                        text: qsTr("Excellent!")
                        font.pointSize: 30
                        font.bold: true
                        color: "white"
                        font.family: "Helvetica"
                    }
                }

                Row {
                    id: rowRectCompletedGame
                    anchors.bottom: parent.bottom
                    anchors.horizontalCenter: parent.horizontalCenter
                    anchors.bottomMargin: UtilScript.pt(30)
                    z: 15
                    height: UtilScript.pt(50)
                    spacing: UtilScript.pt(15)

                    Image {
                        id: imageRepeatGame
                        width: UtilScript.pt(50)
                        height: UtilScript.pt(50)
                        source: "qrc:/resources/images/button_repeat_game.png"
                        MouseArea {
                            id: mouseAreaPlayRepeatGame
                            anchors.fill: parent
                            onClicked: {
                                repeatGame()
                            }
                        }
                    }
                    Image {
                        id: imageSeachLevel
                        width: UtilScript.pt(50)
                        height: UtilScript.pt(50)
                        source: "qrc:/resources/images/button_seach_levels.png"
                        MouseArea {
                            id: mouseAreaSeachLevel
                            anchors.fill: parent
                            onClicked: {
                                mainStackView.pop()
                            }
                        }
                    }
                }
            }

            PropertyAnimation {
                id: animationRectCompletedGameUp
                duration: 500
                easing.overshoot: 4.5
                from: imageBackgroundMainLevel.height
                target: rectCompletedGame
                properties: "y"
                easing.type: Easing.InQuad
                to: imageBackgroundMainLevel.height - rectCompletedGame.height - UtilScript.pt(15)
            }
            PropertyAnimation {
                id: animationRectCompletedGameDown
                duration: 200
                from: rectCompletedGame.y
                target: rectCompletedGame
                properties: "y"
                easing.type: Easing.InQuad
                to: imageBackgroundMainLevel.height
                onStopped: {
                    emitter1.enabled = false
                    emitter2.enabled = false
                }
            }
        }

        Rectangle {
            id: rectTutorialGame
            anchors.horizontalCenter: parent.horizontalCenter
            y: imageBackgroundMainLevel.height * -1
            height: UtilScript.pt(100)
            color: "transparent"
            width: parent.width

            Rectangle {
                anchors.fill: parent
                height: UtilScript.pt(100)
                color: "black"
                opacity: 0.5
                width: parent.width
            }

            Text {
                id: textPinchMap
                anchors.fill: parent
                anchors.margins: UtilScript.pt(4)
                z: 15
                visible: true
                text: qsTr("Try to resize playground area with pinch gesture")
                font.pointSize: 20
                font.bold: true
                color: "white"
                opacity: 1.0
                font.family: "Helvetica"
                horizontalAlignment: Text.AlignHCenter
                verticalAlignment: Text.AlignVCenter
                wrapMode: Text.Wrap
                fontSizeMode: Text.Fit
                minimumPointSize: 6
            }

            Text {
                id: textFlickMap
                anchors.fill: parent
                anchors.margins: UtilScript.pt(4)
                z: 15
                visible: false
                text: qsTr("Try to move playground area with your finger")
                font.pointSize: 20
                font.bold: true
                color: "white"
                font.family: "Helvetica"
                horizontalAlignment: Text.AlignHCenter
                verticalAlignment: Text.AlignVCenter
                wrapMode: Text.Wrap
                fontSizeMode: Text.Fit
                minimumPointSize: 6
            }

            Text {
                id: textDoubleTapBranch
                anchors.fill: parent
                anchors.margins: UtilScript.pt(4)
                z: 15
                visible: false
                text: qsTr("Double tap on playground area to restore its default position")
                font.pointSize: 20
                font.bold: true
                color: "white"
                font.family: "Helvetica"
                horizontalAlignment: Text.AlignHCenter
                verticalAlignment: Text.AlignVCenter
                wrapMode: Text.Wrap
                fontSizeMode: Text.Fit
                minimumPointSize: 6
            }

            Text {
                id: textDisassembleBranch
                anchors.fill: parent
                anchors.margins: UtilScript.pt(4)
                z: 15
                visible: false
                text: qsTr("Disassembling puzzle...")
                font.pointSize: 20
                font.bold: true
                color: "white"
                font.family: "Helvetica"
                horizontalAlignment: Text.AlignHCenter
                verticalAlignment: Text.AlignVCenter
                wrapMode: Text.Wrap
                fontSizeMode: Text.Fit
                minimumPointSize: 6
            }

            Text {
                id: textPressedBranch
                anchors.fill: parent
                anchors.margins: UtilScript.pt(4)
                z: 15
                visible: false
                text: qsTr("Tap on highlighted fragments to solve the puzzle")
                font.pointSize: 20
                font.bold: true
                color: "white"
                font.family: "Helvetica"
                horizontalAlignment: Text.AlignHCenter
                verticalAlignment: Text.AlignVCenter
                wrapMode: Text.Wrap
                fontSizeMode: Text.Fit
                minimumPointSize: 6
            }
        }
        PropertyAnimation {
            id: animationRectTutorialGameUp
            duration: 500
            easing.overshoot: 1.5
            from: rectTutorialGame.y
            target: rectTutorialGame
            properties: "y"
            easing.type: Easing.InQuad
            to: rectTutorialGame.height * -1
        }
        PropertyAnimation {
            id: animationRectTutorialGameDown
            duration: 500
            from: rectTutorialGame.height * -1
            target: rectTutorialGame
            properties: "y"
            easing.type: Easing.InQuad
            to: 0
        }
    }

    Timer {
        id: timer
        interval: 1000
        repeat: false
        onTriggered: tutorialPage.startTimerTutorial()
    }

    Audio {
        id: audioClickBranch
        volume: 1.0
        source: "qrc:/resources/sound/click.wav"

        property bool playbackEnabled: !AudioHelper.silenceAudio

        onError: {
            console.log(errorString)
        }

        function playAudio() {
            if (playbackEnabled) {
                play()
            }
        }
    }

    Audio {
        id: audioGoodGame
        volume: 1.0
        source: "qrc:/resources/sound/game_complete.wav"

        property bool playbackEnabled: !AudioHelper.silenceAudio

        onError: {
            console.log(errorString)
        }

        function playAudio() {
            if (playbackEnabled) {
                play()
            }
        }
    }

    Component.onCompleted: {
        loadBranchOnMap()
    }

    StackView.onStatusChanged: {
        if (StackView.status === StackView.Active) {
            animationRectTutorialGameDown.running = true
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

    function startTimerTutorial() {
        textFlickMap.visible = false
        textPinchMap.visible = false
        textDisassembleBranch.visible = true
        textDoubleTapBranch.visible = false
        imageTutorial.visible = false

        mixMap()
    }

    function repeatGame() {
        stateTutorial = 1
        textFlickMap.visible = false
        textPinchMap.visible = true
        textDisassembleBranch.visible = false
        textPressedBranch.visible = false
        textDoubleTapBranch.visible = false
        animationRectTutorialGameDown.running = true
        animationRectCompletedGameDown.running = true
        loadBranchOnMap()
    }

    function loadBranchOnMap() {
        GenerationBranchScript.initObjectTutorialLevels()
        var objMap = GenerationBranchScript.listObjectTutorialLevels[currentTutorialLevel]
        var widthGame = objMap.width
        var heightGame = objMap.height

        if (objMap.map.length === 0) {
            for (var i = 0; i < objMap.height; i++) {
                for (var j = 0; j < objMap.width; j++) {
                    objMap.map[objMap.map.length] = 1
                }
            }
        }

        if (GenerationBranchScript.listGameBranchObject.length !== 0) {
            for (var keyI in GenerationBranchScript.listGameBranchObject) {
                if (GenerationBranchScript.listGameBranchObject[keyI].length !== 0) {
                    for (var keyJ in GenerationBranchScript.listGameBranchObject[keyI]) {
                        if (GenerationBranchScript.listGameBranchObject[keyI][keyJ] !== null)
                            GenerationBranchScript.listGameBranchObject[keyI][keyJ].destroy()
                    }
                }
            }
        }

        GenerationBranchScript.listGameBranch = []

        GenerationBranchScript.listGameBranchObject = []
        for (var i = 0; i < heightGame; i++) {
            GenerationBranchScript.listGameBranchObject[i] = []
            for (var j = 0; j < widthGame; j++) {
                GenerationBranchScript.listGameBranchObject[i][j] = null
            }
        }

        if (arrRectTrasparent.length > 0) {
            for (var key in arrRectTrasparent) {
                arrRectTrasparent[key].destroy()
            }
        }
        arrRectTrasparent = []

        GenerationBranchScript.createBranchForMap(objMap)

        var component
        var object
        gridMapTutorialGame.columns = 0
        gridMapTutorialGame.columns = widthGame
        GenerationBranchScript.isPlayGame = 1
        GenerationBranchScript.isCompleted = 0
        gridMapTutorialGame.spacing = 1

        for (var i = 0; i < heightGame; i++) {
            for (var j = 0; j < widthGame; j++) {
                if (objMap.mapArray[i][j] === 1) {
                    component = Qt.createComponent("Branch.qml")
                    object = component.createObject(gridMapTutorialGame)
                    object.stopRotation = 0
                    object.countRotation = 0
                    object.source = GenerationBranchScript.listGameBranch[i][j].source
                    object.rotationBranch = GenerationBranchScript.listGameBranch[i][j].rotation
                    object.posLeft = GenerationBranchScript.listGameBranch[i][j].left
                    object.posRight = GenerationBranchScript.listGameBranch[i][j].right
                    object.posTop = GenerationBranchScript.listGameBranch[i][j].top
                    object.posBottom = GenerationBranchScript.listGameBranch[i][j].bottom
                    object.nameItem = GenerationBranchScript.listGameBranch[i][j].name
                    object.typeItem = 1
                    object.typeAnimation = 1
                    object.posI = i
                    object.posJ = j
                    object.onClickedBranch.connect(rotationBranch)
                    object.onStopRotationTime.connect(stopRotationBranch)
                    object.onStopRotationTimeGame.connect(
                                stopRotationBranchGame)
                    object.setEnabledMouseArea();
                    GenerationBranchScript.listGameBranchObject[i][j] = object
                } else {
                    component = Qt.createQmlObject(
                                'import QtQuick 2.9; Rectangle {color: "transparent"; width: 30; height: 20}',
                                gridMapSingleGame)
                    arrRectTrasparent[arrRectTrasparent.length] = component
                }
            }
        }

        imageTutorial.source = "qrc:/resources/images/pinch.png"
        imageTutorial.visible = true
        stateTutorial = 1
    }

    function stopRotationBranchGame(ii, jj) {
        GenerationBranchScript.revivalBranchStart()

        if (GenerationBranchScript.isCompletedGame() === true) {
            GenerationBranchScript.isCompleted = 1
            animationRectTutorialGameUp.running = true
            animationRectCompletedGameUp.running = true
            gridMapTutorialGame.spacing = 0
            startAnimationBranch()
            audioGoodGame.playAudio()
        }
    }
    function stopRotationBranch(ii, jj) {
        GenerationBranchScript.listGameBranchObject[ii][jj].stopRotation = 1
        var countStopBranch = 0
        arrBranchRotation = []
        for (var i = 0; i < GenerationBranchScript.heightGame; i++) {
            for (var j = 0; j < GenerationBranchScript.widthGame; j++) {
                if (GenerationBranchScript.listGameBranchObject[i][j] !== null) {
                    if (GenerationBranchScript.listGameBranchObject[i][j].stopRotation === 1) {
                        countStopBranch++
                    }
                    arrBranchRotation[arrBranchRotation.length] = {
                        "posI": i,
                        "posJ": j
                    }
                }
            }
        }
        if (arrBranchRotation.length === countStopBranch) {
            GenerationBranchScript.setStartBranch()
            GenerationBranchScript.revivalBranchStart()

            var seachBranch = 0
            while (!seachBranch && arrBranchRotation.length > 0) {
                var startPoint = GenerationBranchScript.getRandomInt(
                            0, arrBranchRotation.length - 1)
                var iFlickering = arrBranchRotation[startPoint].posI
                var jFlickering = arrBranchRotation[startPoint].posJ
                if (GenerationBranchScript.listGameBranchObject[iFlickering][jFlickering].countRotation !== 0) {
                    posFlickering = {
                        "posI": iFlickering,
                        "posJ": jFlickering
                    }
                    seachBranch = 1
                    GenerationBranchScript.listGameBranchObject[iFlickering][jFlickering].startAnimationFlickering()
                }
            }
        }

        textFlickMap.visible = false
        textPinchMap.visible = false
        textDisassembleBranch.visible = false
        textDoubleTapBranch.visible = false
        textPressedBranch.visible = true
    }

    function mixMap() {
        tutorialPage.countPetals = tutorialPage.countPetalsMin
        tutorialPage.emitRatePetals = tutorialPage.emitRatePetalsMin
        tutorialPage.resetParticleSystems()

        var arrBranch = []
        for (var i = 0; i < GenerationBranchScript.heightGame; i++) {
            for (var j = 0; j < GenerationBranchScript.widthGame; j++) {
                if (GenerationBranchScript.listGameBranchObject[i][j] !== null) {
                    arrBranch[arrBranch.length] = {
                        "posI": i,
                        "posJ": j
                    }
                }
            }
        }
        var countBranchInMap = arrBranch.length
        var stepGame = 0
        var arrRotation = []
        while (arrBranch.length > 0) {
            var startPoint = GenerationBranchScript.getRandomInt(
                        0, arrBranch.length - 1)
            i = arrBranch[startPoint].posI
            j = arrBranch[startPoint].posJ
            if (GenerationBranchScript.listGameBranchObject[i][j].nameItem !== 'branch_05') {

                if (GenerationBranchScript.listGameBranchObject[i][j].rotationBranch === 270) {
                    if (GenerationBranchScript.listGameBranchObject[i][j].nameItem == 'branch_01') {
                        arrRotation = [270, 180]
                    } else {
                        arrRotation = [270, 180]
                    }
                }

                if (GenerationBranchScript.listGameBranchObject[i][j].rotationBranch === 0) {
                    if (GenerationBranchScript.listGameBranchObject[i][j].nameItem == 'branch_01') {
                        arrRotation = [0, 270]
                    } else {
                        arrRotation = [0, 270, 180, 90]
                    }
                }
                if (GenerationBranchScript.listGameBranchObject[i][j].rotationBranch === 180) {
                    if (GenerationBranchScript.listGameBranchObject[i][j].nameItem == 'branch_01') {
                        arrRotation = [180, 90]
                    } else {
                        arrRotation = [180, 90, 0, 270]
                    }
                }

                if (GenerationBranchScript.listGameBranchObject[i][j].rotationBranch === 90) {
                    if (GenerationBranchScript.listGameBranchObject[i][j].nameItem == 'branch_01') {
                        arrRotation = [90, 0]
                    } else {
                        arrRotation = [90, 0, 270, 180]
                    }
                }

                var typeRotation = GenerationBranchScript.getRandomInt(
                            0, arrRotation.length - 1)
                if (typeRotation === 0)
                    typeRotation = 1

                GenerationBranchScript.listGameBranchObject[i][j].fromRotationBranch
                        = GenerationBranchScript.listGameBranchObject[i][j].rotationBranch
                GenerationBranchScript.listGameBranchObject[i][j].toRotationBranch
                        = arrRotation[typeRotation]
                GenerationBranchScript.listGameBranchObject[i][j].stopRotation = 0
                GenerationBranchScript.listGameBranchObject[i][j].startAnimationRotation()
                for (var n = 0; n < GenerationBranchScript.listImageBranchFull.length; n++) {
                    if (GenerationBranchScript.listImageBranchFull[n].name
                            == GenerationBranchScript.listGameBranchObject[i][j].nameItem
                            && GenerationBranchScript.listImageBranchFull[n].rotation
                            == GenerationBranchScript.listGameBranchObject[i][j].toRotationBranch) {
                        GenerationBranchScript.listGameBranchObject[i][j].posLeft
                                = GenerationBranchScript.listImageBranchFull[n].left
                        GenerationBranchScript.listGameBranchObject[i][j].posRight
                                = GenerationBranchScript.listImageBranchFull[n].right
                        GenerationBranchScript.listGameBranchObject[i][j].posTop
                                = GenerationBranchScript.listImageBranchFull[n].top
                        GenerationBranchScript.listGameBranchObject[i][j].posBottom
                                = GenerationBranchScript.listImageBranchFull[n].bottom
                        GenerationBranchScript.listGameBranchObject[i][j].countRotation
                                = typeRotation
                        stepGame += typeRotation
                    }
                }
            }
            arrBranch.splice(startPoint, 1)
        }
    }

    function rotationBranch(i, j) {

        if (!(posFlickering.posI === i && posFlickering.posJ === j)) {
            return
        }

        if (!GenerationBranchScript.isPlayGame
                || GenerationBranchScript.isCompleted
                || !GenerationBranchScript.listGameBranchObject[i][j].stopRotation)
            return

        var paramRotation = GenerationBranchScript.listGameBranchObject[i][j].rotationBranch

        var paramRotation2 = 0
        if (paramRotation == 0) {
            paramRotation = 90
            paramRotation2 = 90
        } else if (paramRotation == 90) {
            paramRotation = 180
            paramRotation2 = 180
        } else if (paramRotation == 180) {
            paramRotation = 270
            paramRotation2 = 270
        } else if (paramRotation == 270) {
            paramRotation = 0
            paramRotation2 = 360
        }

        GenerationBranchScript.listGameBranchObject[i][j].fromRotationBranch
                = GenerationBranchScript.listGameBranchObject[i][j].rotationBranch
        GenerationBranchScript.listGameBranchObject[i][j].toRotationBranch = paramRotation2
        GenerationBranchScript.listGameBranchObject[i][j].startAnimationRotationGame()
        audioClickBranch.playAudio()

        for (var n = 0; n < GenerationBranchScript.listImageBranchFull.length; n++) {
            if (GenerationBranchScript.listImageBranchFull[n].name
                    == GenerationBranchScript.listGameBranchObject[i][j].nameItem
                    && GenerationBranchScript.listImageBranchFull[n].rotation == paramRotation) {
                GenerationBranchScript.listGameBranchObject[i][j].posLeft
                        = GenerationBranchScript.listImageBranchFull[n].left
                GenerationBranchScript.listGameBranchObject[i][j].posRight
                        = GenerationBranchScript.listImageBranchFull[n].right
                GenerationBranchScript.listGameBranchObject[i][j].posTop
                        = GenerationBranchScript.listImageBranchFull[n].top
                GenerationBranchScript.listGameBranchObject[i][j].posBottom
                        = GenerationBranchScript.listImageBranchFull[n].bottom
                GenerationBranchScript.listGameBranchObject[i][j].countRotation--
                GenerationBranchScript.listGameBranchObject[i][j].stopAnimationFlickering()

                if (GenerationBranchScript.listGameBranchObject[i][j].countRotation > 0) {
                    GenerationBranchScript.listGameBranchObject[i][j].startAnimationFlickering()
                } else {

                    var seachBranch = 0
                    while (!seachBranch && arrBranchRotation.length > 0) {
                        var startPoint = GenerationBranchScript.getRandomInt(
                                    0, arrBranchRotation.length - 1)
                        var iFlickering = arrBranchRotation[startPoint].posI
                        var jFlickering = arrBranchRotation[startPoint].posJ
                        if (GenerationBranchScript.listGameBranchObject[iFlickering][jFlickering].countRotation !== 0) {
                            posFlickering = {
                                "posI": iFlickering,
                                "posJ": jFlickering
                            }
                            seachBranch = 1
                            GenerationBranchScript.listGameBranchObject[iFlickering][jFlickering].startAnimationFlickering()
                        }
                        arrBranchRotation.splice(startPoint, 1)
                    }
                }
            }
        }
    }

    function startAnimationBranch() {
        for (var i = 0; i < GenerationBranchScript.heightGame; i++) {
            for (var j = 0; j < GenerationBranchScript.widthGame; j++) {
                if (GenerationBranchScript.listGameBranchObject[i][j] !== null) {
                    GenerationBranchScript.listGameBranchObject[i][j].startTimerBlossomedBranch()
                }
            }
        }
    }
}
