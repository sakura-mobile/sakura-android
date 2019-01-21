import QtQuick 2.9
import QtQuick.Window 2.3
import QtQuick.Controls 2.2
import QtQuick.LocalStorage 2.0

import "GenerationBranch.js" as GenerationBranchScript

Item {
    id: ratingsListPage
    property int currentLevel: 0
    property var arrRectTrasparent: []
    property var nameUser: ""
    property bool isTournament: true
    property var listTopUsers: []
    property var xhr: ""

    Image {
        id: imageBackgroundRatingsPage
        source: "qrc:/resources/images/background_main.png"
        anchors.fill: parent
        fillMode: Image.PreserveAspectCrop

        Image {
            id: imageLanternTime
            source: "qrc:/resources/images/tape.png"
            anchors.horizontalCenter: parent.horizontalCenter
            width: 300
            height: 100
            y: imageLanternTime.height * -1

            Column {
                spacing: 1
                anchors.horizontalCenter: parent.horizontalCenter
                anchors.bottom: parent.bottom
                anchors.bottomMargin: 40

                Text {
                    id: textTimeLantern
                    horizontalAlignment: Text.AlignHCenter
                    text: qsTr("The tournament will end in:")
                    font.pointSize: 12
                    font.bold: true
                    color: "white"
                    font.family: "Helvetica"
                }

                Row {
                    anchors.horizontalCenter: parent.horizontalCenter
                    spacing: 3

                    Text {
                        id: textHours
                        text: "00:"
                        font.family: "Courier"
                        font.pointSize: 18
                        font.bold: true
                        color: "white"
                    }
                    Text {
                        id: textMinutes
                        text: "00:"
                        font.family: "Courier"
                        font.pointSize: 18
                        font.bold: true
                        color: "white"
                    }
                    Text {
                        id: textSeconds
                        text: "00"
                        font.family: "Courier"
                        font.pointSize: 18
                        font.bold: true
                        color: "white"
                    }
                }
            }

            PropertyAnimation {
                id: animationTimeDown
                duration: 1400
                easing.overshoot: 3.0
                from: imageLanternTime.height * -1
                target: imageLanternTime
                properties: "y"
                easing.type: Easing.OutBack
                to: 16
            }

            PropertyAnimation {
                id: animationTimeUp
                duration: 300
                from: imageLanternTime.y
                target: imageLanternTime
                properties: "y"
                easing.type: Easing.InQuad
                to: imageLanternTime.height * -1
            }
        }

        Image {
            id: listAward
            anchors.centerIn: parent
            scale: width < parent.width
                   * 0.7 ? 1.0 : (width > 0.0 ? (parent.width / width) * 0.7 : 1.0)
            source: "qrc:/resources/images/background_awards.jpg"
            opacity: 0.9

            Rectangle {
                id: rectangleScores
                width: parent.width
                height: parent.height
                anchors.fill: parent
                anchors.margins: 30
                color: "transparent"
                clip: true

                ListModel {
                    id: scoreListModel
                }

                ListView {
                    id: scoreListView
                    anchors.fill: parent
                    model: scoreListModel

                    property bool viewGifts: false

                    delegate: Rectangle {
                        id: delegateRectangle
                        color: "transparent"
                        width: scoreListView.width
                        height: 60

                        property var listView: ListView.view

                        Row {
                            anchors.fill: parent
                            spacing: 20

                            Rectangle {
                                width: 30
                                height: parent.height
                                color: "transparent"

                                Text {
                                    anchors.fill: parent
                                    text: position
                                    color: "black"
                                    horizontalAlignment: Text.AlignLeft
                                    verticalAlignment: Text.AlignVCenter
                                    clip: true
                                    font.pointSize: 30
                                    font.family: "Helvetica"
                                }
                            }

                            Rectangle {
                                width: 200
                                height: parent.height
                                color: "transparent"

                                Text {
                                    anchors.fill: parent
                                    text: name
                                    color: colorName
                                    horizontalAlignment: Text.AlignLeft
                                    verticalAlignment: Text.AlignVCenter
                                    clip: true
                                    font.pointSize: 30
                                    font.family: "Helvetica"
                                }
                            }
                            Rectangle {
                                width: 130
                                height: parent.height
                                color: "transparent"

                                Text {
                                    anchors.fill: parent
                                    text: score
                                    color: "black"
                                    horizontalAlignment: Text.AlignRight
                                    verticalAlignment: Text.AlignVCenter
                                    clip: true
                                    font.pointSize: 30
                                    font.family: "Helvetica"
                                }
                            }

                            Row {
                                id: rowGifts
                                width: 100
                                height: parent.height
                                anchors.verticalCenter: parent.verticalCenter
                                visible: delegateRectangle.listView.viewGifts

                                Image {
                                    id: quickTipButton
                                    anchors.verticalCenter: parent.verticalCenter
                                    source: getGift(giftType)
                                    width: 30
                                    height: 30

                                    function getGift(giftType) {
                                        if (giftType === 1) {
                                            return "qrc:/resources/images/button_quick_tip.png"
                                        }
                                        if (giftType === 2) {
                                            return "qrc:/resources/images/lantern_step_ice_booster.png"
                                        }
                                        if (giftType === 3) {
                                            return "qrc:/resources/images/lantern_time_ice_booster.png"
                                        }
                                    }
                                }

                                Text {
                                    anchors.verticalCenter: parent.verticalCenter
                                    text: "x" + countGift
                                    color: "black"
                                    clip: true
                                    font.pointSize: 30
                                    font.family: "Helvetica"
                                }
                            }
                        }
                    }

                    header: Rectangle {
                        color: "transparent"
                        width: scoreListView.width
                        height: 60

                        Text {
                            anchors.horizontalCenter: parent.horizontalCenter
                            text: "<b>" + qsTr("TOP SCORE") + "</b>"
                            color: "black"
                            font.pointSize: 35
                            font.bold: true
                            font.family: "Helvetica"
                        }
                    }
                }
            }

            BusyIndicator {
                id: busyIndicatorTop
                anchors.centerIn: parent
                running: false
                visible: false
            }
        }

        Image {
            id: backAwardsButton
            source: "qrc:/resources/images/back.png"
            anchors.bottom: parent.bottom
            anchors.bottomMargin: 16
            anchors.left: parent.left
            anchors.leftMargin: 15
            height: 60
            width: 60

            MouseArea {
                id: mouseAreaBackAwardsButton
                anchors.fill: parent
                onClicked: {
                    mainStackView.pop()
                }
            }
        }

        Row {
            anchors.bottom: parent.bottom
            anchors.horizontalCenter: parent.horizontalCenter
            anchors.bottomMargin: 16
            spacing: 10

            Image {
                id: tournamentRatingButton
                source: "qrc:/resources/images/button_tournament_rating_off.png"
                height: 60
                width: 60

                MouseArea {
                    id: mouseAreaTournamentRatingButton
                    anchors.fill: parent
                    onClicked: {
                        if (isTournament === true)
                            return
                        scoreListModel.clear()
                        animationTimeDown.running = true
                        isTournament = true
                        tournamentRatingButton.source
                                = "qrc:/resources/images/button_tournament_rating_off.png"
                        userRatingButton.source = "qrc:/resources/images/button_user_ratings_on.png"
                        timerStartTournamentGame()
                        sendRequestGetTopToday(
                                    GenerationBranchScript.listObjectSingleLevels[currentLevel].name)
                    }
                }
            }

            Image {
                id: userRatingButton
                source: "qrc:/resources/images/button_user_ratings_on.png"
                height: 60
                width: 60

                MouseArea {
                    id: mouseAreaUserRatingButton
                    anchors.fill: parent
                    onClicked: {
                        if (isTournament === false)
                            return
                        scoreListModel.clear()
                        isTournament = false
                        xhr.abort()
                        animationTimeUp.running = true
                        tournamentRatingButton.source
                                = "qrc:/resources/images/button_tournament_rating_on.png"
                        userRatingButton.source
                                = "qrc:/resources/images/button_user_ratings_off.png"
                        userScores()
                    }
                }
            }
        }
        Rectangle {
            id: rectNameUser
            y: imageBackgroundRatingsPage.height
            anchors.horizontalCenter: imageBackgroundRatingsPage.horizontalCenter
            width: 300
            height: 200
            color: "transparent"
            visible: false
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
                        id: textName
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
                        text: "NONAME"
                        focus: true
                        font.pointSize: 30
                        color: "white"
                        maximumLength: 10
                        inputMethodHints: Qt.ImhNoPredictiveText
                        font.family: "Helvetica"
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
                            nameUser = textInputName.text
                            animationRectNameUserDown.running = true
                        }
                    }
                }
            }

            PropertyAnimation {
                id: animationRectNameUserUp
                duration: 500
                easing.overshoot: 4.5
                from: imageBackgroundRatingsPage.height
                target: rectNameUser
                properties: "y"
                easing.type: Easing.InQuad
                to: imageBackgroundRatingsPage.height / 2 - rectNameUser.height / 2
            }

            PropertyAnimation {
                id: animationRectNameUserDown
                duration: 200
                from: rectNameUser.y
                target: rectNameUser
                properties: "y"
                easing.type: Easing.InQuad
                to: imageBackgroundRatingsPage.height
            }
        }
    }

    StackView.onStatusChanged: {
        if (StackView.status === StackView.Active) {
            nameUser = mainWindow.getSetting("nameUser", "NONAME")
            animationTimeDown.running = true
        }
    }

    Timer {
        id: timerTournamentGame
        interval: 1000
        repeat: true
        onTriggered: ratingsListPage.timerStartTournamentGame()
    }

    Component.onCompleted: {
        GenerationBranchScript.initObjectSingleLevels()
        timerTournamentGame.start()
        timerStartTournamentGame()

        sendRequestGetTopToday(
                    GenerationBranchScript.listObjectSingleLevels[currentLevel].name)
    }

    function sendRequestGetTopToday(rating_type) {
        xhr = new XMLHttpRequest()
        xhr.timeout = 5000
        listTopUsers = []

        xhr.open('GET',
                 "https://sakuramobile.sourceforge.io/cgi-bin/manager.cgi?key="
                 + GenerationBranchScript.SERVER_KEY
                 + "&action=rating_get_top_today&rating_type=" + encodeURIComponent(
                     rating_type), true)
        xhr.send()
        busyIndicatorTop.running = true
        busyIndicatorTop.visible = true

        xhr.onreadystatechange = function () {
            busyIndicatorTop.running = false
            busyIndicatorTop.visible = false
            if (xhr.readyState != 4)
                return
            if (xhr.status != 200) {
                console.log(xhr.status + ': ' + xhr.statusText)
            } else {
                console.log("xhr.responseText :: " + xhr.responseText)
                var res = JSON.parse(xhr.responseText)
                if (res["result"] === "success") {
                    var listTop = res["top"]
                    if (listTop.lenght !== 0) {
                        for (var i = 0; i < listTop.length; i++) {
                            listTopUsers[listTopUsers.length] = listTop[i]
                        }
                    }
                    tournamentScores()
                } else {
                    console.log(res)
                }
            }
        }
    }

    function tournamentScores() {
        scoreListView.viewGifts = true
        scoreListModel.clear()

        for (var i = 0; i < listTopUsers.length; i++) {
            var obj = GenerationBranchScript.getObjectGift(
                        GenerationBranchScript.listObjectSingleLevels[currentLevel].name,
                        i + 1)
            if (listTopUsers[i].user_id === mainWindow.getSetting("userUuid",
                                                                  "")) {
                scoreListModel.append({
                                          "name": mainWindow.getSetting(
                                                      "nameUser", "NONAME"),
                                          "score": Number(
                                                       listTopUsers[i].score),
                                          "date": Qt.formatDate(new Date(),
                                                                "dd.MM.yyyy"),
                                          "giftType": obj.typeGift,
                                          "countGift": obj.countGift,
                                          "position": i + 1,
                                          "colorName": "red"
                                      })
            } else {
                scoreListModel.append({
                                          "name": listTopUsers[i].user_name,
                                          "score": Number(
                                                       listTopUsers[i].score),
                                          "date": Qt.formatDate(new Date(),
                                                                "dd.MM.yyyy"),
                                          "giftType": obj.typeGift,
                                          "countGift": obj.countGift,
                                          "position": i + 1,
                                          "colorName": "black"
                                      })
            }
        }
    }

    function userScores() {
        scoreListView.viewGifts = false
        scoreListModel.clear()

        var db = LocalStorage.openDatabaseSync("SakuraDB", "1.0",
                                               "SakuraDB", 1000000)

        db.transaction(function (tx) {
            tx.executeSql(
                        "CREATE TABLE IF NOT EXISTS HIGHSCORES(NAME TEXT, SCORE NUMBER, DATE TEXT, DIFFICULTY TEXT)")

            var res = tx.executeSql(
                        "SELECT NAME, SCORE, DATE, DIFFICULTY FROM HIGHSCORES WHERE DIFFICULTY=\""
                        + GenerationBranchScript.listObjectSingleLevels[currentLevel].name
                        + "\" ORDER BY SCORE DESC LIMIT 25")

            var rowScore = res.rows.length
            var name
            var minScore

            for (var i = 0; i < res.rows.length; i++) {
                if (res.rows.item(i).NAME === 'NONAME'
                        && nameUser !== 'NONAME') {
                    name = nameUser
                } else {
                    name = res.rows.item(i).NAME
                }
                minScore = res.rows.item(i).SCORE
                scoreListModel.append({
                                          "name": name,
                                          "score": Number(res.rows.item(
                                                              i).SCORE),
                                          "date": Qt.formatDate(new Date(),
                                                                "dd.MM.yyyy"),
                                          "position": i + 1,
                                          "colorName": "black",
                                          "giftType": 1,
                                          "countGift": 1
                                      })
            }
            tx.executeSql(
                        "DELETE FROM HIGHSCORES WHERE SCORE < " + minScore + " AND DIFFICULTY=\""
                        + GenerationBranchScript.listObjectSingleLevels[currentLevel].name + "\"")
        })
    }

    function timerStartTournamentGame() {
        var d = new Date()
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000)
        var now = new Date(utc + (3600000 * 0))
        var hours = 23 - now.getHours()
        if (hours < 10) {
            textHours.text = "0" + hours + ":"
        } else {
            textHours.text = hours + ":"
        }
        var minutes = 59 - now.getMinutes()
        if (minutes < 10) {
            textMinutes.text = "0" + minutes + ":"
        } else {
            textMinutes.text = minutes + ":"
        }
        var seconds = 59 - now.getSeconds()
        if (seconds < 10) {
            textSeconds.text = "0" + seconds
        } else {
            textSeconds.text = seconds
        }
    }
}
