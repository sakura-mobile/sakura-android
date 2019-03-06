import QtQuick 2.9
import "GenerationBranch.js" as GenerationBranchScript
import "Util.js" as UtilScript

Rectangle {
    id: imageBranch
    width: UtilScript.pt(30)
    height: UtilScript.pt(30)
    property int posI: 0
    property int posJ: 0
    property int posLeft: 0
    property int posRight: 0
    property int posTop: 0
    property int posBottom: 0
    property int isChecked: 0
    property int typeItem: 0
    property int timeBranch: Math.floor(Math.random() * (300 - 100 + 1)) + 100
    property int isGlare: 0
    property string nameItem: ""
    property string typeAnimation: ""
    property int glareUp: 0
    property int stopRotation: 0
    property int countRotation: 0
    property var score: 1
    property int fromRotationBranch: 0
    property int toRotationBranch: 0
    property int typeColor: 0
    signal clickedBranch(int positI, int positJ)
    signal pressedBranch(int positI, int positJ)
    signal stopRotationTime(int positI, int positJ)
    signal stopRotationTimeGame(int positI, int positJ)
    property string source: ""
    property int rotationBranch: 0
    property int rotationBranchCurrent: 0
    color: "transparent"

    Image {
        id: imageBackgroundBranch
        anchors.fill: parent
        source: "qrc:/resources/images/branch/branch_f_20.png"
        z: 1
    }

    Image {
        id: imageBranchOpacity
        anchors.fill: parent
        rotation: imageBranch.rotationBranch
        source: imageBranch.source
        z: 10

        PropertyAnimation {
            id: animationRotation
            duration: 500
            from: fromRotationBranch
            target: imageBranchOpacity
            properties: "rotation"
            easing.type: Easing.Linear
            to: toRotationBranch
            onStopped: {
                imageBranch.rotationBranch = imageBranchOpacity.rotation
                stopRotationTime(posI, posJ)
            }
        }

        PropertyAnimation {
            id: animationRotationGame
            duration: 150
            from: fromRotationBranch
            target: imageBranchOpacity
            properties: "rotation"
            easing.type: Easing.Linear
            to: toRotationBranch
            onStopped: {
                if (toRotationBranch === 360) {
                    imageBranchOpacity.rotation = 0
                    imageBranch.rotationBranch = 0
                } else {
                    imageBranch.rotationBranch = imageBranchOpacity.rotation
                }
                stopRotationTimeGame(posI, posJ)
            }
        }
    }

    Rectangle {
        id: rectFlick
        anchors.fill: parent
        color: "white"
        visible: false
        z: 15
    }

    SequentialAnimation {
        id: sequentialAnimationFlick
        alwaysRunToEnd: true
        loops: Animation.Infinite
        PropertyAnimation {
            id: animationUp
            duration: 300
            from: 0
            target: rectFlick
            properties: "opacity"
            easing.type: Easing.Linear
            to: 0.5
        }

        PropertyAnimation {
            id: animationDown
            duration: 300
            from: 0.5
            target: rectFlick
            properties: "opacity"
            easing.type: Easing.Linear
            to: 0.0
        }
    }

    SequentialAnimation {
        id: sequentialAnimationQuickTip
        alwaysRunToEnd: true
        PropertyAnimation {
            id: animationUpQuickTip
            duration: 300
            from: 0
            target: rectFlick
            properties: "opacity"
            easing.type: Easing.Linear
            to: 0.5
        }

        PropertyAnimation {
            id: animationDownQuickTip
            duration: 300
            from: 0.5
            target: rectFlick
            properties: "opacity"
            easing.type: Easing.Linear
            to: 0.0
        }
        onStopped: {
            rectFlick.visible = false
        }
    }

    Image {
        id: imageGlare
        anchors.fill: parent
        opacity: 0
        rotation: imageBranchOpacity.rotation
        z: 20
    }

    Timer {
        id: timerBlossomedBranch
        interval: timeBranch
        repeat: true
        onTriggered: imageBranch.animationBlossomedBranch()
    }

    Timer {
        id: timerGlareBranch
        interval: 200
        repeat: true
        onTriggered: imageBranch.animationGlareBranch()
    }

    Timer {
        id: timerAnimationGlareBranch
        interval: 20
        repeat: true
        onTriggered: imageBranch.animationPlayGlareBranch()
    }

    Timer {
        id: timerRotationBranchTutorial
        interval: 100
        repeat: true
        onTriggered: imageBranch.playRotationBranch()
    }

    function visibleRectangleBranch() {
        if (imageBackgroundBranch.visible === true) {
            imageBackgroundBranch.visible = false
        } else {
            imageBackgroundBranch.visible = true
        }
    }

    function startAnimationRotation() {
        animationRotation.running = true
    }

    function startAnimationRotationGame() {
        animationRotationGame.running = true
    }

    function startAnimationQuickTip() {
        rectFlick.visible = true
        sequentialAnimationQuickTip.running = true
    }

    function startAnimationFlickering() {
        rectFlick.visible = true
        sequentialAnimationFlick.running = true
    }

    function stopAnimationFlickering() {
        rectFlick.visible = false
        sequentialAnimationFlick.running = false
    }

    function startTimerBlossomedBranch() {
        timerBlossomedBranch.start()
    }

    function animationPlayGlareBranch() {
        if (glareUp) {
            if (imageGlare.opacity < 1) {
                imageGlare.opacity += 0.1
            } else {
                glareUp = 0
                imageGlare.opacity -= 0.1
            }
        } else {
            imageGlare.opacity -= 0.1
            if (imageGlare.opacity == 0) {
                timerAnimationGlareBranch.stop()
                timerGlareBranch.start()
            }
        }
    }

    function animationGlareBranch() {
        var val = Math.floor(Math.random() * 100)
        if (val <= 50) {
            glareUp = 1
            timerGlareBranch.stop()
            timerAnimationGlareBranch.start()
        }
    }

    function animationBlossomedBranch() {

        //typeColor
        var typeColorBranch = ""
        if (typeColor === 2)
            typeColorBranch = "_1"
        if (typeColor === 3)
            typeColorBranch = "_2"
        switch (typeAnimation) {
        case '1':
            typeAnimation = "2a"
            source = "qrc:/resources/images/branch/" + nameItem + "_2a.png"
            break
        case '2a':
            typeAnimation = "2b"
            source = "qrc:/resources/images/branch/" + nameItem + "_2b.png"
            break
        case '2b':
            typeAnimation = "2c"
            source = "qrc:/resources/images/branch/" + nameItem + "_2c.png"
            break
        case '2c':
            typeAnimation = "2d"
            source = "qrc:/resources/images/branch/" + nameItem + "_2d.png"
            break
        case '2d':
            typeAnimation = "2e"
            source = "qrc:/resources/images/branch/" + nameItem + "_2e.png"
            break
        case '2e':
            typeAnimation = "3a"
            source = "qrc:/resources/images/branch/" + nameItem + "_3a" + typeColorBranch + ".png"
            break
        case '3a':
            typeAnimation = "3b"
            source = "qrc:/resources/images/branch/" + nameItem + "_3b" + typeColorBranch + ".png"
            break
        case '3b':
            typeAnimation = "3c"
            source = "qrc:/resources/images/branch/" + nameItem + "_3c" + typeColorBranch + ".png"
            break
        case '3c':
            typeAnimation = "3d"
            source = "qrc:/resources/images/branch/" + nameItem + "_3d" + typeColorBranch + ".png"
            break
        case '3d':
            typeAnimation = "3e"
            source = "qrc:/resources/images/branch/" + nameItem + "_3e" + typeColorBranch + ".png"
            break
        case '3e':
            imageGlare.source = "qrc:/resources/images/branch/" + nameItem
                    + "_3g" + typeColorBranch + ".png"
            timerBlossomedBranch.stop()
            timerGlareBranch.start()
            break
        }
    }

    function glareBranchCard() {
        var typeColorBranch = ""
        if (typeColor === 2)
            typeColorBranch = "_1"
        if (typeColor === 3)
            typeColorBranch = "_2"
        imageGlare.source = "qrc:/resources/images/branch/" + nameItem + "_3g"
                + typeColorBranch + ".png"
        timerBlossomedBranch.stop()
        timerGlareBranch.start()
    }

    function stopAnimationRotationBranch() {
        if (animationRotationGame.running) animationRotationGame.complete()
    }

    function setEnabledMouseArea() {
        mouseAreaBranch.enabled = Qt.binding(function() { return !animationRotationGame.running && !animationRotation.running })
    }

    MouseArea {
        id: mouseAreaBranch
        anchors.fill: parent
        enabled: !animationRotation.running
        onClicked: {
            clickedBranch(posI, posJ)
        }
    }
}
