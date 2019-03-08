import QtQuick 2.12
import QtQuick.Controls 2.5

import "GenerationBranch.js" as GenerationBranchScript
import "Util.js" as UtilScript

Item {

    property int currentPageRelax: 0
    property var listRectanglesLevel: []

    Image {
        id: imageBackgroundLevelsRelax
        anchors.centerIn: parent
        width: parent.width
        height: parent.height
        fillMode: Image.PreserveAspectCrop
        source: "qrc:/resources/images/background_levels_relax.jpg"

        Grid {
            id: gridLevelsRelax
            anchors.centerIn: parent
            columns: 5
            spacing: UtilScript.pt(10)
        }

        Row {
            id: rowButtonGame
            anchors.bottom: parent.bottom
            anchors.bottomMargin: UtilScript.pt(80)
            anchors.horizontalCenter: parent.horizontalCenter
            spacing: UtilScript.pt(15)
            Image {
                id: leftButton
                source: "qrc:/resources/images/button_triple_left_disabled.png"
                width: UtilScript.pt(80)
                height: UtilScript.pt(80)
                visible: true
                MouseArea {
                    id: mouseAreaLeftButton
                    anchors.fill: parent
                    onClicked: {
                        previousLevelButton()
                    }
                }
            }

            Image {
                id: rightButton
                source: "qrc:/resources/images/button_triple_right_disabled.png"
                width: UtilScript.pt(80)
                height: UtilScript.pt(80)
                MouseArea {
                    id: mouseAreaRightButton
                    anchors.fill: parent
                    onClicked: {
                        nextLevelButton()
                    }
                }
            }
        }

        Image {
            id: backButton
            source: "qrc:/resources/images/back.png"
            width: UtilScript.pt(50)
            height: UtilScript.pt(50)
            anchors.left: parent.left
            anchors.bottom: parent.bottom
            anchors.leftMargin: UtilScript.pt(15)
            anchors.bottomMargin: UtilScript.pt(16)
            MouseArea {
                id: mouseAreaBackButton
                anchors.fill: parent
                onClicked: {
                    mainStackView.pop()
                }
            }
        }
    }
    StackView.onStatusChanged: {
        if (StackView.status === StackView.Activating) {
            updateLevelsMapPage()
        }
    }

    Component.onCompleted: {
        GenerationBranchScript.initObjectRelaxLevels()
        var maxLevelRelax = mainWindow.getSetting("maxLevelRelax", 0)
        var ratingLevelsUserRelax = mainWindow.getSetting(
                    "ratingLevelsUserRelax", "")
        var arrRatingLevelsRelax = []
        var component, object
        if (ratingLevelsUserRelax === "" || ratingLevelsUserRelax === null) {
            arrRatingLevelsRelax[0] = maxLevelRelax
        } else {
            arrRatingLevelsRelax = JSON.parse(ratingLevelsUserRelax)
        }

        currentPageRelax = Math.floor(maxLevelRelax / 20)

        if (currentPageRelax === 0) {
            leftButton.source = "qrc:/resources/images/button_triple_left_disabled.png"
        } else {
            leftButton.source = "qrc:/resources/images/button_triple_left.png"
        }

        if (currentPageRelax === Math.floor(
                    (GenerationBranchScript.listObjectRelaxLevels.length - 1) / 20)) {
            rightButton.source = "qrc:/resources/images/button_triple_right_disabled.png"
        } else {
            rightButton.source = "qrc:/resources/images/button_triple_right.png"
        }
        for (var i = currentPageRelax * 20; i < currentPageRelax * 20 + 20; i++) {

            if ((typeof GenerationBranchScript.listObjectRelaxLevels[i] === "undefined")
                    || (GenerationBranchScript.listObjectRelaxLevels[i] === null)) {
                break
            }

            component = Qt.createComponent("RectangleLevel.qml")
            object = component.createObject(gridLevelsRelax)
            if ((i > maxLevelRelax)) {
                object.sourceImgLantern = "qrc:/resources/images/lantern_disable.png"
                object.isAvailable = false
                object.ratingLevel = 0
            } else {
                object.sourceImgLantern = "qrc:/resources/images/lantern.png"
                object.isAvailable = true
                if (typeof arrRatingLevelsRelax[i] !== "undefined") {
                    object.ratingLevel = arrRatingLevelsRelax[i]
                } else {
                    object.ratingLevel = 0
                }
            }
            object.color = "transparent"
            object.width = UtilScript.pt(50)
            object.height = UtilScript.pt(50)
            object.isRelax = true
            object.currentLevel = i
            object.changeImgRatingLevel()
            listRectanglesLevel[i] = object
        }
    }

    function nextLevelButton() {

        if (currentPageRelax === Math.floor(
                    (GenerationBranchScript.listObjectRelaxLevels.length - 1) / 20))
            return
        currentPageRelax++
        nextPageRelax()
    }

    function previousLevelButton() {
        if (currentPageRelax === 0)
            return
        currentPageRelax--
        nextPageRelax()
    }

    function nextPageRelax() {

        var component, object
        var maxLevelRelax = mainWindow.getSetting("maxLevelRelax", 0)
        var ratingLevelsUserRelax = mainWindow.getSetting(
                    "ratingLevelsUserRelax", "")

        var arrRatingLevelsRelax = []
        if (ratingLevelsUserRelax === "" || ratingLevelsUserRelax === null) {
            arrRatingLevelsRelax[0] = maxLevelRelax
        } else {
            arrRatingLevelsRelax = JSON.parse(ratingLevelsUserRelax)
        }

        if (listRectanglesLevel.length !== 0) {
            for (var keyI in listRectanglesLevel) {
                if (listRectanglesLevel[keyI] !== null)
                    listRectanglesLevel[keyI].destroy()
            }
        }
        listRectanglesLevel = []
        if (currentPageRelax === 0) {
            leftButton.source = "qrc:/resources/images/button_triple_left_disabled.png"
        } else {
            leftButton.source = "qrc:/resources/images/button_triple_left.png"
        }

        if (currentPageRelax === Math.floor(
                    (GenerationBranchScript.listObjectRelaxLevels.length - 1) / 20)) {
            rightButton.source = "qrc:/resources/images/button_triple_right_disabled.png"
        } else {
            rightButton.source = "qrc:/resources/images/button_triple_right.png"
        }
        for (var i = currentPageRelax * 20; i < currentPageRelax * 20 + 20; i++) {

            if ((typeof GenerationBranchScript.listObjectRelaxLevels[i] === "undefined")
                    || (GenerationBranchScript.listObjectRelaxLevels[i] === null)) {
                break
            }

            component = Qt.createComponent("RectangleLevel.qml")
            object = component.createObject(gridLevelsRelax)
            if ((i > maxLevelRelax)) {
                object.sourceImgLantern = "qrc:/resources/images/lantern_disable.png"
                object.isAvailable = false
                object.ratingLevel = 0
            } else {
                object.sourceImgLantern = "qrc:/resources/images/lantern.png"
                object.isAvailable = true
                if (typeof arrRatingLevelsRelax[i] !== "undefined") {
                    object.ratingLevel = arrRatingLevelsRelax[i]
                } else {
                    object.ratingLevel = 0
                }
            }
            object.color = "transparent"
            object.width = UtilScript.pt(50)
            object.height = UtilScript.pt(50)
            object.isRelax = true
            object.currentLevel = i
            object.changeImgRatingLevel()
            listRectanglesLevel[i] = object
        }
    }

    function updateLevelsMapPage() {

        var maxLevelRelax = Number(mainWindow.getSetting("maxLevelRelax", 0))
        var ratingLevelsUserRelax = mainWindow.getSetting(
                    "ratingLevelsUserRelax", "")

        var arrRatingLevelsRelax = []
        if (ratingLevelsUserRelax === "" || ratingLevelsUserRelax === null) {
            arrRatingLevelsRelax[0] = maxLevelRelax
        } else {
            arrRatingLevelsRelax = JSON.parse(ratingLevelsUserRelax)
        }

        for (var keyLevel in listRectanglesLevel) {
            var object = listRectanglesLevel[keyLevel]
            if (keyLevel > maxLevelRelax) {
                object.sourceImgLantern = "qrc:/resources/images/lantern_disable.png"
                object.isAvailable = false
                object.ratingLevel = 0
            } else {
                object.sourceImgLantern = "qrc:/resources/images/lantern.png"
                object.isAvailable = true
                if (typeof arrRatingLevelsRelax[keyLevel] !== "undefined") {
                    object.ratingLevel = arrRatingLevelsRelax[keyLevel]
                } else {
                    object.ratingLevel = 0
                }
            }
            object.changeImgRatingLevel()
        }
    }
}
