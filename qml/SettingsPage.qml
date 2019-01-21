import QtQuick 2.9
import QtQuick.Window 2.3
import QtQuick.Controls 2.2
import QtPurchasing 1.0

Item {
    id: settingsPage

    Image {
        id: imageBackgroundStorePage
        source: "qrc:/resources/images/background_main.png"
        anchors.fill: parent
        fillMode: Image.PreserveAspectCrop

        Rectangle {
            color: "black"
            opacity: 0.6
            anchors.fill: parent
        }

        Flickable {
            anchors.centerIn: parent
            width: buttonsColumn.width
            height: Math.min(
                        buttonsColumn.height,
                        parent.height - (backButton.height
                                         + backButton.anchors.bottomMargin) * 2 - 8)
            contentWidth: buttonsColumn.width
            contentHeight: buttonsColumn.height
            clip: true

            ScrollBar.vertical: ScrollBar {
                policy: ScrollBar.AsNeeded
            }

            Column {
                id: buttonsColumn
                spacing: 1
                Image {
                    id: settingsMusic
                    source: "qrc:/resources/images/rectangle-hi.png"

                    width: 300
                    height: 75

                    Text {
                        anchors.left: parent.left
                        anchors.verticalCenter: parent.verticalCenter
                        anchors.leftMargin: 20
                        text: qsTr("MUSIC")
                        font.pointSize: 20
                        font.family: "Helvetica"
                        font.bold: true
                        color: "white"
                    }

                    Image {
                        id: imageCheckMusic
                        anchors.verticalCenter: parent.verticalCenter
                        anchors.right: parent.right
                        anchors.rightMargin: 40
                        width: 30
                        height: 30
                    }

                    MouseArea {
                        id: mouseAreaSettingsMusic
                        anchors.fill: parent
                        z: 1

                        onClicked: {
                            if (Number(mainWindow.getSetting("SettingsMusic",
                                                             1)) === 1) {
                                imageCheckMusic.source = "qrc:/resources/images/button_off.png"
                                mainWindow.setSetting("SettingsMusic", 0)
                            } else {
                                imageCheckMusic.source = "qrc:/resources/images/button_on.png"
                                mainWindow.setSetting("SettingsMusic", 1)
                            }
                        }
                    }
                }

                Image {
                    id: settingsSounds
                    source: "qrc:/resources/images/rectangle-hi.png"

                    width: 300
                    height: 75

                    Text {
                        anchors.left: parent.left
                        anchors.verticalCenter: parent.verticalCenter
                        anchors.leftMargin: 20
                        text: qsTr("SOUNDS")
                        font.pointSize: 20
                        font.family: "Helvetica"
                        font.bold: true
                        color: "white"
                    }

                    Image {
                        id: imageCheckSounds
                        anchors.verticalCenter: parent.verticalCenter
                        anchors.right: parent.right
                        anchors.rightMargin: 40
                        width: 30
                        height: 30
                    }

                    MouseArea {
                        id: mouseAreaSettingsSounds
                        anchors.fill: parent
                        z: 1

                        onClicked: {
                            if (Number(mainWindow.getSetting("SettingsSounds",
                                                             1)) === 1) {
                                imageCheckSounds.source = "qrc:/resources/images/button_off.png"
                                mainWindow.setSetting("SettingsSounds", 0)
                            } else {
                                imageCheckSounds.source = "qrc:/resources/images/button_on.png"
                                mainWindow.setSetting("SettingsSounds", 1)
                            }
                        }
                    }
                }
            }
        }

        Image {
            id: backButton
            source: "qrc:/resources/images/back.png"
            anchors.bottom: parent.bottom
            anchors.bottomMargin: 16
            anchors.left: parent.left
            anchors.leftMargin: 15
            height: 40
            width: 40

            MouseArea {
                id: mouseAreaBackAwardsButton
                anchors.fill: parent
                onClicked: {
                    mainStackView.pop()
                }
            }
        }
    }

    Component.onCompleted: {
        console.log("SettingsSounds :: " + Number(mainWindow.getSetting(
                                                      "SettingsSounds", 1)))

        if (Number(mainWindow.getSetting("SettingsMusic", 1)) === 1) {
            imageCheckMusic.source = "qrc:/resources/images/button_on.png"
        } else {
            imageCheckMusic.source = "qrc:/resources/images/button_off.png"
        }

        if (Number(mainWindow.getSetting("SettingsSounds", 1)) === 1) {
            imageCheckSounds.source = "qrc:/resources/images/button_on.png"
        } else {
            imageCheckSounds.source = "qrc:/resources/images/button_off.png"
        }
    }
}
