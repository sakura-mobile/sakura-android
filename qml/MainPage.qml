import QtQuick 2.9
import "GenerationBranch.js" as GenerationBranchScript
import "Util.js" as UtilScript

Item {
    id: mainPage
    Rectangle {
        id: backgroundRectangle
        anchors.fill: parent
        color: "black"

        Image {
            id: imageBackgroundMain
            anchors.centerIn: parent
            width: parent.width
            height: parent.height
            source: "qrc:/resources/images/background_app.jpg"
            fillMode: Image.PreserveAspectCrop

            Rectangle {
                id: imageInterfMain
                anchors.horizontalCenter: imageBackgroundMain.horizontalCenter
                anchors.verticalCenter: imageBackgroundMain.verticalCenter

                Column {
                    anchors.centerIn: parent
                    spacing: UtilScript.pt(10)

                    Image {
                        id: buttonTutorial
                        source: "qrc:/resources/images/button.png"
                        width: UtilScript.pt(240)
                        height: UtilScript.pt(50)

                        Text {
                            anchors.horizontalCenter: parent.horizontalCenter
                            anchors.bottom: parent.bottom
                            anchors.bottomMargin: UtilScript.pt(10)
                            text: qsTr("TUTORIAL")
                            font.pointSize: 24
                            font.family: "ChalkboardSE"
                            font.weight: Font.Black
                            color: "white"
                        }

                        MouseArea {
                            id: mouseAreaTutorial
                            anchors.fill: parent
                            onClicked: {
                                var component = Qt.createComponent(
                                            "TutorialPage.qml")

                                if (component.status === Component.Ready) {
                                    mainStackView.push(component)
                                } else {
                                    console.log(component.errorString())
                                }
                            }
                        }
                    }

                    Image {
                        id: buttonCampaign
                        source: "qrc:/resources/images/button.png"
                        width: UtilScript.pt(240)
                        height: UtilScript.pt(50)

                        Text {
                            anchors.horizontalCenter: parent.horizontalCenter
                            anchors.bottom: parent.bottom
                            anchors.bottomMargin: UtilScript.pt(10)
                            text: qsTr("CAMPAIGN")
                            font.pointSize: 24
                            font.family: "ChalkboardSE"
                            font.weight: Font.Black
                            color: "white"
                        }

                        MouseArea {
                            id: mouseAreaCampaign
                            anchors.fill: parent
                            onClicked: {
                                var component = Qt.createComponent(
                                            "MapPage.qml")

                                if (component.status === Component.Ready) {
                                    mainStackView.push(component, {
                                                           "currentCampaign": mainWindow.getSetting("maxLevelCampaign", 0),
                                                           "currentLocation": mainWindow.getSetting("maxLevelLocation", 0)
                                                       })
                                } else {
                                    console.log(component.errorString())
                                }
                            }
                        }
                    }

                    Image {
                        id: buttonTournament
                        source: "qrc:/resources/images/button.png"
                        width: UtilScript.pt(240)
                        height: UtilScript.pt(50)

                        Text {
                            anchors.horizontalCenter: parent.horizontalCenter
                            anchors.bottom: parent.bottom
                            anchors.bottomMargin: UtilScript.pt(10)
                            text: qsTr("TOURNAMENT")
                            font.pointSize: 24
                            font.family: "ChalkboardSE"
                            font.weight: Font.Black
                            color: "white"
                        }

                        MouseArea {
                            id: mouseAreaTournament
                            anchors.fill: parent
                            onClicked: {
                                var component = Qt.createComponent(
                                            "SingleLevelsPage.qml")

                                if (component.status === Component.Ready) {
                                    mainStackView.push(component)
                                } else {
                                    console.log(component.errorString())
                                }
                            }
                        }
                    }

                    Image {
                        id: buttonRelax
                        source: "qrc:/resources/images/button.png"
                        width: UtilScript.pt(240)
                        height: UtilScript.pt(50)

                        Text {
                            anchors.horizontalCenter: parent.horizontalCenter
                            anchors.bottom: parent.bottom
                            anchors.bottomMargin: UtilScript.pt(10)
                            text: qsTr("RELAX")
                            font.pointSize: 24
                            font.family: "ChalkboardSE"
                            font.weight: Font.Black
                            color: "white"
                        }

                        MouseArea {
                            id: mouseAreaRelax
                            anchors.fill: parent
                            onClicked: {
                                var component = Qt.createComponent(
                                            "RelaxPage.qml")

                                if (component.status === Component.Ready) {
                                    mainStackView.push(component)
                                } else {
                                    console.log(component.errorString())
                                }
                            }
                        }
                    }

                    Image {
                        id: buttonStore
                        source: "qrc:/resources/images/button.png"
                        width: UtilScript.pt(240)
                        height: UtilScript.pt(50)

                        Text {
                            anchors.horizontalCenter: parent.horizontalCenter
                            anchors.bottom: parent.bottom
                            anchors.bottomMargin: UtilScript.pt(10)
                            text: qsTr("STORE")
                            font.pointSize: 24
                            font.family: "ChalkboardSE"
                            font.weight: Font.Black
                            color: "white"
                        }

                        MouseArea {
                            id: mouseAreaStore
                            anchors.fill: parent
                            onClicked: {
                                mainStackView.push(storePage)
                            }
                        }
                    }

                    Image {
                        id: buttonSettings
                        source: "qrc:/resources/images/button.png"
                        width: UtilScript.pt(240)
                        height: UtilScript.pt(50)

                        Text {
                            anchors.horizontalCenter: parent.horizontalCenter
                            anchors.bottom: parent.bottom
                            anchors.bottomMargin: UtilScript.pt(10)
                            text: qsTr("SETTINGS")
                            font.pointSize: 24
                            font.family: "ChalkboardSE"
                            font.weight: Font.Black
                            color: "white"
                        }

                        MouseArea {
                            id: mouseAreaSettings
                            anchors.fill: parent
                            onClicked: {
                                var component = Qt.createComponent(
                                            "SettingsPage.qml")

                                if (component.status === Component.Ready) {
                                    mainStackView.push(component)
                                } else {
                                    console.log(component.errorString())
                                }
                            }
                        }
                    }
                }
            }

            Image {
                id: buttonFacebook
                anchors.bottom: parent.bottom
                anchors.bottomMargin: UtilScript.pt(50)
                anchors.horizontalCenter: parent.horizontalCenter
                height: UtilScript.pt(54)
                width: UtilScript.pt(70)
                source: showGift ? "qrc:/resources/images/fb_invite_gift.png" : "qrc:/resources/images/fb_invite.png"

                property bool showGift: false

                MouseArea {
                    anchors.fill: parent

                    onClicked: {
                        FBHelper.showGameRequest(
                                    qsTr("Sakura Puzzle"), qsTr(
                                        "Help me to solve a puzzle and enjoy the fanciful pictures of blooming flowers!"))
                    }
                }
            }

            Rectangle {
                id: rectFacebookGifts
                color: "black"
                opacity: 0.6
                anchors.fill: parent
                visible: false

                MouseArea {
                    anchors.fill: parent
                    enabled: parent.visible
                }
            }

            Rectangle {
                id: rectGiftsGame
                anchors.horizontalCenter: parent.horizontalCenter
                y: rectFacebookGifts.height
                width: UtilScript.pt(300)
                height: UtilScript.pt(200)
                color: "transparent"
                Image {
                    id: backgroundAwardsGame
                    source: "qrc:/resources/images/background_rect_score.png"
                    width: parent.width
                    height: parent.height

                    Column {
                        anchors.centerIn: parent
                        spacing: UtilScript.pt(1)

                        Text {
                            id: textGiftsAreOver
                            width: UtilScript.pt(260)
                            height: UtilScript.pt(120)
                            text: qsTr("Thank you! New gifts for Facebook invitations will be available tomorrow.")
                            font.pointSize: 20
                            font.bold: true
                            color: "white"
                            font.family: "Helvetica"
                            horizontalAlignment: Text.AlignHCenter
                            verticalAlignment: Text.AlignVCenter
                            wrapMode: Text.Wrap
                            fontSizeMode: Text.Fit
                            minimumPointSize: 6
                            visible: false
                        }

                        Row {
                            id: rowQuickTip
                            z: 15
                            spacing: UtilScript.pt(15)
                            visible: false

                            Image {
                                id: imageQuickTip
                                width: UtilScript.pt(40)
                                height: UtilScript.pt(40)
                                source: "qrc:/resources/images/button_quick_tip.png"
                            }
                            Text {
                                anchors.verticalCenter: parent.verticalCenter
                                text: "X"
                                font.pointSize: 18
                                font.bold: true
                                color: "white"
                                font.family: "Helvetica"
                            }
                            Text {
                                id: textCountQuickTip
                                anchors.verticalCenter: parent.verticalCenter
                                text: "1"
                                font.pointSize: 20
                                font.bold: true
                                color: "white"
                                font.family: "Helvetica"
                            }
                        }

                        Row {
                            id: rowStepIce
                            z: 15
                            spacing: UtilScript.pt(15)
                            visible: false

                            Image {
                                id: imageStepIce
                                width: UtilScript.pt(40)
                                height: UtilScript.pt(40)
                                source: "qrc:/resources/images/lantern_step_ice_booster.png"
                            }
                            Text {
                                anchors.verticalCenter: parent.verticalCenter
                                text: "X"
                                font.pointSize: 18
                                font.bold: true
                                color: "white"
                                font.family: "Helvetica"
                            }
                            Text {
                                id: textCountStepIce
                                anchors.verticalCenter: parent.verticalCenter
                                text: "1"
                                font.pointSize: 20
                                font.bold: true
                                color: "white"
                                font.family: "Helvetica"
                            }
                        }

                        Row {
                            id: rowTimeIce
                            z: 15
                            spacing: UtilScript.pt(15)
                            visible: false

                            Image {
                                id: imageTimeIce
                                width: UtilScript.pt(40)
                                height: UtilScript.pt(40)
                                source: "qrc:/resources/images/lantern_time_ice_booster.png"
                            }
                            Text {
                                text: "X"
                                anchors.verticalCenter: parent.verticalCenter
                                font.pointSize: 18
                                font.bold: true
                                color: "white"
                                font.family: "Helvetica"
                            }
                            Text {
                                id: textCountTimeIce
                                anchors.verticalCenter: parent.verticalCenter
                                text: "1"
                                font.pointSize: 20
                                font.bold: true
                                color: "white"
                                font.family: "Helvetica"
                            }
                        }

                        Row {
                            id: rowOk
                            z: 15
                            spacing: UtilScript.pt(15)
                            anchors.horizontalCenter: parent.horizontalCenter
                            visible: false

                            Image {
                                id: imageOk
                                width: UtilScript.pt(50)
                                height: UtilScript.pt(50)
                                source: "qrc:/resources/images/button_ok.png"

                                MouseArea {
                                    id: mouseAreaImageOk
                                    anchors.fill: parent
                                    onClicked: {
                                        animationRectGiftsGameDown.running = true
                                    }
                                }
                            }
                        }
                    }
                }

                PropertyAnimation {
                    id: animationRectGiftsGameUp
                    duration: 300
                    easing.overshoot: 1.5
                    from: rectFacebookGifts.height
                    target: rectGiftsGame
                    properties: "y"
                    easing.type: Easing.InQuad
                    to: rectFacebookGifts.height / 2 - rectGiftsGame.height / 2
                }
                PropertyAnimation {
                    id: animationRectGiftsGameDown
                    duration: 100
                    from: rectGiftsGame.y
                    target: rectGiftsGame
                    properties: "y"
                    easing.type: Easing.InQuad
                    to: rectFacebookGifts.height
                    onStopped: {
                        textCountQuickTip.text = "1"
                        textCountStepIce.text = "1"
                        textCountTimeIce.text = "1"
                        rowQuickTip.visible = false
                        rowStepIce.visible = false
                        rowTimeIce.visible = false
                        rectFacebookGifts.visible = false
                        buttonFacebook.showGift = false
                        textGiftsAreOver.visible = false
                        rowOk.visible = false
                    }
                }
            }
        }
    }

    Component.onCompleted: {


        /*
         * Don't offer rewards for Facebook invitations
         *
        var d = new Date()
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000)
        var now = new Date(utc + (3600000 * 0))
        var lastDayFacebookGift = mainWindow.getSetting("lastDayFacebookGift",
                                                        0)
        var lastDay = new Date()
        if (lastDayFacebookGift !== 0) {
            lastDay.setTime(lastDayFacebookGift)
            if (now.getFullYear() === lastDay.getFullYear() && now.getMonth(
                        ) === lastDay.getMonth() && now.getDate(
                        ) === lastDay.getDate()) {
                buttonFacebook.showGift = false
            } else {
                buttonFacebook.showGift = true
            }
        } else {
            buttonFacebook.showGift = true
        }

        FBHelper.gameRequestCompleted.connect(gameRequestCompleted)
        */
        if ((mainWindow.getSetting("endedAvailableLevels", "")
             !== "") && (Number(mainWindow.getSetting("maxLevelCampaign",
                                                      0)) === 0)
                && (Number(mainWindow.getSetting("maxLevelLocation", 0))
                    === 6) && (Number(mainWindow.getSetting("maxLevel",
                                                            0)) === 19)) {
            mainWindow.setSetting("maxLevel", 0)
            mainWindow.setSetting("maxLevelLocation", 7)
            mainWindow.setSetting("maxLevelCampaign", 0)
        }

        if (mainWindow.getSetting("userUuid", "") === "") {
            mainWindow.setSetting("userUuid", UuidCreator.createUuid())
        }

        if (mainWindow.getSetting("countBlockTimeLantern", "") === "") {
            mainWindow.setSetting("countBlockTimeLantern", 5)
        }

        if (mainWindow.getSetting("countBlockStepLantern", "") === "") {
            mainWindow.setSetting("countBlockStepLantern", 5)
        }

        if (mainWindow.getSetting("countQuickTip", "") === "") {
            mainWindow.setSetting("countQuickTip", 10)
        }
    }

    function gameRequestCompleted(recipientsCount) {
        var d = new Date()
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000)
        var now = new Date(utc + (3600000 * 0))
        var lastDayFacebookGift = mainWindow.getSetting("lastDayFacebookGift",
                                                        0)
        var lastDay = new Date()
        if (lastDayFacebookGift !== 0) {
            lastDay.setTime(lastDayFacebookGift)
            if (now.getFullYear() === lastDay.getFullYear() && now.getMonth(
                        ) === lastDay.getMonth() && now.getDate(
                        ) === lastDay.getDate()) {
                rectFacebookGifts.visible = true
                textGiftsAreOver.visible = true
                rowOk.visible = true
                animationRectGiftsGameUp.running = true
                return
            }
        }

        rectFacebookGifts.visible = true
        rowOk.visible = true
        animationRectGiftsGameUp.running = true

        if (recipientsCount > 0 && recipientsCount < 3) {
            mainWindow.setSetting("countQuickTip",
                                  Number(mainWindow.getSetting("countQuickTip",
                                                               0)) + 1)
            textCountQuickTip.text = "1"
            rowQuickTip.visible = true

            mainWindow.setSetting("countBlockTimeLantern",
                                  Number(mainWindow.getSetting(
                                             "countBlockTimeLantern", 0)) + 1)
            textCountTimeIce.text = "1"
            rowTimeIce.visible = true

            mainWindow.setSetting("countBlockStepLantern",
                                  Number(mainWindow.getSetting(
                                             "countBlockStepLantern", 0)) + 1)
            textCountStepIce.text = "1"
            rowStepIce.visible = true
        }

        if (recipientsCount >= 3 && recipientsCount < 5) {
            mainWindow.setSetting("countQuickTip",
                                  Number(mainWindow.getSetting("countQuickTip",
                                                               0)) + 2)
            textCountQuickTip.text = "2"
            rowQuickTip.visible = true

            mainWindow.setSetting("countBlockTimeLantern",
                                  Number(mainWindow.getSetting(
                                             "countBlockTimeLantern", 0)) + 2)
            textCountTimeIce.text = "2"
            rowTimeIce.visible = true

            mainWindow.setSetting("countBlockStepLantern",
                                  Number(mainWindow.getSetting(
                                             "countBlockStepLantern", 0)) + 2)
            textCountStepIce.text = "2"
            rowStepIce.visible = true
        }

        if (recipientsCount >= 5) {
            mainWindow.setSetting("countQuickTip",
                                  Number(mainWindow.getSetting("countQuickTip",
                                                               0)) + 3)
            textCountQuickTip.text = "3"
            rowQuickTip.visible = true

            mainWindow.setSetting("countBlockTimeLantern",
                                  Number(mainWindow.getSetting(
                                             "countBlockTimeLantern", 0)) + 3)
            textCountTimeIce.text = "3"
            rowTimeIce.visible = true

            mainWindow.setSetting("countBlockStepLantern",
                                  Number(mainWindow.getSetting(
                                             "countBlockStepLantern", 0)) + 3)
            textCountStepIce.text = "3"
            rowStepIce.visible = true
        }

        mainWindow.setSetting("lastDayFacebookGift", now.getTime())
    }
}
