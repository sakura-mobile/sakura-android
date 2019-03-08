import QtQuick 2.12

Image {
    id: buttonLocation
    width: 50
    height: 50
    x: 150 * (imageBackgroundMainMap.width / imageBackgroundMainMap.sourceSize.width)
    y: 300 * (imageBackgroundMainMap.height / imageBackgroundMainMap.sourceSize.height)
    property int currentLocation: 0
    property int currentCampaign: 0
    property bool isAvailable: false

    MouseArea {
        id: mouseAreaButtonLocation_1
        anchors.fill: parent
        onClicked: {
            if (isAvailable) {
                var component = Qt.createComponent("LevelsMapPage.qml")
                if (component.status === Component.Ready) {
                    mainStackView.push(component, {
                                           "currentCampaign": currentCampaign,
                                           "currentLocation": currentLocation
                                       })
                } else {
                    console.log(component.errorString())
                }
            }
        }
    }
}
