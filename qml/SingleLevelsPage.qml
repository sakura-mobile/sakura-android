import QtQuick 2.9
import QtQuick.Controls 2.2

import "GenerationBranch.js" as GenerationBranchScript

Item {
    id: singleLevelsPage
    property int currentLevel: 0
    property var arrRectTrasparent: []

    Image {
        id: imageBackgroundMainLevel
        source: "qrc:/resources/images/background_main.png"
        anchors.fill: parent
        fillMode: Image.PreserveAspectCrop

        Rectangle {
            id: rectLevels
            color: "transparent"
            anchors.fill: parent
            Image {
                id: awardButton
                anchors.top: parent.top
                anchors.topMargin: 30
                anchors.horizontalCenter: parent.horizontalCenter
                source: "qrc:/resources/images/button_award.png"
                width: 80
                height: 80

                MouseArea {
                    id: mouseAreaAwardButton
                    anchors.fill: parent
                    onClicked: {
                        var component = Qt.createComponent(
                                    "RatingsListPage.qml")

                        if (component.status === Component.Ready) {
                            mainStackView.push(component, {
                                                   "currentLevel": currentLevel
                                               })
                        } else {
                            console.log(component.errorString())
                        }
                    }
                }
            }
            Rectangle {
                anchors.top: parent.top
                anchors.topMargin: 30
                anchors.left: parent.left
                anchors.leftMargin: 15
                color: "transparent"
                width: 100
                height: 40
                Rectangle {
                    anchors.fill: parent
                    color: "black"
                    radius: 20
                    opacity: 0.3
                }

                Text {
                    id: textName
                    anchors.centerIn: parent
                    opacity: 1.0
                    color: "white"
                    text: mainWindow.getSetting("nameUser", "NONAME")
                    font.family: "Helvetica"
                    font.pointSize: 10
                    font.bold: true
                }
                MouseArea {
                    id: mouseAreaEditName
                    anchors.fill: parent
                    onClicked: {
                        rectNameUser.visible = true
                        animationRectNameUserUp.running = true
                        textInputName.focus = true
                    }
                }
            }

            Grid {
                id: gridMapLevelSingle
                anchors.centerIn: parent
                scale: width < parent.width
                       * 0.9 ? 1.0 : (width > 0.0 ? (parent.width / width) * 0.9 : 1.0)
                spacing: 1
            }

            Row {
                id: rowButtonGame
                anchors.bottom: parent.bottom
                anchors.bottomMargin: 80
                anchors.horizontalCenter: parent.horizontalCenter
                spacing: 15
                Image {
                    id: leftButton
                    source: "qrc:/resources/images/button_triple_left.png"
                    width: 80
                    height: 80
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
                    id: playButton
                    source: "qrc:/resources/images/button_play_last_location.png"
                    width: 80
                    height: 80
                    MouseArea {
                        id: mouseAreaPlayButton
                        anchors.fill: parent
                        onClicked: {
                            playSingleButton()
                        }
                    }
                }

                Image {
                    id: rightButton
                    source: "qrc:/resources/images/button_triple_right.png"
                    width: 80
                    height: 80
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
                width: 60
                height: 60
                anchors.bottom: parent.bottom
                anchors.bottomMargin: 16
                anchors.leftMargin: 15
                anchors.left: parent.left

                MouseArea {
                    id: mouseAreaBackButton
                    anchors.fill: parent
                    onClicked: {
                        mainStackView.pop()
                    }
                }
            }

            Text {
                anchors.bottom: parent.bottom
                anchors.horizontalCenter: parent.horizontalCenter
                anchors.bottomMargin: 16
                id: textLevel
                font.pointSize: 35
                font.bold: true
                color: "darkmagenta"
                font.family: "Helvetica"
            }
        }

        Rectangle {
            id: rectAwardsGame
            anchors.horizontalCenter: parent.horizontalCenter
            y: imageBackgroundMainLevel.height
            width: 300
            height: 200
            color: "transparent"
            Image {
                id: backgroundAwardsGame
                source: "qrc:/resources/images/background_rect_score.png"
                width: parent.width
                height: parent.height

                Column {
                    anchors.centerIn: parent
                    spacing: 3

                    Text {
                        id: textRewardUser
                        anchors.topMargin: 15
                        text: qsTr("Your reward:")
                        font.pointSize: 25
                        font.bold: true
                        color: "white"
                        font.family: "Helvetica"
                    }

                    Row {
                        id: rowQuickTip
                        z: 15
                        spacing: 15
                        visible: false
                        anchors.horizontalCenter: parent.horizontalCenter

                        Image {
                            id: imageQuickTip
                            width: 40
                            height: 40
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
                            text: "X"
                            font.pointSize: 20
                            font.bold: true
                            color: "white"
                            font.family: "Helvetica"
                        }
                    }
                    Row {
                        id: rowStepIce
                        z: 15
                        spacing: 15
                        visible: false
                        anchors.horizontalCenter: parent.horizontalCenter

                        Image {
                            id: imageStepIce
                            width: 40
                            height: 40
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
                            id: textStepIce
                            anchors.verticalCenter: parent.verticalCenter
                            text: ""
                            font.pointSize: 20
                            font.bold: true
                            color: "white"
                            font.family: "Helvetica"
                        }
                    }
                    Row {
                        id: rowTimeIce
                        z: 15
                        spacing: 15
                        visible: false
                        anchors.horizontalCenter: parent.horizontalCenter

                        Image {
                            id: imageTimeIce
                            width: 40
                            height: 40
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
                            id: textTimeIce
                            anchors.verticalCenter: parent.verticalCenter
                            text: ""
                            font.pointSize: 20
                            font.bold: true
                            color: "white"
                            font.family: "Helvetica"
                        }
                    }
                    Row {
                        id: rowOk
                        z: 15
                        spacing: 15
                        anchors.horizontalCenter: parent.horizontalCenter

                        Image {
                            id: imageOk
                            width: 50
                            height: 50
                            source: "qrc:/resources/images/button_ok.png"

                            MouseArea {
                                id: mouseAreaImageOk
                                anchors.fill: parent
                                onClicked: {
                                    animationRectAwardsGameDown.running = true
                                }
                            }
                        }
                    }
                }
            }

            PropertyAnimation {
                id: animationRectAwardsGameUp
                duration: 300
                easing.overshoot: 1.5
                from: imageBackgroundMainLevel.height
                target: rectAwardsGame
                properties: "y"
                easing.type: Easing.InQuad
                to: imageBackgroundMainLevel.height / 2 - rectAwardsGame.height / 2
            }
            PropertyAnimation {
                id: animationRectAwardsGameDown
                duration: 200
                from: rectAwardsGame.y
                target: rectAwardsGame
                properties: "y"
                easing.type: Easing.InQuad
                to: imageBackgroundMainLevel.height
                onStopped: {
                    rowQuickTip.visible = false
                    rowStepIce.visible = false
                    rowTimeIce.visible = false
                }
            }
        }

        Rectangle {
            id: rectNameUser
            y: imageBackgroundMainLevel.height
            anchors.horizontalCenter: imageBackgroundMainLevel.horizontalCenter
            width: 300
            height: 200
            visible: false
            color: "transparent"
            Image {
                id: backgroundRectNameUser
                source: "qrc:/resources/images/background_rect_score.png"
                width: parent.width
                height: parent.height

                Column {
                    id: rowTextNameUser
                    anchors.top: parent.top
                    anchors.horizontalCenter: parent.horizontalCenter
                    anchors.topMargin: 30
                    z: 15
                    spacing: 5
                    visible: true
                    Text {
                        id: textNameUser
                        anchors.horizontalCenter: parent.horizontalCenter
                        text: qsTr("Your nickname:")
                        font.pointSize: 25
                        font.bold: true
                        color: "white"
                        font.family: "Helvetica"
                    }
                    TextInput {
                        id: textInputName
                        anchors.horizontalCenter: parent.horizontalCenter
                        text: mainWindow.getSetting("nameUser", "NONAME")
                        focus: true
                        font.pointSize: 30
                        color: "white"
                        maximumLength: 10
                        inputMethodHints: Qt.ImhNoPredictiveText
                        font.family: "Helvetica"

                        MouseArea {
                            id: mouseAreaTextInputName
                            anchors.fill: parent
                            onClicked: {
                                if (textInputName.text == "NONAME")
                                    textInputName.text = ""
                            }
                        }
                    }
                }
                Image {
                    id: imageOkName
                    width: 50
                    height: 50
                    anchors.bottom: parent.bottom
                    anchors.bottomMargin: 16
                    anchors.horizontalCenter: parent.horizontalCenter
                    source: "qrc:/resources/images/button_ok.png"
                    MouseArea {
                        id: mouseAreaImageOkName
                        anchors.fill: parent
                        onClicked: {
                            mainWindow.setSetting("nameUser",
                                                  textInputName.text)
                            textName.text = textInputName.text
                            animationRectNameUserDown.running = true
                        }
                    }
                }
            }

            PropertyAnimation {
                id: animationRectNameUserUp
                duration: 500
                easing.overshoot: 4.5
                from: imageBackgroundMainLevel.height
                target: rectNameUser
                properties: "y"
                easing.type: Easing.InQuad
                to: imageBackgroundMainLevel.height / 2 - rectNameUser.height / 2
            }

            PropertyAnimation {
                id: animationRectNameUserDown
                duration: 200
                from: rectNameUser.y
                target: rectNameUser
                properties: "y"
                easing.type: Easing.InQuad
                to: imageBackgroundMainLevel.height
            }
        }

        BusyIndicator {
            id: busyIndicatorAward
            anchors.centerIn: parent
            running: false
            visible: false
        }

        Rectangle {
            id: rectTournamentHint
            anchors.fill: parent
            visible: false
            color: "transparent"
            Rectangle {
                color: "black"
                opacity: 0.6
                anchors.fill: parent
            }

            Rectangle {
                id: rectHint
                anchors.centerIn: parent
                color: "black"
                radius: 20
                width: 250
                height: 200
                border.color: "#C5007F"
                border.width: 10
                gradient: Gradient {
                    GradientStop {
                        position: 0.0
                        color: "#C5007F"
                    }
                    GradientStop {
                        position: 1.0
                        color: "purple"
                    }
                }

                TextArea {
                    id: textAreaCard
                    width: parent.width
                    height: parent.height
                    focus: false
                    font.pointSize: 20
                    font.bold: true
                    color: "white"
                    font.family: "Helvetica"
                    readOnly: true
                    text: qsTr("Participate in daily tournaments and get rewards!")
                    wrapMode: TextEdit.Wrap
                    verticalAlignment: TextEdit.AlignVCenter
                    horizontalAlignment: TextEdit.AlignHCenter
                }
                Image {
                    anchors.bottom: rectHint.bottom
                    anchors.bottomMargin: 10
                    anchors.horizontalCenter: parent.horizontalCenter
                    id: imageHintOk
                    width: 50
                    height: 50
                    source: "qrc:/resources/images/button_ok.png"

                    MouseArea {
                        id: mouseAreaImageHintOk
                        anchors.fill: parent
                        onClicked: {
                            mainWindow.setSetting("TournamentHint", 1)
                            rectTournamentHint.visible = false
                            rectNameUser.visible = true
                            animationRectNameUserUp.running = true
                            textInputName.focus = true
                        }
                    }
                }
            }
        }

        Component.onCompleted: {
            loadBranchOnMap()
            sendRequestGetYesterday()
        }
    }

    StackView.onStatusChanged: {
        if (Number(mainWindow.getSetting("TournamentHint", 0)) === 0)
            rectTournamentHint.visible = true
        if (StackView.status === StackView.Active) {
            var nameUser = mainWindow.getSetting("nameUser", "NONAME")
        }
    }

    function sendRequestGetYesterday() {
        var d = new Date()
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000)
        var now = new Date(utc + (3600000 * 0))
        var lastDayTourmanent = mainWindow.getSetting("lastDayTourmanent", 0)
        var lastDay = new Date()
        if (lastDayTourmanent !== 0) {
            lastDay.setTime(lastDayTourmanent)
            if (now.getFullYear() === lastDay.getFullYear() && now.getMonth(
                        ) === lastDay.getMonth() && now.getDate(
                        ) === lastDay.getDate()) {
                return
            }
        }
        var xhr = new XMLHttpRequest()
        var listGifts = []
        xhr.timeout = 5000
        xhr.open('GET',
                 "https://sakuramobile.sourceforge.io/cgi-bin/manager.cgi?key="
                 + GenerationBranchScript.SERVER_KEY
                 + "&action=rating_get_yesterday&user_id=" + encodeURIComponent(
                     mainWindow.getSetting("userUuid", "")), true)
        xhr.send()
        busyIndicatorAward.running = true
        busyIndicatorAward.visible = true

        xhr.onreadystatechange = function () {
            busyIndicatorAward.running = false
            busyIndicatorAward.visible = false
            if (xhr.readyState != 4)
                return
            if (xhr.status != 200) {
                console.log(xhr.status + ': ' + xhr.statusText)
            } else {
                console.log(xhr.responseText)
                var res = JSON.parse(xhr.responseText)

                if (res["result"] === "success") {
                    var listRatings = res["ratings"]
                    if (typeof listRatings.length !== "undefined"
                            && listRatings.length !== 0) {
                        for (var i = 0; i < listRatings.length; i++) {
                            var obj = GenerationBranchScript.getObjectGift(
                                        listRatings[i].rating_type,
                                        listRatings[i].place)
                            if (obj !== false) {
                                if (typeof listGifts[obj.typeGift] !== "undefined") {
                                    listGifts[obj.typeGift] += obj.countGift
                                } else {
                                    listGifts[obj.typeGift] = obj.countGift
                                }
                            }
                        }
                        rowQuickTip.visible = false
                        rowStepIce.visible = false
                        rowTimeIce.visible = false
                        for (var type_gift in listGifts) {
                            if (Number(type_gift) === 1) {
                                rowQuickTip.visible = true
                                textCountQuickTip.text = listGifts[type_gift]
                                mainWindow.setSetting("countQuickTip", Number(
                                                          mainWindow.getSetting(
                                                              "countQuickTip",
                                                              0)) + Number(
                                                          listGifts[type_gift]))
                            }
                            if (Number(type_gift) === 2) {
                                rowStepIce.visible = true
                                textStepIce.text = listGifts[type_gift]
                                mainWindow.setSetting(
                                            "countBlockStepLantern",
                                            Number(mainWindow.getSetting(
                                                       "countBlockStepLantern",
                                                       0)) + Number(
                                                listGifts[type_gift]))
                            }
                            if (Number(type_gift) === 3) {
                                rowTimeIce.visible = true
                                textTimeIce.text = listGifts[type_gift]
                                mainWindow.setSetting(
                                            "countBlockTimeLantern",
                                            Number(mainWindow.getSetting(
                                                       "countBlockTimeLantern",
                                                       0)) + Number(
                                                listGifts[type_gift]))
                            }
                        }
                        mainWindow.setSetting("lastDayTourmanent",
                                              now.getTime())
                        animationRectAwardsGameUp.running = true
                    } else {
                        mainWindow.setSetting("lastDayTourmanent",
                                              now.getTime())
                    }
                } else {
                    console.log(res)
                }
            }
        }
    }

    function playSingleButton() {
        var component = Qt.createComponent("SingleGamePage.qml")

        if (component.status === Component.Ready) {
            mainStackView.push(component, {
                                   "currentLevel": currentLevel
                               })
        } else {
            console.log(component.errorString())
        }
    }

    function nextLevelButton() {
        var nextLevel = currentLevel + 1
        if (typeof GenerationBranchScript.listObjectSingleLevels[nextLevel] === "undefined") {
            currentLevel = 0
        } else {
            currentLevel++
        }
        loadBranchOnMap()
    }

    function previousLevelButton() {
        var nextLevel = currentLevel - 1
        if (typeof GenerationBranchScript.listObjectSingleLevels[nextLevel] === "undefined") {
            currentLevel = GenerationBranchScript.listObjectSingleLevels.length - 1
        } else {
            currentLevel--
        }
        loadBranchOnMap()
    }

    function loadBranchOnMap() {
        GenerationBranchScript.initObjectSingleLevels()
        var objMap = GenerationBranchScript.listObjectSingleLevels[currentLevel]
        var widthGame = objMap.width
        var heightGame = objMap.height

        textLevel.text = widthGame + "x" + heightGame
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
        gridMapLevelSingle.columns = widthGame

        for (var i = 0; i < heightGame; i++) {
            for (var j = 0; j < widthGame; j++) {
                if (objMap.mapArray[i][j] === 1) {
                    component = Qt.createComponent("Branch.qml")
                    object = component.createObject(gridMapLevelSingle)
                    object.source = "qrc:/resources/images/branch/"
                            + GenerationBranchScript.listGameBranch[i][j].name + "_3e.png"
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
                    GenerationBranchScript.listGameBranchObject[i][j] = object
                } else {
                    component = Qt.createQmlObject(
                                'import QtQuick 2.9; Rectangle {color: "transparent"; width: 30; height: 20}',
                                gridMapLevelSingle)
                    arrRectTrasparent[arrRectTrasparent.length] = component
                }
            }
        }
    }
}
