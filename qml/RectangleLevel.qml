import QtQuick 2.12
import "Util.js" as UtilScript

Rectangle {
    id: rectangleLevel
    property int currentLocation: 0
    property int currentCampaign: 0
    property int currentLevel: 0
    property int ratingLevel: 0
    property bool isAvailable: false
    property string sourceImgLantern: ""
    property bool isRelax: false

    function changeImgRatingLevel() {
        if (ratingLevel === 0) {
            firstStarImage.visible = false
            secondStarImage.visible = false
            thirdStarImage.visible = false
        } else if (ratingLevel === 1) {
            firstStarImage.visible = true
            secondStarImage.visible = false
            thirdStarImage.visible = false
        } else if (ratingLevel === 2) {
            firstStarImage.visible = true
            secondStarImage.visible = true
            thirdStarImage.visible = false
        } else if (ratingLevel === 3) {
            firstStarImage.visible = true
            secondStarImage.visible = true
            thirdStarImage.visible = true
        }
    }

    Row {
        id: buttonImageRow
        anchors.top: parent.top
        anchors.horizontalCenter: parent.horizontalCenter
        z: 15
        height: UtilScript.pt(10)
        spacing: UtilScript.pt(1)

        Image {
            id: firstStarImage
            width: UtilScript.pt(10)
            height: UtilScript.pt(10)
            source: "qrc:/resources/images/star.png"
        }
        Image {
            id: secondStarImage
            width: UtilScript.pt(10)
            height: UtilScript.pt(10)
            source: "qrc:/resources/images/star.png"
        }
        Image {
            id: thirdStarImage
            width: UtilScript.pt(10)
            height: UtilScript.pt(10)
            source: "qrc:/resources/images/star.png"
        }
    }
    Image {
        id: lanternImage
        width: UtilScript.pt(50)
        height: UtilScript.pt(50)
        anchors.top: buttonImageRow.bottom
        anchors.horizontalCenter: parent.horizontalCenter
        source: rectangleLevel.sourceImgLantern

        Text {
            id: textName
            anchors.horizontalCenter: parent.horizontalCenter
            anchors.bottom: parent.bottom
            anchors.bottomMargin: UtilScript.pt(5)
            text: (currentLevel + 1).toString()
            font.pointSize: 18
            font.bold: true
            color: "black"
            font.family: "Helvetica"
        }
    }
    MouseArea {
        anchors.fill: parent

        onClicked: {
            if (isAvailable) {
                var component
                if (!isRelax) {
                    var component = Qt.createComponent("CampaignPage.qml")

                    if (component.status === Component.Ready) {
                        mainStackView.push(component, {
                                               "currentLevel": currentLevel,
                                               "currentLocation": currentLocation,
                                               "currentCampaign": currentCampaign
                                           })
                    } else {
                        console.log(component.errorString())
                    }
                } else {
                    //relax page
                    console.log("relax")
                    component = Qt.createComponent("RelaxGamePage.qml")

                    if (component.status === Component.Ready) {
                        mainStackView.push(component, {
                                               "currentLevel": currentLevel,
                                               "currentLocation": currentLocation,
                                               "currentCampaign": currentCampaign
                                           })
                    } else {
                        console.log(component.errorString())
                    }
                }
            }
        }
    }
}
