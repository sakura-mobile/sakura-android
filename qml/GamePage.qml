import QtQuick 2.9
import QtQuick.Window 2.3
import QtQuick.Controls 2.2

import "Settings.js" as SettingsScript

Item {
    id:           gamePage

    property bool appInForeground: Qt.application.active
    property int countAnimationTree : 0
    property int isClosed : 1
    property real paramZoom : 0.25
    property variant imagePrevious:   ""
    property variant imageNext:   ""
    property int widthGame : 11
    property int heightGame : 11
    property int iStart : 2
    property int jStart : 2
    property int glareUp : 1
    property variant objectGlare: ""    
    property int isCompleted: 0
    property int isPlayGame: 0

    function scaleObjectsGame(zoom) {
        return;
        gamePage.paramZoom = zoom
        if ((gamePage.paramZoom) < 1) gamePage.paramZoom = 1
        if ((gamePage.paramZoom) > 3) gamePage.paramZoom = 3
        imageBackground.width =  mainPage.widthDisplay * gamePage.paramZoom
        imageBackground.height =  mainPage.heightDisplay * gamePage.paramZoom

        imageBackgroundTrees_1.width =  mainPage.widthDisplay * gamePage.paramZoom
        imageBackgroundTrees_1.height =  mainPage.heightDisplay * gamePage.paramZoom

        imageBackgroundTrees_2.width =  mainPage.widthDisplay * gamePage.paramZoom
        imageBackgroundTrees_2.height =  mainPage.heightDisplay * gamePage.paramZoom

        rectangleMap.scale = gamePage.paramZoom
        var sizeNew = Math.floor(rectangleMap.width / widthGame) - 1
        var xPos = 1
        var yPos = 1
        var delY = Math.floor((sizeNew  + 1) )
        var delX = Math.floor((sizeNew  + 1))
        for (var i1 = 0; i1 < widthGame; i1++) {
            for (var j1 = 0; j1 < heightGame; j1++) {                
                SettingsScript.listGameBranch[i1][j1].width =  sizeNew
                SettingsScript.listGameBranch[i1][j1].height = sizeNew                
                SettingsScript.listGameBranch[i1][j1].x = xPos
                SettingsScript.listGameBranch[i1][j1].y = yPos
                xPos += delX
            }
            yPos += delY
            xPos = 1
        }

        if (SettingsScript.listObjectGlare.length != 0) {
            for(var i = 0; i < SettingsScript.listObjectGlare.length; i++) {
                SettingsScript.listObjectGlare[i].width = sizeNew
                SettingsScript.listObjectGlare[i].height = sizeNew
                SettingsScript.listObjectGlare[i].x = 1 + SettingsScript.listObjectGlare[i].posJ * delX
                SettingsScript.listObjectGlare[i].y = 1 + SettingsScript.listObjectGlare[i].posI * delY
            }
        }
    }

    function blossomedBranch() {
        SettingsScript.listAnimationBranch = []
        for (var i1 = 0; i1 < widthGame; i1++) {
            for (var j1 = 0; j1 < heightGame; j1++) {
                SettingsScript.listGameBranch[i1][j1].typeAnimation = "1"
                SettingsScript.listAnimationBranch[SettingsScript.listAnimationBranch.length] = SettingsScript.listGameBranch[i1][j1]
            }
        }

        animationBranch.repeat = true;
        animationBranch.start();
    }

    function funcTimerScore() {
        if (appInForeground) {
            var val = getRandomInt(75,100);
            if (val < textScore.text) {
                textScore.text -= val
            } else {
                textScore.text = 0
            }
        }
    }

    function funcAnimationGlareBranch() {
        if (SettingsScript.listObjectGlare.length != 0) {
            for(var i = 0; i < SettingsScript.listObjectGlare.length; i++) {
                   SettingsScript.listObjectGlare[i].destroy();
            }
        }
        for(var i = 0; i < 10; i++) {
            var jRand = getRandomInt(0,widthGame - 1);
            var iRand = getRandomInt(0,heightGame - 1);

            var component = Qt.createComponent("Branch.qml");

            var objectGlare = component.createObject(rectangleMap);
            objectGlare.x = SettingsScript.listGameBranch[iRand][jRand].x
            objectGlare.y = SettingsScript.listGameBranch[iRand][jRand].y
            objectGlare.posI = iRand
            objectGlare.posJ = jRand
            objectGlare.opacity = 0.1
            objectGlare.rotation = SettingsScript.listGameBranch[iRand][jRand].rotation
            objectGlare.source = "qrc:/resources/images/branch/" + SettingsScript.listGameBranch[iRand][jRand].nameItem + "_3g.png"
            glareUp = 1
            SettingsScript.listObjectGlare[i] = objectGlare            
        }
        animationGlareBranchPlay.start();

    }

    function funcAnimationGlareBranchPlay() {
        for(var i = 0; i < 10; i++) {
            if (glareUp) {
                if (SettingsScript.listObjectGlare[i].opacity < 1) {
                    SettingsScript.listObjectGlare[i].opacity += 0.1
                } else {
                    glareUp = 0
                    SettingsScript.listObjectGlare[i].opacity -= 0.1
                }
            } else {
                SettingsScript.listObjectGlare[i].opacity -= 0.1
                if (SettingsScript.listObjectGlare[i].opacity == 0) {
                    animationGlareBranchPlay.stop();
                    funcAnimationGlareBranch()
                }
            }
        }
    }

    function funcAnimationBranch() {
        if (SettingsScript.listAnimationBranch.length > 0) {
            var posBranch = getRandomInt(0,SettingsScript.listAnimationBranch.length - 1);
            switch (SettingsScript.listAnimationBranch[posBranch].typeAnimation) {
               case '1' :
                   SettingsScript.listAnimationBranch[posBranch].typeAnimation = "2a"
                   SettingsScript.listAnimationBranch[posBranch].source = "qrc:/resources/images/branch/" + SettingsScript.listAnimationBranch[posBranch].nameItem + "_2a.png"
                   break;
               case '2a' :
                   SettingsScript.listAnimationBranch[posBranch].typeAnimation = "2b"
                   SettingsScript.listAnimationBranch[posBranch].source = "qrc:/resources/images/branch/" + SettingsScript.listAnimationBranch[posBranch].nameItem + "_2b.png"
                   break;
               case '2b' :
                   SettingsScript.listAnimationBranch[posBranch].typeAnimation = "2c"
                   SettingsScript.listAnimationBranch[posBranch].source = "qrc:/resources/images/branch/" + SettingsScript.listAnimationBranch[posBranch].nameItem + "_2c.png"
                   break;
               case '2c' :
                   SettingsScript.listAnimationBranch[posBranch].typeAnimation = "2d"
                   SettingsScript.listAnimationBranch[posBranch].source = "qrc:/resources/images/branch/" + SettingsScript.listAnimationBranch[posBranch].nameItem + "_2d.png"
                   break;
               case '2d' :
                   SettingsScript.listAnimationBranch[posBranch].typeAnimation = "2e"
                   SettingsScript.listAnimationBranch[posBranch].source = "qrc:/resources/images/branch/" + SettingsScript.listAnimationBranch[posBranch].nameItem + "_2e.png"
                   break;

               case '2e' :
                   SettingsScript.listAnimationBranch[posBranch].typeAnimation = "3a"
                   SettingsScript.listAnimationBranch[posBranch].source = "qrc:/resources/images/branch/" + SettingsScript.listAnimationBranch[posBranch].nameItem + "_3a.png"
                   break;
               case '3a' :
                   SettingsScript.listAnimationBranch[posBranch].typeAnimation = "3b"
                   SettingsScript.listAnimationBranch[posBranch].source = "qrc:/resources/images/branch/" + SettingsScript.listAnimationBranch[posBranch].nameItem + "_3b.png"
                   break;
               case '3b' :
                   SettingsScript.listAnimationBranch[posBranch].typeAnimation = "3c"
                   SettingsScript.listAnimationBranch[posBranch].source = "qrc:/resources/images/branch/" + SettingsScript.listAnimationBranch[posBranch].nameItem + "_3c.png"
                   break;
               case '3c' :
                   SettingsScript.listAnimationBranch[posBranch].typeAnimation = "3d"
                   SettingsScript.listAnimationBranch[posBranch].source = "qrc:/resources/images/branch/" + SettingsScript.listAnimationBranch[posBranch].nameItem + "_3d.png"
                   break;
               case '3d' :
                   SettingsScript.listAnimationBranch[posBranch].typeAnimation = "3e"
                   SettingsScript.listAnimationBranch[posBranch].source = "qrc:/resources/images/branch/" + SettingsScript.listAnimationBranch[posBranch].nameItem + "_3e.png"
                   break;
               case '3e' :
                   var newArrAvailableBranch = []
                   for(var key in SettingsScript.listAnimationBranch) {
                       if (key != posBranch) {
                           newArrAvailableBranch[newArrAvailableBranch.length] = SettingsScript.listAnimationBranch[key]
                       }
                   }
                   SettingsScript.listAnimationBranch = newArrAvailableBranch;
                   break;
            }
        } else {
            animationBranch.stop();
            animationGlareBranch.start();
        }
    }

    function revivalBranchStart() {
        for (var i1 = 0; i1 < widthGame; i1++) {
            for (var j1 = 0; j1 < heightGame; j1++) {
                if (SettingsScript.listGameBranch[i1][j1] != null) {
                    SettingsScript.listGameBranch[i1][j1].isChecked = 0
                }
            }
        }
        revivalBranch(iStart, jStart)
        for (i1 = 0; i1 < widthGame; i1++) {
            for (j1 = 0; j1 < heightGame; j1++) {
                if (SettingsScript.listGameBranch[i1][j1].isChecked == 0 ) {
                    SettingsScript.listGameBranch[i1][j1].source = "qrc:/resources/images/branch/" + SettingsScript.listGameBranch[i1][j1].nameItem + "_00.png"
                }
            }
        }
    }

    function stopTimer() {
        gamePage.isPlayGame = 0;
        animationBranch.stop();
        animationGlareBranch.stop();
        animationGlareBranchPlay.stop();
        timerScore.stop();
    }
    function revivalBranch(ii, jj) {
        if (ii < 0 || jj < 0) return
        if (ii>=heightGame || jj>=widthGame) return
        if (SettingsScript.listGameBranch[ii][jj] == null) return;
        if (SettingsScript.listGameBranch[ii][jj].isChecked == 1) return;
        SettingsScript.listGameBranch[ii][jj].source = "qrc:/resources/images/branch/" + SettingsScript.listGameBranch[ii][jj].nameItem + "_1.png"
        SettingsScript.listGameBranch[ii][jj].isChecked = 1;
        if (SettingsScript.listGameBranch[ii][jj].posLeft == 1) {
            if (jj - 1 >= 0 && SettingsScript.listGameBranch[ii][jj -1].posRight == 1) revivalBranch(ii,jj -1);
        }
        if (SettingsScript.listGameBranch[ii][jj].posTop == 1) {
            if (ii - 1 >= 0 && SettingsScript.listGameBranch[ii - 1][jj].posBottom == 1) revivalBranch(ii - 1,jj);

        }
        if (SettingsScript.listGameBranch[ii][jj].posRight == 1) {
            if (jj + 1 < SettingsScript.listGameBranch.length && SettingsScript.listGameBranch[ii][jj + 1].posLeft == 1) revivalBranch(ii,jj + 1);
        }
        if (SettingsScript.listGameBranch[ii][jj].posBottom == 1) {
            if (ii + 1 < SettingsScript.listGameBranch.length && SettingsScript.listGameBranch[ii + 1][jj].posTop == 1) revivalBranch(ii + 1,jj);
        }
    }


    function rotationBranch(i,j) {
        var paramRotation = SettingsScript.listGameBranch[i][j].rotation
        if (paramRotation == 0) {
            paramRotation = 90
        } else if (paramRotation == 90) {
            paramRotation = 180
        } else if (paramRotation == 180) {
            paramRotation = 270
        } else if (paramRotation == 270) {
            paramRotation = 0
        }
        SettingsScript.listGameBranch[i][j].rotation = paramRotation
        for(var n = 0; n < SettingsScript.listImageBranch.length; n++) {            
            if (SettingsScript.listImageBranch[n].name == SettingsScript.listGameBranch[i][j].nameItem && SettingsScript.listImageBranch[n].rotation == SettingsScript.listGameBranch[i][j].rotation) {
                SettingsScript.listGameBranch[i][j].posLeft = SettingsScript.listImageBranch[n].left
                SettingsScript.listGameBranch[i][j].posRight = SettingsScript.listImageBranch[n].right
                SettingsScript.listGameBranch[i][j].posTop = SettingsScript.listImageBranch[n].top
                SettingsScript.listGameBranch[i][j].posBottom = SettingsScript.listImageBranch[n].bottom
            }
        }

        revivalBranchStart()

    }

    function mixMap() {
        var arrRotation = [0,90,180,270]
        for (var i = 0; i < widthGame; i++) {
            for (var j = 0; j < heightGame; j++) {
                var typeRotation = getRandomInt(0,arrRotation.length - 1);
                SettingsScript.listGameBranch[i][j].rotation = arrRotation[typeRotation];

                for(var n = 0; n < SettingsScript.listImageBranch.length; n++) {
                    if (SettingsScript.listImageBranch[n].name == SettingsScript.listGameBranch[i][j].nameItem && SettingsScript.listImageBranch[n].rotation == SettingsScript.listGameBranch[i][j].rotation) {
                        SettingsScript.listGameBranch[i][j].posLeft = SettingsScript.listImageBranch[n].left
                        SettingsScript.listGameBranch[i][j].posRight = SettingsScript.listImageBranch[n].right
                        SettingsScript.listGameBranch[i][j].posTop = SettingsScript.listImageBranch[n].top
                        SettingsScript.listGameBranch[i][j].posBottom = SettingsScript.listImageBranch[n].bottom
                    }
                }


            }
        }
        revivalBranchStart()
        timerScore.start()
    }

    function isCompletedGame() {
        if (SettingsScript.listGameBranch.length != 0) {
            for(var ii = 0; ii < SettingsScript.listGameBranch.length; ii++) {
                for(var jj = 0; jj < SettingsScript.listGameBranch.length; jj++) {
                    if (SettingsScript.listGameBranch[ii][jj].posLeft == 1) {
                        if (jj - 1 < 0) {return false;}
                        if (SettingsScript.listGameBranch[ii][jj -1].posRight != 1) {return false;}
                    }
                    if (SettingsScript.listGameBranch[ii][jj].posTop == 1) {
                        if (ii - 1 < 0) {return false;}
                        if (SettingsScript.listGameBranch[ii - 1][jj].posBottom != 1) {return false;}
                    }
                    if (SettingsScript.listGameBranch[ii][jj].posRight == 1) {
                        if (jj + 1 >= SettingsScript.listGameBranch.length) {return false;}
                        if (SettingsScript.listGameBranch[ii][jj + 1].posLeft != 1) {return false;}
                    }
                    if (SettingsScript.listGameBranch[ii][jj].posBottom == 1) {
                        if (ii + 1 >= SettingsScript.listGameBranch.length) {return false;}
                        if (SettingsScript.listGameBranch[ii + 1][jj].posTop != 1) {return false;}
                    }
                }
            }
        }
        timerScore.stop();
        return true;
    }


    function branchClosed(ii, jj) {
        if (ii < 0 || jj < 0) return
        if (ii>=heightGame || jj>=widthGame) return
        if (gamePage.isClosed == 0) return;
        if (SettingsScript.listGameBranch[ii][jj] == null) return;
        if (SettingsScript.listGameBranch[ii][jj].isChecked == 1) return;

        SettingsScript.listGameBranch[ii][jj].isChecked = 1;
        if (SettingsScript.listGameBranch[ii][jj].posLeft == 1) {
            if (SettingsScript.listGameBranch[ii][jj -1] == null) {gamePage.isClosed = 0;return;}
            branchClosed(ii,jj -1);
        }
        if (SettingsScript.listGameBranch[ii][jj].posTop == 1) {
            if (SettingsScript.listGameBranch[ii - 1][jj] == null) { gamePage.isClosed = 0; return;}
            branchClosed(ii - 1,jj);

        }
        if (SettingsScript.listGameBranch[ii][jj].posRight == 1) {
            if (SettingsScript.listGameBranch[ii][jj + 1] == null) { gamePage.isClosed = 0; return;}
            branchClosed(ii,jj + 1);
        }
        if (SettingsScript.listGameBranch[ii][jj].posBottom == 1) {
            if (SettingsScript.listGameBranch[ii + 1][jj] == null) { gamePage.isClosed = 0; return;}
            branchClosed(ii + 1,jj);
        }
    }

    function loadBranch() {        
        isCompleted = 0;
        textScore.text = SettingsScript.listGameScores[widthGame]
        animationGlareBranchPlay.stop();
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

        rectangleMap.width = (30 + 1) * widthGame
        rectangleMap.height = (30 + 1) * heightGame


        backgroundFlickable.contentWidth = rectangleMap.width;
        backgroundFlickable.contentHeight = rectangleMap.height;

        backgroundFlickable.initialContentWidth = backgroundFlickable.contentWidth;
        backgroundFlickable.initialContentHeight = backgroundFlickable.contentHeight;

        for (var i = 0; i < widthGame; i++) {
            for (var j = 0; j < heightGame; j++) {
                component = Qt.createComponent("Branch.qml");
                object = component.createObject(rectangleMap);

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
                typeBranch = getRandomInt(0,arrAvailableBranch.length - 1);

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
                        gamePage.isClosed = 1;
                        while(gamePage.isClosed != 0) {
                            for (var i1 = 0; i1 < widthGame; i1++) {
                                for (var j1 = 0; j1 < heightGame; j1++) {
                                    if (SettingsScript.listGameBranch[i1][j1] != null) {
                                        SettingsScript.listGameBranch[i1][j1].isChecked =0
                                    }
                                }
                            }

                            branchClosed(i,j);
                            if (gamePage.isClosed == 1) {
                                var newArrAvailableBranch = []
                                for(var key in arrAvailableBranch) {
                                    if (key != typeBranch) {
                                        newArrAvailableBranch[newArrAvailableBranch.length] = arrAvailableBranch[key]
                                    }
                                }
                                arrAvailableBranch = newArrAvailableBranch;
                                typeBranch = getRandomInt(0,arrAvailableBranch.length - 1);

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
        jStart = getRandomInt(0,widthGame - 1);
        iStart = getRandomInt(0,heightGame - 1);
        revivalBranchStart()
        mixMap()
    }
    function load() {
         SettingsScript.listImageTree[0] = imageBackgroundTrees_1;
         SettingsScript.listImageTree[1] = imageBackgroundTrees_2;
         timerTrees.interval = 2000 + getRandomInt(100,1000)
         var typeTree = getRandomInt(0,SettingsScript.listImageTree.length -1);
         var treeObject = SettingsScript.listImageTree[typeTree]
         gamePage.imagePrevious = treeObject;
         timerTrees.start();
         textScore.text = SettingsScript.listGameScores[widthGame]
         loadBranch();
    }
    function moveBackgroundTrees() {
        var typeTree = getRandomInt(0,SettingsScript.listImageTree.length -1);
        var treeObject = SettingsScript.listImageTree[typeTree]
        if (treeObject != gamePage.imagePrevious) {
            gamePage.imageNext = gamePage.imagePrevious
            gamePage.imagePrevious = treeObject;
            gamePage.imagePrevious.visible = true;

            gamePage.countAnimationTree = 1;
            animationTrees.start();
            animationTrees.repeat = true;
            gamePage.imagePrevious.opacity = 1
            gamePage.imageNext.opacity = 0.9
        }
    }
    function funcAnimationTrees() {        
        if (gamePage.countAnimationTree <= 10) {
            gamePage.countAnimationTree++;
            gamePage.imagePrevious.opacity += 0.1
            gamePage.imageNext.opacity -= 0.1
        } else {
            gamePage.imageNext.visible = false;
            gamePage.imagePrevious.opacity = 1
            animationTrees.stop();
        }        
    }
    function openWindowName() {
        if ((scoresPage.rowScore < 25 || scoresPage.minScore < textScore.text) && textScore.text > 0) {
            imageName.visible = true;
            textInput.focus   = true;
        }
    }
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function rumbleEffectStart() {
    }

    Image {
        x: 0
        y:0
        id:               imageBackground
        source:             "qrc:/resources/images/background_game.png"
        fillMode:         Image.PreserveAspectCrop

    }
    Image {
        id:               imageBackgroundTrees_1
        source:             "qrc:/resources/images/background_game_trees_01.png"
        visible: true
        fillMode:         Image.PreserveAspectCrop

    }
    Image {
        id:               imageBackgroundTrees_2
        source:             "qrc:/resources/images/background_game_trees_02.png"
        visible: false
        fillMode:         Image.PreserveAspectCrop

    }

    Image {
        id:               refreshButton
        source:             "qrc:/resources/images/refresh.png"
        x: 0
        y: 0
        MouseArea {
            id:           mouseAreaRefreshButton
            anchors.fill: parent
            onClicked: {
                rumbleEffectStart();
                stopTimer();
                gamePage.isPlayGame = 1
                loadBranch();
            }
        }
    }

    Image {
        id:               backButton
        source:            "qrc:/resources/images/back.png"
        x: 0
        anchors.bottom: parent.bottom
        MouseArea {
            id:           mouseAreaBackButton
            anchors.fill: parent
            onClicked: {
                rumbleEffectStart();
                stopTimer();
                mainStackView.pop();
                levelPage.loadLevels()
            }
        }
    }

    Button {
         id: btnReloadMap
         anchors.bottom: parent.bottom
         text: "R"
         visible: false
         x : 100
         onClicked: {
             loadBranch();
         }
    }
    Button {
         id: btnMixMap
         text: "M"
         y : 0
         x : 0
         visible: false
         onClicked: {
             mixMap();
         }
    }
    Image {
        id:               imageName
        anchors.centerIn: parent
        width:            sourceSize.width * 0.5
        height:           sourceSize.height * 0.8
        source:           "qrc:/resources/images/background_dialog.png"
        visible :         false

        Column {
            anchors.fill: parent

            Rectangle {
                width:  parent.width
                height: parent.height / 3
                color:  "transparent"

                Text {
                    id:               textName
                    anchors.centerIn: parent
                    text:             "NAME:"
                    font.pointSize:   20
                    font.bold:        true
                    color:            "#FFFF00"
                }
            }

            Rectangle {
                width:  parent.width
                height: parent.height / 3
                color:  "transparent"

                TextInput {
                     id:               textInput
                     anchors.centerIn: parent
                     text:             "NONAME"
                     focus:            true
                     font.pointSize:   16
                     color:            "#FFFF00"
                     maximumLength:    8
                     inputMethodHints: Qt.ImhNoPredictiveText
                }
            }

            Rectangle {
                width:  parent.width
                height: parent.height / 3
                color:  "transparent"

                Image {
                    id:               buttonOk
                    anchors.centerIn: parent
                    source:           "qrc:/resources/images/ok.png"

                    MouseArea {
                        anchors.fill: parent

                        onClicked: {
                            rumbleEffectStart();

                            if (textInput.text !== "") {
                                textInput.closeSoftwareInputPanel();
                                scoresPage.addScore(textInput.text, textScore.text, gamePage.widthGame + "x" + gamePage.heightGame);
                                scoresPage.refreshScores();
                                imageName.visible = false;
                            }
                        }
                    }
                }
            }
        }
    }

    Flickable {
        id:             backgroundFlickable
        boundsBehavior: Flickable.StopAtBounds
        anchors.centerIn: parent
        width:            Math.min(parent.width, parent.height)
        height:           Math.min(parent.width, parent.height)
        clip:             true

        property real initialContentWidth: 0.0
        property real initialContentHeight: 0.0

        PinchArea {
            id : pinchAreaZoom
            anchors.fill: parent

            Rectangle {
                id: rectangleMap
                scale: backgroundFlickable.initialContentWidth > 0.0 && backgroundFlickable.contentWidth > 0.0 ? backgroundFlickable.contentWidth / backgroundFlickable.initialContentWidth : 1.0
                color: "transparent"
                transformOrigin: Item.TopLeft
            }

            onPinchStarted: {
                backgroundFlickable.interactive = false;
            }

            onPinchUpdated: {
                backgroundFlickable.contentX += pinch.previousCenter.x - pinch.center.x;
                backgroundFlickable.contentY += pinch.previousCenter.y - pinch.center.y;

                var scale = 1.0 + pinch.scale - pinch.previousScale;

                if (backgroundFlickable.contentWidth * scale / backgroundFlickable.initialContentWidth >= 1.0 &&
                    backgroundFlickable.contentWidth * scale / backgroundFlickable.initialContentWidth <= 3.0) {
                    backgroundFlickable.resizeContent(backgroundFlickable.contentWidth * scale, backgroundFlickable.contentHeight * scale, pinch.center);
                }
            }

            onPinchFinished: {
                backgroundFlickable.interactive = true;

                backgroundFlickable.returnToBounds();
            }
        }


        Component.onCompleted: {
            contentWidth = rectangleMap.width;
            contentHeight = rectangleMap.height;

            initialContentWidth = contentWidth;
            initialContentHeight = contentHeight;
        }
    }


    Timer {
             id:           timerTrees
             interval: 1; repeat: true
             onTriggered: gamePage.moveBackgroundTrees();
    }

    Timer {
             id:           animationTrees
             interval: 25; repeat: false
             onTriggered: gamePage.funcAnimationTrees();
    }
    Timer {
             id:           animationBranch
             interval: 50; repeat: false
             onTriggered: gamePage.funcAnimationBranch();
    }
    Timer {
             id:           animationGlareBranch
             interval: 2000; repeat: false
             onTriggered: gamePage.funcAnimationGlareBranch();
    }
    Timer {
             id:           animationGlareBranchPlay
             interval: 100; repeat: true
             onTriggered: gamePage.funcAnimationGlareBranchPlay();
    }
    Timer {
             id:           timerScore
             interval: 1000; repeat: true
             onTriggered: gamePage.funcTimerScore();
    }
    Text {
         id : textScore
         text: "00000"
         font.family: "Helvetica"
         font.pointSize: 35
         font.bold: true
         color: "#FFFF00"
         y: 0
         anchors.right: parent.right
    }
}
