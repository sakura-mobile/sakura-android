import QtQuick 1.1
import com.nokia.meego 1.0
import QtMobility.feedback 1.1

Page {
    id:           scoresPage
    anchors.fill: parent
    property int minScore : 0
    property int rowScore : 0
    orientationLock : PageOrientation.LockLandscape

    function refreshScores() {
        scoreListModel.clear();

        var db = openDatabaseSync("SakuraDB", "1.0", "SakuraDB", 1000000);

        db.transaction(
                    function(tx) {
                        tx.executeSql("CREATE TABLE IF NOT EXISTS HIGHSCORES(NAME TEXT, SCORE NUMBER, DATE TEXT, DIFFICULTY TEXT)");

                        var res = tx.executeSql("SELECT NAME, SCORE, DATE, DIFFICULTY FROM HIGHSCORES ORDER BY SCORE DESC LIMIT 25");

                        rowScore = res.rows.length;

                        for (var i = 0; i < res.rows.length; i++) {
                            scoresPage.minScore = res.rows.item(i).SCORE;
                            scoreListModel.append({"name": res.rows.item(i).NAME, "score": res.rows.item(i).SCORE, "date": res.rows.item(i).DATE, "difficulty": res.rows.item(i).DIFFICULTY});
                        }
                    }

        );
    }

    function addScore(text, score, difficulty) {
        var db = openDatabaseSync("SakuraDB", "1.0", "SakuraDB", 1000000);

        db.transaction(
                    function(tx) {
                        tx.executeSql("CREATE TABLE IF NOT EXISTS HIGHSCORES(NAME TEXT, SCORE NUMBER, DATE TEXT, DIFFICULTY TEXT)");

                        tx.executeSql("INSERT INTO HIGHSCORES (NAME, SCORE, DATE, DIFFICULTY) VALUES (?, ?, ?, ?)", [text, score, Qt.formatDate(new Date(), "dd.MM.yyyy"), difficulty]);
                    }

        );
    }

    function rumbleEffectStart() {
       rumbleEffect.start();
    }

    Image {
        id:               imageBackgroundScore
        source:             "../images/background_main.png"
        anchors.fill: parent
        fillMode: Image.PreserveAspectFit

        Rectangle {
            id : rectangleScores
            radius: 10
            width: mainPage.widthDisplay * 0.5;
            height: mainPage.heightDisplay
            anchors.horizontalCenter: imageBackgroundScore.horizontalCenter
            anchors.verticalCenter: imageBackgroundScore.verticalCenter
            color:  "#800000FF"

            ListModel {
                id: scoreListModel
            }

            ListView {
                id:           scoreListView
                anchors.fill: parent
                model:        scoreListModel

                delegate: Rectangle {
                    color : "transparent"
                    width: scoreListView.width; height: 60

                    Row {
                        anchors.fill: parent

                        Rectangle {
                            width:  parent.width / 2
                            height: parent.height
                            color:  "transparent"

                            Text {
                                anchors.fill:        parent
                                text:                name
                                color:               "#FFFF00"
                                horizontalAlignment: Text.AlignLeft
                                verticalAlignment:   Text.AlignVCenter
                                clip:                true
                                font.pointSize:      16
                            }
                        }

                        Rectangle {
                            width:  parent.width / 4
                            height: parent.height
                            color:  "transparent"

                            Text {
                                anchors.fill:        parent
                                text:                difficulty
                                color:               "#FFFF00"
                                horizontalAlignment: Text.AlignHCenter
                                verticalAlignment:   Text.AlignVCenter
                                clip:                true
                                font.pointSize:      16
                            }
                        }

                        Rectangle {
                            width:  parent.width / 4
                            height: parent.height
                            color:  "transparent"

                            Text {
                                anchors.fill:        parent
                                text:                score
                                color:               "#FFFF00"
                                horizontalAlignment: Text.AlignRight
                                verticalAlignment:   Text.AlignVCenter
                                clip:                true
                                font.pointSize:      16
                            }
                        }
                    }
                }

                header: Rectangle {
                    color : "transparent"
                    width: scoreListView.width; height: 60

                    Text {
                        anchors.horizontalCenter: parent.horizontalCenter
                        text:                     "<b>TOP SCORE</b>"
                        color:                    "#FFFF00"
                        font.pointSize:           35
                        font.bold:                true
                    }
                }
            }
        }

        Image {
            id:               backButton
            source:             "../images/back.png"
            x: 0
            anchors.bottom: parent.bottom
            MouseArea {
                id:           mouseAreaBackButton
                anchors.fill: parent
                onClicked: {
                     rumbleEffectStart();
                     mainPageStack.replace(mainPage);
                }
            }
        }
     }

    HapticsEffect {
         id: rumbleEffect
         attackIntensity: 0.0
         attackTime: 250
         intensity: 1.0
         duration: 250
         fadeTime: 250
         fadeIntensity: 0.0
     }

    Component.onCompleted: {
        scoresPage.refreshScores();
    }
}
