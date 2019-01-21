import QtQuick 2.9
import QtQuick.Window 2.3
import QtQuick.Controls 2.2

import "Settings.js" as SettingsScript

Item {
    id:           levelPage
    property int widthGame :5
    property int heightGame : 5
    property var gamePageItem: null

    function branchClosed(ii, jj) {
        if (ii < 0 || jj < 0) return
        if (ii>=heightGame || jj>=widthGame) return
        if (gamePageItem.isClosed == 0) return;
        if (SettingsScript.listGameBranch[ii][jj] == null) return;
        if (SettingsScript.listGameBranch[ii][jj].isChecked == 1) return;

        SettingsScript.listGameBranch[ii][jj].isChecked = 1;
        if (SettingsScript.listGameBranch[ii][jj].posLeft == 1) {
            if (SettingsScript.listGameBranch[ii][jj -1] == null) {gamePageItem.isClosed = 0;return;}
            branchClosed(ii,jj -1);
        }
        if (SettingsScript.listGameBranch[ii][jj].posTop == 1) {
            if (SettingsScript.listGameBranch[ii - 1][jj] == null) { gamePageItem.isClosed = 0; return;}
            branchClosed(ii - 1,jj);

        }
        if (SettingsScript.listGameBranch[ii][jj].posRight == 1) {
            if (SettingsScript.listGameBranch[ii][jj + 1] == null) { gamePageItem.isClosed = 0; return;}
            branchClosed(ii,jj + 1);
        }
        if (SettingsScript.listGameBranch[ii][jj].posBottom == 1) {
            if (SettingsScript.listGameBranch[ii + 1][jj] == null) { gamePageItem.isClosed = 0; return;}
            branchClosed(ii + 1,jj);
        }
    }

    function previousLevelButton() {
        if (widthGame > 5) {
            widthGame -=2
            heightGame -=2
            loadLevels()
        }
        if (widthGame == 5) {
            leftButton.visible = false
        } else {
            leftButton.visible = true
            rightButton.visible = true
        }

    }

    function nextLevelButton() {
        if (widthGame < 11) {
            widthGame +=2
            heightGame +=2
            loadLevels()
         }
        if (widthGame == 11) {
            rightButton.visible = false
        } else {
            rightButton.visible = true
            leftButton.visible = true
        }
    }

    function funcPlayButton() {
        gamePageItem.isPlayGame = 1;
        gamePageItem.widthGame = widthGame
        gamePageItem.heightGame = heightGame
        mainStackView.push(gamePageItem);

        gamePageItem.load();
    }

    function loadLevels() {

        gamePageItem.widthGame = widthGame
        gamePageItem.heightGame = heightGame

        textLevel.text = gamePageItem.widthGame + "x" + gamePageItem.heightGame

        if (SettingsScript.listObjectGlare.length != 0) {
            for(var i = 0; i < SettingsScript.listObjectGlare.length; i++) {
                   SettingsScript.listObjectGlare[i].destroy();
            }
        }

        if (SettingsScript.listImageBranch.length == 0) SettingsScript.initObjectBranch();
        if (SettingsScript.listGameBranch.length != 0) {
            for(var i = 0; i < SettingsScript.listGameBranch.length; i++) {
                for(var j = 0; j < SettingsScript.listGameBranch.length; j++) {
                   SettingsScript.listGameBranch[i][j].destroy();
                }
            }
        }

        SettingsScript.listGameBranch = []
        var component;
        var object;
        var typeBranch;
        var xPos = 0;
        var yPos = 0;
        var sideLeft, sideRight, sideTop, sideBottom

        for (var i = 0; i < widthGame; i++) {
            SettingsScript.listGameBranch[i] = []
            for (var j = 0; j < heightGame; j++) {
                SettingsScript.listGameBranch[i][j] = null;
            }
        }
        rectangleMapLevel.width = 31 * widthGame
        rectangleMapLevel.height = 31 * heightGame
        for (var i = 0; i < widthGame; i++) {
            for (var j = 0; j < heightGame; j++) {
                component = Qt.createComponent("Branch.qml");
                object = component.createObject(rectangleMapLevel);

                sideLeft = null;
                sideRight = null;
                sideTop = null;
                sideBottom = null;

               if (i == 0) sideTop = 0;
               if (j == 0) sideLeft = 0;
               if (i == heightGame - 1 ) sideBottom = 0;
               if (j == widthGame - 1 ) sideRight = 0;


               if (i-1 >= 0) {
                    if (SettingsScript.listGameBranch[i-1][j].posBottom == 1) {
                        sideTop = 1;
                    } else {
                        sideTop = 0;
                    }
               }

               if (j-1 >= 0) {
                    if (SettingsScript.listGameBranch[i][j-1].posRight == 1) {
                        sideLeft = 1;
                    } else {
                        sideLeft = 0;
                    }
               }

                var arrAvailableBranch = [];
                for(var n = 0; n < SettingsScript.listImageBranch.length; n++) {
                    if (sideLeft != null) {
                        if (SettingsScript.listImageBranch[n].left != sideLeft) continue;
                    }
                    if (sideRight != null) {
                        if (SettingsScript.listImageBranch[n].right != sideRight) continue;
                    }
                    if (sideTop != null) {
                        if (SettingsScript.listImageBranch[n].top != sideTop) continue;
                    }
                    if (sideBottom != null) {
                        if (SettingsScript.listImageBranch[n].bottom != sideBottom) continue;
                    }
                    arrAvailableBranch[arrAvailableBranch.length] = SettingsScript.listImageBranch[n]
                }
                typeBranch = gamePageItem.getRandomInt(0,arrAvailableBranch.length - 1);

                object.source = arrAvailableBranch[typeBranch].source
                object.rotation = arrAvailableBranch[typeBranch].rotation
                object.posLeft = arrAvailableBranch[typeBranch].left
                object.posRight = arrAvailableBranch[typeBranch].right
                object.posTop = arrAvailableBranch[typeBranch].top
                object.posBottom = arrAvailableBranch[typeBranch].bottom
                object.nameItem = arrAvailableBranch[typeBranch].name
                object.typeItem = 1

                object.x =+ xPos
                object.y =+ yPos
                object.posI = i;
                object.posJ = j;

                SettingsScript.listGameBranch[i][j] = object;


                if (!(arrAvailableBranch[typeBranch].right == 1 || arrAvailableBranch[typeBranch].bottom == 1)) {
                    if (!(i == widthGame - 1 && j == heightGame - 1)){
                        gamePageItem.isClosed = 1;
                        while(gamePageItem.isClosed != 0) {
                            for (var i1 = 0; i1 < widthGame; i1++) {
                                for (var j1 = 0; j1 < heightGame; j1++) {
                                    if (SettingsScript.listGameBranch[i1][j1] != null) {
                                        SettingsScript.listGameBranch[i1][j1].isChecked =0
                                    }
                                }
                            }

                            branchClosed(i,j);
                            if (gamePageItem.isClosed == 1) {
                                var newArrAvailableBranch = []
                                for(var key in arrAvailableBranch) {
                                    if (key != typeBranch) {
                                        newArrAvailableBranch[newArrAvailableBranch.length] = arrAvailableBranch[key]
                                    }
                                }
                                arrAvailableBranch = newArrAvailableBranch;
                                typeBranch = gamePageItem.getRandomInt(0,arrAvailableBranch.length - 1);

                                object.source = arrAvailableBranch[typeBranch].source
                                object.rotation = arrAvailableBranch[typeBranch].rotation
                                object.posLeft = arrAvailableBranch[typeBranch].left
                                object.posRight = arrAvailableBranch[typeBranch].right
                                object.posTop = arrAvailableBranch[typeBranch].top
                                object.posBottom = arrAvailableBranch[typeBranch].bottom
                                object.nameItem = arrAvailableBranch[typeBranch].name
                                object.typeItem = 1

                                object.x =+ xPos
                                object.y =+ yPos
                                object.posI = i;
                                object.posJ = j;

                                SettingsScript.listGameBranch[i][j] = object;
                            }
                        }

                    }
                }

                xPos += 31;

            }
            yPos += 31;
            xPos = 0;
        }
    }
    function rumbleEffectStart() {
    }

    Image {
        id:               imageBackgroundMainLevel
        source:             "qrc:/resources/images/background_main.png"
        anchors.fill: parent
        fillMode:         Image.PreserveAspectCrop

        Rectangle {
            color: "transparent"
            id: rectangleMapLevel
            anchors.centerIn : imageBackgroundMainLevel

        }
        Image {
            id:               playButton
            source:             "qrc:/resources/images/play.png"
            anchors.centerIn : rectangleMapLevel
            MouseArea {
                id:           mouseAreaPlayButton
                anchors.fill: parent
                onClicked: {
                    rumbleEffectStart();
                    funcPlayButton();
                }
            }
        }
        Image {
            id:               leftButton
            source:             "qrc:/resources/images/previous.png"
            x: 32
            anchors.verticalCenter: parent.verticalCenter
            visible: false
            MouseArea {
                id:           mouseAreaLeftButton
                anchors.fill: parent
                onClicked: {
                    rumbleEffectStart();
                    previousLevelButton();
                }
            }

        }
        Image {
            id:               rightButton
            source:            "qrc:/resources/images/next.png"
            x: imageBackgroundMainLevel.width - 100
            anchors.verticalCenter: parent.verticalCenter
            MouseArea {
                id:           mouseAreaRightButton
                anchors.fill: parent
                onClicked: {
                    rumbleEffectStart();
                    nextLevelButton();
                }
            }

        }

        Image {
            id:               backButton
            source:             "qrc:/resources/images/back.png"
            x: 0
            anchors.bottom: parent.bottom
            MouseArea {
                id:           mouseAreaBackButton
                anchors.fill: parent
                onClicked: {
                     rumbleEffectStart();
                     mainStackView.pop();
                }
            }
        }


        Text {
             anchors.bottom:  parent.bottom
             anchors.horizontalCenter:  parent.horizontalCenter
             id : textLevel
             font.pointSize: 35
             font.bold: true
             color: "#FFFF00"             
        }


        Component.onCompleted: {
        }
    }

    Component.onCompleted: {

        var component = Qt.createComponent("GamePage.qml");

        if (component.status === Component.Ready) {
            gamePageItem = component.createObject(null, {});
        } else {
            console.log(gamePageItem.errorString());
        }

       loadLevels();
    }
}
