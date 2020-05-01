import QtQuick 2.12
import QtQuick.Controls 2.5
import QtQuick.Layouts 1.12

import "Util.js" as UtilScript

Popup {
    id:               adMobConsentDialog
    anchors.centerIn: Overlay.overlay
    padding:          UtilScript.dp(8)
    modal:            true
    closePolicy:      Popup.NoAutoClose

    signal personalizedAdsSelected()
    signal nonPersonalizedAdsSelected()

    background: Rectangle {
        color:        "white"
        radius:       UtilScript.dp(8)
        border.width: UtilScript.dp(2)
        border.color: "#eb6dc0"
    }

    contentItem: Rectangle {
        implicitWidth:  UtilScript.dp(300)
        implicitHeight: UtilScript.dp(300)
        color:          "transparent"

        ColumnLayout {
            anchors.fill: parent
            spacing:      UtilScript.dp(8)

            Text {
                text:                qsTr("We keep this app free by showing ads. Ad network will <a href=\"https://policies.google.com/technologies/ads\">collect data and use a unique identifier on your device</a> to show you ads. <b>Do you allow to use your data to tailor ads for you?</b>")
                color:               "black"
                font.pointSize:      16
                font.family:         "Helvetica"
                horizontalAlignment: Text.AlignJustify
                verticalAlignment:   Text.AlignVCenter
                wrapMode:            Text.Wrap
                fontSizeMode:        Text.Fit
                minimumPointSize:    8
                textFormat:          Text.StyledText
                Layout.fillWidth:    true
                Layout.fillHeight:   true

                onLinkActivated: {
                    Qt.openUrlExternally(link);
                }
            }

            Rectangle {
                implicitWidth:    UtilScript.dp(280)
                implicitHeight:   UtilScript.dp(56)
                color:            "transparent"
                Layout.alignment: Qt.AlignHCenter | Qt.AlignVCenter

                Image {
                    anchors.fill: parent
                    source:       "qrc:/resources/images/button.png"
                    fillMode:     Image.PreserveAspectFit

                    Text {
                        anchors.fill:        parent
                        anchors.margins:     UtilScript.dp(8)
                        text:                qsTr("Yes, show me relevant ads")
                        color:               "white"
                        font.pointSize:      16
                        font.family:         "Helvetica"
                        font.bold:           true
                        horizontalAlignment: Text.AlignHCenter
                        verticalAlignment:   Text.AlignVCenter
                        wrapMode:            Text.NoWrap
                        fontSizeMode:        Text.Fit
                        minimumPointSize:    8
                    }

                    MouseArea {
                        anchors.fill: parent

                        onClicked: {
                            adMobConsentDialog.personalizedAdsSelected();
                            adMobConsentDialog.close();
                        }
                    }
                }
            }

            Rectangle {
                implicitWidth:    UtilScript.dp(280)
                implicitHeight:   UtilScript.dp(56)
                color:            "transparent"
                Layout.alignment: Qt.AlignHCenter | Qt.AlignVCenter

                Image {
                    anchors.fill: parent
                    source:       "qrc:/resources/images/button.png"
                    fillMode:     Image.PreserveAspectFit

                    Text {
                        anchors.fill:        parent
                        anchors.margins:     UtilScript.dp(8)
                        text:                qsTr("No, show me ads that are less relevant")
                        color:               "white"
                        font.pointSize:      16
                        font.family:         "Helvetica"
                        font.bold:           true
                        horizontalAlignment: Text.AlignHCenter
                        verticalAlignment:   Text.AlignVCenter
                        wrapMode:            Text.NoWrap
                        fontSizeMode:        Text.Fit
                        minimumPointSize:    8
                    }

                    MouseArea {
                        anchors.fill: parent

                        onClicked: {
                            adMobConsentDialog.nonPersonalizedAdsSelected();
                            adMobConsentDialog.close();
                        }
                    }
                }
            }
        }
    }
}
