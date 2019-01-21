import QtQuick 2.9
import QtQuick.Controls 2.2

import "GenerationBranch.js" as GenerationBranchScript

Item {
    id: mapPage

    property int currentCampaign: 0
    property int currentLocation: 0
    property var listButtonsLocation: []

    Image {
        id: imageBackgroundMainMap
        anchors.centerIn: parent
        width: parent.width
        height: parent.height
        fillMode: Image.PreserveAspectCrop

        onPaintedWidthChanged: {
            if (width > 0 && height > 0 && sourceSize.width > 0
                    && sourceSize.height > 0 && paintedWidth > 0
                    && paintedHeight > 0) {
                width = paintedWidth
                height = paintedHeight
            }
        }
        onPaintedHeightChanged: {
            if (width > 0 && height > 0 && sourceSize.width > 0
                    && sourceSize.height > 0 && paintedWidth > 0
                    && paintedHeight > 0) {
                width = paintedWidth
                height = paintedHeight
            }
        }
    }

    StackView.onStatusChanged: {
        if (StackView.status === StackView.Activating) {
            updateMapPage()
        }
    }

    Image {
        id: backButton
        source: "qrc:/resources/images/back.png"
        width: 60
        height: 60
        anchors.left: parent.left
        anchors.bottom: parent.bottom
        anchors.leftMargin: 15
        anchors.bottomMargin: 16
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
        id: playLastLocationButton
        source: "qrc:/resources/images/button_play_last_location.png"
        anchors.horizontalCenter: parent.horizontalCenter
        anchors.bottom: parent.bottom
        width: 60
        height: 60
        z: 1
        anchors.bottomMargin: 16

        MouseArea {
            id: mouseAreaPlayLastLocationButton
            anchors.fill: parent
            onClicked: {
                var component = Qt.createComponent("CampaignPage.qml")

                if (component.status === Component.Ready) {
                    mainStackView.push(component, {
                                           "currentLevel": mainWindow.getSetting(
                                                               "maxLevel", 0),
                                           "currentLocation": mainWindow.getSetting(
                                                                  "maxLevelLocation",
                                                                  0),
                                           "currentCampaign": mainWindow.getSetting(
                                                                  "maxLevelCampaign",
                                                                  0)
                                       })
                } else {
                    console.log(component.errorString())
                }
            }
        }
    }

    function updateMapPage() {
        var component, object
        GenerationBranchScript.initObjectCampaigns()
        var maxLevelCampaign = Number(mainWindow.getSetting("maxLevelCampaign",
                                                            0))
        var maxLevelLocation = Number(mainWindow.getSetting("maxLevelLocation",
                                                            0))
        imageBackgroundMainMap.source
                = GenerationBranchScript.listObjectCampaigns[currentCampaign].background
        var listLocations = GenerationBranchScript.listObjectCampaigns[currentCampaign].listLocations
        for (var keyLocation in listLocations) {
            component = Qt.createComponent("ButtonLocation.qml")
            object = component.createObject(imageBackgroundMainMap)
            if (maxLevelLocation >= keyLocation
                    && maxLevelCampaign >= currentCampaign) {

                object.source = listLocations[keyLocation].imageLabelAvaible
                object.isAvailable = true
            } else {
                object.source = listLocations[keyLocation].imageLabelNotAvaible
                object.isAvailable = false
            }
            object.currentLocation = keyLocation
            object.currentCampaign = currentCampaign
            object.width = listLocations[keyLocation].width
                    * (imageBackgroundMainMap.width / imageBackgroundMainMap.sourceSize.width)
            object.height = listLocations[keyLocation].height
                    * (imageBackgroundMainMap.height / imageBackgroundMainMap.sourceSize.height)
            object.x = listLocations[keyLocation].labelX
                    * (imageBackgroundMainMap.width / imageBackgroundMainMap.sourceSize.width)
            object.y = listLocations[keyLocation].labelY
                    * (imageBackgroundMainMap.height / imageBackgroundMainMap.sourceSize.height)
            listButtonsLocation[listButtonsLocation.length] = object
        }
    }
}
