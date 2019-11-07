import QtQuick 2.12
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
                    spacing: UtilScript.dp(10)

                    Image {
                        id: buttonTutorial
                        source: "qrc:/resources/images/button.png"
                        width: UtilScript.dp(240)
                        height: UtilScript.dp(50)

                        Text {
                            anchors.horizontalCenter: parent.horizontalCenter
                            anchors.bottom: parent.bottom
                            anchors.bottomMargin: UtilScript.dp(10)
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
                                    console.error(component.errorString())
                                }
                            }
                        }
                    }

                    Image {
                        id: buttonCampaign
                        source: "qrc:/resources/images/button.png"
                        width: UtilScript.dp(240)
                        height: UtilScript.dp(50)

                        Text {
                            anchors.horizontalCenter: parent.horizontalCenter
                            anchors.bottom: parent.bottom
                            anchors.bottomMargin: UtilScript.dp(10)
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
                                    console.error(component.errorString())
                                }
                            }
                        }
                    }

                    Image {
                        id: buttonTournament
                        source: "qrc:/resources/images/button.png"
                        width: UtilScript.dp(240)
                        height: UtilScript.dp(50)

                        Text {
                            anchors.horizontalCenter: parent.horizontalCenter
                            anchors.bottom: parent.bottom
                            anchors.bottomMargin: UtilScript.dp(10)
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
                                    console.error(component.errorString())
                                }
                            }
                        }
                    }

                    Image {
                        id: buttonRelax
                        source: "qrc:/resources/images/button.png"
                        width: UtilScript.dp(240)
                        height: UtilScript.dp(50)

                        Text {
                            anchors.horizontalCenter: parent.horizontalCenter
                            anchors.bottom: parent.bottom
                            anchors.bottomMargin: UtilScript.dp(10)
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
                                    console.error(component.errorString())
                                }
                            }
                        }
                    }

                    Image {
                        id: buttonStore
                        source: "qrc:/resources/images/button.png"
                        width: UtilScript.dp(240)
                        height: UtilScript.dp(50)

                        Text {
                            anchors.horizontalCenter: parent.horizontalCenter
                            anchors.bottom: parent.bottom
                            anchors.bottomMargin: UtilScript.dp(10)
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
                        width: UtilScript.dp(240)
                        height: UtilScript.dp(50)

                        Text {
                            anchors.horizontalCenter: parent.horizontalCenter
                            anchors.bottom: parent.bottom
                            anchors.bottomMargin: UtilScript.dp(10)
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
                                    console.error(component.errorString())
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    Component.onCompleted: {
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
}
