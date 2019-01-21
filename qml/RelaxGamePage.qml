import QtQuick 2.3
import QtQuick.Controls 2.2
import QtQuick.Particles 2.0
import QtMultimedia 5.9

import "GenerationBranch.js" as GenerationBranchScript

Item {
    id: relaxGamePage

    property int currentLevel: 0
    property int currentLocation: 0
    property int currentCampaign: 0
    property var arrUserRatingLevels: []
    property int nextLevel: 0
    property int nextLocation: 0
    property int nextCampaign: 0
    property var arrRectTrasparent: []
    property int countBlockTimeLevel: 0
    property int countBlockStepLevel: 0
    property int countQuickTipLevel: 0
    property int countStepStop: 0
    property int countSecondsTimeStop: 0
    property int isLockedQuickTip: 0
    property int countBranchRotationGame: 0
    property int countPetalsMax: 250
    property int countPetalsMin: 10
    property int countPetals: 10

    property int emitRatePetalsMax: 70
    property int emitRatePetalsMin: 2
    property int emitRatePetals: 2

    property real lastMouseX: 0
    property real lastMouseY: 0

    property int bannerViewHeight: AdMobHelper.bannerViewHeight
    property bool endedAvailableLevels: false
    property bool isPushStore: false

    Image {
        id: imageBackgroundMainMap
        anchors.centerIn: parent
        width: parent.width
        height: parent.height
        fillMode: Image.PreserveAspectCrop
        source: "qrc:/resources/images/background_relax.jpg"

        ParticleSystem {
            id: particleSystem1
            running: false
        }

        Emitter {
            anchors.fill: parent
            system: particleSystem1
            lifeSpan: 5000
            size: 16
            emitRate: relaxGamePage.emitRatePetals
            maximumEmitted: relaxGamePage.countPetals

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
            anchors.fill: parent
            system: particleSystem2
            lifeSpan: 5000
            size: 8
            emitRate: relaxGamePage.emitRatePetals
            maximumEmitted: relaxGamePage.countPetals

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

        Row {
            spacing: 5
            anchors.horizontalCenter: parent.horizontalCenter
            anchors.top: parent.top
            Image {
                id: imageLanternStep
                source: "qrc:/resources/images/lantern_step.png"
                width: 70
                height: 161
                y: imageLanternStep.height * -1

                Column {
                    spacing: 1
                    anchors.horizontalCenter: parent.horizontalCenter
                    anchors.bottom: parent.bottom
                    anchors.bottomMargin: 30

                    Rectangle {
                        height: 12
                        width: 50
                        color: "transparent"

                        Text {
                            id: textStepLantern
                            anchors.fill: parent
                            text: qsTr("STEP:")
                            font.pointSize: 12
                            font.bold: true
                            color: "black"
                            font.family: "Helvetica"
                            horizontalAlignment: Text.AlignHCenter
                            verticalAlignment: Text.AlignVCenter
                            fontSizeMode: Text.Fit
                            minimumPointSize: 6
                        }
                    }

                    Rectangle {
                        height: 18
                        width: 50
                        color: "transparent"

                        Text {
                            id: textStepGameLantern
                            anchors.fill: parent
                            text: "0"
                            font.pointSize: 18
                            font.bold: true
                            color: "black"
                            font.family: "Helvetica"
                            horizontalAlignment: Text.AlignHCenter
                            verticalAlignment: Text.AlignVCenter
                            fontSizeMode: Text.Fit
                            minimumPointSize: 6
                        }
                    }
                    Rectangle {
                        id: rectStepStopLantern
                        height: 20
                        width: 50
                        color: "transparent"
                        visible: false

                        Text {
                            id: textStepStopLantern
                            anchors.fill: parent
                            text: ""
                            font.pointSize: 20
                            font.bold: true
                            color: "black"
                            font.family: "Helvetica"
                            horizontalAlignment: Text.AlignHCenter
                            verticalAlignment: Text.AlignVCenter
                            fontSizeMode: Text.Fit
                            minimumPointSize: 6
                        }
                    }
                }

                PropertyAnimation {
                    id: animationStepDown
                    duration: 1000
                    easing.overshoot: 1.5
                    from: imageLanternStep.height * -1
                    target: imageLanternStep
                    properties: "y"
                    easing.type: Easing.OutBack
                    to: -35
                }

                PropertyAnimation {
                    id: animationStepUp
                    duration: 300
                    from: imageLanternStep.y
                    target: imageLanternStep
                    properties: "y"
                    easing.type: Easing.InQuad
                    to: imageLanternStep.height * -1
                    onStopped: {
                        textStepGameLantern.text = 0
                        animationStepDown.start()
                    }
                }
            }
        }

        Flickable {
            id: backgroundFlickable
            boundsBehavior: Flickable.StopAtBounds
            anchors.centerIn: parent
            width: parent.width
            height: width - 32
            clip: true

            property real initialContentWidth: 0.0
            property real initialContentHeight: 0.0

            function initialResize(grid_width, grid_height) {
                if (grid_width > 0.0 && grid_height > 0.0) {
                    var scale = 1.0

                    if (grid_width > grid_height) {
                        scale = (width / grid_width)
                    } else {
                        scale = (height / grid_height)
                    }

                    if (scale < 0.25) {
                        scale = 0.25
                    }
                    if (scale > 3.0) {
                        scale = 3.0
                    }

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
                    width: Math.max(gridMapRelax.width,
                                    backgroundFlickable.width) * 2
                    height: Math.max(gridMapRelax.height,
                                     backgroundFlickable.height) * 2
                    scale: backgroundFlickable.initialContentWidth > 0.0
                           && backgroundFlickable.contentWidth
                           > 0.0 ? backgroundFlickable.contentWidth
                                   / backgroundFlickable.initialContentWidth : 1.0
                    transformOrigin: Item.TopLeft
                    color: "transparent"

                    onWidthChanged: {
                        backgroundFlickable.initialContentWidth = width

                        backgroundFlickable.initialResize(gridMapRelax.width,
                                                          gridMapRelax.height)
                    }

                    onHeightChanged: {
                        backgroundFlickable.initialContentHeight = height

                        backgroundFlickable.initialResize(gridMapRelax.width,
                                                          gridMapRelax.height)
                    }

                    Grid {
                        id: gridMapRelax
                        anchors.centerIn: parent
                        spacing: 1

                        onWidthChanged: {
                            backgroundFlickable.initialResize(
                                        gridMapRelax.width, gridMapRelax.height)
                        }

                        onHeightChanged: {
                            backgroundFlickable.initialResize(
                                        gridMapRelax.width, gridMapRelax.height)
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
                                            gridMapRelax.width,
                                            gridMapRelax.height)
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

        Row {
            anchors.horizontalCenter: parent.horizontalCenter
            anchors.bottom: parent.bottom
            anchors.bottomMargin: Math.max(relaxGamePage.bannerViewHeight + 8,
                                           20)
            spacing: 60

            Image {
                id: backButton
                anchors.bottom: parent.bottom
                source: "qrc:/resources/images/back.png"
                width: 50
                height: 50

                MouseArea {
                    id: mouseAreaBackButton
                    anchors.fill: parent
                    onClicked: {
                        mainStackView.pop()
                    }
                }
            }

            Column {
                Rectangle {
                    width: 50
                    height: 20
                    color: "transparent"
                    Rectangle {
                        anchors.centerIn: parent
                        width: 50
                        height: 20
                        color: "black"
                        opacity: 0.3
                        radius: 10
                    }
                    Text {
                        id: textCountQuickTipButton
                        anchors.fill: parent
                        text: "0"
                        font.pointSize: 16
                        font.bold: true
                        color: "white"
                        opacity: 1.0
                        font.family: "Helvetica"
                        horizontalAlignment: Text.AlignHCenter
                        verticalAlignment: Text.AlignVCenter
                        fontSizeMode: Text.Fit
                        minimumPointSize: 6
                    }
                }
                Image {
                    id: quickTipButton
                    source: "qrc:/resources/images/button_quick_tip.png"
                    width: 50
                    height: 50

                    MouseArea {
                        id: mouseAreaQuickTipButton
                        anchors.fill: parent
                        onClicked: {
                            if (Number(mainWindow.getSetting("countQuickTip",
                                                             0)) <= 0) {
                                if (countQuickTipLevel >= GenerationBranchScript.listObjectRelaxLevels[currentLevel].countQuickTip)
                                    return
                                isPushStore = true
                                mainStackView.push(storePage)
                                return
                            }
                            setQuickTip()
                        }
                    }
                }
            }

            Image {
                id: refreshButton
                anchors.bottom: parent.bottom
                source: "qrc:/resources/images/refresh.png"
                width: 50
                height: 50

                MouseArea {
                    id: mouseAreaRefreshButton
                    anchors.fill: parent
                    onClicked: {
                        repeatGame()
                    }
                }
            }
        }

        Rectangle {
            id: rectCompletedGame
            anchors.horizontalCenter: parent.horizontalCenter
            y: imageBackgroundMainMap.height
            width: 300
            height: 200
            color: "transparent"
            Image {
                id: backgroundCompletedGame
                source: "qrc:/resources/images/background_rect_score.png"
                width: parent.width
                height: parent.height
                Row {
                    id: rowRectCompletedGame
                    //anchors.bottom: parent.bottom
                    anchors.top: parent.top
                    anchors.horizontalCenter: parent.horizontalCenter
                    //anchors.bottomMargin: 30
                    anchors.topMargin: 20
                    z: 15
                    height: 50
                    spacing: 15

                    Image {
                        id: imageRepeatGame
                        width: 50
                        height: 50
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
                        width: 50
                        height: 50
                        source: "qrc:/resources/images/button_seach_levels.png"
                        MouseArea {
                            id: mouseAreaSeachLevel
                            anchors.fill: parent
                            onClicked: {
                                mainStackView.pop()
                                mainWindow.showInterstitial()
                            }
                        }
                    }
                    Image {
                        id: imageShare
                        width: 50
                        height: 50
                        source: "qrc:/resources/images/button_share.png"
                        MouseArea {
                            id: mouseAreaImageShare
                            anchors.fill: parent
                            onClicked: {
                                var component = Qt.createComponent(
                                            "CardPage.qml")

                                if (component.status === Component.Ready) {
                                    if (relaxGamePage.countPetals
                                            === relaxGamePage.countPetalsMax) {
                                        mainStackView.push(component, {
                                                               "currentLevel": currentLevel,
                                                               "isRelax": 1,
                                                               "listGameBranchObject": GenerationBranchScript.listGameBranchObject,
                                                               "isMaxPetals": 1
                                                           })
                                    } else {
                                        mainStackView.push(component, {
                                                               "currentLevel": currentLevel,
                                                               "isRelax": 1,
                                                               "listGameBranchObject": GenerationBranchScript.listGameBranchObject,
                                                               "isMaxPetals": 0
                                                           })
                                    }
                                    mainWindow.setSetting("ShareTooltip", 1)
                                } else {
                                    console.log(component.errorString())
                                }
                                mainWindow.showInterstitial()
                            }
                        }

                        Image {
                            id: imageShareTooltip
                            anchors.bottom: imageShare.top
                            anchors.horizontalCenter: parent.horizontalCenter
                            width: 200
                            height: 70
                            visible: false
                            source: "qrc:/resources/images/tooltip.png"

                            Text {
                                id: textTooltipShare
                                anchors.fill: parent
                                anchors.topMargin: 8
                                anchors.bottomMargin: 16
                                anchors.leftMargin: 12
                                anchors.rightMargin: 12
                                z: 15
                                visible: true
                                text: qsTr("Create postcard and share with friends")
                                font.pointSize: 18
                                font.bold: true
                                color: "black"
                                font.family: "Helvetica"
                                horizontalAlignment: Text.AlignHCenter
                                verticalAlignment: Text.AlignVCenter
                                wrapMode: Text.Wrap
                                fontSizeMode: Text.Fit
                                minimumPointSize: 6
                            }
                        }
                    }
                    Image {
                        id: imagePlayGame
                        width: 50
                        height: 50
                        source: "qrc:/resources/images/button_play_game.png"

                        MouseArea {
                            id: mouseAreaPlayNextGame
                            anchors.fill: parent
                            onClicked: {
                                if (endedAvailableLevels) {
                                    animationRectCompletedGameDown.running = true
                                    animationRectNotAvailableLevelsDown.running = true
                                    return
                                }
                                currentLevel = nextLevel
                                animationRectCompletedGameDown.running = true
                                imageShareTooltip.visible = false
                                timerTooltipShare.stop()
                                imageShare.source = "qrc:/resources/images/button_share.png"
                                loadBranchOnMap()
                                mixMap()
                                updateDataLevel()
                                updateBoostUser()
                            }
                        }
                    }
                }

                Row {
                    id: rowButtonImage
                    ///anchors.top: parent.top
                    anchors.bottom: parent.bottom
                    anchors.horizontalCenter: parent.horizontalCenter
                    //anchors.topMargin: 20
                    anchors.bottomMargin: 30
                    z: 15
                    spacing: 5

                    Image {
                        id: firstStarImage
                        width: 70
                        height: 70
                        source: "qrc:/resources/images/star_disable.png"
                    }
                    Image {
                        id: secondStarImage
                        width: 70
                        height: 70
                        source: "qrc:/resources/images/star_disable.png"
                    }
                    Image {
                        id: thirdStarImage
                        width: 70
                        height: 70
                        source: "qrc:/resources/images/star_disable.png"
                    }
                }
            }

            PropertyAnimation {
                id: animationRectCompletedGameUp
                duration: 500
                easing.overshoot: 4.5
                from: imageBackgroundMainMap.height
                target: rectCompletedGame
                properties: "y"
                easing.type: Easing.InQuad
                to: imageBackgroundMainMap.height - rectCompletedGame.height - Math.max(
                        relaxGamePage.bannerViewHeight + 8, 20)
                onStopped: {

                    if (Number(mainWindow.getSetting("ShareTooltip",
                                                     0)) === 0) {
                        imageShareTooltip.visible = true
                        timerTooltipShare.start()
                    }
                    if (Math.random() < 0.10
                            && ReachabilityHelper.internetConnected) {
                        StoreHelper.requestReview()
                    }
                }
            }

            PropertyAnimation {
                id: animationRectCompletedGameDown
                duration: 200
                from: rectCompletedGame.y
                target: rectCompletedGame
                properties: "y"
                easing.type: Easing.InQuad
                to: imageBackgroundMainMap.height
                onStopped: {
                    imageShare.visible = true
                    rowButtonImage.visible = true
                    imageShareTooltip.visible = false
                    timerTooltipShare.stop()
                    imageShare.source = "qrc:/resources/images/button_share.png"
                }
            }
        }

        Rectangle {
            id: rectNotAvailableLevels
            y: rectNotAvailableLevels.height * -1
            anchors.horizontalCenter: imageBackgroundMainMap.horizontalCenter
            width: 300
            height: 200
            color: "transparent"
            Image {
                id: backgroundRectNotAvailableLevels
                source: "qrc:/resources/images/background_rect_score.png"
                width: parent.width
                height: parent.height

                Text {
                    id: textNotAvailableLevels
                    anchors.top: parent.top
                    anchors.bottom: imageOkNotAvailableLevels.top
                    anchors.left: parent.left
                    anchors.right: parent.right
                    anchors.margins: 16
                    text: qsTr("Congratulations, you completed all available levels! Stay tuned for updates with new levels, challenges and more.")
                    font.pointSize: 16
                    font.bold: true
                    color: "white"
                    font.family: "Helvetica"
                    horizontalAlignment: Text.AlignHCenter
                    verticalAlignment: Text.AlignVCenter
                    wrapMode: Text.Wrap
                    fontSizeMode: Text.Fit
                    minimumPointSize: 6
                }

                Image {
                    id: imageOkNotAvailableLevels
                    width: 50
                    height: 50
                    anchors.bottom: parent.bottom
                    anchors.bottomMargin: 16
                    anchors.horizontalCenter: parent.horizontalCenter
                    source: "qrc:/resources/images/button_ok.png"
                    MouseArea {
                        id: mouseAreaImageOkNotAvailableLevels
                        anchors.fill: parent
                        onClicked: {
                            animationRectNotAvailableLevelsUp.running = true

                            mainStackView.pop(mainStackView.get(0))
                        }
                    }
                }
            }

            PropertyAnimation {
                id: animationRectNotAvailableLevelsDown
                duration: 200
                from: rectNotAvailableLevels.height * -1
                target: rectNotAvailableLevels
                properties: "y"
                easing.type: Easing.InQuad
                to: imageBackgroundMainMap.height / 2 - rectNotAvailableLevels.height / 2
            }

            PropertyAnimation {
                id: animationRectNotAvailableLevelsUp
                duration: 200
                from: rectNotAvailableLevels.y
                target: rectNotAvailableLevels
                properties: "y"
                easing.type: Easing.InQuad
                to: rectNotAvailableLevels.height * -1
            }
        }
    }

    StackView.onStatusChanged: {
        if (StackView.status === StackView.Active && isPushStore) {
            textCountQuickTipButton.text = Number(mainWindow.getSetting(
                                                      "countQuickTip", 0))
            isPushStore = false
            return
        }

        if (StackView.status === StackView.Active
                && rectCompletedGame.y === imageBackgroundMainMap.height) {
            mixMap()
            textStepGameLantern.text
                    = GenerationBranchScript.listObjectRelaxLevels[currentLevel].stepCurrent
            imageLanternStep.visible = true
            animationStepDown.running = true
            imageShare.visible = true
            rowButtonImage.visible = true
        }

        if (Number(mainWindow.getSetting("ShareTooltip", 0)) === 1) {
            imageShareTooltip.visible = false
            timerTooltipShare.stop()
            imageShare.source = "qrc:/resources/images/button_share.png"
        }
    }

    Audio {
        volume: 0.5
        source: "qrc:/resources/sound/game_music.mp3"
        loops: Audio.Infinite

        property bool playbackEnabled: Qt.application.active
                                       && !AudioHelper.silenceAudio
                                       && relaxGamePage.StackView.status === StackView.Active

        onPlaybackEnabledChanged: {

            if (Number(mainWindow.getSetting("SettingsMusic", 1)) === 0)
                return

            if (playbackEnabled) {
                play()
            } else {
                stop()
            }
        }

        onError: {
            console.log(errorString)
        }
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
            if (Number(mainWindow.getSetting("SettingsSounds", 1)) === 0)
                return
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
            if (Number(mainWindow.getSetting("SettingsSounds", 1)) === 0)
                return
            if (playbackEnabled) {
                play()
            }
        }
    }

    Audio {
        id: audioGameOver
        volume: 1.0
        source: "qrc:/resources/sound/game_over.wav"

        property bool playbackEnabled: !AudioHelper.silenceAudio

        onError: {
            console.log(errorString)
        }

        function playAudio() {
            if (Number(mainWindow.getSetting("SettingsSounds", 1)) === 0)
                return
            if (playbackEnabled) {
                play()
            }
        }
    }

    Button {
        id: btnMixMap
        text: "M"
        y: 0
        x: 0
        visible: false
        onClicked: {
            mixMap()
        }
    }

    Button {
        id: btnReloadMap
        anchors.bottom: parent.bottom
        text: "R"
        visible: false
        x: 100
        onClicked: {
            loadBranchOnMap()
            mixMap()
        }
    }

    Timer {
        id: timerTooltipShare
        interval: 500
        repeat: true
        onTriggered: relaxGamePage.timerTooltipShare()
    }

    function timerTooltipShare() {
        if (imageShare.source == "qrc:/resources/images/button_share.png") {
            imageShare.source = "qrc:/resources/images/button_share_tooltip.png"
        } else {
            imageShare.source = "qrc:/resources/images/button_share.png"
        }
    }

    function resetParticleSystems() {
        particleSystem1.running = true
        particleSystem2.running = true
        particleSystem1.reset()
        particleSystem2.reset()
    }

    function updateDataLevel() {
        textStepGameLantern.text
                = GenerationBranchScript.listObjectRelaxLevels[currentLevel].stepCurrent
        imageLanternStep.visible = true
        animationStepDown.running = true
    }

    function setQuickTip() {
        if (GenerationBranchScript.isCompleted === 1)
            return
        if (countQuickTipLevel
                >= GenerationBranchScript.listObjectRelaxLevels[currentLevel].countQuickTip)
            return
        var countQuickTipLantern = Number(mainWindow.getSetting(
                                              "countQuickTip", 0))
        if (countQuickTipLantern <= 0)
            return

        for (var i = 0; i < GenerationBranchScript.heightGame; i++) {
            for (var j = 0; j < GenerationBranchScript.widthGame; j++) {
                if (GenerationBranchScript.listGameBranchObject[i][j] !== null) {
                    if (GenerationBranchScript.listGameBranchObject[i][j].rotationBranch
                            != GenerationBranchScript.listGameBranch[i][j].rotation) {
                        if (GenerationBranchScript.listGameBranchObject[i][j].nameItem
                                == 'branch_05')
                            continue
                        if (GenerationBranchScript.listGameBranchObject[i][j].nameItem
                                == 'branch_01'
                                && ((GenerationBranchScript.listGameBranchObject[i][j].rotationBranch === 0
                                     && GenerationBranchScript.listGameBranch[i][j].rotation
                                     === 180)
                                    || (GenerationBranchScript.listGameBranchObject[i][j].rotationBranch === 90
                                        && GenerationBranchScript.listGameBranch[i][j].rotation
                                        === 270))) {
                            continue
                        } else if (GenerationBranchScript.listGameBranchObject[i][j].nameItem
                                   == 'branch_01'
                                   && ((GenerationBranchScript.listGameBranchObject[i][j].rotationBranch === 180
                                        && GenerationBranchScript.listGameBranch[i][j].rotation
                                        === 0)
                                       || (GenerationBranchScript.listGameBranchObject[i][j].rotationBranch === 270
                                           && GenerationBranchScript.listGameBranch[i][j].rotation
                                           === 90))) {
                            continue
                        }

                        if (isLockedQuickTip == 1)
                            return
                        isLockedQuickTip = 1
                        setInfoQuickTip()

                        GenerationBranchScript.listGameBranchObject[i][j].startAnimationQuickTip()
                        if (GenerationBranchScript.listGameBranch[i][j].rotation == 0) {
                            GenerationBranchScript.listGameBranchObject[i][j].toRotationBranch = 360
                        } else {
                            GenerationBranchScript.listGameBranchObject[i][j].toRotationBranch
                                    = GenerationBranchScript.listGameBranch[i][j].rotation
                        }
                        GenerationBranchScript.listGameBranchObject[i][j].fromRotationBranch
                                = GenerationBranchScript.listGameBranchObject[i][j].rotationBranch
                        GenerationBranchScript.listGameBranchObject[i][j].startAnimationRotationGame()
                        audioClickBranch.playAudio()
                        GenerationBranchScript.listGameBranchObject[i][j].posLeft
                                = GenerationBranchScript.listGameBranch[i][j].left
                        GenerationBranchScript.listGameBranchObject[i][j].posRight
                                = GenerationBranchScript.listGameBranch[i][j].right
                        GenerationBranchScript.listGameBranchObject[i][j].posTop
                                = GenerationBranchScript.listGameBranch[i][j].top
                        GenerationBranchScript.listGameBranchObject[i][j].posBottom
                                = GenerationBranchScript.listGameBranch[i][j].bottom
                        return
                    }
                }
            }
        }
    }

    function setScoreUserRotation() {
        GenerationBranchScript.listObjectRelaxLevels[currentLevel].stepCurrent++
        textStepGameLantern.text
                = GenerationBranchScript.listObjectRelaxLevels[currentLevel].stepCurrent
    }

    function setInfoQuickTip() {
        var countQuickTip = Number(mainWindow.getSetting("countQuickTip", 0))
        countQuickTip--
        countQuickTipLevel++
        mainWindow.setSetting("countQuickTip", countQuickTip)
        textCountQuickTipButton.text = countQuickTip
        if (countQuickTipLevel
                >= GenerationBranchScript.listObjectRelaxLevels[currentLevel].countQuickTip) {
            quickTipButton.source = "qrc:/resources/images/button_quick_tip_locked.png"
        } else {
            quickTipButton.source = "qrc:/resources/images/button_quick_tip.png"
        }
    }

    function repeatGame() {
        animationRectCompletedGameDown.running = true
        imageShareTooltip.visible = false
        timerTooltipShare.stop()
        imageShare.source = "qrc:/resources/images/button_share.png"
        loadBranchOnMap()
        mixMap()
        updateBoostUser()
        animationStepDown.running = false
        animationStepUp.running = true
    }

    function stopRotationBranchGame(ii, jj) {
        if (isLockedQuickTip == 1)
            isLockedQuickTip = 0
        GenerationBranchScript.revivalBranchStart()
        setScoreUserRotation()
        textStepGameLantern.text
                = GenerationBranchScript.listObjectRelaxLevels[currentLevel].stepCurrent
        if (GenerationBranchScript.isCompletedGame() === true) {
            GenerationBranchScript.isCompleted = 1
            setRatingUser()
            gridMapRelax.spacing = 0
            startAnimationBranch()
            audioGoodGame.playAudio()
            return
        }
    }

    function rotationBranch(i, j) {

        if (!GenerationBranchScript.isPlayGame
                || GenerationBranchScript.isCompleted)
            return
        var paramRotation = GenerationBranchScript.listGameBranchObject[i][j].rotationBranch
        var paramRotation2 = 0

        if (GenerationBranchScript.listGameBranchObject[i][j].nameItem == 'branch_05') {
            return
        } else {
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

    function setRatingUser() {
        var ratingGame = 0

        if (GenerationBranchScript.listObjectRelaxLevels[currentLevel].stepCurrent
                <= GenerationBranchScript.listObjectRelaxLevels[currentLevel].step) {
            ratingGame = 3
        } else if (GenerationBranchScript.listObjectRelaxLevels[currentLevel].stepCurrent
                   > GenerationBranchScript.listObjectRelaxLevels[currentLevel].step
                   && GenerationBranchScript.listObjectRelaxLevels[currentLevel].stepCurrent
                   <= GenerationBranchScript.listObjectRelaxLevels[currentLevel].step
                   + GenerationBranchScript.listObjectRelaxLevels[currentLevel].taskStepStar2) {
            ratingGame = 2
        } else {
            ratingGame = 1
        }

        if (ratingGame === 3) {
            relaxGamePage.countPetals = relaxGamePage.countPetalsMax
            relaxGamePage.emitRatePetals = relaxGamePage.emitRatePetalsMax
            firstStarImage.source = "qrc:/resources/images/star.png"
            secondStarImage.source = "qrc:/resources/images/star.png"
            thirdStarImage.source = "qrc:/resources/images/star.png"
        } else if (ratingGame === 2) {
            firstStarImage.source = "qrc:/resources/images/star.png"
            secondStarImage.source = "qrc:/resources/images/star.png"
            thirdStarImage.source = "qrc:/resources/images/star_disable.png"
        } else {
            firstStarImage.source = "qrc:/resources/images/star.png"
            secondStarImage.source = "qrc:/resources/images/star_disable.png"
            thirdStarImage.source = "qrc:/resources/images/star_disable.png"
        }
        animationRectCompletedGameUp.running = true

        if (typeof arrUserRatingLevels[currentLevel] === "undefined"
                || arrUserRatingLevels[currentLevel] < ratingGame) {
            arrUserRatingLevels[currentLevel] = ratingGame
            mainWindow.setSetting("ratingLevelsUserRelax",
                                  JSON.stringify(arrUserRatingLevels))
        }
        if (ratingGame > 0)
            setNewLevel()
    }

    function setNewLevel() {
        var newLevel = currentLevel + 1
        if (typeof GenerationBranchScript.listObjectRelaxLevels[newLevel] !== "undefined") {
            if (typeof arrUserRatingLevels[newLevel] === "undefined") {
                mainWindow.setSetting("maxLevelRelax", newLevel)
            }
            nextLevel = newLevel
        } else {
            endedAvailableLevels = true

            var d = new Date()
            var utc = d.getTime() + (d.getTimezoneOffset() * 60000)
            var now = new Date(utc + (3600000 * 0))
            mainWindow.setSetting("endedAvailableLevelsRelax", now.getTime())
        }
    }

    function stopRotationBranch(ii, jj) {

        GenerationBranchScript.listGameBranchObject[ii][jj].stopRotation = 1
        var countStopBranch = 0
        for (var i = 0; i < GenerationBranchScript.heightGame; i++) {
            for (var j = 0; j < GenerationBranchScript.widthGame; j++) {
                if (GenerationBranchScript.listGameBranchObject[i][j] !== null) {
                    if (GenerationBranchScript.listGameBranchObject[i][j].stopRotation === 1) {
                        countStopBranch++
                    }
                }
            }
        }
        if (countBranchRotationGame === countStopBranch) {
            isLockedQuickTip = 0
            GenerationBranchScript.setStartBranch()
            GenerationBranchScript.revivalBranchStart()
        }
    }

    function mixMap() {
        relaxGamePage.countPetals = relaxGamePage.countPetalsMin
        relaxGamePage.emitRatePetals = relaxGamePage.emitRatePetalsMin

        resetParticleSystems()
        isLockedQuickTip = 1
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
        var countStep = GenerationBranchScript.listObjectRelaxLevels[currentLevel].step
        if (GenerationBranchScript.listObjectRelaxLevels[currentLevel].step > 250) {
            countStep = GenerationBranchScript.getRandomInt(
                        Number(
                            GenerationBranchScript.listObjectRelaxLevels[currentLevel].step * 0.6),
                        GenerationBranchScript.listObjectRelaxLevels[currentLevel].step)
        }
        while (stepGame < countStep - 3 && arrBranch.length > 0) {
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
                        stepGame += typeRotation
                    }
                }
                countBranchRotationGame++
            }

            arrBranch.splice(startPoint, 1)
        }

        GenerationBranchScript.listObjectRelaxLevels[currentLevel].stepCurrent = 0
    }

    function loadBranchOnMap() {

        gridMapRelax.spacing = 1
        countBranchRotationGame = 0
        isLockedQuickTip = 0
        endedAvailableLevels = false
        GenerationBranchScript.initObjectRelaxLevels()
        var ratingLevelsUserRelax = mainWindow.getSetting(
                    "ratingLevelsUserRelax", "")
        arrUserRatingLevels = []
        if (ratingLevelsUserRelax === "" || ratingLevelsUserRelax === null) {
            arrUserRatingLevels[currentLevel] = 0
        } else {
            arrUserRatingLevels = JSON.parse(ratingLevelsUserRelax)
        }

        if (arrRectTrasparent.length > 0) {
            for (var key in arrRectTrasparent) {
                arrRectTrasparent[key].destroy()
            }
        }
        arrRectTrasparent = []

        GenerationBranchScript.isPlayGame = 1
        GenerationBranchScript.isCompleted = 0
        GenerationBranchScript.isCampaign = 1
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

        var objMap = GenerationBranchScript.listObjectRelaxLevels[currentLevel]
        GenerationBranchScript.createBranchForMap(objMap)

        var widthGame = objMap.width
        var heightGame = objMap.height

        var xPos = 0
        var yPos = 0

        var component
        var object

        GenerationBranchScript.listGameBranchObject = []
        for (var i = 0; i < heightGame; i++) {
            GenerationBranchScript.listGameBranchObject[i] = []
            for (var j = 0; j < widthGame; j++) {
                GenerationBranchScript.listGameBranchObject[i][j] = null
            }
        }

        gridMapRelax.columns = 0
        gridMapRelax.columns = widthGame
        for (var i = 0; i < heightGame; i++) {
            for (var j = 0; j < widthGame; j++) {
                if (objMap.mapArray[i][j] === 1) {
                    component = Qt.createComponent("Branch.qml")
                    object = component.createObject(gridMapRelax)
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
                    object.stopRotation = 0
                    object.typeColor = GenerationBranchScript.listColor[i][j]
                    object.onStopRotationTime.connect(stopRotationBranch)
                    object.onStopRotationTimeGame.connect(
                                stopRotationBranchGame)

                    object.onClickedBranch.connect(rotationBranch)
                    GenerationBranchScript.listGameBranchObject[i][j] = object
                } else {

                    component = Qt.createQmlObject(
                                'import QtQuick 2.9; Rectangle {color: "transparent"; width: 30; height: 20}',
                                gridMapRelax)
                    arrRectTrasparent[arrRectTrasparent.length] = component
                }
            }
        }
    }

    function updateBoostUser() {
        countBlockTimeLevel = 0
        countBlockStepLevel = 0
        countQuickTipLevel = 0

        countStepStop = 0

        imageLanternStep.source = "qrc:/resources/images/lantern_step.png"
        textStepLantern.visible = true
        textStepGameLantern.visible = true
        rectStepStopLantern.visible = false

        var objMap = GenerationBranchScript.listObjectRelaxLevels[currentLevel]

        if (countQuickTipLevel >= objMap.countQuickTip) {
            quickTipButton.source = "qrc:/resources/images/button_quick_tip_locked.png"
        } else {
            quickTipButton.source = "qrc:/resources/images/button_quick_tip.png"
        }

        textCountQuickTipButton.text = Number(mainWindow.getSetting(
                                                  "countQuickTip", 0))
    }

    Component.onCompleted: {
        loadBranchOnMap()
        updateBoostUser()
    }
}
