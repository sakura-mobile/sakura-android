import QtQuick 2.9
import QtQuick.Controls 2.2

import "GenerationBranch.js" as GenerationBranchScript

Item {
    id: levelsMapPage
    property int currentCampaign: 0
    property int currentLocation: 0
    property var listRectanglesLevel: []

    Image {
        id: imageBackgroundMainLevelsMap
        anchors.centerIn: parent
        width: parent.width
        height: parent.height
        fillMode: Image.PreserveAspectCrop

        Grid {
            id: gridMap
            anchors.centerIn: parent
            columns: 5
            spacing: 10
        }
    }

    Image {
        id: backButton
        source: "qrc:/resources/images/back.png"
        width: 50
        height: 50
        anchors.left: parent.left
        anchors.bottom: parent.bottom
        anchors.leftMargin: 15
        anchors.bottomMargin: 16
        MouseArea {
            id: mouseAreaBackButton
            anchors.fill: parent
            onClicked: {
                mainStackView.pop()
            }
        }
    }

    StackView.onStatusChanged: {
        if (StackView.status === StackView.Activating) {
            updateLevelsMapPage()
        }
    }
    Component.onCompleted: {
        var component, object
        GenerationBranchScript.initObjectCampaigns()
        listRectanglesLevel = []
        var maxLevelCampaign = mainWindow.getSetting("maxLevelCampaign", 0)
        var maxLevelLocation = mainWindow.getSetting("maxLevelLocation", 0)
        var maxLevel = mainWindow.getSetting("maxLevel", 0)
        var ratingLevelsUser = mainWindow.getSetting("ratingLevelsUser", "")
        var arrRatingLevels = []
        if (ratingLevelsUser === "" || ratingLevelsUser === null) {
            arrRatingLevels[maxLevelCampaign] = []
            arrRatingLevels[maxLevelCampaign][maxLevelLocation] = []
            arrRatingLevels[maxLevelCampaign][maxLevelLocation][maxLevel] = 0
        } else {
            arrRatingLevels = JSON.parse(ratingLevelsUser)
        }

        var listLevels = GenerationBranchScript.listObjectCampaigns[currentCampaign].listLocations[currentLocation].listLevels
        for (var keyLevel in listLevels) {
            component = Qt.createComponent("RectangleLevel.qml")
            object = component.createObject(gridMap)
            if (maxLevelCampaign < currentCampaign
                    || (maxLevelCampaign === currentCampaign
                        && maxLevelLocation < currentLocation)
                    || (maxLevelCampaign === currentCampaign
                        && maxLevelLocation === currentLocation
                        && keyLevel > maxLevel)) {
                object.sourceImgLantern = "qrc:/resources/images/lantern_disable.png"
                object.isAvailable = false
                object.ratingLevel = 0
            } else {
                object.sourceImgLantern = "qrc:/resources/images/lantern.png"
                object.isAvailable = true
                if (typeof arrRatingLevels[currentCampaign] !== "undefined"
                        && typeof arrRatingLevels[currentCampaign][currentLocation] !== "undefined"
                        && typeof arrRatingLevels[currentCampaign][currentLocation][keyLevel]
                        !== "undefined") {
                    object.ratingLevel = arrRatingLevels[currentCampaign][currentLocation][keyLevel]
                } else {
                    object.ratingLevel = 0
                }
            }
            object.color = "transparent"
            object.width = 50
            object.height = 50
            object.currentCampaign = currentCampaign
            object.currentLocation = currentLocation
            object.currentLevel = keyLevel
            object.changeImgRatingLevel()
            listRectanglesLevel[keyLevel] = object
        }
        imageBackgroundMainLevelsMap.source = GenerationBranchScript.listObjectCampaigns[currentCampaign].listLocations[currentLocation].backgroundLevels
    }

    function updateLevelsMapPage() {
        var maxLevelCampaign = Number(mainWindow.getSetting("maxLevelCampaign",
                                                            0))
        var maxLevelLocation = Number(mainWindow.getSetting("maxLevelLocation",
                                                            0))
        var maxLevel = Number(mainWindow.getSetting("maxLevel", 0))
        var ratingLevelsUser = mainWindow.getSetting("ratingLevelsUser", "")

        var arrRatingLevels = []
        if (ratingLevelsUser === "" || ratingLevelsUser === null) {
            arrRatingLevels[maxLevelCampaign] = []
            arrRatingLevels[maxLevelCampaign][maxLevelLocation] = []
            arrRatingLevels[maxLevelCampaign][maxLevelLocation][maxLevel] = 0
        } else {
            arrRatingLevels = JSON.parse(ratingLevelsUser)
        }

        for (var keyLevel in listRectanglesLevel) {
            var object = listRectanglesLevel[keyLevel]
            if (maxLevelCampaign < currentCampaign
                    || (maxLevelCampaign === currentCampaign
                        && maxLevelLocation < currentLocation)
                    || (maxLevelCampaign === currentCampaign
                        && maxLevelLocation === currentLocation
                        && keyLevel > maxLevel)) {
                object.sourceImgLantern = "qrc:/resources/images/lantern_disable.png"
                object.isAvailable = false
                object.ratingLevel = 0
            } else {
                object.sourceImgLantern = "qrc:/resources/images/lantern.png"
                object.isAvailable = true
                if (typeof arrRatingLevels[currentCampaign] !== "undefined"
                        && typeof arrRatingLevels[currentCampaign][currentLocation] !== "undefined"
                        && typeof arrRatingLevels[currentCampaign][currentLocation][keyLevel]
                        !== "undefined") {
                    object.ratingLevel = arrRatingLevels[currentCampaign][currentLocation][keyLevel]
                } else {
                    object.ratingLevel = 0
                }
            }
            object.changeImgRatingLevel()
        }
    }
}
