var listGlobalMap = []
var listMap = []
var listColor = []
var listGameBranch = []
var listGameBranchObject = []
var listImageBranch = []
var listImageBranchCross = []
var listObjectCampaigns = []
var listObjectLocations = []
var listObjectLevels = []
var arrBranchClosed = []
var listImageBranchFull = []
var isClosedBranch
var widthGame
var heightGame
var iStart, jStart
var isPlayGame = 0
var countBranchInMap = 0
var isCompleted = 0
var isCampaign = 0
var SCORE_ROTATION_BRANCH = 100
var SCORE_TIME_BRANCH = 10
var COUNT_STEP_STOP = 10
var listObjectSingleLevels = []
var listObjectTutorialLevels = []
var listObjectRelaxLevels = []
var SERVER_KEY = ''

function initObjectTutorialLevels() {
    var objectLevel = {
        "name": '3x3'
    }
    objectLevel.map = []
    objectLevel.width = 3
    objectLevel.height = 3
    objectLevel.mapArray = []
    listObjectTutorialLevels[0] = objectLevel
}

function getObjectGift(name, place) {
    for (var i = 0; i < listObjectSingleLevels.length; i++) {
        if (listObjectSingleLevels[i].name === name) {
            switch (Number(place)) {
            case 1:
                return listObjectSingleLevels[i].place1
            case 2:
                return listObjectSingleLevels[i].place2
            case 3:
                return listObjectSingleLevels[i].place3
            default:
                return listObjectSingleLevels[i].place25
            }
        }
    }
    return false
}

function initObjectSingleLevels() {
    var objectLevel = {
        "name": '5x5'
    }
    objectLevel.map = []
    objectLevel.width = 5
    objectLevel.height = 5
    objectLevel.mapArray = []
    objectLevel.currentScore = 0
    objectLevel.currentStep = 0
    objectLevel.currentTime = 0
    objectLevel.countBlockTime = 1
    objectLevel.countBlockStep = 1
    objectLevel.countQuickTip = 5
    objectLevel.place1 = {
        "typeGift": 1,
        "countGift": 10
    }
    objectLevel.place2 = {
        "typeGift": 2,
        "countGift": 3
    }
    objectLevel.place3 = {
        "typeGift": 2,
        "countGift": 2
    }
    objectLevel.place25 = {
        "typeGift": 2,
        "countGift": 1
    }
    listObjectSingleLevels[0] = objectLevel

    objectLevel = {
        "name": '7x7'
    }
    objectLevel.map = []
    objectLevel.width = 7
    objectLevel.height = 7
    objectLevel.mapArray = []
    objectLevel.currentScore = 0
    objectLevel.currentStep = 0
    objectLevel.currentTime = 0
    objectLevel.countBlockTime = 1
    objectLevel.countBlockStep = 2
    objectLevel.countQuickTip = 10
    objectLevel.place1 = {
        "typeGift": 1,
        "countGift": 15
    }
    objectLevel.place2 = {
        "typeGift": 2,
        "countGift": 5
    }
    objectLevel.place3 = {
        "typeGift": 2,
        "countGift": 3
    }
    objectLevel.place25 = {
        "typeGift": 2,
        "countGift": 2
    }
    listObjectSingleLevels[1] = objectLevel

    objectLevel = {
        "name": '9x9'
    }
    objectLevel.map = []
    objectLevel.width = 9
    objectLevel.height = 9
    objectLevel.mapArray = []
    objectLevel.currentScore = 0
    objectLevel.currentStep = 0
    objectLevel.currentTime = 0
    objectLevel.countBlockTime = 2
    objectLevel.countBlockStep = 3
    objectLevel.countQuickTip = 10
    objectLevel.place1 = {
        "typeGift": 1,
        "countGift": 20
    }
    objectLevel.place2 = {
        "typeGift": 2,
        "countGift": 8
    }
    objectLevel.place3 = {
        "typeGift": 2,
        "countGift": 6
    }
    objectLevel.place25 = {
        "typeGift": 2,
        "countGift": 3
    }
    listObjectSingleLevels[2] = objectLevel

    objectLevel = {
        "name": '11x11'
    }
    objectLevel.map = []
    objectLevel.width = 11
    objectLevel.height = 11
    objectLevel.mapArray = []
    objectLevel.currentScore = 0
    objectLevel.currentStep = 0
    objectLevel.currentTime = 0
    objectLevel.countBlockTime = 3
    objectLevel.countBlockStep = 3
    objectLevel.countQuickTip = 10
    objectLevel.place1 = {
        "typeGift": 1,
        "countGift": 25
    }
    objectLevel.place2 = {
        "typeGift": 2,
        "countGift": 10
    }
    objectLevel.place3 = {
        "typeGift": 2,
        "countGift": 8
    }
    objectLevel.place25 = {
        "typeGift": 2,
        "countGift": 5
    }
    listObjectSingleLevels[3] = objectLevel

    objectLevel = {
        "name": '13x13'
    }
    objectLevel.map = []
    objectLevel.width = 13
    objectLevel.height = 13
    objectLevel.mapArray = []
    objectLevel.currentScore = 0
    objectLevel.currentStep = 0
    objectLevel.currentTime = 0
    objectLevel.countBlockTime = 5
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 15
    objectLevel.place1 = {
        "typeGift": 1,
        "countGift": 30
    }
    objectLevel.place2 = {
        "typeGift": 2,
        "countGift": 12
    }
    objectLevel.place3 = {
        "typeGift": 2,
        "countGift": 10
    }
    objectLevel.place25 = {
        "typeGift": 2,
        "countGift": 6
    }
    listObjectSingleLevels[4] = objectLevel
}

function initObjectRelaxLevels() {
    var objectLevel = {
        "name": 'level_1'
    }
    objectLevel.map = [0, 2, 0, 2, 3, 2, 0, 2, 0]
    objectLevel.width = 3
    objectLevel.height = 3
    objectLevel.mapArray = []
    objectLevel.step = 5
    objectLevel.stepCurrent = 0
    objectLevel.countQuickTip = 5
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5
    listObjectRelaxLevels[0] = objectLevel

    objectLevel = {
        "name": 'level_2'
    }
    objectLevel.map = [0, 3, 3, 0, 3, 2, 1, 3, 3, 1, 2, 3, 0, 3, 3, 0]
    objectLevel.width = 4
    objectLevel.height = 4
    objectLevel.mapArray = []
    objectLevel.countQuickTip = 5
    objectLevel.step = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[1] = objectLevel

    objectLevel = {
        "name": 'level_3'
    }
    objectLevel.map = [2, 0, 0, 3, 2, 2, 3, 3, 2, 3, 2, 3, 2, 0, 0, 3]
    objectLevel.width = 4
    objectLevel.height = 4
    objectLevel.mapArray = []
    objectLevel.step = 10
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[2] = objectLevel

    objectLevel = {
        "name": 'level_4'
    }
    objectLevel.map = [0, 3, 2, 3, 0, 2, 3, 2, 2, 3, 2, 0, 3, 2, 3, 0]
    objectLevel.width = 4
    objectLevel.height = 4
    objectLevel.mapArray = []
    objectLevel.step = 10
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[3] = objectLevel

    objectLevel = {
        "name": 'level_5'
    }
    objectLevel.map = [3, 1, 1, 3, 2, 1, 3, 3, 3]
    objectLevel.width = 3
    objectLevel.height = 3
    objectLevel.mapArray = []
    objectLevel.step = 9
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[4] = objectLevel

    objectLevel = {
        "name": 'level_6'
    }
    objectLevel.map = [3, 3, 3, 3, 1, 0, 1, 0, 3, 3, 3, 3, 1, 0, 1, 0]
    objectLevel.width = 4
    objectLevel.height = 4
    objectLevel.mapArray = []
    objectLevel.step = 12
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[5] = objectLevel

    objectLevel = {
        "name": 'level_7'
    }
    objectLevel.map = [3, 2, 2, 0, 2, 3, 1, 2, 2, 1, 3, 2, 0, 2, 2, 3]
    objectLevel.width = 4
    objectLevel.height = 4
    objectLevel.mapArray = []
    objectLevel.step = 14
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[6] = objectLevel

    objectLevel = {
        "name": 'level_8'
    }
    objectLevel.map = [2, 2, 0, 0, 2, 2, 3, 0, 0, 3, 3, 1, 0, 0, 1, 1]
    objectLevel.width = 4
    objectLevel.height = 4
    objectLevel.mapArray = []
    objectLevel.step = 10
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[7] = objectLevel

    objectLevel = {
        "name": 'level_9'
    }
    objectLevel.map = [3, 3, 3, 3, 3, 1, 1, 3, 3, 1, 1, 3, 3, 3, 3, 3]
    objectLevel.width = 4
    objectLevel.height = 4
    objectLevel.mapArray = []
    objectLevel.step = 16
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[8] = objectLevel

    objectLevel = {
        "name": 'level_10'
    }
    objectLevel.map = [1, 0, 2, 2, 1, 3, 3, 3, 3, 3, 3, 1, 2, 2, 0, 1]
    objectLevel.width = 4
    objectLevel.height = 4
    objectLevel.mapArray = []
    objectLevel.step = 14
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[9] = objectLevel

    objectLevel = {
        "name": 'level_11'
    }
    objectLevel.map = [0, 3, 3, 3, 0, 3, 1, 0, 1, 3, 3, 0, 0, 0, 3, 3, 1, 0, 1, 3, 0, 3, 3, 3, 0]
    objectLevel.width = 5
    objectLevel.height = 5
    objectLevel.mapArray = []
    objectLevel.step = 16
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[10] = objectLevel

    objectLevel = {
        "name": 'level_12'
    }
    objectLevel.map = [2, 2, 0, 1, 1, 2, 2, 2, 1, 1, 0, 2, 0, 2, 0, 1, 1, 2, 2, 2, 1, 1, 0, 2, 2]
    objectLevel.width = 5
    objectLevel.height = 5
    objectLevel.mapArray = []
    objectLevel.step = 20
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[11] = objectLevel

    objectLevel = {
        "name": 'level_13'
    }
    objectLevel.map = [3, 2, 3, 2, 3, 2, 0, 2, 0, 2, 3, 2, 3, 2, 3, 2, 0, 2, 0, 2, 3, 2, 3, 2, 3]
    objectLevel.width = 5
    objectLevel.height = 5
    objectLevel.mapArray = []
    objectLevel.step = 20
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[12] = objectLevel

    objectLevel = {
        "name": 'level_14'
    }
    objectLevel.map = [3, 2, 0, 0, 0, 3, 3, 2, 0, 0, 0, 3, 3, 2, 0, 0, 0, 3, 3, 2, 0, 0, 0, 3, 2]
    objectLevel.width = 5
    objectLevel.height = 5
    objectLevel.mapArray = []
    objectLevel.step = 13
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[13] = objectLevel

    objectLevel = {
        "name": 'level_15'
    }
    objectLevel.map = [0, 2, 2, 2, 0, 2, 2, 2, 0, 3, 2, 2, 3, 3, 3, 2, 0, 3, 3, 3, 0, 3, 3, 3, 0]
    objectLevel.width = 5
    objectLevel.height = 5
    objectLevel.mapArray = []
    objectLevel.step = 19
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[14] = objectLevel

    objectLevel = {
        "name": 'level_16'
    }
    objectLevel.map = [0, 3, 3, 3, 0, 3, 1, 3, 1, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 3, 0, 3, 3, 3, 0]
    objectLevel.width = 5
    objectLevel.height = 5
    objectLevel.mapArray = []
    objectLevel.step = 20
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[15] = objectLevel

    objectLevel = {
        "name": 'level_17'
    }
    objectLevel.map = [2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2]
    objectLevel.width = 5
    objectLevel.height = 5
    objectLevel.mapArray = []
    objectLevel.step = 15
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[16] = objectLevel

    objectLevel = {
        "name": 'level_18'
    }
    objectLevel.map = [0, 3, 0, 3, 0, 1, 2, 1, 2, 1, 0, 3, 0, 3, 0, 1, 2, 1, 2, 1, 0, 3, 0, 3, 0]
    objectLevel.width = 5
    objectLevel.height = 5
    objectLevel.mapArray = []
    objectLevel.step = 15
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[17] = objectLevel

    objectLevel = {
        "name": 'level_19'
    }
    objectLevel.map = [0, 0, 3, 0, 0, 0, 3, 3, 3, 0, 0, 3, 3, 3, 0, 3, 3, 0, 3, 3, 3, 0, 0, 0, 3]
    objectLevel.width = 5
    objectLevel.height = 5
    objectLevel.mapArray = []
    objectLevel.step = 13
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[18] = objectLevel

    objectLevel = {
        "name": 'level_20'
    }
    objectLevel.map = [2, 2, 0, 2, 2, 2, 2, 0, 2, 2, 0, 1, 3, 1, 0, 2, 2, 0, 2, 2, 2, 2, 0, 2, 2]
    objectLevel.width = 5
    objectLevel.height = 5
    objectLevel.mapArray = []
    objectLevel.step = 19
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[19] = objectLevel

    objectLevel = {
        "name": 'level_21'
    }
    objectLevel.map = [0, 3, 3, 0, 0, 0, 3, 3, 0, 0, 0, 0, 3, 0, 0, 2, 2, 2, 2, 2, 0, 2, 2, 2, 0]
    objectLevel.width = 5
    objectLevel.height = 5
    objectLevel.mapArray = []
    objectLevel.step = 13
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[20] = objectLevel

    objectLevel = {
        "name": 'level_22'
    }
    objectLevel.map = [0, 3, 0, 3, 0, 2, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 0, 1, 0, 1, 0]
    objectLevel.width = 5
    objectLevel.height = 5
    objectLevel.mapArray = []
    objectLevel.step = 19
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[21] = objectLevel

    objectLevel = {
        "name": 'level_23'
    }
    objectLevel.map = [3, 0, 1, 0, 3, 3, 1, 1, 1, 3, 3, 1, 0, 1, 3, 3, 1, 1, 1, 3, 3, 0, 1, 0, 3]
    objectLevel.width = 5
    objectLevel.height = 5
    objectLevel.mapArray = []
    objectLevel.step = 20
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[22] = objectLevel

    objectLevel = {
        "name": 'level_24'
    }
    objectLevel.map = [2, 2, 0, 2, 2, 2, 1, 1, 1, 2, 0, 1, 2, 1, 0, 2, 1, 1, 1, 2, 2, 2, 0, 2, 2]
    objectLevel.width = 5
    objectLevel.height = 5
    objectLevel.mapArray = []
    objectLevel.step = 20
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[23] = objectLevel

    objectLevel = {
        "name": 'level_25'
    }
    objectLevel.map = [3, 3, 0, 1, 1, 3, 3, 3, 1, 1, 0, 3, 3, 3, 0, 1, 1, 3, 3, 3, 1, 1, 0, 3, 3]
    objectLevel.width = 5
    objectLevel.height = 5
    objectLevel.mapArray = []
    objectLevel.step = 20
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[24] = objectLevel

    objectLevel = {
        "name": 'level_26'
    }
    objectLevel.map = [3, 3, 3, 3, 3, 3, 1, 1, 1, 3, 3, 1, 2, 1, 3, 3, 1, 1, 1, 3, 3, 3, 3, 3, 3]
    objectLevel.width = 5
    objectLevel.height = 5
    objectLevel.mapArray = []
    objectLevel.step = 25
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[25] = objectLevel

    objectLevel = {
        "name": 'level_27'
    }
    objectLevel.map = [3, 3, 0, 3, 3, 3, 3, 3, 3, 3, 0, 3, 3, 3, 0, 0, 0, 3, 0, 0]
    objectLevel.width = 5
    objectLevel.height = 4
    objectLevel.mapArray = []
    objectLevel.step = 13
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[26] = objectLevel

    objectLevel = {
        "name": 'level_28'
    }
    objectLevel.map = [0, 0, 2, 0, 0, 2, 2, 2, 2, 2, 0, 2, 2, 2, 0, 0, 2, 0, 2, 0]
    objectLevel.width = 5
    objectLevel.height = 4
    objectLevel.mapArray = []
    objectLevel.step = 11
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[27] = objectLevel

    objectLevel = {
        "name": 'level_29'
    }
    objectLevel.map
            = [0, 0, 3, 3, 3, 0, 0, 0, 3, 2, 2, 2, 3, 0, 3, 2, 1, 1, 1, 2, 3, 3, 2, 1, 0, 1, 2, 3]
    objectLevel.width = 7
    objectLevel.height = 4
    objectLevel.mapArray = []
    objectLevel.step = 20
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[28] = objectLevel

    objectLevel = {
        "name": 'level_30'
    }
    objectLevel.map = [0, 2, 2, 2, 0, 2, 3, 2, 3, 2, 2, 2, 2, 2, 2, 2, 3, 2, 3, 2, 0, 2, 3, 2, 0]
    objectLevel.width = 5
    objectLevel.height = 5
    objectLevel.mapArray = []
    objectLevel.step = 20
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[29] = objectLevel

    objectLevel = {
        "name": 'level_31'
    }
    objectLevel.map = [3, 3, 3, 1, 1, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 1, 1, 3, 3, 3]
    objectLevel.width = 5
    objectLevel.height = 5
    objectLevel.mapArray = []
    objectLevel.step = 25
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[30] = objectLevel

    objectLevel = {
        "name": 'level_32'
    }
    objectLevel.map = [2, 2, 0, 0, 1, 1, 2, 2, 2, 2, 1, 0, 0, 1, 2, 2, 2, 2, 1, 1, 0, 0, 2, 2]
    objectLevel.width = 6
    objectLevel.height = 4
    objectLevel.mapArray = []
    objectLevel.step = 18
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[31] = objectLevel

    objectLevel = {
        "name": 'level_33'
    }
    objectLevel.map = [2, 0, 0, 0, 0, 2, 2, 3, 3, 0, 3, 2, 0, 0, 3, 3, 3, 0, 0, 3, 3, 3, 0, 0, 2, 3, 0, 3, 3, 2, 2, 0, 0, 0, 0, 2]
    objectLevel.width = 6
    objectLevel.height = 6
    objectLevel.mapArray = []
    objectLevel.step = 20
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[32] = objectLevel

    objectLevel = {
        "name": 'level_34'
    }
    objectLevel.map = [3, 3, 0, 0, 1, 1, 3, 3, 2, 2, 1, 1, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 1, 1, 2, 2, 3, 3, 1, 1, 0, 0, 3, 3]
    objectLevel.width = 6
    objectLevel.height = 6
    objectLevel.mapArray = []
    objectLevel.step = 24
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[33] = objectLevel

    objectLevel = {
        "name": 'level_35'
    }
    objectLevel.map = [2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 3, 3, 2, 0, 0, 2, 3, 3, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2]
    objectLevel.width = 6
    objectLevel.height = 6
    objectLevel.mapArray = []
    objectLevel.step = 25
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[34] = objectLevel

    objectLevel = {
        "name": 'level_36'
    }
    objectLevel.map = [0, 1, 0, 0, 1, 0, 1, 2, 2, 2, 2, 1, 0, 2, 3, 3, 2, 0, 0, 2, 3, 3, 2, 0, 1, 2, 2, 2, 2, 1, 0, 1, 0, 0, 1, 0]
    objectLevel.width = 6
    objectLevel.height = 6
    objectLevel.mapArray = []
    objectLevel.step = 20
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[35] = objectLevel

    objectLevel = {
        "name": 'level_37'
    }
    objectLevel.map = [3, 3, 0, 0, 3, 3, 3, 3, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 3, 3, 3, 3, 0, 0, 3, 3]
    objectLevel.width = 6
    objectLevel.height = 6
    objectLevel.mapArray = []
    objectLevel.step = 25
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[36] = objectLevel

    objectLevel = {
        "name": 'level_38'
    }
    objectLevel.map = [0, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0]
    objectLevel.width = 6
    objectLevel.height = 6
    objectLevel.mapArray = []
    objectLevel.step = 20
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[37] = objectLevel

    objectLevel = {
        "name": 'level_39'
    }
    objectLevel.map = [3, 1, 3, 1, 3, 1, 1, 3, 0, 0, 3, 3, 3, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 3, 3, 3, 0, 0, 3, 1, 1, 3, 1, 3, 1, 3]
    objectLevel.width = 6
    objectLevel.height = 6
    objectLevel.mapArray = []
    objectLevel.step = 20
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[38] = objectLevel

    objectLevel = {
        "name": 'level_40'
    }
    objectLevel.map = [2, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3, 2, 2, 3, 0, 0, 2, 3, 3, 2, 0, 0, 3, 2, 2, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3, 2]
    objectLevel.width = 6
    objectLevel.height = 6
    objectLevel.mapArray = []
    objectLevel.step = 20
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[39] = objectLevel

    objectLevel = {
        "name": 'level_41'
    }
    objectLevel.map = [2, 3, 0, 3, 3, 2, 3, 2, 1, 1, 2, 3, 3, 0, 2, 2, 0, 3, 0, 0, 2, 2, 0, 0, 3, 2, 1, 1, 2, 3, 2, 3, 3, 0, 3, 2]
    objectLevel.width = 6
    objectLevel.height = 6
    objectLevel.mapArray = []
    objectLevel.step = 25
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[40] = objectLevel

    objectLevel = {
        "name": 'level_42'
    }
    objectLevel.map = [3, 0, 0, 0, 3, 1, 2, 0, 2, 1, 3, 3, 2, 3, 3, 0, 1, 2, 1, 0, 3, 3, 2, 3, 3, 1, 3, 0, 3, 1]
    objectLevel.width = 5
    objectLevel.height = 6
    objectLevel.mapArray = []
    objectLevel.step = 20
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[41] = objectLevel

    objectLevel = {
        "name": 'level_43'
    }
    objectLevel.map = [0, 0, 2, 2, 2, 0, 0, 0, 3, 2, 2, 2, 3, 0, 3, 2, 3, 3, 3, 2, 3, 3, 3, 3, 2, 3, 3, 3, 3, 2, 3, 3, 3, 2, 3, 0, 3, 3, 2, 3, 3, 0]
    objectLevel.width = 7
    objectLevel.height = 6
    objectLevel.mapArray = []
    objectLevel.step = 30
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[42] = objectLevel

    objectLevel = {
        "name": 'level_44'
    }
    objectLevel.map = [3, 3, 0, 0, 3, 3, 0, 3, 3, 3, 3, 0, 0, 3, 1, 1, 3, 0, 0, 3, 1, 1, 3, 0, 0, 3, 3, 3, 3, 0, 3, 3, 0, 0, 3, 3]
    objectLevel.width = 6
    objectLevel.height = 6
    objectLevel.mapArray = []
    objectLevel.step = 20
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[43] = objectLevel

    objectLevel = {
        "name": 'level_45'
    }
    objectLevel.map = [2, 2, 2, 2, 2, 2, 0, 3, 3, 3, 3, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 3, 3, 3, 3, 0, 2, 2, 2, 2, 2, 2]
    objectLevel.width = 6
    objectLevel.height = 6
    objectLevel.mapArray = []
    objectLevel.step = 20
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[44] = objectLevel

    objectLevel = {
        "name": 'level_46'
    }
    objectLevel.map = [3, 3, 0, 0, 0, 0, 3, 1, 1, 0, 0, 0, 0, 1, 2, 2, 0, 0, 0, 0, 2, 3, 3, 0, 0, 0, 0, 3, 1, 1, 0, 0, 0, 0, 1, 2]
    objectLevel.width = 6
    objectLevel.height = 6
    objectLevel.mapArray = []
    objectLevel.step = 15
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[45] = objectLevel

    objectLevel = {
        "name": 'level_47'
    }
    objectLevel.map = [3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 3, 3, 1, 0, 0, 1, 3, 3, 1, 0, 0, 1, 3, 3, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3]
    objectLevel.width = 6
    objectLevel.height = 6
    objectLevel.mapArray = []
    objectLevel.step = 30
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[46] = objectLevel

    objectLevel = {
        "name": 'level_48'
    }
    objectLevel.map = [0, 3, 1, 1, 3, 0, 3, 3, 2, 2, 3, 3, 1, 2, 3, 3, 2, 1, 1, 2, 3, 3, 2, 1, 3, 3, 2, 2, 3, 3, 0, 3, 1, 1, 3, 0]
    objectLevel.width = 6
    objectLevel.height = 6
    objectLevel.mapArray = []
    objectLevel.step = 30
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[47] = objectLevel

    objectLevel = {
        "name": 'level_49'
    }
    objectLevel.map = [3, 0, 0, 0, 3, 3, 3, 3, 1, 1, 3, 0, 0, 1, 3, 3, 1, 0, 0, 1, 3, 3, 1, 0, 3, 3, 1, 1, 3, 3, 3, 0, 0, 0, 0, 3]
    objectLevel.width = 6
    objectLevel.height = 6
    objectLevel.mapArray = []
    objectLevel.step = 20
    objectLevel.countQuickTip = 5
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[48] = objectLevel

    objectLevel = {
        "name": 'level_50'
    }
    objectLevel.map = [3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 3, 3, 1, 2, 2, 1, 3, 3, 1, 2, 2, 1, 3, 3, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3]
    objectLevel.width = 6
    objectLevel.height = 6
    objectLevel.mapArray = []
    objectLevel.step = 35
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[49] = objectLevel

    objectLevel = {
        "name": 'level_51'
    }
    objectLevel.map = [3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 2, 3, 2, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 0]
    objectLevel.width = 6
    objectLevel.height = 6
    objectLevel.mapArray = []
    objectLevel.step = 30
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[50] = objectLevel

    objectLevel = {
        "name": 'level_52'
    }
    objectLevel.map = [0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 3, 2, 1, 2, 2, 2, 3, 3, 3, 2, 2, 0, 2, 2, 2, 2, 2, 0]
    objectLevel.width = 7
    objectLevel.height = 7
    objectLevel.mapArray = []
    objectLevel.step = 30
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[51] = objectLevel

    objectLevel = {
        "name": 'level_53'
    }
    objectLevel.map = [2, 2, 0, 0, 0, 1, 1, 2, 2, 2, 0, 1, 1, 1, 0, 2, 2, 2, 1, 1, 0, 0, 0, 2, 2, 2, 0, 0, 0, 1, 1, 2, 2, 2, 0, 1, 1, 1, 0, 2, 2, 2, 1, 1, 0, 0, 0, 2, 2]
    objectLevel.width = 7
    objectLevel.height = 7
    objectLevel.mapArray = []
    objectLevel.step = 30
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[52] = objectLevel

    objectLevel = {
        "name": 'level_54'
    }
    objectLevel.map = [2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 0, 1, 1, 0, 1, 1, 0, 0, 0, 3, 3, 3, 0, 0, 0, 1, 1, 0, 1, 1, 0, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    objectLevel.width = 7
    objectLevel.height = 7
    objectLevel.mapArray = []
    objectLevel.step = 30
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[53] = objectLevel

    objectLevel = {
        "name": 'level_55'
    }
    objectLevel.map = [3, 3, 0, 0, 0, 3, 3, 3, 3, 1, 0, 1, 3, 3, 0, 1, 1, 2, 1, 1, 0, 0, 0, 2, 2, 2, 0, 0, 0, 1, 1, 2, 1, 1, 0, 3, 3, 1, 0, 1, 3, 3, 3, 3, 0, 0, 0, 3, 3]
    objectLevel.width = 7
    objectLevel.height = 7
    objectLevel.mapArray = []
    objectLevel.step = 30
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[54] = objectLevel

    objectLevel = {
        "name": 'level_56'
    }
    objectLevel.map = [2, 1, 3, 2, 1, 3, 2, 0, 2, 1, 3, 2, 1, 0, 0, 0, 2, 1, 3, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 3, 2, 0, 0, 0, 1, 3, 2, 1, 3, 0, 1, 3, 2, 1, 3, 2, 1]
    objectLevel.width = 7
    objectLevel.height = 7
    objectLevel.mapArray = []
    objectLevel.step = 30
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[55] = objectLevel

    objectLevel = {
        "name": 'level_57'
    }
    objectLevel.map = [3, 3, 0, 0, 0, 3, 3, 3, 3, 1, 1, 1, 3, 3, 0, 1, 2, 2, 2, 1, 0, 0, 1, 2, 3, 2, 1, 0, 0, 1, 2, 2, 2, 1, 0, 3, 3, 1, 1, 1, 3, 3, 3, 3, 0, 0, 0, 3, 3]
    objectLevel.width = 7
    objectLevel.height = 7
    objectLevel.mapArray = []
    objectLevel.step = 35
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[56] = objectLevel

    objectLevel = {
        "name": 'level_58'
    }
    objectLevel.map = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 1, 1, 0, 0, 0, 1, 1, 3, 3, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
    objectLevel.width = 7
    objectLevel.height = 7
    objectLevel.mapArray = []
    objectLevel.step = 40
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 3
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10

    listObjectRelaxLevels[57] = objectLevel

    objectLevel = {
        "name": 'level_59'
    }
    objectLevel.map = [0, 0, 1, 1, 1, 0, 0, 3, 3, 1, 1, 1, 3, 3, 0, 3, 1, 1, 1, 3, 0, 0, 0, 1, 1, 1, 0, 0, 3, 3, 1, 1, 1, 3, 3, 3, 0, 1, 1, 1, 0, 3, 0, 0, 1, 1, 1, 0, 0]
    objectLevel.width = 7
    objectLevel.height = 7
    objectLevel.mapArray = []
    objectLevel.step = 40
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 3
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10

    listObjectRelaxLevels[58] = objectLevel

    objectLevel = {
        "name": 'level_60'
    }
    objectLevel.map = [2, 3, 0, 0, 0, 3, 2, 3, 2, 3, 0, 3, 2, 3, 0, 3, 2, 3, 2, 3, 0, 0, 0, 3, 2, 3, 0, 0, 0, 3, 2, 3, 2, 3, 0, 3, 2, 3, 0, 3, 2, 3, 2, 3, 0, 0, 0, 3, 2]
    objectLevel.width = 7
    objectLevel.height = 7
    objectLevel.mapArray = []
    objectLevel.step = 40
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[59] = objectLevel

    objectLevel = {
        "name": 'level_61'
    }
    objectLevel.map = [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 2, 1, 2, 1, 0, 1, 2, 2, 1, 2, 2, 1, 0, 1, 2, 1, 2, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0]
    objectLevel.width = 7
    objectLevel.height = 7
    objectLevel.mapArray = []
    objectLevel.step = 25
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[60] = objectLevel

    objectLevel = {
        "name": 'level_62'
    }
    objectLevel.map = [0, 0, 3, 3, 3, 0, 0, 0, 0, 1, 1, 1, 0, 0, 3, 3, 3, 0, 3, 3, 3, 0, 0, 1, 1, 1, 0, 0, 3, 3, 3, 0, 3, 3, 3, 0, 0, 1, 1, 1, 0, 0, 0, 0, 3, 3, 3, 0, 0]
    objectLevel.width = 7
    objectLevel.height = 7
    objectLevel.mapArray = []
    objectLevel.step = 25
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[61] = objectLevel

    objectLevel = {
        "name": 'level_63'
    }
    objectLevel.map = [0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 2, 3, 0, 0, 0, 3, 3, 3, 3, 3, 0, 3, 2, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
    objectLevel.width = 7
    objectLevel.height = 7
    objectLevel.mapArray = []
    objectLevel.step = 25
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[62] = objectLevel

    objectLevel = {
        "name": 'level_64'
    }
    objectLevel.map = [0, 0, 2, 1, 2, 0, 0, 0, 0, 3, 3, 1, 0, 0, 2, 3, 3, 0, 2, 1, 2, 1, 3, 2, 0, 2, 3, 1, 2, 1, 2, 0, 3, 3, 2, 0, 0, 1, 3, 3, 0, 0, 0, 0, 2, 1, 2, 0, 0]
    objectLevel.width = 7
    objectLevel.height = 7
    objectLevel.mapArray = []
    objectLevel.step = 30
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[63] = objectLevel

    objectLevel = {
        "name": 'level_65'
    }
    objectLevel.map = [1, 1, 0, 0, 0, 1, 1, 1, 1, 3, 3, 3, 1, 1, 0, 0, 3, 3, 3, 0, 0, 1, 1, 3, 3, 3, 1, 1, 1, 1, 3, 3, 3, 1, 1, 0, 3, 3, 0, 3, 3, 0, 0, 3, 3, 0, 3, 3, 0]
    objectLevel.width = 7
    objectLevel.height = 7
    objectLevel.mapArray = []
    objectLevel.step = 35
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[64] = objectLevel

    objectLevel = {
        "name": 'level_66'
    }
    objectLevel.map = [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 1, 2, 2, 2, 1, 0, 1, 2, 3, 2, 3, 2, 1, 0, 1, 2, 2, 2, 1, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0]
    objectLevel.width = 7
    objectLevel.height = 7
    objectLevel.mapArray = []
    objectLevel.step = 25
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[65] = objectLevel

    objectLevel = {
        "name": 'level_67'
    }
    objectLevel.map = [2, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 2, 2, 1, 1, 2, 1, 1, 2, 2, 2, 2, 3, 2, 2, 2, 0, 2, 2, 2, 2, 2, 0]
    objectLevel.width = 7
    objectLevel.height = 7
    objectLevel.mapArray = []
    objectLevel.step = 35
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[66] = objectLevel

    objectLevel = {
        "name": 'level_68'
    }
    objectLevel.map = [2, 2, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 1, 1, 1, 2, 2, 0, 1, 1, 1, 1, 1, 0, 0, 3, 3, 1, 3, 3, 0, 0, 3, 3, 1, 3, 3, 0, 0, 0, 1, 1, 1, 0, 0]
    objectLevel.width = 7
    objectLevel.height = 7
    objectLevel.mapArray = []
    objectLevel.step = 30
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[67] = objectLevel

    objectLevel = {
        "name": 'level_69'
    }
    objectLevel.map = [2, 2, 2, 2, 2, 2, 2, 2, 3, 1, 3, 1, 3, 2, 2, 1, 3, 1, 3, 1, 2, 2, 3, 1, 3, 1, 3, 2, 2, 1, 3, 1, 3, 1, 2, 2, 3, 1, 3, 1, 3, 2, 2, 2, 2, 2, 2, 2, 2]
    objectLevel.width = 7
    objectLevel.height = 7
    objectLevel.mapArray = []
    objectLevel.step = 45
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[68] = objectLevel

    objectLevel = {
        "name": 'level_70'
    }
    objectLevel.map = [2, 2, 2, 0, 2, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0]
    objectLevel.width = 7
    objectLevel.height = 6
    objectLevel.mapArray = []
    objectLevel.step = 35
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[69] = objectLevel

    objectLevel = {
        "name": 'level_71'
    }
    objectLevel.map = [3, 3, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 2, 3, 3, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2, 2, 3, 2, 2, 2]
    objectLevel.width = 7
    objectLevel.height = 6
    objectLevel.mapArray = []
    objectLevel.step = 35
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[70] = objectLevel

    objectLevel = {
        "name": 'level_72'
    }
    objectLevel.map = [0, 0, 2, 2, 2, 0, 0, 0, 2, 3, 3, 3, 2, 0, 2, 3, 2, 2, 2, 3, 2, 2, 3, 2, 3, 2, 3, 2, 2, 3, 2, 2, 2, 3, 2, 0, 2, 3, 3, 3, 2, 0, 0, 0, 2, 2, 2, 0, 0]
    objectLevel.width = 7
    objectLevel.height = 7
    objectLevel.mapArray = []
    objectLevel.step = 35
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[71] = objectLevel

    objectLevel = {
        "name": 'level_73'
    }
    objectLevel.map = [0, 3, 3, 3, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 2, 1, 2, 0, 2, 1, 2, 0, 0, 1, 2, 1, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0]
    objectLevel.width = 5
    objectLevel.height = 8
    objectLevel.mapArray = []
    objectLevel.step = 25
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[72] = objectLevel

    objectLevel = {
        "name": 'level_74'
    }
    objectLevel.map = [3, 3, 3, 3, 3, 0, 1, 1, 1, 0, 3, 3, 3, 3, 3, 0, 1, 1, 1, 0, 3, 3, 3, 3, 3, 0, 1, 1, 1, 0, 3, 3, 3, 3, 3, 0, 1, 1, 1, 0]
    objectLevel.width = 5
    objectLevel.height = 8
    objectLevel.mapArray = []
    objectLevel.step = 30
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[73] = objectLevel

    objectLevel = {
        "name": 'level_75'
    }
    objectLevel.map = [0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 3, 1, 1, 3, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 3, 2, 2, 3, 3, 0, 2, 2, 0, 2, 2, 0, 0]
    objectLevel.width = 8
    objectLevel.height = 5
    objectLevel.mapArray = []
    objectLevel.step = 25
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[74] = objectLevel

    objectLevel = {
        "name": 'level_76'
    }
    objectLevel.map = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 0, 0]
    objectLevel.width = 8
    objectLevel.height = 6
    objectLevel.mapArray = []
    objectLevel.step = 20
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[75] = objectLevel

    objectLevel = {
        "name": 'level_77'
    }
    objectLevel.map = [2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 3, 0, 0, 3, 2, 2, 0, 0, 3, 1, 1, 3, 0, 0, 0, 0, 3, 1, 1, 3, 0, 0, 2, 2, 3, 0, 0, 3, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2]
    objectLevel.width = 8
    objectLevel.height = 6
    objectLevel.mapArray = []
    objectLevel.step = 25
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[76] = objectLevel

    objectLevel = {
        "name": 'level_78'
    }
    objectLevel.map = [2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2]
    objectLevel.width = 8
    objectLevel.height = 6
    objectLevel.mapArray = []
    objectLevel.step = 45
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10

    listObjectRelaxLevels[77] = objectLevel

    objectLevel = {
        "name": 'level_79'
    }
    objectLevel.map = [3, 3, 0, 0, 0, 0, 1, 1, 3, 3, 3, 2, 2, 1, 1, 1, 0, 3, 0, 2, 2, 0, 1, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 1, 0, 2, 2, 0, 3, 0, 1, 1, 1, 2, 2, 3, 3, 3, 1, 1, 0, 0, 0, 0, 3, 3]
    objectLevel.width = 8
    objectLevel.height = 8
    objectLevel.mapArray = []
    objectLevel.step = 40
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 3
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10

    listObjectRelaxLevels[78] = objectLevel

    objectLevel = {
        "name": 'level_80'
    }
    objectLevel.map = [1, 3, 0, 0, 0, 0, 3, 1, 3, 3, 3, 0, 0, 3, 3, 3, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 3, 2, 2, 3, 0, 0, 0, 0, 3, 2, 2, 3, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 3, 3, 3, 0, 0, 3, 3, 3, 1, 3, 0, 0, 0, 0, 3, 1]
    objectLevel.width = 8
    objectLevel.height = 8
    objectLevel.mapArray = []
    objectLevel.step = 40
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 3
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10

    listObjectRelaxLevels[79] = objectLevel

    objectLevel = {
        "name": 'level_81'
    }
    objectLevel.map = [2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 2, 2, 3, 1, 0, 0, 1, 3, 2, 2, 3, 1, 0, 0, 1, 3, 2, 2, 3, 1, 0, 0, 1, 3, 2, 2, 3, 1, 0, 0, 1, 3, 2, 2, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    objectLevel.width = 8
    objectLevel.height = 8
    objectLevel.mapArray = []
    objectLevel.step = 55
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 3
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10

    listObjectRelaxLevels[80] = objectLevel

    objectLevel = {
        "name": 'level_82'
    }
    objectLevel.map = [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 3, 3, 1, 0, 0, 0, 1, 3, 2, 2, 3, 1, 0, 1, 3, 2, 1, 1, 2, 3, 1, 1, 3, 2, 1, 1, 2, 3, 1, 0, 1, 3, 2, 2, 3, 1, 0, 0, 0, 1, 3, 3, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]
    objectLevel.width = 8
    objectLevel.height = 8
    objectLevel.mapArray = []
    objectLevel.step = 40
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 3
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10

    listObjectRelaxLevels[81] = objectLevel

    objectLevel = {
        "name": 'level_83'
    }
    objectLevel.map = [3, 3, 3, 0, 0, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 0, 0, 3, 3, 3]
    objectLevel.width = 8
    objectLevel.height = 8
    objectLevel.mapArray = []
    objectLevel.step = 50
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 3
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10

    listObjectRelaxLevels[82] = objectLevel

    objectLevel = {
        "name": 'level_84'
    }
    objectLevel.map = [0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 3, 0, 0, 3, 1, 1, 0, 3, 3, 2, 2, 3, 3, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 3, 3, 2, 2, 3, 3, 0, 1, 1, 3, 0, 0, 3, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0]
    objectLevel.width = 8
    objectLevel.height = 8
    objectLevel.mapArray = []
    objectLevel.step = 35
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[83] = objectLevel

    objectLevel = {
        "name": 'level_85'
    }
    objectLevel.map = [3, 2, 1, 0, 0, 1, 2, 3, 2, 2, 1, 0, 0, 1, 2, 2, 0, 1, 3, 1, 1, 3, 1, 0, 0, 1, 1, 2, 2, 1, 1, 0, 0, 1, 1, 2, 2, 1, 1, 0, 0, 1, 3, 1, 1, 3, 1, 0, 2, 2, 1, 0, 0, 1, 2, 2, 3, 2, 1, 0, 0, 1, 2, 3]
    objectLevel.width = 8
    objectLevel.height = 8
    objectLevel.mapArray = []
    objectLevel.step = 45
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[84] = objectLevel

    objectLevel = {
        "name": 'level_86'
    }
    objectLevel.map = [0, 1, 0, 0, 0, 0, 1, 0, 1, 3, 2, 0, 0, 2, 3, 1, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 1, 3, 2, 0, 0, 2, 3, 1, 0, 1, 0, 0, 0, 0, 1, 0]
    objectLevel.width = 8
    objectLevel.height = 8
    objectLevel.mapArray = []
    objectLevel.step = 35
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[85] = objectLevel

    objectLevel = {
        "name": 'level_87'
    }
    objectLevel.map = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    objectLevel.width = 8
    objectLevel.height = 8
    objectLevel.mapArray = []
    objectLevel.step = 50
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 3
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10

    listObjectRelaxLevels[86] = objectLevel

    objectLevel = {
        "name": 'level_88'
    }
    objectLevel.map = [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1]
    objectLevel.width = 8
    objectLevel.height = 8
    objectLevel.mapArray = []
    objectLevel.step = 20
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[87] = objectLevel

    objectLevel = {
        "name": 'level_89'
    }
    objectLevel.map = [0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 3, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0]
    objectLevel.width = 8
    objectLevel.height = 8
    objectLevel.mapArray = []
    objectLevel.step = 40
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10

    listObjectRelaxLevels[88] = objectLevel

    objectLevel = {
        "name": 'level_90'
    }
    objectLevel.map = [0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 3, 1, 3, 3, 1, 3, 0, 3, 3, 3, 2, 2, 3, 3, 3, 3, 3, 3, 2, 2, 3, 3, 3, 0, 3, 1, 3, 3, 1, 3, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0]
    objectLevel.width = 8
    objectLevel.height = 8
    objectLevel.mapArray = []
    objectLevel.step = 40
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10

    listObjectRelaxLevels[89] = objectLevel

    objectLevel = {
        "name": 'level_91'
    }
    objectLevel.map = [1, 1, 0, 0, 0, 0, 1, 1, 0, 3, 3, 2, 2, 3, 3, 0, 1, 1, 0, 2, 2, 0, 1, 1, 0, 0, 0, 2, 2, 0, 0, 0, 0, 3, 3, 2, 2, 3, 3, 0, 1, 1, 0, 2, 2, 0, 1, 1, 0, 3, 3, 2, 2, 3, 3, 0, 1, 1, 0, 0, 0, 0, 1, 1]
    objectLevel.width = 8
    objectLevel.height = 8
    objectLevel.mapArray = []
    objectLevel.step = 40
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10

    listObjectRelaxLevels[90] = objectLevel

    objectLevel = {
        "name": 'level_92'
    }
    objectLevel.map = [0, 0, 0, 2, 3, 0, 0, 0, 0, 0, 2, 3, 2, 2, 0, 0, 0, 2, 3, 2, 2, 2, 3, 0, 0, 3, 2, 2, 2, 3, 2, 0, 3, 2, 2, 2, 3, 2, 2, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]
    objectLevel.width = 8
    objectLevel.height = 8
    objectLevel.mapArray = []
    objectLevel.step = 30
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[91] = objectLevel

    objectLevel = {
        "name": 'level_93'
    }
    objectLevel.map = [0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 3, 2, 2, 3, 1, 0, 1, 3, 2, 2, 2, 2, 3, 1, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 1, 3, 2, 2, 2, 2, 3, 1, 0, 1, 3, 2, 2, 3, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0]
    objectLevel.width = 8
    objectLevel.height = 8
    objectLevel.mapArray = []
    objectLevel.step = 40
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10

    listObjectRelaxLevels[92] = objectLevel

    objectLevel = {
        "name": 'level_94'
    }
    objectLevel.map = [0, 0, 3, 3, 3, 3, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 3, 3, 3, 3, 3, 3, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 3, 3, 3, 3, 0, 0]
    objectLevel.width = 8
    objectLevel.height = 8
    objectLevel.mapArray = []
    objectLevel.step = 50
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10

    listObjectRelaxLevels[93] = objectLevel

    objectLevel = {
        "name": 'level_95'
    }
    objectLevel.map = [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 3, 3, 3, 3, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]
    objectLevel.width = 8
    objectLevel.height = 8
    objectLevel.mapArray = []
    objectLevel.step = 50
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 3
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10

    listObjectRelaxLevels[94] = objectLevel

    objectLevel = {
        "name": 'level_96'
    }
    objectLevel.map = [0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 3, 3, 3, 3, 1, 0, 1, 3, 2, 2, 2, 2, 3, 1, 1, 3, 2, 1, 1, 2, 3, 1, 1, 3, 2, 1, 1, 2, 3, 1, 1, 3, 2, 2, 2, 2, 3, 1, 0, 1, 3, 3, 3, 3, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0]
    objectLevel.width = 8
    objectLevel.height = 8
    objectLevel.mapArray = []
    objectLevel.step = 50
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10

    listObjectRelaxLevels[95] = objectLevel

    objectLevel = {
        "name": 'level_97'
    }
    objectLevel.map = [1, 1, 1, 0, 0, 3, 3, 3, 1, 1, 1, 0, 0, 3, 3, 3, 1, 1, 1, 2, 2, 3, 3, 3, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 3, 3, 3, 2, 2, 1, 1, 1, 3, 3, 3, 0, 0, 1, 1, 1, 3, 3, 3, 0, 0, 1, 1, 1]
    objectLevel.width = 8
    objectLevel.height = 8
    objectLevel.mapArray = []
    objectLevel.step = 45
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10

    listObjectRelaxLevels[96] = objectLevel

    objectLevel = {
        "name": 'level_98'
    }
    objectLevel.map = [0, 2, 2, 0, 0, 2, 2, 0, 2, 3, 3, 2, 2, 3, 3, 2, 2, 3, 3, 2, 2, 3, 3, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 3, 3, 2, 2, 3, 3, 2, 2, 3, 3, 2, 2, 3, 3, 2, 0, 2, 2, 0, 0, 2, 2, 0]
    objectLevel.width = 8
    objectLevel.height = 8
    objectLevel.mapArray = []
    objectLevel.step = 55
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 3
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10

    listObjectRelaxLevels[97] = objectLevel

    objectLevel = {
        "name": 'level_99'
    }
    objectLevel.map = [0, 0, 3, 0, 3, 0, 0, 0, 3, 3, 3, 3, 3, 0, 3, 2, 2, 3, 2, 2, 3, 3, 2, 1, 3, 1, 2, 3, 0, 3, 3, 3, 3, 3, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 3, 3, 0, 3, 3, 0]
    objectLevel.width = 7
    objectLevel.height = 8
    objectLevel.mapArray = []
    objectLevel.step = 30
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[98] = objectLevel

    objectLevel = {
        "name": 'level_100'
    }
    objectLevel.map = [0, 3, 3, 3, 3, 0, 0, 0, 3, 3, 1, 3, 3, 3, 3, 3, 0, 0, 2, 2, 3, 3, 3, 3, 0, 0, 0, 2, 2, 3, 3, 0, 0, 0, 0, 0, 2, 3, 3, 0, 0, 0, 0, 0, 2, 3, 3, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0]
    objectLevel.width = 8
    objectLevel.height = 10
    objectLevel.mapArray = []
    objectLevel.step = 35
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[99] = objectLevel

    objectLevel = {
        "name": 'level_101'
    }
    objectLevel.map = [0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0]
    objectLevel.width = 9
    objectLevel.height = 9
    objectLevel.mapArray = []
    objectLevel.step = 30
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[100] = objectLevel

    objectLevel = {
        "name": 'level_102'
    }
    objectLevel.map = [0, 0, 0, 1, 3, 1, 0, 0, 0, 0, 0, 1, 3, 2, 3, 1, 0, 0, 0, 1, 3, 2, 0, 2, 3, 1, 0, 1, 3, 2, 0, 0, 0, 2, 3, 1, 3, 2, 0, 0, 0, 0, 0, 2, 3, 1, 3, 2, 0, 0, 0, 2, 3, 1, 0, 1, 3, 2, 0, 2, 3, 1, 0, 0, 0, 1, 3, 2, 3, 1, 0, 0, 0, 0, 0, 1, 3, 1, 0, 0, 0]
    objectLevel.width = 9
    objectLevel.height = 9
    objectLevel.mapArray = []
    objectLevel.step = 40
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10

    listObjectRelaxLevels[101] = objectLevel

    objectLevel = {
        "name": 'level_103'
    }
    objectLevel.map = [0, 3, 3, 0, 0, 0, 3, 3, 0, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 1, 1, 3, 3, 1, 2, 2, 3, 2, 2, 1, 3, 3, 3, 2, 2, 3, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 3, 3, 0, 3, 3, 2, 2, 2, 3, 3, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0]
    objectLevel.width = 9
    objectLevel.height = 9
    objectLevel.mapArray = []
    objectLevel.step = 60
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[102] = objectLevel

    objectLevel = {
        "name": 'level_104'
    }
    objectLevel.map = [0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 3, 3, 2, 3, 3, 2, 2, 2, 2, 3, 3, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 1, 1, 1, 2, 2, 0, 0, 2, 2, 2, 1, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0]
    objectLevel.width = 9
    objectLevel.height = 9
    objectLevel.mapArray = []
    objectLevel.step = 60
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[103] = objectLevel

    objectLevel = {
        "name": 'level_105'
    }
    objectLevel.map = [3, 3, 0, 0, 0, 0, 0, 3, 3, 3, 3, 1, 0, 0, 0, 1, 3, 3, 0, 1, 1, 1, 2, 1, 1, 1, 0, 0, 0, 1, 1, 2, 1, 1, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 1, 1, 2, 1, 1, 0, 0, 0, 1, 1, 1, 2, 1, 1, 1, 0, 3, 3, 1, 0, 0, 0, 1, 3, 3, 3, 3, 0, 0, 0, 0, 0, 3, 3]
    objectLevel.width = 9
    objectLevel.height = 9
    objectLevel.mapArray = []
    objectLevel.step = 45
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 3
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10

    listObjectRelaxLevels[104] = objectLevel

    objectLevel = {
        "name": 'level_106'
    }
    objectLevel.map = [2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0]
    objectLevel.width = 9
    objectLevel.height = 9
    objectLevel.mapArray = []
    objectLevel.step = 45
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 3
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10

    listObjectRelaxLevels[105] = objectLevel

    objectLevel = {
        "name": 'level_107'
    }
    objectLevel.map = [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 3, 2, 0, 0, 0, 0, 0, 2, 3, 1, 3, 2, 0, 0, 0, 0, 3, 1, 3, 1, 3, 0, 0, 0, 3, 1, 3, 2, 3, 1, 3, 0, 0, 1, 3, 2, 1, 2, 3, 1, 0, 1, 3, 2, 1, 3, 1, 2, 3, 1, 3, 2, 1, 3, 0, 3, 1, 2, 3, 2, 1, 3, 0, 0, 0, 3, 1, 2]
    objectLevel.width = 9
    objectLevel.height = 9
    objectLevel.mapArray = []
    objectLevel.step = 50
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 3
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10

    listObjectRelaxLevels[106] = objectLevel

    objectLevel = {
        "name": 'level_108'
    }
    objectLevel.map = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 1, 3, 3, 3, 3, 3, 1, 0, 1, 1, 3, 3, 3, 3, 3, 1, 1, 0, 1, 3, 3, 3, 3, 3, 1, 0]
    objectLevel.width = 9
    objectLevel.height = 9
    objectLevel.mapArray = []
    objectLevel.step = 45
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 3
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10

    listObjectRelaxLevels[107] = objectLevel

    objectLevel = {
        "name": 'level_109'
    }
    objectLevel.map = [0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 3, 3, 2, 2, 2, 3, 3, 0, 0, 3, 1, 3, 3, 3, 1, 3, 0, 2, 1, 1, 3, 2, 3, 1, 1, 2, 2, 2, 3, 3, 2, 3, 3, 2, 2, 2, 1, 1, 3, 2, 3, 1, 1, 2, 0, 3, 1, 3, 3, 3, 1, 3, 0, 0, 3, 3, 2, 2, 2, 3, 3, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0]
    objectLevel.width = 9
    objectLevel.height = 9
    objectLevel.mapArray = []
    objectLevel.step = 60
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[108] = objectLevel

    objectLevel = {
        "name": 'level_110'
    }
    objectLevel.map = [0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 2, 2, 2, 0, 2, 2, 2, 3, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0]
    objectLevel.width = 9
    objectLevel.height = 9
    objectLevel.mapArray = []
    objectLevel.step = 65
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[109] = objectLevel

    objectLevel = {
        "name": 'level_111'
    }
    objectLevel.map = [2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 3, 1, 3, 2, 2, 2, 2, 2, 2, 3, 1, 3, 2, 2, 2, 0, 3, 3, 3, 1, 3, 3, 3, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 3, 3, 3, 1, 3, 3, 3, 0, 2, 2, 2, 3, 1, 3, 2, 2, 2, 2, 2, 2, 3, 1, 3, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2]
    objectLevel.width = 9
    objectLevel.height = 9
    objectLevel.mapArray = []
    objectLevel.step = 65
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[110] = objectLevel

    objectLevel = {
        "name": 'level_112'
    }
    objectLevel.map = [3, 2, 3, 0, 0, 0, 3, 2, 3, 2, 2, 2, 3, 0, 3, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2, 3, 0, 3, 2, 2, 2, 2, 2, 3, 0, 0, 0, 3, 2, 2, 2, 3, 0, 0, 0, 3, 2, 2, 2, 2, 2, 3, 0, 3, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2, 3, 0, 3, 2, 2, 2, 3, 2, 3, 0, 0, 0, 3, 2, 3]
    objectLevel.width = 9
    objectLevel.height = 9
    objectLevel.mapArray = []
    objectLevel.step = 65
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[111] = objectLevel

    objectLevel = {
        "name": 'level_113'
    }
    objectLevel.map = [0, 0, 0, 3, 1, 3, 0, 0, 0, 0, 0, 0, 3, 1, 3, 0, 0, 0, 0, 0, 0, 3, 1, 3, 0, 0, 0, 3, 3, 3, 3, 1, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 1, 3, 3, 3, 3, 0, 0, 0, 3, 1, 3, 0, 0, 0, 0, 0, 0, 3, 1, 3, 0, 0, 0, 0, 0, 0, 3, 1, 3, 0, 0, 0]
    objectLevel.width = 9
    objectLevel.height = 9
    objectLevel.mapArray = []
    objectLevel.step = 45
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 3
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10

    listObjectRelaxLevels[112] = objectLevel

    objectLevel = {
        "name": 'level_114'
    }
    objectLevel.map = [0, 3, 3, 2, 0, 2, 3, 3, 0, 3, 1, 1, 2, 1, 2, 1, 1, 3, 3, 1, 2, 2, 1, 2, 2, 1, 3, 0, 3, 3, 3, 1, 3, 3, 3, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 2, 2, 2, 1, 2, 2, 2, 0, 2, 1, 3, 3, 1, 3, 3, 1, 2, 2, 1, 1, 3, 1, 3, 1, 1, 2, 0, 2, 2, 3, 0, 3, 2, 2, 0]
    objectLevel.width = 9
    objectLevel.height = 9
    objectLevel.mapArray = []
    objectLevel.step = 65
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[113] = objectLevel

    objectLevel = {
        "name": 'level_115'
    }
    objectLevel.map = [3, 3, 3, 0, 0, 0, 2, 2, 2, 3, 0, 3, 0, 0, 0, 2, 0, 2, 3, 3, 3, 2, 0, 3, 2, 2, 2, 0, 0, 2, 1, 1, 1, 3, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 3, 1, 1, 1, 2, 0, 0, 2, 2, 2, 3, 0, 2, 3, 3, 3, 2, 0, 2, 0, 0, 0, 3, 0, 3, 2, 2, 2, 0, 0, 0, 3, 3, 3]
    objectLevel.width = 9
    objectLevel.height = 9
    objectLevel.mapArray = []
    objectLevel.step = 45
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[114] = objectLevel

    objectLevel = {
        "name": 'level_116'
    }
    objectLevel.map = [0, 0, 0, 0, 2, 1, 3, 2, 0, 0, 0, 0, 0, 2, 1, 3, 2, 2, 0, 0, 0, 0, 2, 1, 3, 3, 3, 0, 0, 0, 0, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 0, 0, 0, 0, 3, 3, 3, 1, 2, 0, 0, 0, 0, 2, 2, 3, 1, 2, 0, 0, 0, 0, 0, 2, 3, 1, 2, 0, 0, 0, 0]
    objectLevel.width = 9
    objectLevel.height = 9
    objectLevel.mapArray = []
    objectLevel.step = 45
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5

    listObjectRelaxLevels[115] = objectLevel

    objectLevel = {
        "name": 'level_117'
    }
    objectLevel.map = [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 3, 3, 3, 3, 3, 1, 0, 1, 3, 2, 2, 2, 2, 2, 3, 1, 3, 2, 1, 1, 0, 1, 1, 2, 3, 3, 2, 1, 0, 0, 0, 1, 2, 3, 3, 2, 1, 1, 0, 1, 1, 2, 3, 1, 3, 2, 2, 2, 2, 2, 3, 1, 0, 1, 3, 3, 3, 3, 3, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0]
    objectLevel.width = 9
    objectLevel.height = 9
    objectLevel.mapArray = []
    objectLevel.step = 60
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[116] = objectLevel

    objectLevel = {
        "name": 'level_118'
    }
    objectLevel.map = [3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 2, 2, 3, 1, 3, 2, 2, 3, 3, 2, 2, 3, 1, 3, 2, 2, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 0, 1, 1, 0, 0, 0, 1, 1, 0, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 2, 2, 3, 1, 3, 2, 2, 3, 3, 2, 2, 3, 1, 3, 2, 2, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3]
    objectLevel.width = 9
    objectLevel.height = 9
    objectLevel.mapArray = []
    objectLevel.step = 70
    objectLevel.countQuickTip = 15
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[117] = objectLevel

    objectLevel = {
        "name": 'level_119'
    }
    objectLevel.map = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 3, 2, 3, 2, 2, 2, 3, 2, 0, 2, 0, 2, 3, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 3, 2, 0, 0, 0, 2, 3, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 3, 2, 0, 2, 0, 2, 3, 2, 2, 2, 3, 2, 3, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    objectLevel.width = 9
    objectLevel.height = 9
    objectLevel.mapArray = []
    objectLevel.step = 60
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[118] = objectLevel

    objectLevel = {
        "name": 'level_120'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 1, 2, 3, 3, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 1, 1, 1, 1, 0, 0, 0, 0, 0, 3, 3, 3, 3, 1, 1, 1, 1, 0, 0, 0, 3, 3, 3, 3, 1, 1, 1, 1, 1, 0, 0, 0, 3, 3, 3, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]
    objectLevel.width = 13
    objectLevel.height = 10
    objectLevel.mapArray = []
    objectLevel.step = 55
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[119] = objectLevel

    objectLevel = {
        "name": 'level_121'
    }
    objectLevel.map = [0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 1, 3, 3, 3, 3, 3, 3, 3, 0, 1, 3, 1, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 3, 3, 3, 3, 3, 3]
    objectLevel.width = 10
    objectLevel.height = 5
    objectLevel.mapArray = []
    objectLevel.step = 35
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 3
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10

    listObjectRelaxLevels[120] = objectLevel

    objectLevel = {
        "name": 'level_122'
    }
    objectLevel.map = [0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 3, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 0, 2, 2, 2, 0, 0, 0, 2, 2, 2, 0, 2, 2, 2]
    objectLevel.width = 10
    objectLevel.height = 9
    objectLevel.mapArray = []
    objectLevel.step = 65
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[121] = objectLevel

    objectLevel = {
        "name": 'level_123'
    }
    objectLevel.map = [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 3, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0]
    objectLevel.width = 11
    objectLevel.height = 12
    objectLevel.mapArray = []
    objectLevel.step = 50
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[122] = objectLevel

    objectLevel = {
        "name": 'level_124'
    }
    objectLevel.map = [0, 0, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0]
    objectLevel.width = 11
    objectLevel.height = 14
    objectLevel.mapArray = []
    objectLevel.step = 60
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[123] = objectLevel

    objectLevel = {
        "name": 'level_125'
    }
    objectLevel.map = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 2, 1, 3, 1, 1, 2, 2, 3, 3, 2, 1, 3, 1, 1, 2, 2, 2, 2, 2, 1, 3, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 3, 1, 2, 2, 2, 2, 2, 1, 1, 3, 1, 2, 3, 3, 2, 2, 1, 1, 3, 1, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    objectLevel.width = 9
    objectLevel.height = 9
    objectLevel.mapArray = []
    objectLevel.step = 80
    objectLevel.countQuickTip = 15
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 20

    listObjectRelaxLevels[124] = objectLevel

    objectLevel = {
        "name": 'level_126'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 2, 3, 2, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 2, 3, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 0, 0, 2, 3, 2, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 2, 3, 2, 0, 0, 0, 0, 0]
    objectLevel.width = 10
    objectLevel.height = 10
    objectLevel.mapArray = []
    objectLevel.step = 50
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 3
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10

    listObjectRelaxLevels[125] = objectLevel

    objectLevel = {
        "name": 'level_127'
    }
    objectLevel.map = [2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 1, 0, 0, 0, 0, 3, 2, 2, 0, 1, 1, 1, 0, 0, 3, 3, 3, 0, 0, 0, 1, 1, 1, 3, 3, 3, 0, 0, 0, 0, 0, 1, 3, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 1, 0, 0, 0, 0, 0, 3, 3, 3, 1, 1, 1, 0, 0, 0, 3, 3, 3, 0, 0, 1, 1, 1, 0, 2, 2, 3, 0, 0, 0, 0, 1, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2]
    objectLevel.width = 10
    objectLevel.height = 10
    objectLevel.mapArray = []
    objectLevel.step = 50
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 3
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10

    listObjectRelaxLevels[126] = objectLevel

    objectLevel = {
        "name": 'level_128'
    }
    objectLevel.map = [0, 2, 3, 1, 0, 0, 1, 3, 2, 0, 2, 2, 3, 1, 0, 0, 1, 3, 2, 2, 3, 3, 3, 1, 0, 0, 1, 3, 3, 3, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 3, 3, 3, 1, 0, 0, 1, 3, 3, 3, 2, 2, 3, 1, 0, 0, 1, 3, 2, 2, 0, 2, 3, 1, 0, 0, 1, 3, 2, 0]
    objectLevel.width = 10
    objectLevel.height = 10
    objectLevel.mapArray = []
    objectLevel.step = 70
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 20

    listObjectRelaxLevels[127] = objectLevel

    objectLevel = {
        "name": 'level_129'
    }
    objectLevel.map = [0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 3, 3, 1, 1, 0, 0, 0, 0, 0, 3, 3, 3, 1, 1, 1, 0, 0, 0, 3, 3, 3, 3, 1, 1, 1, 1, 0, 3, 3, 3, 3, 2, 2, 1, 1, 1, 1, 3, 3, 3, 0, 2, 2, 0, 1, 1, 1, 3, 3, 0, 0, 2, 2, 0, 0, 1, 1, 3, 0, 0, 0, 2, 2, 0, 0, 0, 1, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0]
    objectLevel.width = 10
    objectLevel.height = 10
    objectLevel.mapArray = []
    objectLevel.step = 54
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[128] = objectLevel

    objectLevel = {
        "name": 'level_130'
    }
    objectLevel.map = [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 3, 3, 3, 3, 1, 1, 0, 1, 1, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 3, 3, 2, 2, 3, 3, 1, 1, 1, 1, 3, 3, 2, 2, 3, 3, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 1, 1, 0, 1, 1, 3, 3, 3, 3, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0]
    objectLevel.width = 10
    objectLevel.height = 10
    objectLevel.mapArray = []
    objectLevel.step = 75
    objectLevel.countQuickTip = 15
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[129] = objectLevel

    objectLevel = {
        "name": 'level_131'
    }
    objectLevel.map = [0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 3, 3, 3, 1, 1, 3, 3, 3, 0, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 1, 1, 3, 3, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0]
    objectLevel.width = 10
    objectLevel.height = 10
    objectLevel.mapArray = []
    objectLevel.step = 60
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[130] = objectLevel

    objectLevel = {
        "name": 'level_132'
    }
    objectLevel.map = [2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 0, 0, 1, 3, 3, 3, 3, 1, 0, 0, 0, 0, 1, 3, 2, 2, 3, 1, 0, 0, 0, 0, 1, 3, 2, 2, 3, 1, 0, 0, 0, 0, 1, 3, 3, 3, 3, 1, 0, 0, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2]
    objectLevel.width = 10
    objectLevel.height = 10
    objectLevel.mapArray = []
    objectLevel.step = 65
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[131] = objectLevel

    objectLevel = {
        "name": 'level_133'
    }
    objectLevel.map = [3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 0, 3, 0, 3, 3, 0, 3, 0, 3, 3, 3, 3, 1, 1, 1, 1, 3, 3, 3, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 2, 1, 1, 0, 0, 1, 1, 2, 0, 0, 2, 1, 1, 0, 0, 1, 1, 2, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 0, 2, 0, 3, 3, 0, 2, 0, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2]
    objectLevel.width = 10
    objectLevel.height = 10
    objectLevel.mapArray = []
    objectLevel.step = 65
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[132] = objectLevel

    objectLevel = {
        "name": 'level_134'
    }
    objectLevel.map = [3, 3, 2, 2, 0, 0, 0, 0, 1, 1, 3, 3, 3, 2, 2, 0, 0, 1, 1, 1, 2, 3, 3, 3, 2, 2, 1, 1, 1, 0, 2, 2, 3, 3, 3, 2, 2, 1, 0, 0, 0, 2, 2, 3, 3, 3, 2, 2, 0, 0, 0, 0, 2, 2, 3, 3, 3, 2, 2, 0, 0, 1, 1, 2, 2, 3, 3, 3, 2, 2, 1, 1, 1, 0, 2, 2, 3, 3, 3, 2, 1, 1, 0, 0, 0, 2, 2, 3, 3, 3, 1, 0, 0, 0, 0, 0, 2, 2, 3, 3]
    objectLevel.width = 10
    objectLevel.height = 10
    objectLevel.mapArray = []
    objectLevel.step = 75
    objectLevel.countQuickTip = 15
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[133] = objectLevel

    objectLevel = {
        "name": 'level_135'
    }
    objectLevel.map = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 3, 1, 3, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 3, 1, 3, 1, 3, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 3, 1, 0, 0, 0, 1, 3, 1, 3, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]
    objectLevel.width = 10
    objectLevel.height = 10
    objectLevel.mapArray = []
    objectLevel.step = 50
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[134] = objectLevel

    objectLevel = {
        "name": 'level_136'
    }
    objectLevel.map = [0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 3, 3, 2, 0, 0, 0, 0, 0, 2, 3, 1, 1, 3, 2, 0, 0, 0, 2, 3, 1, 2, 2, 1, 3, 2, 0, 2, 3, 1, 2, 0, 0, 2, 1, 3, 2, 2, 3, 1, 2, 0, 0, 2, 1, 3, 2, 0, 2, 3, 1, 2, 2, 1, 3, 2, 0, 0, 0, 2, 3, 1, 1, 3, 2, 0, 0, 0, 0, 0, 2, 3, 3, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0]
    objectLevel.width = 10
    objectLevel.height = 10
    objectLevel.mapArray = []
    objectLevel.step = 55
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[135] = objectLevel

    objectLevel = {
        "name": 'level_137'
    }
    objectLevel.map = [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 3, 2, 1, 3, 2, 1, 0, 0, 0, 0, 1, 2, 3, 1, 2, 3, 1, 0, 0, 0, 1, 1, 3, 3, 1, 3, 3, 1, 1, 0, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 3, 3, 3, 3, 0, 3, 3, 3, 3, 0]
    objectLevel.width = 11
    objectLevel.height = 12
    objectLevel.mapArray = []
    objectLevel.step = 100
    objectLevel.countQuickTip = 15
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 20

    listObjectRelaxLevels[136] = objectLevel

    objectLevel = {
        "name": 'level_138'
    }
    objectLevel.map = [3, 3, 3, 3, 1, 0, 0, 0, 0, 0, 3, 3, 3, 3, 1, 1, 0, 0, 0, 0, 1, 3, 3, 3, 3, 1, 0, 0, 0, 0, 1, 3, 3, 3, 3, 1, 1, 0, 0, 0, 1, 1, 3, 3, 3, 3, 1, 0, 0, 0, 0, 1, 3, 3, 3, 3, 1, 1, 0, 0, 0, 1, 1, 3, 3, 3, 3, 1, 0, 0, 0, 0, 1, 3, 3, 3, 3, 1, 1, 1, 0, 0, 1, 1, 1, 3, 3, 3, 3, 1, 0, 0, 0, 0, 1, 3, 3, 3, 3, 1]
    objectLevel.width = 10
    objectLevel.height = 10
    objectLevel.mapArray = []
    objectLevel.step = 65
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[137] = objectLevel

    objectLevel = {
        "name": 'level_139'
    }
    objectLevel.map = [0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
    objectLevel.width = 10
    objectLevel.height = 10
    objectLevel.mapArray = []
    objectLevel.step = 60
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[138] = objectLevel

    objectLevel = {
        "name": 'level_140'
    }
    objectLevel.map = [1, 3, 1, 0, 0, 0, 0, 1, 3, 1, 1, 3, 1, 0, 0, 0, 0, 1, 3, 1, 1, 3, 1, 0, 0, 0, 0, 1, 3, 1, 1, 3, 1, 0, 0, 0, 0, 1, 3, 1, 1, 3, 1, 1, 1, 1, 1, 1, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 1, 1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 0, 0, 0, 0, 1, 3, 1, 1, 3, 1, 0, 0, 0, 0, 1, 3, 1, 1, 3, 1, 0, 0, 0, 0, 1, 3, 1]
    objectLevel.width = 10
    objectLevel.height = 10
    objectLevel.mapArray = []
    objectLevel.step = 70
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[139] = objectLevel

    objectLevel = {
        "name": 'level_141'
    }
    objectLevel.map = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 0, 2, 3, 3, 3, 3, 3, 2, 0, 0, 0, 2, 3, 3, 3, 2, 0, 0, 0, 0, 0, 2, 3, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0]
    objectLevel.width = 9
    objectLevel.height = 11
    objectLevel.mapArray = []
    objectLevel.step = 40
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[140] = objectLevel

    objectLevel = {
        "name": 'level_142'
    }
    objectLevel.map = [0, 2, 2, 0, 2, 2, 0, 0, 2, 2, 2, 2, 2, 0, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3]
    objectLevel.width = 7
    objectLevel.height = 7
    objectLevel.mapArray = []
    objectLevel.step = 40
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[141] = objectLevel

    objectLevel = {
        "name": 'level_143'
    }
    objectLevel.map = [0, 0, 2, 0, 0, 0, 2, 0, 0, 2, 2, 2, 2, 2, 0, 0, 2, 1, 2, 1, 2, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 3, 3, 3, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    objectLevel.width = 7
    objectLevel.height = 9
    objectLevel.mapArray = []
    objectLevel.step = 40
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[142] = objectLevel

    objectLevel = {
        "name": 'level_144'
    }
    objectLevel.map = [0, 0, 3, 3, 3, 0, 0, 0, 3, 2, 3, 2, 3, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 0, 0, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 3, 3, 0, 3, 3, 0, 3, 3, 3, 0, 3, 3, 3]
    objectLevel.width = 7
    objectLevel.height = 10
    objectLevel.mapArray = []
    objectLevel.step = 40
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[143] = objectLevel

    objectLevel = {
        "name": 'level_145'
    }
    objectLevel.map = [0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 3, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 0, 2, 2, 2, 0, 0, 0, 2, 2, 2, 0, 2, 2, 2]
    objectLevel.width = 10
    objectLevel.height = 8
    objectLevel.mapArray = []
    objectLevel.step = 60
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[144] = objectLevel

    objectLevel = {
        "name": 'level_146'
    }
    objectLevel.map = [0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0]
    objectLevel.width = 14
    objectLevel.height = 12
    objectLevel.mapArray = []
    objectLevel.step = 85
    objectLevel.countQuickTip = 15
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 15
    objectLevel.taskStepStar2 = 20
    objectLevel.taskStepStar3 = 25

    listObjectRelaxLevels[145] = objectLevel

    objectLevel = {
        "name": 'level_147'
    }
    objectLevel.map = [3, 3, 3, 3, 0, 0, 0, 3, 3, 3, 3, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
    objectLevel.width = 11
    objectLevel.height = 8
    objectLevel.mapArray = []
    objectLevel.step = 50
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[146] = objectLevel

    objectLevel = {
        "name": 'level_148'
    }
    objectLevel.map = [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 0, 0, 0]
    objectLevel.width = 9
    objectLevel.height = 13
    objectLevel.mapArray = []
    objectLevel.step = 50
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[147] = objectLevel

    objectLevel = {
        "name": 'level_149'
    }
    objectLevel.map = [0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 1, 2, 2, 2, 2, 1, 0, 0, 0, 0, 1, 2, 2, 2, 2, 1, 0, 0, 0, 0, 1, 2, 2, 2, 2, 1, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0]
    objectLevel.width = 10
    objectLevel.height = 10
    objectLevel.mapArray = []
    objectLevel.step = 70
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 25

    listObjectRelaxLevels[148] = objectLevel

    objectLevel = {
        "name": 'level_150'
    }
    objectLevel.map = [0, 0, 3, 3, 2, 3, 0, 0, 0, 3, 3, 2, 2, 2, 3, 0, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 3, 3, 3, 3, 0, 0]
    objectLevel.width = 8
    objectLevel.height = 8
    objectLevel.mapArray = []
    objectLevel.step = 50
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[149] = objectLevel

    objectLevel = {
        "name": 'level_151'
    }
    objectLevel.map = [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 3, 3, 3, 1, 1, 3, 3, 3, 3, 2, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 2, 3, 2, 3, 3, 3, 3, 0, 3, 3, 3, 3, 2, 3, 0, 0, 0, 3, 2, 3, 3, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0]
    objectLevel.width = 8
    objectLevel.height = 11
    objectLevel.mapArray = []
    objectLevel.step = 55
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[150] = objectLevel

    objectLevel = {
        "name": 'level_152'
    }
    objectLevel.map = [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 3, 3, 1, 0, 0, 0, 0, 0, 1, 3, 3, 3, 3, 3, 3, 1, 2, 2, 2, 2, 1, 3, 3, 3, 3, 3, 3, 1, 2, 3, 2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 0]
    objectLevel.width = 12
    objectLevel.height = 8
    objectLevel.mapArray = []
    objectLevel.step = 55
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[151] = objectLevel

    objectLevel = {
        "name": 'level_153'
    }
    objectLevel.map = [0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 3, 2, 3, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 0, 3, 0, 0, 3, 0, 3, 0, 3, 0, 3, 0, 0, 3, 0, 3, 0, 3, 0, 3, 0, 0, 3, 0, 3, 0, 3, 0, 3, 0, 0, 3, 0, 3, 0, 3, 0, 3, 0, 0, 3, 0, 3]
    objectLevel.width = 9
    objectLevel.height = 17
    objectLevel.mapArray = []
    objectLevel.step = 65
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[152] = objectLevel

    objectLevel = {
        "name": 'level_154'
    }
    objectLevel.map = [0, 0, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0]
    objectLevel.width = 11
    objectLevel.height = 14
    objectLevel.mapArray = []
    objectLevel.step = 65
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[153] = objectLevel

    objectLevel = {
        "name": 'level_155'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 3, 2, 3, 2, 3, 2, 3, 0, 0, 0, 0, 0, 0, 3, 2, 2, 1, 2, 2, 3, 0, 0, 0, 0, 0, 3, 3, 3, 2, 2, 2, 3, 3, 3, 0, 0, 0, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 0, 3, 3, 2, 2, 2, 3, 3, 0, 3, 3, 0, 0, 0, 3, 3, 2, 2, 2, 3, 3, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0]
    objectLevel.width = 13
    objectLevel.height = 12
    objectLevel.mapArray = []
    objectLevel.step = 85
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 15
    objectLevel.taskStepStar2 = 20
    objectLevel.taskStepStar3 = 25

    listObjectRelaxLevels[154] = objectLevel

    objectLevel = {
        "name": 'level_156'
    }
    objectLevel.map = [0, 0, 3, 3, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 3, 2, 1, 2, 3, 0, 0, 0, 1, 2, 2, 2, 3, 3, 0, 0, 0, 2, 2, 3, 3, 3, 0, 0, 0, 2, 2, 3, 3, 3, 0, 0, 0, 1, 2, 3, 3, 3, 3, 0, 0, 1, 1, 1, 3, 3, 3, 0, 0, 0, 1, 1, 2, 3, 3, 3, 0, 0, 3, 0, 3, 0, 0, 0]
    objectLevel.width = 8
    objectLevel.height = 10
    objectLevel.mapArray = []
    objectLevel.step = 45
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[155] = objectLevel

    objectLevel = {
        "name": 'level_157'
    }
    objectLevel.map = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 3, 3, 2, 1, 2, 2, 2, 1, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 1, 2, 1, 2, 2, 3, 3, 2, 2, 2, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 2, 3, 1, 3, 2, 3, 2, 3, 3, 3, 1, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
    objectLevel.width = 9
    objectLevel.height = 12
    objectLevel.mapArray = []
    objectLevel.step = 105
    objectLevel.countQuickTip = 15
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 15
    objectLevel.taskStepStar2 = 20
    objectLevel.taskStepStar3 = 25

    listObjectRelaxLevels[156] = objectLevel

    objectLevel = {
        "name": 'level_158'
    }
    objectLevel.map = [0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 0, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 0, 0, 3, 2, 2, 2, 3, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 0, 0, 3, 3, 3, 0, 3, 3, 3, 0]
    objectLevel.width = 9
    objectLevel.height = 9
    objectLevel.mapArray = []
    objectLevel.step = 50
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15

    listObjectRelaxLevels[157] = objectLevel

    objectLevel = {
        "name": 'level_159'
    }
    objectLevel.map = [0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 1, 1, 1, 1, 0, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 0, 3, 2, 2, 1, 0, 1, 1, 1, 1, 3, 3, 3, 3, 3, 0, 2, 2, 0, 1, 1, 1, 1, 1, 3, 3, 3, 3, 0, 3, 2, 2, 1, 0, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1, 1, 1, 1, 1, 0, 3, 3, 3, 3, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0]
    objectLevel.width = 14
    objectLevel.height = 9
    objectLevel.mapArray = []
    objectLevel.step = 80
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 25

    listObjectRelaxLevels[158] = objectLevel

    objectLevel = {
        "name": 'level_160'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 3, 3, 3, 2, 2, 0, 0, 0, 0, 0, 2, 3, 3, 2, 2, 2, 2, 3, 3, 2, 0, 0, 0, 2, 3, 2, 2, 3, 3, 3, 3, 2, 2, 3, 2, 0, 0, 2, 3, 2, 3, 2, 2, 2, 2, 3, 2, 3, 2, 0, 2, 3, 2, 3, 2, 3, 3, 3, 3, 2, 3, 2, 3, 2, 2, 3, 2, 3, 2, 3, 2, 2, 3, 2, 3, 2, 3, 2, 2, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3, 2, 3, 2, 2, 3, 2, 3, 2, 2, 2, 2, 3, 2, 3, 2, 3, 2, 0, 2, 3, 2, 3, 3, 3, 3, 2, 3, 2, 3, 2, 0, 0, 2, 3, 2, 2, 2, 2, 2, 3, 2, 2, 3, 2, 0, 0, 0, 2, 3, 3, 3, 3, 3, 2, 3, 3, 2, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 3, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 2, 0, 0, 0, 0, 0]
    objectLevel.width = 14
    objectLevel.height = 14
    objectLevel.mapArray = []
    objectLevel.step = 145
    objectLevel.countQuickTip = 10
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 25
    objectLevel.taskStepStar3 = 35

    listObjectRelaxLevels[159] = objectLevel
}

function initObjectLevels() {
    //------------- location_1 begin-------------------------
    var objectLevel = {
        "name": 'test_1'
    }
    objectLevel.map = [0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0]
    objectLevel.width = 5
    objectLevel.height = 5
    objectLevel.mapArray = []
    objectLevel.typeLocation = 0
    objectLevel.step = 15
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.time = 30
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 1
    objectLevel.countQuickTip = 5

    listObjectLevels[0] = objectLevel

    objectLevel = {
        "name": 'test_2'
    }
    objectLevel.map = [0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0]
    objectLevel.width = 6
    objectLevel.height = 6
    objectLevel.mapArray = []
    objectLevel.typeLocation = 0
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 1
    objectLevel.countQuickTip = 5
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 20
    objectLevel.time = 50
    listObjectLevels[1] = objectLevel

    objectLevel = {
        "name": 'test_3'
    }
    objectLevel.map = [0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0]
    objectLevel.width = 5
    objectLevel.height = 5
    objectLevel.mapArray = []
    objectLevel.typeLocation = 0
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 1
    objectLevel.countQuickTip = 5
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 15
    listObjectLevels[2] = objectLevel

    objectLevel = {
        "name": 'test_4'
    }
    objectLevel.map = [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0]
    objectLevel.width = 9
    objectLevel.height = 11
    objectLevel.mapArray = []
    objectLevel.typeLocation = 0
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 1
    objectLevel.countQuickTip = 5
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 50
    listObjectLevels[3] = objectLevel

    objectLevel = {
        "name": 'test_5'
    }
    objectLevel.map = [0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0]
    objectLevel.width = 7
    objectLevel.height = 7
    objectLevel.mapArray = []
    objectLevel.typeLocation = 0
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 1
    objectLevel.countQuickTip = 5
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 30
    listObjectLevels[4] = objectLevel

    objectLevel = {
        "name": 'test_6'
    }
    objectLevel.map = [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0]
    objectLevel.width = 6
    objectLevel.height = 6
    objectLevel.mapArray = []
    objectLevel.typeLocation = 0
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 1
    objectLevel.countQuickTip = 5
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 30
    listObjectLevels[5] = objectLevel

    objectLevel = {
        "name": 'test_7'
    }
    objectLevel.map = [1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1]
    objectLevel.width = 7
    objectLevel.height = 7
    objectLevel.mapArray = []
    objectLevel.typeLocation = 0
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 1
    objectLevel.countQuickTip = 5
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 35
    listObjectLevels[6] = objectLevel

    objectLevel = {
        "name": 'test_8'
    }
    objectLevel.map = [0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]
    objectLevel.width = 7
    objectLevel.height = 9
    objectLevel.mapArray = []
    objectLevel.typeLocation = 0
    objectLevel.countBlockTime = 1
    objectLevel.countBlockStep = 0
    objectLevel.countQuickTip = 5
    objectLevel.typeStep = 0
    objectLevel.typeTime = 1
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskTimeStar1 = 5
    objectLevel.taskTimeStar2 = 10
    objectLevel.taskTimeStar3 = 15
    objectLevel.step = 45
    objectLevel.time = 50
    listObjectLevels[7] = objectLevel

    objectLevel = {
        "name": 'test_9'
    }
    objectLevel.map = [1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1]
    objectLevel.width = 10
    objectLevel.height = 10
    objectLevel.mapArray = []
    objectLevel.typeLocation = 0
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 1
    objectLevel.countQuickTip = 5
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 55
    listObjectLevels[8] = objectLevel

    objectLevel = {
        "name": 'test_10'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 13
    objectLevel.height = 7
    objectLevel.mapArray = []
    objectLevel.typeLocation = 0
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 1
    objectLevel.countQuickTip = 5
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5
    objectLevel.step = 35
    listObjectLevels[9] = objectLevel

    objectLevel = {
        "name": 'test_11'
    }
    objectLevel.map = [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1]
    objectLevel.width = 6
    objectLevel.height = 8
    objectLevel.mapArray = []
    objectLevel.typeLocation = 0
    objectLevel.countBlockTime = 1
    objectLevel.countBlockStep = 0
    objectLevel.countQuickTip = 5
    objectLevel.typeStep = 0
    objectLevel.typeTime = 1
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskTimeStar1 = 2
    objectLevel.taskTimeStar2 = 3
    objectLevel.taskTimeStar3 = 5
    objectLevel.step = 35
    objectLevel.time = 45
    listObjectLevels[10] = objectLevel

    objectLevel = {
        "name": 'test_12'
    }
    objectLevel.map = [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]
    objectLevel.width = 8
    objectLevel.height = 8
    objectLevel.mapArray = []
    objectLevel.typeLocation = 0
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 1
    objectLevel.countQuickTip = 5
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5
    objectLevel.step = 35
    listObjectLevels[11] = objectLevel

    objectLevel = {
        "name": 'test_13'
    }
    objectLevel.map = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1]
    objectLevel.width = 9
    objectLevel.height = 9
    objectLevel.mapArray = []
    objectLevel.typeLocation = 0
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 3
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5
    objectLevel.step = 50
    listObjectLevels[12] = objectLevel

    objectLevel = {
        "name": 'test_14'
    }
    objectLevel.map = [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1]
    objectLevel.width = 10
    objectLevel.height = 10
    objectLevel.mapArray = []
    objectLevel.typeLocation = 0
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 3
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5
    objectLevel.step = 80
    listObjectLevels[13] = objectLevel

    objectLevel = {
        "name": 'test_15'
    }
    objectLevel.map = [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0]
    objectLevel.width = 11
    objectLevel.height = 14
    objectLevel.mapArray = []
    objectLevel.typeLocation = 0
    objectLevel.countBlockTime = 3
    objectLevel.countBlockStep = 0
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 0
    objectLevel.typeTime = 1
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskTimeStar1 = 5
    objectLevel.taskTimeStar2 = 10
    objectLevel.taskTimeStar3 = 15
    objectLevel.step = 70
    objectLevel.time = 80
    listObjectLevels[14] = objectLevel

    objectLevel = {
        "name": 'test_16'
    }
    objectLevel.map = [1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1]
    objectLevel.width = 11
    objectLevel.height = 11
    objectLevel.mapArray = []
    objectLevel.typeLocation = 0
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 3
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5
    objectLevel.step = 80
    listObjectLevels[15] = objectLevel

    objectLevel = {
        "name": 'test_17'
    }
    objectLevel.map = [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0]
    objectLevel.width = 10
    objectLevel.height = 10
    objectLevel.mapArray = []
    objectLevel.typeLocation = 0
    objectLevel.countBlockTime = 3
    objectLevel.countBlockStep = 0
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 0
    objectLevel.typeTime = 1
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskTimeStar1 = 5
    objectLevel.taskTimeStar2 = 10
    objectLevel.taskTimeStar3 = 15
    objectLevel.step = 60
    objectLevel.time = 45
    listObjectLevels[16] = objectLevel

    objectLevel = {
        "name": 'test_18'
    }
    objectLevel.map = [0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0]
    objectLevel.width = 10
    objectLevel.height = 10
    objectLevel.mapArray = []
    objectLevel.typeLocation = 0
    objectLevel.countBlockTime = 3
    objectLevel.countBlockStep = 0
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 0
    objectLevel.typeTime = 1
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskTimeStar1 = 5
    objectLevel.taskTimeStar2 = 10
    objectLevel.taskTimeStar3 = 15
    objectLevel.step = 80
    objectLevel.time = 75
    listObjectLevels[17] = objectLevel

    objectLevel = {
        "name": 'test_19'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0]
    objectLevel.width = 12
    objectLevel.height = 11
    objectLevel.mapArray = []
    objectLevel.typeLocation = 0
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 3
    objectLevel.countQuickTip = 15
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 3
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10
    objectLevel.step = 55
    listObjectLevels[18] = objectLevel

    objectLevel = {
        "name": 'test_20'
    }
    objectLevel.map = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0]
    objectLevel.width = 14
    objectLevel.height = 14
    objectLevel.mapArray = []
    objectLevel.typeLocation = 0
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 20
    objectLevel.step = 120
    listObjectLevels[19] = objectLevel

    //------------- location_1 end-------------------------

    //------------- location_2 begin-------------------------
    objectLevel = {
        "name": 'test_21'
    }
    objectLevel.map = [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0]
    objectLevel.width = 11
    objectLevel.height = 11
    objectLevel.mapArray = []
    objectLevel.typeLocation = 1
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 3
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 60
    listObjectLevels[20] = objectLevel

    objectLevel = {
        "name": 'test_22'
    }
    objectLevel.map = [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0]
    objectLevel.width = 11
    objectLevel.height = 11
    objectLevel.mapArray = []
    objectLevel.typeLocation = 1
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 3
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 60
    listObjectLevels[21] = objectLevel

    objectLevel = {
        "name": 'test_23'
    }
    objectLevel.map = [0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0]
    objectLevel.width = 7
    objectLevel.height = 6
    objectLevel.mapArray = []
    objectLevel.typeLocation = 1
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 1
    objectLevel.countQuickTip = 5
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5
    objectLevel.step = 30
    listObjectLevels[22] = objectLevel

    objectLevel = {
        "name": 'test_24'
    }
    objectLevel.map = [0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0]
    objectLevel.width = 13
    objectLevel.height = 13
    objectLevel.mapArray = []
    objectLevel.typeLocation = 1
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 15
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 110
    listObjectLevels[23] = objectLevel

    objectLevel = {
        "name": 'test_25'
    }
    objectLevel.map = [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0]
    objectLevel.width = 13
    objectLevel.height = 13
    objectLevel.mapArray = []
    objectLevel.typeLocation = 1
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 15
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 110
    listObjectLevels[24] = objectLevel

    objectLevel = {
        "name": 'test_26'
    }
    objectLevel.map = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0]
    objectLevel.width = 11
    objectLevel.height = 8
    objectLevel.mapArray = []
    objectLevel.typeLocation = 1
    objectLevel.countBlockTime = 3
    objectLevel.countBlockStep = 0
    objectLevel.countQuickTip = 15
    objectLevel.typeStep = 0
    objectLevel.typeTime = 1
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskTimeStar1 = 5
    objectLevel.taskTimeStar2 = 10
    objectLevel.taskTimeStar3 = 15
    objectLevel.step = 40
    objectLevel.time = 20
    listObjectLevels[25] = objectLevel

    objectLevel = {
        "name": 'test_27'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 13
    objectLevel.height = 13
    objectLevel.mapArray = []
    objectLevel.typeLocation = 1
    objectLevel.countBlockTime = 5
    objectLevel.countBlockStep = 0
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 0
    objectLevel.typeTime = 1
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskTimeStar1 = 5
    objectLevel.taskTimeStar2 = 10
    objectLevel.taskTimeStar3 = 25
    objectLevel.step = 80
    objectLevel.time = 50
    listObjectLevels[26] = objectLevel

    objectLevel = {
        "name": 'test_28'
    }
    objectLevel.map = [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
    objectLevel.width = 10
    objectLevel.height = 10
    objectLevel.mapArray = []
    objectLevel.typeLocation = 1
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 15
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 55
    listObjectLevels[27] = objectLevel

    objectLevel = {
        "name": 'test_29'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0]
    objectLevel.width = 13
    objectLevel.height = 13
    objectLevel.mapArray = []
    objectLevel.typeLocation = 1
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 95
    listObjectLevels[28] = objectLevel

    objectLevel = {
        "name": 'test_30'
    }
    objectLevel.map = [1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1]
    objectLevel.width = 13
    objectLevel.height = 13
    objectLevel.mapArray = []
    objectLevel.typeLocation = 1
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 3
    objectLevel.countQuickTip = 5
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 15
    objectLevel.taskStepStar2 = 20
    objectLevel.taskStepStar3 = 25
    objectLevel.step = 90
    listObjectLevels[29] = objectLevel

    objectLevel = {
        "name": 'test_31'
    }
    objectLevel.map = [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1]
    objectLevel.width = 11
    objectLevel.height = 11
    objectLevel.mapArray = []
    objectLevel.typeLocation = 1
    objectLevel.countBlockTime = 1
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 0
    objectLevel.typeTime = 1
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskTimeStar1 = 5
    objectLevel.taskTimeStar2 = 10
    objectLevel.taskTimeStar3 = 25
    objectLevel.step = 85
    objectLevel.time = 50
    listObjectLevels[30] = objectLevel

    objectLevel = {
        "name": 'test_32'
    }
    objectLevel.map = [1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 10
    objectLevel.height = 10
    objectLevel.mapArray = []
    objectLevel.typeLocation = 1
    objectLevel.countBlockTime = 5
    objectLevel.countBlockStep = 0
    objectLevel.countQuickTip = 15
    objectLevel.typeStep = 0
    objectLevel.typeTime = 1
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskTimeStar1 = 5
    objectLevel.taskTimeStar2 = 10
    objectLevel.taskTimeStar3 = 15
    objectLevel.step = 60
    objectLevel.time = 30
    listObjectLevels[31] = objectLevel

    objectLevel = {
        "name": 'test_33'
    }
    objectLevel.map = [0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0]
    objectLevel.width = 11
    objectLevel.height = 11
    objectLevel.mapArray = []
    objectLevel.typeLocation = 1
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 15
    objectLevel.taskStepStar2 = 20
    objectLevel.taskStepStar3 = 25
    objectLevel.step = 85
    listObjectLevels[32] = objectLevel

    objectLevel = {
        "name": 'test_34'
    }
    objectLevel.map = [0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0]
    objectLevel.width = 10
    objectLevel.height = 10
    objectLevel.mapArray = []
    objectLevel.typeLocation = 1
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 15
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 55
    listObjectLevels[33] = objectLevel

    objectLevel = {
        "name": 'test_35'
    }
    objectLevel.map = [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]
    objectLevel.width = 11
    objectLevel.height = 11
    objectLevel.mapArray = []
    objectLevel.typeLocation = 1
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 85
    listObjectLevels[34] = objectLevel

    objectLevel = {
        "name": 'test_36'
    }
    objectLevel.map = [1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0]
    objectLevel.width = 11
    objectLevel.height = 11
    objectLevel.mapArray = []
    objectLevel.typeLocation = 1
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 15
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 80
    listObjectLevels[35] = objectLevel

    objectLevel = {
        "name": 'test_37'
    }
    objectLevel.map = [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0]
    objectLevel.width = 13
    objectLevel.height = 13
    objectLevel.mapArray = []
    objectLevel.typeLocation = 1
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 3
    objectLevel.countQuickTip = 5
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 15
    objectLevel.taskStepStar2 = 20
    objectLevel.taskStepStar3 = 25
    objectLevel.step = 100
    listObjectLevels[36] = objectLevel

    objectLevel = {
        "name": 'test_38'
    }
    objectLevel.map = [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0]
    objectLevel.width = 11
    objectLevel.height = 11
    objectLevel.mapArray = []
    objectLevel.typeLocation = 1
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 75
    listObjectLevels[37] = objectLevel

    objectLevel = {
        "name": 'test_39'
    }
    objectLevel.map = [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0]
    objectLevel.width = 11
    objectLevel.height = 11
    objectLevel.mapArray = []
    objectLevel.typeLocation = 1
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 15
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 50
    listObjectLevels[38] = objectLevel

    objectLevel = {
        "name": 'test_40'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0]
    objectLevel.width = 16
    objectLevel.height = 16
    objectLevel.mapArray = []
    objectLevel.typeLocation = 1
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 25
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 15
    objectLevel.taskStepStar2 = 20
    objectLevel.taskStepStar3 = 35
    objectLevel.step = 135
    listObjectLevels[39] = objectLevel

    //------------- location_2 end-------------------------

    //------------- location_3 begin-------------------------
    objectLevel = {
        "name": 'test_41'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0]
    objectLevel.width = 13
    objectLevel.height = 13
    objectLevel.mapArray = []
    objectLevel.typeLocation = 2
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 3
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 75
    listObjectLevels[40] = objectLevel

    objectLevel = {
        "name": 'test_42'
    }
    objectLevel.map = [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0]
    objectLevel.width = 11
    objectLevel.height = 11
    objectLevel.mapArray = []
    objectLevel.typeLocation = 2
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 3
    objectLevel.countQuickTip = 15
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 70
    listObjectLevels[41] = objectLevel

    objectLevel = {
        "name": 'test_43'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 17
    objectLevel.height = 17
    objectLevel.mapArray = []
    objectLevel.typeLocation = 2
    objectLevel.countBlockTime = 3
    objectLevel.countBlockStep = 0
    objectLevel.countQuickTip = 15
    objectLevel.typeStep = 0
    objectLevel.typeTime = 1
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskTimeStar1 = 5
    objectLevel.taskTimeStar2 = 10
    objectLevel.taskTimeStar3 = 15
    objectLevel.step = 80
    objectLevel.time = 50
    listObjectLevels[42] = objectLevel

    objectLevel = {
        "name": 'test_44'
    }
    objectLevel.map = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
    objectLevel.width = 15
    objectLevel.height = 15
    objectLevel.mapArray = []
    objectLevel.typeLocation = 2
    objectLevel.countBlockTime = 3
    objectLevel.countBlockStep = 0
    objectLevel.countQuickTip = 15
    objectLevel.typeStep = 0
    objectLevel.typeTime = 1
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskTimeStar1 = 15
    objectLevel.taskTimeStar2 = 20
    objectLevel.taskTimeStar3 = 25
    objectLevel.step = 130
    objectLevel.time = 80
    listObjectLevels[43] = objectLevel

    objectLevel = {
        "name": 'test_45'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
    objectLevel.width = 11
    objectLevel.height = 11
    objectLevel.mapArray = []
    objectLevel.typeLocation = 2
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 3
    objectLevel.countQuickTip = 15
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 45
    listObjectLevels[44] = objectLevel

    objectLevel = {
        "name": 'test_46'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0]
    objectLevel.width = 13
    objectLevel.height = 13
    objectLevel.mapArray = []
    objectLevel.typeLocation = 2
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 100
    listObjectLevels[45] = objectLevel

    objectLevel = {
        "name": 'test_47'
    }
    objectLevel.map = [1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0]
    objectLevel.width = 11
    objectLevel.height = 11
    objectLevel.mapArray = []
    objectLevel.typeLocation = 2
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 80
    listObjectLevels[46] = objectLevel

    objectLevel = {
        "name": 'test_48'
    }
    objectLevel.map = [0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 13
    objectLevel.height = 12
    objectLevel.mapArray = []
    objectLevel.typeLocation = 2
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 3
    objectLevel.countQuickTip = 15
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 60
    listObjectLevels[47] = objectLevel

    objectLevel = {
        "name": 'test_49'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0]
    objectLevel.width = 13
    objectLevel.height = 17
    objectLevel.mapArray = []
    objectLevel.typeLocation = 2
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 15
    objectLevel.taskStepStar2 = 20
    objectLevel.taskStepStar3 = 35
    objectLevel.step = 140
    listObjectLevels[48] = objectLevel

    objectLevel = {
        "name": 'test_50'
    }
    objectLevel.map = [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0]
    objectLevel.width = 8
    objectLevel.height = 8
    objectLevel.mapArray = []
    objectLevel.typeLocation = 2
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 3
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5
    objectLevel.step = 40
    listObjectLevels[49] = objectLevel

    objectLevel = {
        "name": 'test_51'
    }
    objectLevel.map = [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0]
    objectLevel.width = 13
    objectLevel.height = 12
    objectLevel.mapArray = []
    objectLevel.typeLocation = 2
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 3
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 75
    listObjectLevels[50] = objectLevel

    objectLevel = {
        "name": 'test_52'
    }
    objectLevel.map = [0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0]
    objectLevel.width = 15
    objectLevel.height = 15
    objectLevel.mapArray = []
    objectLevel.typeLocation = 2
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 135
    listObjectLevels[51] = objectLevel

    objectLevel = {
        "name": 'test_53'
    }
    objectLevel.map = [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
    objectLevel.width = 11
    objectLevel.height = 24
    objectLevel.mapArray = []
    objectLevel.typeLocation = 2
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 15
    objectLevel.taskStepStar2 = 20
    objectLevel.taskStepStar3 = 25
    objectLevel.step = 135
    listObjectLevels[52] = objectLevel

    objectLevel = {
        "name": 'test_54'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0]
    objectLevel.width = 13
    objectLevel.height = 13
    objectLevel.mapArray = []
    objectLevel.typeLocation = 2
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 20
    objectLevel.step = 95
    listObjectLevels[53] = objectLevel

    objectLevel = {
        "name": 'test_55'
    }
    objectLevel.map = [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
    objectLevel.width = 13
    objectLevel.height = 12
    objectLevel.mapArray = []
    objectLevel.typeLocation = 2
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 20
    objectLevel.step = 90
    listObjectLevels[54] = objectLevel

    objectLevel = {
        "name": 'test_56'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 13
    objectLevel.height = 13
    objectLevel.mapArray = []
    objectLevel.typeLocation = 2
    objectLevel.countBlockTime = 3
    objectLevel.countBlockStep = 0
    objectLevel.countQuickTip = 15
    objectLevel.typeStep = 0
    objectLevel.typeTime = 1
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskTimeStar1 = 5
    objectLevel.taskTimeStar2 = 10
    objectLevel.taskTimeStar3 = 15
    objectLevel.step = 55
    objectLevel.time = 30
    listObjectLevels[55] = objectLevel

    objectLevel = {
        "name": 'test_57'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 13
    objectLevel.height = 13
    objectLevel.mapArray = []
    objectLevel.typeLocation = 2
    objectLevel.countBlockTime = 3
    objectLevel.countBlockStep = 0
    objectLevel.countQuickTip = 15
    objectLevel.typeStep = 0
    objectLevel.typeTime = 1
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskTimeStar1 = 5
    objectLevel.taskTimeStar2 = 10
    objectLevel.taskTimeStar3 = 15
    objectLevel.step = 75
    objectLevel.time = 60
    listObjectLevels[56] = objectLevel

    objectLevel = {
        "name": 'test_58'
    }
    objectLevel.map = [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0]
    objectLevel.width = 13
    objectLevel.height = 13
    objectLevel.mapArray = []
    objectLevel.typeLocation = 2
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 3
    objectLevel.countQuickTip = 15
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 95
    listObjectLevels[57] = objectLevel

    objectLevel = {
        "name": 'test_59'
    }
    objectLevel.map = [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
    objectLevel.width = 10
    objectLevel.height = 10
    objectLevel.mapArray = []
    objectLevel.typeLocation = 2
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 3
    objectLevel.countQuickTip = 15
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 55
    listObjectLevels[58] = objectLevel

    objectLevel = {
        "name": 'test_60'
    }
    objectLevel.map = [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0]
    objectLevel.width = 13
    objectLevel.height = 13
    objectLevel.mapArray = []
    objectLevel.typeLocation = 2
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 20
    objectLevel.step = 90
    listObjectLevels[59] = objectLevel

    //------------- location_3 end-------------------------

    //------------- location_4 begin-------------------------
    objectLevel = {
        "name": 'test_61'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1]
    objectLevel.width = 16
    objectLevel.height = 16
    objectLevel.mapArray = []
    objectLevel.typeLocation = 3
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 20
    objectLevel.taskStepStar2 = 25
    objectLevel.taskStepStar3 = 35
    objectLevel.step = 150
    listObjectLevels[60] = objectLevel

    objectLevel = {
        "name": 'test_62'
    }
    objectLevel.map = [1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1]
    objectLevel.width = 10
    objectLevel.height = 10
    objectLevel.mapArray = []
    objectLevel.typeLocation = 3
    objectLevel.countBlockTime = 3
    objectLevel.countBlockStep = 0
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 0
    objectLevel.typeTime = 1
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskTimeStar1 = 5
    objectLevel.taskTimeStar2 = 10
    objectLevel.taskTimeStar3 = 15
    objectLevel.step = 70
    objectLevel.time = 40
    listObjectLevels[61] = objectLevel

    objectLevel = {
        "name": 'test_63'
    }
    objectLevel.map = [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1]
    objectLevel.width = 11
    objectLevel.height = 11
    objectLevel.mapArray = []
    objectLevel.typeLocation = 3
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 25
    objectLevel.step = 110
    listObjectLevels[62] = objectLevel

    objectLevel = {
        "name": 'test_64'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 20
    objectLevel.height = 17
    objectLevel.mapArray = []
    objectLevel.typeLocation = 3
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 25
    objectLevel.step = 170
    listObjectLevels[63] = objectLevel

    objectLevel = {
        "name": 'test_65'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
    objectLevel.width = 19
    objectLevel.height = 19
    objectLevel.mapArray = []
    objectLevel.typeLocation = 3
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 25
    objectLevel.step = 180
    listObjectLevels[64] = objectLevel

    objectLevel = {
        "name": 'test_66'
    }
    objectLevel.map = [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 25
    objectLevel.height = 12
    objectLevel.mapArray = []
    objectLevel.typeLocation = 3
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 25
    objectLevel.step = 140
    listObjectLevels[65] = objectLevel

    objectLevel = {
        "name": 'test_67'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 19
    objectLevel.height = 19
    objectLevel.mapArray = []
    objectLevel.typeLocation = 3
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 25
    objectLevel.step = 145
    listObjectLevels[66] = objectLevel

    objectLevel = {
        "name": 'test_68'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
    objectLevel.width = 20
    objectLevel.height = 24
    objectLevel.mapArray = []
    objectLevel.typeLocation = 3
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 25
    objectLevel.step = 185
    listObjectLevels[67] = objectLevel

    objectLevel = {
        "name": 'test_69'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 19
    objectLevel.height = 21
    objectLevel.mapArray = []
    objectLevel.typeLocation = 3
    objectLevel.countBlockTime = 10
    objectLevel.countBlockStep = 0
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 0
    objectLevel.typeTime = 1
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskTimeStar1 = 5
    objectLevel.taskTimeStar2 = 10
    objectLevel.taskTimeStar3 = 15
    objectLevel.step = 185
    objectLevel.time = 220
    listObjectLevels[68] = objectLevel

    objectLevel = {
        "name": 'test_70'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 15
    objectLevel.height = 9
    objectLevel.mapArray = []
    objectLevel.typeLocation = 3
    objectLevel.countBlockTime = 5
    objectLevel.countBlockStep = 0
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 0
    objectLevel.typeTime = 1
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskTimeStar1 = 5
    objectLevel.taskTimeStar2 = 10
    objectLevel.taskTimeStar3 = 15
    objectLevel.step = 80
    objectLevel.time = 80
    listObjectLevels[69] = objectLevel

    objectLevel = {
        "name": 'test_71'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 17
    objectLevel.height = 19
    objectLevel.mapArray = []
    objectLevel.typeLocation = 3
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 20
    objectLevel.step = 145
    listObjectLevels[70] = objectLevel

    objectLevel = {
        "name": 'test_72'
    }
    objectLevel.map = [0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0]
    objectLevel.width = 11
    objectLevel.height = 11
    objectLevel.mapArray = []
    objectLevel.typeLocation = 3
    objectLevel.countBlockTime = 5
    objectLevel.countBlockStep = 0
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 0
    objectLevel.typeTime = 1
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskTimeStar1 = 5
    objectLevel.taskTimeStar2 = 10
    objectLevel.taskTimeStar3 = 15
    objectLevel.step = 75
    objectLevel.time = 60
    listObjectLevels[71] = objectLevel

    objectLevel = {
        "name": 'test_73'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0]
    objectLevel.width = 14
    objectLevel.height = 17
    objectLevel.mapArray = []
    objectLevel.typeLocation = 3
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 20
    objectLevel.step = 85
    listObjectLevels[72] = objectLevel

    objectLevel = {
        "name": 'test_74'
    }
    objectLevel.map = [0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 15
    objectLevel.height = 15
    objectLevel.mapArray = []
    objectLevel.typeLocation = 3
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 20
    objectLevel.step = 110
    listObjectLevels[73] = objectLevel

    objectLevel = {
        "name": 'test_75'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0]
    objectLevel.width = 14
    objectLevel.height = 16
    objectLevel.mapArray = []
    objectLevel.typeLocation = 3
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 15
    objectLevel.taskStepStar2 = 20
    objectLevel.taskStepStar3 = 25
    objectLevel.step = 125
    listObjectLevels[74] = objectLevel

    objectLevel = {
        "name": 'test_76'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0]
    objectLevel.width = 14
    objectLevel.height = 14
    objectLevel.mapArray = []
    objectLevel.typeLocation = 3
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 110
    listObjectLevels[75] = objectLevel

    objectLevel = {
        "name": 'test_77'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0]
    objectLevel.width = 16
    objectLevel.height = 16
    objectLevel.mapArray = []
    objectLevel.typeLocation = 3
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 15
    objectLevel.taskStepStar2 = 20
    objectLevel.taskStepStar3 = 25
    objectLevel.step = 150
    listObjectLevels[76] = objectLevel

    objectLevel = {
        "name": 'test_78'
    }
    objectLevel.map = [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0]
    objectLevel.width = 12
    objectLevel.height = 12
    objectLevel.mapArray = []
    objectLevel.typeLocation = 3
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 15
    objectLevel.taskStepStar2 = 20
    objectLevel.taskStepStar3 = 25
    objectLevel.step = 95
    listObjectLevels[77] = objectLevel

    objectLevel = {
        "name": 'test_79'
    }
    objectLevel.map = [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0]
    objectLevel.width = 21
    objectLevel.height = 22
    objectLevel.mapArray = []
    objectLevel.typeLocation = 3
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 20
    objectLevel.step = 255
    listObjectLevels[78] = objectLevel

    objectLevel = {
        "name": 'test_80'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 14
    objectLevel.height = 26
    objectLevel.mapArray = []
    objectLevel.typeLocation = 3
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 20
    objectLevel.step = 135
    listObjectLevels[79] = objectLevel

    //------------- location_4 end-------------------------

    //------------- location_5 begin-------------------------
    objectLevel = {
        "name": 'test_81'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 22
    objectLevel.height = 20
    objectLevel.mapArray = []
    objectLevel.typeLocation = 4
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 20
    objectLevel.taskStepStar2 = 25
    objectLevel.taskStepStar3 = 35
    objectLevel.step = 150
    listObjectLevels[80] = objectLevel

    objectLevel = {
        "name": 'test_82'
    }
    objectLevel.map = [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0]
    objectLevel.width = 14
    objectLevel.height = 12
    objectLevel.mapArray = []
    objectLevel.typeLocation = 4
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 15
    objectLevel.taskStepStar2 = 20
    objectLevel.taskStepStar3 = 25
    objectLevel.step = 110
    listObjectLevels[81] = objectLevel

    objectLevel = {
        "name": 'test_83'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0]
    objectLevel.width = 14
    objectLevel.height = 14
    objectLevel.mapArray = []
    objectLevel.typeLocation = 4
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 3
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 75
    listObjectLevels[82] = objectLevel

    objectLevel = {
        "name": 'test_84'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0]
    objectLevel.width = 17
    objectLevel.height = 17
    objectLevel.mapArray = []
    objectLevel.typeLocation = 4
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 150
    listObjectLevels[83] = objectLevel

    objectLevel = {
        "name": 'test_85'
    }
    objectLevel.map = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
    objectLevel.width = 7
    objectLevel.height = 10
    objectLevel.mapArray = []
    objectLevel.typeLocation = 4
    objectLevel.countBlockTime = 1
    objectLevel.countBlockStep = 0
    objectLevel.countQuickTip = 5
    objectLevel.typeStep = 0
    objectLevel.typeTime = 1
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskTimeStar1 = 2
    objectLevel.taskTimeStar2 = 3
    objectLevel.taskTimeStar3 = 5
    objectLevel.step = 25
    objectLevel.time = 20
    listObjectLevels[84] = objectLevel

    objectLevel = {
        "name": 'test_86'
    }
    objectLevel.map = [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0]
    objectLevel.width = 10
    objectLevel.height = 11
    objectLevel.mapArray = []
    objectLevel.typeLocation = 4
    objectLevel.countBlockTime = 3
    objectLevel.countBlockStep = 0
    objectLevel.countQuickTip = 5
    objectLevel.typeStep = 0
    objectLevel.typeTime = 1
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskTimeStar1 = 2
    objectLevel.taskTimeStar2 = 3
    objectLevel.taskTimeStar3 = 5
    objectLevel.step = 60
    objectLevel.time = 60
    listObjectLevels[85] = objectLevel

    objectLevel = {
        "name": 'test_87'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 20
    objectLevel.height = 17
    objectLevel.mapArray = []
    objectLevel.typeLocation = 4
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 5
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 110
    listObjectLevels[86] = objectLevel

    objectLevel = {
        "name": 'test_88'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 17
    objectLevel.height = 17
    objectLevel.mapArray = []
    objectLevel.typeLocation = 4
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 130
    listObjectLevels[87] = objectLevel

    objectLevel = {
        "name": 'test_89'
    }
    objectLevel.map = [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
    objectLevel.width = 12
    objectLevel.height = 15
    objectLevel.mapArray = []
    objectLevel.typeLocation = 4
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5
    objectLevel.step = 55
    listObjectLevels[88] = objectLevel

    objectLevel = {
        "name": 'test_90'
    }
    objectLevel.map = [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
    objectLevel.width = 11
    objectLevel.height = 23
    objectLevel.mapArray = []
    objectLevel.typeLocation = 4
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 125
    listObjectLevels[89] = objectLevel

    objectLevel = {
        "name": 'test_91'
    }
    objectLevel.map = [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 13
    objectLevel.height = 14
    objectLevel.mapArray = []
    objectLevel.typeLocation = 4
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 3
    objectLevel.countQuickTip = 5
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5
    objectLevel.step = 65
    listObjectLevels[90] = objectLevel

    objectLevel = {
        "name": 'test_92'
    }
    objectLevel.map = [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0]
    objectLevel.width = 23
    objectLevel.height = 12
    objectLevel.mapArray = []
    objectLevel.typeLocation = 4
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 15
    objectLevel.taskStepStar2 = 20
    objectLevel.taskStepStar3 = 25
    objectLevel.step = 150
    listObjectLevels[91] = objectLevel

    objectLevel = {
        "name": 'test_93'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0]
    objectLevel.width = 13
    objectLevel.height = 14
    objectLevel.mapArray = []
    objectLevel.typeLocation = 4
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 100
    listObjectLevels[92] = objectLevel

    objectLevel = {
        "name": 'test_94'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0]
    objectLevel.width = 14
    objectLevel.height = 15
    objectLevel.mapArray = []
    objectLevel.typeLocation = 4
    objectLevel.countBlockTime = 3
    objectLevel.countBlockStep = 0
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 0
    objectLevel.typeTime = 1
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskTimeStar1 = 3
    objectLevel.taskTimeStar2 = 5
    objectLevel.taskTimeStar3 = 10
    objectLevel.step = 80
    objectLevel.time = 50
    listObjectLevels[93] = objectLevel

    objectLevel = {
        "name": 'test_95'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1]
    objectLevel.width = 24
    objectLevel.height = 18
    objectLevel.mapArray = []
    objectLevel.typeLocation = 4
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5
    objectLevel.step = 270
    listObjectLevels[94] = objectLevel

    objectLevel = {
        "name": 'test_96'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1]
    objectLevel.width = 13
    objectLevel.height = 21
    objectLevel.mapArray = []
    objectLevel.typeLocation = 4
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 25
    objectLevel.step = 140
    listObjectLevels[95] = objectLevel

    objectLevel = {
        "name": 'test_97'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 20
    objectLevel.height = 24
    objectLevel.mapArray = []
    objectLevel.typeLocation = 4
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 25
    objectLevel.taskStepStar2 = 30
    objectLevel.taskStepStar3 = 35
    objectLevel.step = 240
    listObjectLevels[96] = objectLevel

    objectLevel = {
        "name": 'test_98'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 23
    objectLevel.height = 23
    objectLevel.mapArray = []
    objectLevel.typeLocation = 4
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5
    objectLevel.step = 315
    listObjectLevels[97] = objectLevel

    objectLevel = {
        "name": 'test_99'
    }
    objectLevel.map = [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1]
    objectLevel.width = 18
    objectLevel.height = 18
    objectLevel.mapArray = []
    objectLevel.typeLocation = 4
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 3
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5
    objectLevel.step = 120
    listObjectLevels[98] = objectLevel

    objectLevel = {
        "name": 'test_100'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 29
    objectLevel.height = 25
    objectLevel.mapArray = []
    objectLevel.typeLocation = 4
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 30
    objectLevel.countQuickTip = 40
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5
    objectLevel.step = 335
    listObjectLevels[99] = objectLevel

    //------------- location_5 end-------------------------

    //------------- location_6 begin-------------------------
    objectLevel = {
        "name": 'test_101'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 14
    objectLevel.height = 15
    objectLevel.mapArray = []
    objectLevel.typeLocation = 5
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 15
    objectLevel.taskStepStar2 = 20
    objectLevel.taskStepStar3 = 25
    objectLevel.step = 120
    listObjectLevels[100] = objectLevel

    objectLevel = {
        "name": 'test_102'
    }
    objectLevel.map = [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0]
    objectLevel.width = 15
    objectLevel.height = 12
    objectLevel.mapArray = []
    objectLevel.typeLocation = 5
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 3
    objectLevel.countQuickTip = 5
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5
    objectLevel.step = 70
    listObjectLevels[101] = objectLevel

    objectLevel = {
        "name": 'test_103'
    }
    objectLevel.map = [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0]
    objectLevel.width = 17
    objectLevel.height = 18
    objectLevel.mapArray = []
    objectLevel.typeLocation = 5
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 20
    objectLevel.taskStepStar2 = 25
    objectLevel.taskStepStar3 = 30
    objectLevel.step = 200
    listObjectLevels[102] = objectLevel

    objectLevel = {
        "name": 'test_104'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]
    objectLevel.width = 17
    objectLevel.height = 20
    objectLevel.mapArray = []
    objectLevel.typeLocation = 5
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 135
    listObjectLevels[103] = objectLevel

    objectLevel = {
        "name": 'test_105'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 16
    objectLevel.height = 16
    objectLevel.mapArray = []
    objectLevel.typeLocation = 5
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 15
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 150
    listObjectLevels[104] = objectLevel

    //------------- location_6 end-------------------------
    objectLevel = {
        "name": 'test_106'
    }
    objectLevel.map = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 25
    objectLevel.height = 14
    objectLevel.mapArray = []
    objectLevel.typeLocation = 5
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 15
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 20
    objectLevel.step = 160
    listObjectLevels[105] = objectLevel

    objectLevel = {
        "name": 'test_107'
    }
    objectLevel.map = [0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0]
    objectLevel.width = 11
    objectLevel.height = 20
    objectLevel.mapArray = []
    objectLevel.typeLocation = 5
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 20
    objectLevel.step = 100
    listObjectLevels[106] = objectLevel

    objectLevel = {
        "name": 'test_108'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0]
    objectLevel.width = 17
    objectLevel.height = 16
    objectLevel.mapArray = []
    objectLevel.typeLocation = 5
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 20
    objectLevel.step = 130
    listObjectLevels[107] = objectLevel

    objectLevel = {
        "name": 'test_109'
    }
    objectLevel.map = [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]
    objectLevel.width = 17
    objectLevel.height = 15
    objectLevel.mapArray = []
    objectLevel.typeLocation = 5
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 15
    objectLevel.taskStepStar2 = 20
    objectLevel.taskStepStar3 = 25
    objectLevel.step = 145
    listObjectLevels[108] = objectLevel

    objectLevel = {
        "name": 'test_110'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 15
    objectLevel.height = 15
    objectLevel.mapArray = []
    objectLevel.typeLocation = 5
    objectLevel.countBlockTime = 3
    objectLevel.countBlockStep = 0
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 0
    objectLevel.typeTime = 1
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskTimeStar1 = 5
    objectLevel.taskTimeStar2 = 10
    objectLevel.taskTimeStar3 = 15
    objectLevel.step = 80
    objectLevel.time = 60
    listObjectLevels[109] = objectLevel

    objectLevel = {
        "name": 'test_111'
    }
    objectLevel.map = [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0]
    objectLevel.width = 11
    objectLevel.height = 12
    objectLevel.mapArray = []
    objectLevel.typeLocation = 5
    objectLevel.countBlockTime = 2
    objectLevel.countBlockStep = 0
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 0
    objectLevel.typeTime = 1
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskTimeStar1 = 2
    objectLevel.taskTimeStar2 = 3
    objectLevel.taskTimeStar3 = 10
    objectLevel.step = 70
    objectLevel.time = 55
    listObjectLevels[110] = objectLevel

    objectLevel = {
        "name": 'test_112'
    }
    objectLevel.map = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1]
    objectLevel.width = 21
    objectLevel.height = 25
    objectLevel.mapArray = []
    objectLevel.typeLocation = 5
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5
    objectLevel.step = 255
    listObjectLevels[111] = objectLevel

    objectLevel = {
        "name": 'test_113'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 17
    objectLevel.height = 17
    objectLevel.mapArray = []
    objectLevel.typeLocation = 5
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 20
    objectLevel.taskStepStar2 = 35
    objectLevel.taskStepStar3 = 40
    objectLevel.step = 205
    listObjectLevels[112] = objectLevel

    objectLevel = {
        "name": 'test_114'
    }
    objectLevel.map = [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 23
    objectLevel.height = 20
    objectLevel.mapArray = []
    objectLevel.typeLocation = 5
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5
    objectLevel.step = 275
    listObjectLevels[113] = objectLevel

    objectLevel = {
        "name": 'test_115'
    }
    objectLevel.map = [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1]
    objectLevel.width = 12
    objectLevel.height = 16
    objectLevel.mapArray = []
    objectLevel.typeLocation = 5
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 20
    objectLevel.taskStepStar3 = 30
    objectLevel.step = 140
    listObjectLevels[114] = objectLevel

    objectLevel = {
        "name": 'test_116'
    }
    objectLevel.map = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0]
    objectLevel.width = 16
    objectLevel.height = 15
    objectLevel.mapArray = []
    objectLevel.typeLocation = 5
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 135
    listObjectLevels[115] = objectLevel

    objectLevel = {
        "name": 'test_117'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 21
    objectLevel.height = 25
    objectLevel.mapArray = []
    objectLevel.typeLocation = 5
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 3
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10
    objectLevel.step = 300
    listObjectLevels[116] = objectLevel

    objectLevel = {
        "name": 'test_118'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1]
    objectLevel.width = 19
    objectLevel.height = 23
    objectLevel.mapArray = []
    objectLevel.typeLocation = 5
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 20
    objectLevel.taskStepStar2 = 40
    objectLevel.taskStepStar3 = 50
    objectLevel.step = 225
    listObjectLevels[117] = objectLevel

    objectLevel = {
        "name": 'test_119'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 14
    objectLevel.height = 20
    objectLevel.mapArray = []
    objectLevel.typeLocation = 5
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 20
    objectLevel.taskStepStar3 = 35
    objectLevel.step = 165
    listObjectLevels[118] = objectLevel

    objectLevel = {
        "name": 'test_120'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 23
    objectLevel.height = 25
    objectLevel.mapArray = []
    objectLevel.typeLocation = 5
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 3
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10
    objectLevel.step = 360
    listObjectLevels[119] = objectLevel

    //------------- location_6 end-------------------------

    //------------- location_7 end-------------------------
    objectLevel = {
        "name": 'test_121'
    }
    objectLevel.map = [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0]
    objectLevel.width = 18
    objectLevel.height = 17
    objectLevel.mapArray = []
    objectLevel.typeLocation = 6
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 20
    objectLevel.taskStepStar2 = 35
    objectLevel.taskStepStar3 = 40
    objectLevel.step = 185
    listObjectLevels[120] = objectLevel

    objectLevel = {
        "name": 'test_122'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 18
    objectLevel.height = 18
    objectLevel.mapArray = []
    objectLevel.typeLocation = 6
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10
    objectLevel.step = 110
    listObjectLevels[121] = objectLevel

    objectLevel = {
        "name": 'test_123'
    }
    objectLevel.map = [0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0]
    objectLevel.width = 11
    objectLevel.height = 15
    objectLevel.mapArray = []
    objectLevel.typeLocation = 6
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10
    objectLevel.step = 90
    listObjectLevels[122] = objectLevel

    objectLevel = {
        "name": 'test_124'
    }
    objectLevel.map = [0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0]
    objectLevel.width = 14
    objectLevel.height = 19
    objectLevel.mapArray = []
    objectLevel.typeLocation = 6
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 3
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10
    objectLevel.step = 130
    listObjectLevels[123] = objectLevel

    objectLevel = {
        "name": 'test_125'
    }
    objectLevel.map = [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 15
    objectLevel.height = 15
    objectLevel.mapArray = []
    objectLevel.typeLocation = 6
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 3
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10
    objectLevel.step = 130
    listObjectLevels[124] = objectLevel

    objectLevel = {
        "name": 'test_126'
    }
    objectLevel.map = [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
    objectLevel.width = 9
    objectLevel.height = 15
    objectLevel.mapArray = []
    objectLevel.typeLocation = 6
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 3
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10
    objectLevel.step = 80
    listObjectLevels[125] = objectLevel

    objectLevel = {
        "name": 'test_127'
    }
    objectLevel.map = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 20
    objectLevel.height = 16
    objectLevel.mapArray = []
    objectLevel.typeLocation = 6
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 3
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 20
    objectLevel.taskStepStar3 = 30
    objectLevel.step = 170
    listObjectLevels[126] = objectLevel

    objectLevel = {
        "name": 'test_128'
    }
    objectLevel.map = [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0]
    objectLevel.width = 17
    objectLevel.height = 19
    objectLevel.mapArray = []
    objectLevel.typeLocation = 6
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 10
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 20
    objectLevel.taskStepStar2 = 30
    objectLevel.taskStepStar3 = 40
    objectLevel.step = 220
    listObjectLevels[127] = objectLevel

    objectLevel = {
        "name": 'test_129'
    }
    objectLevel.map = [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    objectLevel.width = 11
    objectLevel.height = 16
    objectLevel.mapArray = []
    objectLevel.typeLocation = 6
    objectLevel.countBlockTime = 3
    objectLevel.countBlockStep = 0
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 0
    objectLevel.typeTime = 1
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskTimeStar1 = 3
    objectLevel.taskTimeStar2 = 5
    objectLevel.taskTimeStar3 = 10
    objectLevel.step = 90
    objectLevel.time = 80
    listObjectLevels[128] = objectLevel

    objectLevel = {
        "name": 'test_130'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0]
    objectLevel.width = 14
    objectLevel.height = 9
    objectLevel.mapArray = []
    objectLevel.typeLocation = 6
    objectLevel.countBlockTime = 3
    objectLevel.countBlockStep = 0
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 0
    objectLevel.typeTime = 1
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskTimeStar1 = 3
    objectLevel.taskTimeStar2 = 5
    objectLevel.taskTimeStar3 = 10
    objectLevel.step = 70
    objectLevel.time = 60
    listObjectLevels[129] = objectLevel

    objectLevel = {
        "name": 'test_131'
    }
    objectLevel.map = [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]
    objectLevel.width = 15
    objectLevel.height = 14
    objectLevel.mapArray = []
    objectLevel.typeLocation = 6
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 3
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10
    objectLevel.step = 100
    listObjectLevels[130] = objectLevel

    objectLevel = {
        "name": 'test_132'
    }
    objectLevel.map = [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 15
    objectLevel.height = 10
    objectLevel.mapArray = []
    objectLevel.typeLocation = 6
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 3
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 3
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10
    objectLevel.step = 95
    listObjectLevels[131] = objectLevel

    objectLevel = {
        "name": 'test_133'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0]
    objectLevel.width = 18
    objectLevel.height = 12
    objectLevel.mapArray = []
    objectLevel.typeLocation = 6
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5
    objectLevel.step = 90
    listObjectLevels[132] = objectLevel

    objectLevel = {
        "name": 'test_134'
    }
    objectLevel.map = [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 18
    objectLevel.height = 17
    objectLevel.mapArray = []
    objectLevel.typeLocation = 6
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 135
    listObjectLevels[133] = objectLevel

    objectLevel = {
        "name": 'test_135'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1]
    objectLevel.width = 22
    objectLevel.height = 21
    objectLevel.mapArray = []
    objectLevel.typeLocation = 6
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 20
    objectLevel.taskStepStar2 = 30
    objectLevel.taskStepStar3 = 40
    objectLevel.step = 215
    listObjectLevels[134] = objectLevel

    objectLevel = {
        "name": 'test_136'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 20
    objectLevel.height = 20
    objectLevel.mapArray = []
    objectLevel.typeLocation = 6
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 20
    objectLevel.taskStepStar3 = 30
    objectLevel.step = 190
    listObjectLevels[135] = objectLevel

    objectLevel = {
        "name": 'test_137'
    }
    objectLevel.map = [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1]
    objectLevel.width = 20
    objectLevel.height = 22
    objectLevel.mapArray = []
    objectLevel.typeLocation = 6
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 20
    objectLevel.step = 145
    listObjectLevels[136] = objectLevel

    objectLevel = {
        "name": 'test_138'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0]
    objectLevel.width = 23
    objectLevel.height = 12
    objectLevel.mapArray = []
    objectLevel.typeLocation = 6
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 150
    listObjectLevels[137] = objectLevel

    objectLevel = {
        "name": 'test_139'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0]
    objectLevel.width = 23
    objectLevel.height = 20
    objectLevel.mapArray = []
    objectLevel.typeLocation = 6
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5
    objectLevel.step = 275
    listObjectLevels[138] = objectLevel

    objectLevel = {
        "name": 'test_140'
    }
    objectLevel.map = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1]
    objectLevel.width = 19
    objectLevel.height = 23
    objectLevel.mapArray = []
    objectLevel.typeLocation = 6
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 30
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 20
    objectLevel.taskStepStar2 = 30
    objectLevel.taskStepStar3 = 40
    objectLevel.step = 240
    listObjectLevels[139] = objectLevel

    //------------- location_7 end-------------------------

    //------------- location_8 begin-------------------------
    objectLevel = {
        "name": 'test_141'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0]
    objectLevel.width = 12
    objectLevel.height = 10
    objectLevel.mapArray = []
    objectLevel.typeLocation = 7
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 10
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 65
    listObjectLevels[140] = objectLevel

    objectLevel = {
        "name": 'test_142'
    }
    objectLevel.map = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0]
    objectLevel.width = 13
    objectLevel.height = 11
    objectLevel.mapArray = []
    objectLevel.typeLocation = 7
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 20
    objectLevel.step = 110
    listObjectLevels[141] = objectLevel

    objectLevel = {
        "name": 'test_143'
    }
    objectLevel.map = [0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0]
    objectLevel.width = 13
    objectLevel.height = 17
    objectLevel.mapArray = []
    objectLevel.typeLocation = 7
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 20
    objectLevel.step = 130
    listObjectLevels[142] = objectLevel

    objectLevel = {
        "name": 'test_144'
    }
    objectLevel.map = [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0]
    objectLevel.width = 13
    objectLevel.height = 12
    objectLevel.mapArray = []
    objectLevel.typeLocation = 7
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 20
    objectLevel.step = 100
    listObjectLevels[143] = objectLevel

    objectLevel = {
        "name": 'test_145'
    }
    objectLevel.map = [1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0]
    objectLevel.width = 14
    objectLevel.height = 10
    objectLevel.mapArray = []
    objectLevel.typeLocation = 7
    objectLevel.countBlockTime = 5
    objectLevel.countBlockStep = 0
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 0
    objectLevel.typeTime = 1
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskTimeStar1 = 5
    objectLevel.taskTimeStar2 = 10
    objectLevel.taskTimeStar3 = 15
    objectLevel.step = 70
    objectLevel.time = 60
    listObjectLevels[144] = objectLevel

    objectLevel = {
        "name": 'test_146'
    }
    objectLevel.map = [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1]
    objectLevel.width = 7
    objectLevel.height = 12
    objectLevel.mapArray = []
    objectLevel.typeLocation = 7
    objectLevel.countBlockTime = 5
    objectLevel.countBlockStep = 0
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 0
    objectLevel.typeTime = 1
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskTimeStar1 = 5
    objectLevel.taskTimeStar2 = 10
    objectLevel.taskTimeStar3 = 15
    objectLevel.step = 55
    objectLevel.time = 40
    listObjectLevels[145] = objectLevel

    objectLevel = {
        "name": 'test_147'
    }
    objectLevel.map = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]
    objectLevel.width = 13
    objectLevel.height = 9
    objectLevel.mapArray = []
    objectLevel.typeLocation = 7
    objectLevel.countBlockTime = 5
    objectLevel.countBlockStep = 0
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 0
    objectLevel.typeTime = 1
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskTimeStar1 = 5
    objectLevel.taskTimeStar2 = 10
    objectLevel.taskTimeStar3 = 15
    objectLevel.step = 80
    objectLevel.time = 70
    listObjectLevels[146] = objectLevel

    objectLevel = {
        "name": 'test_148'
    }
    objectLevel.map = [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
    objectLevel.width = 12
    objectLevel.height = 11
    objectLevel.mapArray = []
    objectLevel.typeLocation = 7
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 20
    objectLevel.step = 90
    listObjectLevels[147] = objectLevel

    objectLevel = {
        "name": 'test_149'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0]
    objectLevel.width = 11
    objectLevel.height = 12
    objectLevel.mapArray = []
    objectLevel.typeLocation = 7
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 7
    objectLevel.taskStepStar3 = 10
    objectLevel.step = 60
    listObjectLevels[148] = objectLevel

    objectLevel = {
        "name": 'test_150'
    }
    objectLevel.map = [0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0]
    objectLevel.width = 11
    objectLevel.height = 15
    objectLevel.mapArray = []
    objectLevel.typeLocation = 7
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 20
    objectLevel.step = 95
    listObjectLevels[149] = objectLevel

    objectLevel = {
        "name": 'test_151'
    }
    objectLevel.map = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0]
    objectLevel.width = 11
    objectLevel.height = 15
    objectLevel.mapArray = []
    objectLevel.typeLocation = 7
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 20
    objectLevel.taskStepStar2 = 25
    objectLevel.taskStepStar3 = 30
    objectLevel.step = 100
    listObjectLevels[150] = objectLevel

    objectLevel = {
        "name": 'test_152'
    }
    objectLevel.map = [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0]
    objectLevel.width = 15
    objectLevel.height = 17
    objectLevel.mapArray = []
    objectLevel.typeLocation = 7
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 25
    objectLevel.taskStepStar2 = 30
    objectLevel.taskStepStar3 = 35
    objectLevel.step = 165
    listObjectLevels[151] = objectLevel

    objectLevel = {
        "name": 'test_153'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0]
    objectLevel.width = 15
    objectLevel.height = 15
    objectLevel.mapArray = []
    objectLevel.typeLocation = 7
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 35
    objectLevel.taskStepStar2 = 40
    objectLevel.taskStepStar3 = 45
    objectLevel.step = 125
    listObjectLevels[152] = objectLevel

    objectLevel = {
        "name": 'test_154'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 18
    objectLevel.height = 11
    objectLevel.mapArray = []
    objectLevel.typeLocation = 7
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 20
    objectLevel.taskStepStar3 = 25
    objectLevel.step = 115
    listObjectLevels[153] = objectLevel

    objectLevel = {
        "name": 'test_155'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0]
    objectLevel.width = 17
    objectLevel.height = 17
    objectLevel.mapArray = []
    objectLevel.typeLocation = 7
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 30
    objectLevel.taskStepStar2 = 40
    objectLevel.taskStepStar3 = 45
    objectLevel.step = 140
    listObjectLevels[154] = objectLevel

    objectLevel = {
        "name": 'test_156'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0]
    objectLevel.width = 19
    objectLevel.height = 24
    objectLevel.mapArray = []
    objectLevel.typeLocation = 7
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 25
    objectLevel.taskStepStar2 = 30
    objectLevel.taskStepStar3 = 35
    objectLevel.step = 180
    listObjectLevels[155] = objectLevel

    objectLevel = {
        "name": 'test_157'
    }
    objectLevel.map = [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0]
    objectLevel.width = 14
    objectLevel.height = 13
    objectLevel.mapArray = []
    objectLevel.typeLocation = 7
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 5
    objectLevel.countQuickTip = 20
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 25
    objectLevel.taskStepStar2 = 30
    objectLevel.taskStepStar3 = 35
    objectLevel.step = 130
    listObjectLevels[156] = objectLevel

    objectLevel = {
        "name": 'test_158'
    }
    objectLevel.map = [0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 18
    objectLevel.height = 17
    objectLevel.mapArray = []
    objectLevel.typeLocation = 7
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 35
    objectLevel.taskStepStar2 = 40
    objectLevel.taskStepStar3 = 55
    objectLevel.step = 205
    listObjectLevels[157] = objectLevel

    objectLevel = {
        "name": 'test_159'
    }
    objectLevel.map = [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]
    objectLevel.width = 17
    objectLevel.height = 22
    objectLevel.mapArray = []
    objectLevel.typeLocation = 7
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 10
    objectLevel.step = 255
    listObjectLevels[158] = objectLevel

    objectLevel = {
        "name": 'test_160'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 23
    objectLevel.height = 23
    objectLevel.mapArray = []
    objectLevel.typeLocation = 7
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 25
    objectLevel.taskStepStar3 = 30
    objectLevel.step = 210
    listObjectLevels[159] = objectLevel

    //------------- location_8 end-------------------------

    //------------- location_9 begin-------------------------
    objectLevel = {
        "name": 'test_161'
    }
    objectLevel.map = [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0]
    objectLevel.width = 14
    objectLevel.height = 8
    objectLevel.mapArray = []
    objectLevel.typeLocation = 8
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 80
    listObjectLevels[160] = objectLevel

    objectLevel = {
        "name": 'test_162'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0]
    objectLevel.width = 13
    objectLevel.height = 13
    objectLevel.mapArray = []
    objectLevel.typeLocation = 8
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 20
    objectLevel.step = 124
    listObjectLevels[161] = objectLevel

    objectLevel = {
        "name": 'test_163'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    objectLevel.width = 16
    objectLevel.height = 13
    objectLevel.mapArray = []
    objectLevel.typeLocation = 8
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 20
    objectLevel.step = 135
    listObjectLevels[162] = objectLevel

    objectLevel = {
        "name": 'test_164'
    }
    objectLevel.map = [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
    objectLevel.width = 14
    objectLevel.height = 10
    objectLevel.mapArray = []
    objectLevel.typeLocation = 8
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 5
    objectLevel.taskStepStar2 = 10
    objectLevel.taskStepStar3 = 15
    objectLevel.step = 110
    listObjectLevels[163] = objectLevel

    objectLevel = {
        "name": 'test_165'
    }
    objectLevel.map = [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 13
    objectLevel.height = 13
    objectLevel.mapArray = []
    objectLevel.typeLocation = 8
    objectLevel.countBlockTime = 5
    objectLevel.countBlockStep = 0
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 0
    objectLevel.typeTime = 1
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskTimeStar1 = 2
    objectLevel.taskTimeStar2 = 5
    objectLevel.taskTimeStar3 = 10
    objectLevel.step = 65
    objectLevel.time = 40
    listObjectLevels[164] = objectLevel

    objectLevel = {
        "name": 'test_166'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 15
    objectLevel.height = 15
    objectLevel.mapArray = []
    objectLevel.typeLocation = 8
    objectLevel.countBlockTime = 5
    objectLevel.countBlockStep = 0
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 0
    objectLevel.typeTime = 1
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskTimeStar1 = 5
    objectLevel.taskTimeStar2 = 10
    objectLevel.taskTimeStar3 = 15
    objectLevel.step = 90
    objectLevel.time = 60
    listObjectLevels[165] = objectLevel

    objectLevel = {
        "name": 'test_167'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0]
    objectLevel.width = 15
    objectLevel.height = 12
    objectLevel.mapArray = []
    objectLevel.typeLocation = 8
    objectLevel.countBlockTime = 5
    objectLevel.countBlockStep = 0
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 0
    objectLevel.typeTime = 1
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskTimeStar1 = 5
    objectLevel.taskTimeStar2 = 10
    objectLevel.taskTimeStar3 = 15
    objectLevel.step = 65
    objectLevel.time = 50
    listObjectLevels[166] = objectLevel

    objectLevel = {
        "name": 'test_168'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 17
    objectLevel.height = 16
    objectLevel.mapArray = []
    objectLevel.typeLocation = 8
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 20
    objectLevel.step = 125
    listObjectLevels[167] = objectLevel

    objectLevel = {
        "name": 'test_169'
    }
    objectLevel.map = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1]
    objectLevel.width = 18
    objectLevel.height = 13
    objectLevel.mapArray = []
    objectLevel.typeLocation = 8
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 20
    objectLevel.step = 140
    listObjectLevels[168] = objectLevel

    objectLevel = {
        "name": 'test_170'
    }
    objectLevel.map = [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0]
    objectLevel.width = 11
    objectLevel.height = 17
    objectLevel.mapArray = []
    objectLevel.typeLocation = 8
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5
    objectLevel.step = 100
    listObjectLevels[169] = objectLevel

    objectLevel = {
        "name": 'test_171'
    }
    objectLevel.map = [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0]
    objectLevel.width = 12
    objectLevel.height = 14
    objectLevel.mapArray = []
    objectLevel.typeLocation = 8
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 3
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10
    objectLevel.step = 80
    listObjectLevels[170] = objectLevel

    objectLevel = {
        "name": 'test_172'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 19
    objectLevel.height = 14
    objectLevel.mapArray = []
    objectLevel.typeLocation = 8
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 130
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 20
    objectLevel.step = 150
    listObjectLevels[171] = objectLevel

    objectLevel = {
        "name": 'test_173'
    }
    objectLevel.map = [0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0]
    objectLevel.width = 15
    objectLevel.height = 15
    objectLevel.mapArray = []
    objectLevel.typeLocation = 8
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 20
    objectLevel.step = 140
    listObjectLevels[172] = objectLevel

    objectLevel = {
        "name": 'test_174'
    }
    objectLevel.map = [0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]
    objectLevel.width = 15
    objectLevel.height = 10
    objectLevel.mapArray = []
    objectLevel.typeLocation = 8
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 20
    objectLevel.step = 90
    listObjectLevels[173] = objectLevel

    objectLevel = {
        "name": 'test_175'
    }
    objectLevel.map = [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0]
    objectLevel.width = 15
    objectLevel.height = 15
    objectLevel.mapArray = []
    objectLevel.typeLocation = 8
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 15
    objectLevel.taskStepStar2 = 20
    objectLevel.taskStepStar3 = 30
    objectLevel.step = 155
    listObjectLevels[174] = objectLevel

    objectLevel = {
        "name": 'test_176'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 19
    objectLevel.height = 16
    objectLevel.mapArray = []
    objectLevel.typeLocation = 8
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 15
    objectLevel.taskStepStar2 = 20
    objectLevel.taskStepStar3 = 30
    objectLevel.step = 160
    listObjectLevels[175] = objectLevel

    objectLevel = {
        "name": 'test_177'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 18
    objectLevel.height = 21
    objectLevel.mapArray = []
    objectLevel.typeLocation = 8
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 20
    objectLevel.taskStepStar2 = 30
    objectLevel.taskStepStar3 = 40
    objectLevel.step = 215
    listObjectLevels[176] = objectLevel

    objectLevel = {
        "name": 'test_178'
    }
    objectLevel.map = [0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0]
    objectLevel.width = 11
    objectLevel.height = 15
    objectLevel.mapArray = []
    objectLevel.typeLocation = 8
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 3
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10
    objectLevel.step = 95
    listObjectLevels[177] = objectLevel

    objectLevel = {
        "name": 'test_179'
    }
    objectLevel.map = [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 22
    objectLevel.height = 19
    objectLevel.mapArray = []
    objectLevel.typeLocation = 8
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 30
    objectLevel.countQuickTip = 50
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 20
    objectLevel.taskStepStar3 = 40
    objectLevel.step = 230
    listObjectLevels[178] = objectLevel

    objectLevel = {
        "name": 'test_180'
    }
    objectLevel.map = [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 25
    objectLevel.height = 23
    objectLevel.mapArray = []
    objectLevel.typeLocation = 8
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 1000 //30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 3
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10
    objectLevel.step = 280
    listObjectLevels[179] = objectLevel

    //------------- location_9 end-------------------------

    //------------- location_10 begin-------------------------
    objectLevel = {
        "name": 'test_181'
    }
    objectLevel.map = [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0]
    objectLevel.width = 9
    objectLevel.height = 12
    objectLevel.mapArray = []
    objectLevel.typeLocation = 9
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5
    objectLevel.step = 70
    listObjectLevels[180] = objectLevel

    objectLevel = {
        "name": 'test_182'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0]
    objectLevel.width = 15
    objectLevel.height = 15
    objectLevel.mapArray = []
    objectLevel.typeLocation = 9
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5
    objectLevel.step = 110
    listObjectLevels[181] = objectLevel

    objectLevel = {
        "name": 'test_183'
    }
    objectLevel.map = [0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0]
    objectLevel.width = 11
    objectLevel.height = 13
    objectLevel.mapArray = []
    objectLevel.typeLocation = 9
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5
    objectLevel.step = 95
    listObjectLevels[182] = objectLevel

    objectLevel = {
        "name": 'test_184'
    }
    objectLevel.map = [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 14
    objectLevel.height = 15
    objectLevel.mapArray = []
    objectLevel.typeLocation = 9
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 2
    objectLevel.taskStepStar2 = 3
    objectLevel.taskStepStar3 = 5
    objectLevel.step = 110
    listObjectLevels[183] = objectLevel

    objectLevel = {
        "name": 'test_185'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 17
    objectLevel.height = 12
    objectLevel.mapArray = []
    objectLevel.typeLocation = 9
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 3
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10
    objectLevel.step = 115
    listObjectLevels[184] = objectLevel

    objectLevel = {
        "name": 'test_186'
    }
    objectLevel.map = [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0]
    objectLevel.width = 9
    objectLevel.height = 14
    objectLevel.mapArray = []
    objectLevel.typeLocation = 9
    objectLevel.countBlockTime = 10
    objectLevel.countBlockStep = 0
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 0
    objectLevel.typeTime = 1
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskTimeStar1 = 5
    objectLevel.taskTimeStar2 = 10
    objectLevel.taskTimeStar3 = 15
    objectLevel.step = 95
    objectLevel.time = 70
    listObjectLevels[185] = objectLevel

    objectLevel = {
        "name": 'test_187'
    }
    objectLevel.map = [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0]
    objectLevel.width = 12
    objectLevel.height = 13
    objectLevel.mapArray = []
    objectLevel.typeLocation = 9
    objectLevel.countBlockTime = 10
    objectLevel.countBlockStep = 0
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 0
    objectLevel.typeTime = 1
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskTimeStar1 = 5
    objectLevel.taskTimeStar2 = 10
    objectLevel.taskTimeStar3 = 15
    objectLevel.step = 95
    objectLevel.time = 70
    listObjectLevels[186] = objectLevel

    objectLevel = {
        "name": 'test_188'
    }
    objectLevel.map = [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0]
    objectLevel.width = 15
    objectLevel.height = 13
    objectLevel.mapArray = []
    objectLevel.typeLocation = 9
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 3
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10
    objectLevel.step = 100
    listObjectLevels[187] = objectLevel

    objectLevel = {
        "name": 'test_189'
    }
    objectLevel.map = [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    objectLevel.width = 11
    objectLevel.height = 16
    objectLevel.mapArray = []
    objectLevel.typeLocation = 9
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 3
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10
    objectLevel.step = 105
    listObjectLevels[188] = objectLevel

    objectLevel = {
        "name": 'test_190'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 14
    objectLevel.height = 13
    objectLevel.mapArray = []
    objectLevel.typeLocation = 9
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 3
    objectLevel.taskStepStar2 = 5
    objectLevel.taskStepStar3 = 10
    objectLevel.step = 70
    listObjectLevels[189] = objectLevel

    objectLevel = {
        "name": 'test_191'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0]
    objectLevel.width = 16
    objectLevel.height = 16
    objectLevel.mapArray = []
    objectLevel.typeLocation = 9
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 20
    objectLevel.taskStepStar3 = 30
    objectLevel.step = 160
    listObjectLevels[190] = objectLevel

    objectLevel = {
        "name": 'test_192'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 17
    objectLevel.height = 14
    objectLevel.mapArray = []
    objectLevel.typeLocation = 9
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 20
    objectLevel.step = 125
    listObjectLevels[191] = objectLevel

    objectLevel = {
        "name": 'test_193'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 16
    objectLevel.height = 15
    objectLevel.mapArray = []
    objectLevel.typeLocation = 9
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 15
    objectLevel.taskStepStar2 = 20
    objectLevel.taskStepStar3 = 25
    objectLevel.step = 150
    listObjectLevels[192] = objectLevel

    objectLevel = {
        "name": 'test_194'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0]
    objectLevel.width = 16
    objectLevel.height = 16
    objectLevel.mapArray = []
    objectLevel.typeLocation = 9
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 15
    objectLevel.taskStepStar2 = 25
    objectLevel.taskStepStar3 = 30
    objectLevel.step = 160
    listObjectLevels[193] = objectLevel

    objectLevel = {
        "name": 'test_195'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0]
    objectLevel.width = 14
    objectLevel.height = 25
    objectLevel.mapArray = []
    objectLevel.typeLocation = 9
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 20
    objectLevel.step = 125
    listObjectLevels[194] = objectLevel

    objectLevel = {
        "name": 'test_196'
    }
    objectLevel.map = [0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
    objectLevel.width = 11
    objectLevel.height = 19
    objectLevel.mapArray = []
    objectLevel.typeLocation = 9
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 15
    objectLevel.taskStepStar3 = 20
    objectLevel.step = 120
    listObjectLevels[195] = objectLevel

    objectLevel = {
        "name": 'test_197'
    }
    objectLevel.map = [0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
    objectLevel.width = 21
    objectLevel.height = 14
    objectLevel.mapArray = []
    objectLevel.typeLocation = 9
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 20
    objectLevel.taskStepStar3 = 30
    objectLevel.step = 150
    listObjectLevels[196] = objectLevel

    objectLevel = {
        "name": 'test_198'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 19
    objectLevel.height = 21
    objectLevel.mapArray = []
    objectLevel.typeLocation = 9
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 20
    objectLevel.countQuickTip = 30
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 10
    objectLevel.taskStepStar2 = 20
    objectLevel.taskStepStar3 = 30
    objectLevel.step = 175
    listObjectLevels[197] = objectLevel

    objectLevel = {
        "name": 'test_199'
    }
    objectLevel.map = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
    objectLevel.width = 19
    objectLevel.height = 22
    objectLevel.mapArray = []
    objectLevel.typeLocation = 9
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 30
    objectLevel.countQuickTip = 50
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 20
    objectLevel.taskStepStar2 = 30
    objectLevel.taskStepStar3 = 40
    objectLevel.step = 205
    listObjectLevels[198] = objectLevel

    objectLevel = {
        "name": 'test_200'
    }
    objectLevel.map = [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0]
    objectLevel.width = 21
    objectLevel.height = 20
    objectLevel.mapArray = []
    objectLevel.typeLocation = 9
    objectLevel.countBlockTime = 0
    objectLevel.countBlockStep = 30
    objectLevel.countQuickTip = 50
    objectLevel.typeStep = 1
    objectLevel.typeTime = 0
    objectLevel.timeCurrent = 0
    objectLevel.stepCurrent = 0
    objectLevel.taskStepStar1 = 20
    objectLevel.taskStepStar2 = 30
    objectLevel.taskStepStar3 = 40
    objectLevel.step = 225
    listObjectLevels[199] = objectLevel

    //------------- location_10 end-------------------------
}

function initObjectLocations() {
    //------------- japan begin-------------------------
    var objectLocation = {
        "name": 'location_1'
    }
    objectLocation.background = "qrc:/resources/images/background_location_1.jpg"
    objectLocation.backgroundLevels = "qrc:/resources/images/background_levels_location_1.jpg"
    objectLocation.listLevels = []
    objectLocation.imageLabelAvaible = "qrc:/resources/images/button_avaible_location_1.png"
    objectLocation.imageLabelNotAvaible = "qrc:/resources/images/button_not_avaible_location_1.png"
    objectLocation.labelX = 362 //210
    objectLocation.labelY = 925
    objectLocation.width = 130
    objectLocation.height = 150
    objectLocation.typeCampaing = 0 //japan
    objectLocation.type = 0
    listObjectLocations[0] = objectLocation

    objectLocation = {
        "name": 'location_2'
    }
    objectLocation.background = "qrc:/resources/images/background_location_2.jpg"
    objectLocation.backgroundLevels = "qrc:/resources/images/background_levels_location_1.jpg"
    objectLocation.listLevels = []
    objectLocation.imageLabelAvaible = "qrc:/resources/images/button_avaible_location_2.png"
    objectLocation.imageLabelNotAvaible = "qrc:/resources/images/button_not_avaible_location_2.png"
    objectLocation.labelX = 232 //80
    objectLocation.labelY = 935
    objectLocation.width = 143
    objectLocation.height = 80
    objectLocation.typeCampaing = 0 //japan
    objectLocation.type = 1
    listObjectLocations[1] = objectLocation

    objectLocation = {
        "name": 'location_3'
    }
    objectLocation.background = "qrc:/resources/images/background_location_3.jpg"
    objectLocation.backgroundLevels = "qrc:/resources/images/background_levels_location_1.jpg"
    objectLocation.listLevels = []
    objectLocation.imageLabelAvaible = "qrc:/resources/images/button_avaible_location_3.png"
    objectLocation.imageLabelNotAvaible = "qrc:/resources/images/button_not_avaible_location_3.png"
    objectLocation.labelX = 272 //120
    objectLocation.labelY = 800
    objectLocation.width = 90
    objectLocation.height = 104
    objectLocation.typeCampaing = 0 //japan
    objectLocation.type = 2
    listObjectLocations[2] = objectLocation

    objectLocation = {
        "name": 'location_4'
    }
    objectLocation.background = "qrc:/resources/images/background_location_4.jpg"
    objectLocation.backgroundLevels = "qrc:/resources/images/background_levels_location_1.jpg"
    objectLocation.listLevels = []
    objectLocation.imageLabelAvaible = "qrc:/resources/images/button_avaible_location_4.png"
    objectLocation.imageLabelNotAvaible = "qrc:/resources/images/button_not_avaible_location_4.png"
    objectLocation.labelX = 392 //240
    objectLocation.labelY = 810
    objectLocation.width = 136
    objectLocation.height = 113
    objectLocation.typeCampaing = 0 //japan
    objectLocation.type = 3
    listObjectLocations[3] = objectLocation

    objectLocation = {
        "name": 'location_5'
    }
    objectLocation.background = "qrc:/resources/images/background_location_5.jpg"
    objectLocation.backgroundLevels = "qrc:/resources/images/background_levels_location_1.jpg"
    objectLocation.listLevels = []
    objectLocation.imageLabelAvaible = "qrc:/resources/images/button_avaible_location_5.png"
    objectLocation.imageLabelNotAvaible = "qrc:/resources/images/button_not_avaible_location_5.png"
    objectLocation.labelX = 402 //250
    objectLocation.labelY = 610
    objectLocation.width = 194
    objectLocation.height = 193
    objectLocation.typeCampaing = 0 //japan
    objectLocation.type = 4
    listObjectLocations[4] = objectLocation

    objectLocation = {
        "name": 'location_6'
    }
    objectLocation.background = "qrc:/resources/images/background_location_6.jpg"
    objectLocation.backgroundLevels = "qrc:/resources/images/background_levels_location_1.jpg"
    objectLocation.listLevels = []
    objectLocation.imageLabelAvaible = "qrc:/resources/images/button_avaible_location_6.png"
    objectLocation.imageLabelNotAvaible = "qrc:/resources/images/button_not_avaible_location_6.png"
    objectLocation.labelX = 572 //420
    objectLocation.labelY = 560
    objectLocation.width = 176
    objectLocation.height = 153
    objectLocation.typeCampaing = 0 //japan
    objectLocation.type = 5
    listObjectLocations[5] = objectLocation

    objectLocation = {
        "name": 'location_7'
    }
    objectLocation.background = "qrc:/resources/images/background_location_7.jpg"
    objectLocation.backgroundLevels = "qrc:/resources/images/background_levels_location_1.jpg"
    objectLocation.listLevels = []
    objectLocation.imageLabelAvaible = "qrc:/resources/images/button_avaible_location_8.png"
    objectLocation.imageLabelNotAvaible = "qrc:/resources/images/button_not_avaible_location_8.png"
    objectLocation.labelX = 722 //570
    objectLocation.labelY = 425
    objectLocation.width = 89
    objectLocation.height = 234
    objectLocation.typeCampaing = 0 //japan
    objectLocation.type = 6
    listObjectLocations[6] = objectLocation

    objectLocation = {
        "name": 'location_8'
    }
    objectLocation.background = "qrc:/resources/images/background_location_8.jpg"
    objectLocation.backgroundLevels = "qrc:/resources/images/background_levels_location_1.jpg"
    objectLocation.listLevels = []
    objectLocation.imageLabelAvaible = "qrc:/resources/images/button_avaible_location_7.png"
    objectLocation.imageLabelNotAvaible = "qrc:/resources/images/button_not_avaible_location_7.png"
    objectLocation.labelX = 622 //470
    objectLocation.labelY = 465
    objectLocation.width = 92
    objectLocation.height = 91
    objectLocation.typeCampaing = 0 //japan
    objectLocation.type = 7
    listObjectLocations[7] = objectLocation

    objectLocation = {
        "name": 'location_9'
    }
    objectLocation.background = "qrc:/resources/images/background_location_9.jpg"
    objectLocation.backgroundLevels = "qrc:/resources/images/background_levels_location_1.jpg"
    objectLocation.listLevels = []
    objectLocation.imageLabelAvaible = "qrc:/resources/images/button_avaible_location_9.png"
    objectLocation.imageLabelNotAvaible = "qrc:/resources/images/button_not_avaible_location_9.png"
    objectLocation.labelX = 622 //470
    objectLocation.labelY = 315
    objectLocation.width = 151
    objectLocation.height = 128
    objectLocation.typeCampaing = 0 //japan
    objectLocation.type = 8
    listObjectLocations[8] = objectLocation

    objectLocation = {
        "name": 'location_10'
    }
    objectLocation.background = "qrc:/resources/images/background_location_10.jpg"
    objectLocation.backgroundLevels = "qrc:/resources/images/background_levels_location_1.jpg"
    objectLocation.listLevels = []
    objectLocation.imageLabelAvaible = "qrc:/resources/images/button_avaible_location_10.png"
    objectLocation.imageLabelNotAvaible = "qrc:/resources/images/button_not_avaible_location_10.png"
    objectLocation.labelX = 577 //425
    objectLocation.labelY = 120
    objectLocation.width = 174
    objectLocation.height = 137
    objectLocation.typeCampaing = 0 //japan
    objectLocation.type = 9
    listObjectLocations[9] = objectLocation

    //------------- japan end-------------------------
}

function setFullCampaigns() {
    initObjectLevels()
    initObjectLocations()
    var objectCampaign = {
        "name": 'japan'
    }
    objectCampaign.background = "qrc:/resources/images/background_map_campaign_1.png"
    objectCampaign.listLocations = []
    objectCampaign.type = 0
    listObjectCampaigns[0] = objectCampaign
    var arrRatihgFull = []

    for (var keyCampaign in listObjectCampaigns) {
        var listLocations = []
        arrRatihgFull[keyCampaign] = []
        for (var keyLocation in listObjectLocations) {
            if (listObjectCampaigns[keyCampaign].type
                    === listObjectLocations[keyLocation].typeCampaing) {
                var listLevels = []
                arrRatihgFull[keyCampaign][keyLocation] = []
                for (var keyLevel in listObjectLevels) {
                    if (listObjectLocations[keyLocation].type
                            === listObjectLevels[keyLevel].typeLocation) {
                        listLevels[listLevels.length] = listObjectLevels[keyLevel]
                        arrRatihgFull[keyCampaign][keyLocation][listLevels.length - 1] = 3
                    }
                }
                listObjectLocations[keyLocation].listLevels = listLevels
                listLocations[listLocations.length] = listObjectLocations[keyLocation]
            }
        }
        listObjectCampaigns[keyCampaign].listLocations = listLocations
    }

    return arrRatihgFull
}

function initObjectCampaigns() {
    initObjectLevels()
    initObjectLocations()
    var objectCampaign = {
        "name": 'japan'
    }
    objectCampaign.background = "qrc:/resources/images/background_map_campaign_1.png"
    objectCampaign.listLocations = []
    objectCampaign.type = 0
    listObjectCampaigns[0] = objectCampaign

    for (var keyCampaign in listObjectCampaigns) {
        var listLocations = []
        for (var keyLocation in listObjectLocations) {
            if (listObjectCampaigns[keyCampaign].type
                    === listObjectLocations[keyLocation].typeCampaing) {
                var listLevels = []
                for (var keyLevel in listObjectLevels) {
                    if (listObjectLocations[keyLocation].type
                            === listObjectLevels[keyLevel].typeLocation) {
                        listLevels[listLevels.length] = listObjectLevels[keyLevel]
                    }
                }
                listObjectLocations[keyLocation].listLevels = listLevels
                listLocations[listLocations.length] = listObjectLocations[keyLocation]
            }
        }
        listObjectCampaigns[keyCampaign].listLocations = listLocations
    }
}

function isCompletedGame() {
    var arrBranchCompleted = []
    if (listGameBranch.length != 0) {
        for (var ii = 0; ii < heightGame; ii++) {
            for (var jj = 0; jj < widthGame; jj++) {
                if (listGameBranchObject[ii][jj] === null)
                    continue
                if (listGameBranchObject[ii][jj].isChecked === 0)
                    return false

                if (typeof arrBranchCompleted[ii] === "undefined") {
                    arrBranchCompleted[ii] = []
                }

                arrBranchCompleted[ii][jj] = 1

                if (listGameBranchObject[ii][jj].posLeft == 1) {
                    if (jj - 1 < 0) {
                        return false
                    }
                    if (listGameBranchObject[ii][jj - 1] !== null
                            && listGameBranchObject[ii][jj - 1].posRight != 1) {
                        return false
                    }
                }
                if (listGameBranchObject[ii][jj].posTop == 1) {
                    if (ii - 1 < 0) {
                        return false
                    }
                    if (listGameBranchObject[ii - 1][jj] !== null
                            && listGameBranchObject[ii - 1][jj].posBottom != 1) {
                        return false
                    }
                }
                if (listGameBranchObject[ii][jj].posRight == 1) {
                    if (jj + 1 >= widthGame) {
                        return false
                    }
                    if (listGameBranchObject[ii][jj + 1] !== null
                            && listGameBranchObject[ii][jj + 1].posLeft != 1) {
                        return false
                    }
                }
                if (listGameBranchObject[ii][jj].posBottom == 1) {
                    if (ii + 1 >= heightGame) {
                        return false
                    }
                    if (listGameBranchObject[ii + 1][jj] !== null
                            && listGameBranchObject[ii + 1][jj].posTop != 1) {
                        return false
                    }
                }
            }
        }
    }
    return true
}

function getAllNeighborsClosedBranch() {

    var ii, jj
    var arrAvaibleNeighbors = []
    var n
    for (var keyI in arrBranchClosed) {
        for (var keyJ in arrBranchClosed[keyI]) {

            ii = Number(keyI) - 1
            jj = Number(keyJ)
            if (ii >= 0 && jj >= 0 && ii < heightGame && jj < widthGame && listMap[ii][jj]
                    === 1 && (typeof arrBranchClosed[ii]
                              === "undefined" || typeof arrBranchClosed[ii][jj] === "undefined")) {
                if (listGameBranch[ii][jj] !== null) {
                    for (n = 0; n < listImageBranchFull.length; n++) {
                        if (listImageBranchFull[n].bottom !== listGameBranch[ii][jj].bottom
                                && listImageBranchFull[n].top === listGameBranch[ii][jj].top
                                && listImageBranchFull[n].left === listGameBranch[ii][jj].left
                                && listImageBranchFull[n].right === listGameBranch[ii][jj].right) {
                            listGameBranch[ii][jj].source = listImageBranchFull[n].source
                            listGameBranch[ii][jj].bottom = listImageBranchFull[n].bottom
                            listGameBranch[ii][jj].rotation = listImageBranchFull[n].rotation
                            listGameBranch[ii][jj].name = listImageBranchFull[n].name
                            break
                        }
                    }
                }
                for (n = 0; n < listImageBranchFull.length; n++) {
                    if (listImageBranchFull[n].top !== listGameBranch[keyI][keyJ].top
                            && listImageBranchFull[n].bottom === listGameBranch[keyI][keyJ].bottom
                            && listImageBranchFull[n].left === listGameBranch[keyI][keyJ].left
                            && listImageBranchFull[n].right === listGameBranch[keyI][keyJ].right) {
                        listGameBranch[keyI][keyJ].source = listImageBranchFull[n].source
                        listGameBranch[keyI][keyJ].top = listImageBranchFull[n].top
                        listGameBranch[keyI][keyJ].rotation = listImageBranchFull[n].rotation
                        listGameBranch[keyI][keyJ].name = listImageBranchFull[n].name
                        return
                    }
                }
            }

            ii = Number(keyI) + 1
            jj = Number(keyJ)
            if (ii >= 0 && jj >= 0 && ii < heightGame && jj < widthGame && listMap[ii][jj]
                    === 1 && (typeof arrBranchClosed[ii]
                              === "undefined" || typeof arrBranchClosed[ii][jj] === "undefined")) {
                if (listGameBranch[ii][jj] !== null) {
                    for (n = 0; n < listImageBranchFull.length; n++) {
                        if (listImageBranchFull[n].top !== listGameBranch[ii][jj].top
                                && listImageBranchFull[n].bottom === listGameBranch[ii][jj].bottom
                                && listImageBranchFull[n].left === listGameBranch[ii][jj].left
                                && listImageBranchFull[n].right === listGameBranch[ii][jj].right) {
                            listGameBranch[ii][jj].source = listImageBranchFull[n].source
                            listGameBranch[ii][jj].top = listImageBranchFull[n].top
                            listGameBranch[ii][jj].rotation = listImageBranchFull[n].rotation
                            listGameBranch[ii][jj].name = listImageBranchFull[n].name
                            break
                        }
                    }
                }
                for (n = 0; n < listImageBranchFull.length; n++) {
                    if (listImageBranchFull[n].bottom !== listGameBranch[keyI][keyJ].bottom
                            && listImageBranchFull[n].top === listGameBranch[keyI][keyJ].top
                            && listImageBranchFull[n].left === listGameBranch[keyI][keyJ].left
                            && listImageBranchFull[n].right === listGameBranch[keyI][keyJ].right) {
                        listGameBranch[keyI][keyJ].source = listImageBranchFull[n].source
                        listGameBranch[keyI][keyJ].bottom = listImageBranchFull[n].bottom
                        listGameBranch[keyI][keyJ].rotation = listImageBranchFull[n].rotation
                        listGameBranch[keyI][keyJ].name = listImageBranchFull[n].name
                        return
                    }
                }
            }

            ii = Number(keyI)
            jj = Number(keyJ) - 1
            if (ii >= 0 && jj >= 0 && ii < heightGame && jj < widthGame && listMap[ii][jj]
                    === 1 && (typeof arrBranchClosed[ii]
                              === "undefined" || typeof arrBranchClosed[ii][jj] === "undefined")) {
                if (listGameBranch[ii][jj] !== null) {
                    for (n = 0; n < listImageBranchFull.length; n++) {
                        if (listImageBranchFull[n].right !== listGameBranch[ii][jj].right
                                && listImageBranchFull[n].top === listGameBranch[ii][jj].top
                                && listImageBranchFull[n].left === listGameBranch[ii][jj].left
                                && listImageBranchFull[n].bottom
                                === listGameBranch[ii][jj].bottom) {
                            listGameBranch[ii][jj].source = listImageBranchFull[n].source
                            listGameBranch[ii][jj].right = listImageBranchFull[n].right
                            listGameBranch[ii][jj].rotation = listImageBranchFull[n].rotation
                            listGameBranch[ii][jj].name = listImageBranchFull[n].name
                            break
                        }
                    }
                }
                for (n = 0; n < listImageBranchFull.length; n++) {
                    if (listImageBranchFull[n].left !== listGameBranch[keyI][keyJ].left
                            && listImageBranchFull[n].bottom === listGameBranch[keyI][keyJ].bottom
                            && listImageBranchFull[n].top === listGameBranch[keyI][keyJ].top
                            && listImageBranchFull[n].right === listGameBranch[keyI][keyJ].right) {
                        listGameBranch[keyI][keyJ].source = listImageBranchFull[n].source
                        listGameBranch[keyI][keyJ].left = listImageBranchFull[n].left
                        listGameBranch[keyI][keyJ].rotation = listImageBranchFull[n].rotation
                        listGameBranch[keyI][keyJ].name = listImageBranchFull[n].name
                        return
                    }
                }
            }

            ii = Number(keyI)
            jj = Number(keyJ) + 1
            if (ii >= 0 && jj >= 0 && ii < heightGame && jj < widthGame && listMap[ii][jj]
                    === 1 && (typeof arrBranchClosed[ii]
                              === "undefined" || typeof arrBranchClosed[ii][jj] === "undefined")) {
                if (listGameBranch[ii][jj] !== null) {
                    for (n = 0; n < listImageBranchFull.length; n++) {
                        if (listImageBranchFull[n].left !== listGameBranch[ii][jj].left
                                && listImageBranchFull[n].top === listGameBranch[ii][jj].top
                                && listImageBranchFull[n].right === listGameBranch[ii][jj].right
                                && listImageBranchFull[n].bottom
                                === listGameBranch[ii][jj].bottom) {
                            listGameBranch[ii][jj].source = listImageBranchFull[n].source
                            listGameBranch[ii][jj].left = listImageBranchFull[n].left
                            listGameBranch[ii][jj].rotation = listImageBranchFull[n].rotation
                            listGameBranch[ii][jj].name = listImageBranchFull[n].name
                            break
                        }
                    }
                }
                for (n = 0; n < listImageBranchFull.length; n++) {
                    if (listImageBranchFull[n].right !== listGameBranch[keyI][keyJ].right
                            && listImageBranchFull[n].bottom === listGameBranch[keyI][keyJ].bottom
                            && listImageBranchFull[n].top === listGameBranch[keyI][keyJ].top
                            && listImageBranchFull[n].left === listGameBranch[keyI][keyJ].left) {
                        listGameBranch[keyI][keyJ].source = listImageBranchFull[n].source
                        listGameBranch[keyI][keyJ].right = listImageBranchFull[n].right
                        listGameBranch[keyI][keyJ].rotation = listImageBranchFull[n].rotation
                        listGameBranch[keyI][keyJ].name = listImageBranchFull[n].name
                        return
                    }
                }
            }
        }
    }
}

function branchClosed(ii, jj) {
    if (ii < 0 || jj < 0)
        return
    if (ii >= heightGame || jj >= widthGame)
        return
    if (isClosedBranch === 0)
        return
    if (listGameBranch[ii][jj] === null)
        return
    if (listGameBranch[ii][jj].isChecked === 1)
        return

    listGameBranch[ii][jj].isChecked = 1

    if (typeof arrBranchClosed[ii] === "undefined") {
        arrBranchClosed[ii] = []
    }

    arrBranchClosed[ii][jj] = listGameBranch[ii][jj]

    if (listGameBranch[ii][jj].left === 1) {
        //jj= jj -1
        if (listGameBranch[ii][jj - 1] === null) {
            isClosedBranch = 0
            return
        }
        branchClosed(ii, jj - 1)
    }
    if (listGameBranch[ii][jj].top === 1) {
        //ii = ii - 1
        if (listGameBranch[ii - 1][jj] === null) {
            isClosedBranch = 0
            return
        }
        branchClosed(ii - 1, jj)
    }
    if (listGameBranch[ii][jj].right === 1) {
        //jj = jj + 1
        if (listGameBranch[ii][jj + 1] === null) {
            isClosedBranch = 0
            return
        }
        branchClosed(ii, jj + 1)
    }
    if (listGameBranch[ii][jj].bottom === 1) {
        //ii = ii + 1
        if (listGameBranch[ii + 1][jj] === null) {
            isClosedBranch = 0
            return
        }
        branchClosed(ii + 1, jj)
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function initObjectBranchСross() {
    var objectBranch = {
        "name": 'branch_05'
    }
    objectBranch.source = "qrc:/resources/images/branch/branch_05_00.png"
    objectBranch.left = 1
    objectBranch.right = 1
    objectBranch.top = 1
    objectBranch.bottom = 1
    objectBranch.rotation = 0
    objectBranch.score = 1
    listImageBranchCross[0] = objectBranch

    objectBranch = {
        "name": 'branch_05'
    }
    objectBranch.source = "qrc:/resources/images/branch/branch_05_00.png"
    objectBranch.left = 1
    objectBranch.right = 1
    objectBranch.top = 1
    objectBranch.bottom = 1
    objectBranch.rotation = 90
    objectBranch.score = 1
    listImageBranchCross[1] = objectBranch

    objectBranch = {
        "name": 'branch_05'
    }
    objectBranch.source = "qrc:/resources/images/branch/branch_05_00.png"
    objectBranch.left = 1
    objectBranch.right = 1
    objectBranch.top = 1
    objectBranch.bottom = 1
    objectBranch.rotation = 180
    objectBranch.score = 1
    listImageBranchCross[2] = objectBranch

    objectBranch = {
        "name": 'branch_05'
    }
    objectBranch.source = "qrc:/resources/images/branch/branch_05_00.png"
    objectBranch.left = 1
    objectBranch.right = 1
    objectBranch.top = 1
    objectBranch.bottom = 1
    objectBranch.rotation = 270
    objectBranch.score = 1
    listImageBranchCross[3] = objectBranch
}

function initObjectBranch() {
    //------------- 1 -------------------------
    var objectBranch = {
        "name": 'branch_01'
    }
    objectBranch.source = "qrc:/resources/images/branch/branch_01_00.png"
    objectBranch.left = 1
    objectBranch.right = 1
    objectBranch.top = 0
    objectBranch.bottom = 0
    objectBranch.rotation = 0
    objectBranch.score = 0.7
    listImageBranch[0] = objectBranch

    objectBranch = {
        "name": 'branch_01'
    }
    objectBranch.source = "qrc:/resources/images/branch/branch_01_00.png"
    objectBranch.left = 0
    objectBranch.right = 0
    objectBranch.top = 1
    objectBranch.bottom = 1
    objectBranch.rotation = 90
    objectBranch.score = 0.7
    listImageBranch[1] = objectBranch

    objectBranch = {
        "name": 'branch_01'
    }
    objectBranch.source = "qrc:/resources/images/branch/branch_01_00.png"
    objectBranch.left = 1
    objectBranch.right = 1
    objectBranch.top = 0
    objectBranch.bottom = 0
    objectBranch.rotation = 180
    objectBranch.score = 0.7
    listImageBranch[2] = objectBranch

    objectBranch = {
        "name": 'branch_01'
    }
    objectBranch.source = "qrc:/resources/images/branch/branch_01_00.png"
    objectBranch.left = 0
    objectBranch.right = 0
    objectBranch.top = 1
    objectBranch.bottom = 1
    objectBranch.rotation = 270
    objectBranch.score = 0.7
    listImageBranch[3] = objectBranch

    //--------------- 2 -----------------------------------
    objectBranch = {
        "name": 'branch_02'
    }
    objectBranch.source = "qrc:/resources/images/branch/branch_02_00.png"
    objectBranch.left = 1
    objectBranch.right = 0
    objectBranch.top = 0
    objectBranch.bottom = 1
    objectBranch.rotation = 0
    objectBranch.score = 0.9
    listImageBranch[4] = objectBranch

    objectBranch = {
        "name": 'branch_02'
    }
    objectBranch.source = "qrc:/resources/images/branch/branch_02_00.png"
    objectBranch.left = 1
    objectBranch.right = 0
    objectBranch.top = 1
    objectBranch.bottom = 0
    objectBranch.rotation = 90
    objectBranch.score = 0.9
    listImageBranch[5] = objectBranch

    objectBranch = {
        "name": 'branch_02'
    }
    objectBranch.source = "qrc:/resources/images/branch/branch_02_00.png"
    objectBranch.left = 0
    objectBranch.right = 1
    objectBranch.top = 1
    objectBranch.bottom = 0
    objectBranch.rotation = 180
    objectBranch.score = 0.9
    listImageBranch[6] = objectBranch

    objectBranch = {
        "name": 'branch_02'
    }
    objectBranch.source = "qrc:/resources/images/branch/branch_02_00.png"
    objectBranch.left = 0
    objectBranch.right = 1
    objectBranch.top = 0
    objectBranch.bottom = 1
    objectBranch.rotation = 270
    objectBranch.score = 0.9
    listImageBranch[7] = objectBranch

    //----------- 3 ------------------------------------
    objectBranch = {
        "name": 'branch_03'
    }
    objectBranch.source = "qrc:/resources/images/branch/branch_03_00.png"
    objectBranch.left = 1
    objectBranch.right = 1
    objectBranch.top = 1
    objectBranch.bottom = 0
    objectBranch.rotation = 0
    objectBranch.score = 0.6
    listImageBranch[8] = objectBranch

    objectBranch = {
        "name": 'branch_03'
    }
    objectBranch.source = "qrc:/resources/images/branch/branch_03_00.png"
    objectBranch.left = 0
    objectBranch.right = 1
    objectBranch.top = 1
    objectBranch.bottom = 1
    objectBranch.rotation = 90
    objectBranch.score = 0.6
    listImageBranch[9] = objectBranch

    objectBranch = {
        "name": 'branch_03'
    }
    objectBranch.source = "qrc:/resources/images/branch/branch_03_00.png"
    objectBranch.left = 1
    objectBranch.right = 1
    objectBranch.top = 0
    objectBranch.bottom = 1
    objectBranch.rotation = 180
    objectBranch.score = 0.6
    listImageBranch[10] = objectBranch

    objectBranch = {
        "name": 'branch_03'
    }
    objectBranch.source = "qrc:/resources/images/branch/branch_03_00.png"
    objectBranch.left = 1
    objectBranch.right = 0
    objectBranch.top = 1
    objectBranch.bottom = 1
    objectBranch.rotation = 270
    objectBranch.score = 0.6
    listImageBranch[11] = objectBranch

    //----------- 4 ------------------------------------
    objectBranch = {
        "name": 'branch_04'
    }
    objectBranch.source = "qrc:/resources/images/branch/branch_04_00.png"
    objectBranch.left = 0
    objectBranch.right = 0
    objectBranch.top = 0
    objectBranch.bottom = 1
    objectBranch.rotation = 0
    objectBranch.score = 0.8
    listImageBranch[12] = objectBranch

    objectBranch = {
        "name": 'branch_04'
    }
    objectBranch.source = "qrc:/resources/images/branch/branch_04_00.png"
    objectBranch.left = 1
    objectBranch.right = 0
    objectBranch.top = 0
    objectBranch.bottom = 0
    objectBranch.rotation = 90
    objectBranch.score = 0.8
    listImageBranch[13] = objectBranch

    objectBranch = {
        "name": 'branch_04'
    }
    objectBranch.source = "qrc:/resources/images/branch/branch_04_00.png"
    objectBranch.left = 0
    objectBranch.right = 0
    objectBranch.top = 1
    objectBranch.bottom = 0
    objectBranch.rotation = 180
    objectBranch.score = 0.8
    listImageBranch[14] = objectBranch

    objectBranch = {
        "name": 'branch_04'
    }
    objectBranch.source = "qrc:/resources/images/branch/branch_04_00.png"
    objectBranch.left = 0
    objectBranch.right = 1
    objectBranch.top = 0
    objectBranch.bottom = 0
    objectBranch.rotation = 270
    objectBranch.score = 0.8
    listImageBranch[15] = objectBranch
}

function setStartBranch() {
    var arrBranch = []
    for (var i = 0; i < heightGame; i++) {
        for (var j = 0; j < widthGame; j++) {
            if (listGameBranchObject[i][j] !== null) {
                arrBranch[arrBranch.length] = {
                    "posI": i,
                    "posJ": j
                }
            }
        }
    }
    countBranchInMap = arrBranch.length
    var startPoint = getRandomInt(0, arrBranch.length - 1)
    iStart = arrBranch[startPoint].posI
    jStart = arrBranch[startPoint].posJ
}

function revivalBranchStart() {
    for (var i1 = 0; i1 < heightGame; i1++) {
        for (var j1 = 0; j1 < widthGame; j1++) {
            if (listGameBranchObject[i1][j1] !== null) {
                listGameBranchObject[i1][j1].isChecked = 0
            }
        }
    }
    revivalBranch(iStart, jStart)
    for (i1 = 0; i1 < heightGame; i1++) {
        for (j1 = 0; j1 < widthGame; j1++) {
            if (listGameBranchObject[i1][j1] !== null
                    && listGameBranchObject[i1][j1].isChecked === 0) {
                if (listGameBranchObject[i1][j1].source !== "qrc:/resources/images/branch/"
                        + listGameBranchObject[i1][j1].nameItem + "_00.png") {
                    listGameBranchObject[i1][j1].source = "qrc:/resources/images/branch/"
                            + listGameBranchObject[i1][j1].nameItem + "_00.png"
                }
            }
        }
    }
}

function revivalBranch(ii, jj) {
    if (ii < 0 || jj < 0)
        return
    if (ii >= heightGame || jj >= widthGame)
        return
    if (listGameBranchObject[ii][jj] === null)
        return
    if (listGameBranchObject[ii][jj].isChecked == 1)
        return
    if (listGameBranchObject[ii][jj].source !== "qrc:/resources/images/branch/"
            + listGameBranchObject[ii][jj].nameItem + "_1.png") {
        listGameBranchObject[ii][jj].source = "qrc:/resources/images/branch/"
                + listGameBranchObject[ii][jj].nameItem + "_1.png"
    }
    listGameBranchObject[ii][jj].isChecked = 1
    if (listGameBranchObject[ii][jj].posLeft == 1) {
        if (jj - 1 >= 0 && listGameBranchObject[ii][jj - 1] !== null
                && listGameBranchObject[ii][jj - 1].posRight == 1)
            revivalBranch(ii, jj - 1)
    }
    if (listGameBranchObject[ii][jj].posTop == 1) {
        if (ii - 1 >= 0 && listGameBranchObject[ii - 1][jj] !== null
                && listGameBranchObject[ii - 1][jj].posBottom == 1)
            revivalBranch(ii - 1, jj)
    }
    if (listGameBranchObject[ii][jj].posRight == 1) {
        if (jj + 1 < widthGame && listGameBranchObject[ii][jj + 1] !== null
                && listGameBranchObject[ii][jj + 1].posLeft == 1)
            revivalBranch(ii, jj + 1)
    }
    if (listGameBranchObject[ii][jj].posBottom == 1) {
        if (ii + 1 < heightGame && listGameBranchObject[ii + 1][jj] !== null
                && listGameBranchObject[ii + 1][jj].posTop == 1)
            revivalBranch(ii + 1, jj)
    }
}

function getNotBlockBranch(sideLeft, sideRight, sideTop, sideBottom) {
    var arrAvailableBranch = []
    for (var n = 0; n < listImageBranch.length; n++) {
        if (sideLeft !== null) {
            if (listImageBranch[n].left !== sideLeft)
                continue
        }
        if (sideRight !== null) {
            if (listImageBranch[n].right !== sideRight)
                continue
        }
        if (sideTop !== null) {
            if (listImageBranch[n].top !== sideTop)
                continue
        }
        if (sideBottom !== null) {
            if (listImageBranch[n].bottom !== sideBottom)
                continue
        }
        arrAvailableBranch[arrAvailableBranch.length] = listImageBranch[n]
    }
    var typeBranch = getRandomInt(0, arrAvailableBranch.length - 1)
    return arrAvailableBranch[typeBranch]
}

function createBranchForMap(objectMap) {
    initObjectBranch()
    initObjectBranchСross()
    listImageBranchFull = listImageBranch.concat(listImageBranchCross)
    listMap = []
    arrBranchClosed = []
    var pos = 0
    var typeBranch
    widthGame = objectMap.width
    heightGame = objectMap.height

    var xPos = 0
    var yPos = 0
    var failBranch = 0

    listColor = []
    for (var i = 0; i < heightGame; i++) {
        listMap[i] = []
        listColor[i] = []
        for (var j = 0; j < widthGame; j++) {
            if (objectMap.map[pos] > 0) {
                listMap[i][j] = 1
            } else {
                listMap[i][j] = objectMap.map[pos]
            }
            listColor[i][j] = objectMap.map[pos]
            pos++
        }
    }

    objectMap.mapArray = listMap

    var sideLeft, sideRight, sideTop, sideBottom

    listGameBranch = []
    for (var i = 0; i < heightGame; i++) {
        listGameBranch[i] = []
        for (var j = 0; j < widthGame; j++) {
            listGameBranch[i][j] = null
        }
    }

    for (var i = 0; i < heightGame; i++) {
        for (var j = 0; j < widthGame; j++) {

            if (listMap[i][j] === 0)
                continue

            sideLeft = null
            sideRight = null
            sideTop = null
            sideBottom = null

            if (i == 0)
                sideTop = 0
            if (j == 0)
                sideLeft = 0
            if (i == heightGame - 1)
                sideBottom = 0
            if (j == widthGame - 1)
                sideRight = 0

            if (i - 1 >= 0 && listMap[i - 1][j] === 0) {
                sideTop = 0
            }

            if (i + 1 < heightGame && listMap[i + 1][j] === 0) {
                sideBottom = 0
            }

            if (j - 1 >= 0 && listMap[i][j - 1] === 0) {
                sideLeft = 0
            }

            if (j + 1 < widthGame && listMap[i][j + 1] === 0) {
                sideRight = 0
            }

            if (i - 1 >= 0 && listGameBranch[i - 1][j] !== null) {
                if (listGameBranch[i - 1][j].bottom === 1) {
                    sideTop = 1
                } else {
                    sideTop = 0
                }
            }

            if (j - 1 >= 0 && listGameBranch[i][j - 1] !== null) {
                if (listGameBranch[i][j - 1].right === 1) {
                    sideLeft = 1
                } else {
                    sideLeft = 0
                }
            }

            if (i + 1 < heightGame && listGameBranch[i + 1][j] !== null) {
                if (listGameBranch[i + 1][j].top === 1) {
                    sideBottom = 1
                } else {
                    sideBottom = 0
                }
            }

            if (j + 1 < widthGame && listGameBranch[i][j + 1] !== null) {
                if (listGameBranch[i][j + 1].left === 1) {
                    sideRight = 1
                } else {
                    sideRight = 0
                }
            }

            var arrAvailableBranch = []
            for (var n = 0; n < listImageBranch.length; n++) {
                if (sideLeft !== null) {
                    if (listImageBranch[n].left !== sideLeft)
                        continue
                }
                if (sideRight !== null) {
                    if (listImageBranch[n].right !== sideRight)
                        continue
                }
                if (sideTop !== null) {
                    if (listImageBranch[n].top !== sideTop)
                        continue
                }
                if (sideBottom !== null) {
                    if (listImageBranch[n].bottom !== sideBottom)
                        continue
                }
                arrAvailableBranch[arrAvailableBranch.length] = listImageBranch[n]
            }

            if (arrAvailableBranch.length === 0) {
                failBranch = 1

                var arrNeighbors = []
                if (i - 1 >= 0 && listMap[i - 1][j] === 1
                        && listGameBranch[i - 1][j] !== null) {
                    arrNeighbors[arrNeighbors.length] = listGameBranch[i - 1][j]
                }
                if (j - 1 >= 0 && listMap[i][j - 1] === 1
                        && listGameBranch[i][j - 1] !== null) {
                    arrNeighbors[arrNeighbors.length] = listGameBranch[i][j - 1]
                }

                var typeBranchNeighbor = getRandomInt(0,
                                                      arrNeighbors.length - 1)

                if (i - 1 === arrNeighbors[typeBranchNeighbor].posI) {
                    for (var n = 0; n < listImageBranchFull.length; n++) {
                        if (listImageBranchFull[n].bottom
                                !== arrNeighbors[typeBranchNeighbor].bottom
                                && listImageBranchFull[n].top
                                === arrNeighbors[typeBranchNeighbor].top
                                && listImageBranchFull[n].left
                                === arrNeighbors[typeBranchNeighbor].left
                                && listImageBranchFull[n].right
                                === arrNeighbors[typeBranchNeighbor].right) {
                            listGameBranch[i - 1][j].source = listImageBranchFull[n].source
                            listGameBranch[i - 1][j].bottom = listImageBranchFull[n].bottom
                            listGameBranch[i - 1][j].rotation = listImageBranchFull[n].rotation
                            listGameBranch[i - 1][j].name = listImageBranchFull[n].name
                            listGameBranch[i - 1][j].score = listImageBranchFull[n].score
                            sideTop = 1
                            break
                        }
                    }
                }

                if (i + 1 === arrNeighbors[typeBranchNeighbor].posI) {
                    for (var n = 0; n < listImageBranchFull.length; n++) {
                        if (listImageBranchFull[n].top !== arrNeighbors[typeBranchNeighbor].top
                                && listImageBranchFull[n].bottom
                                === arrNeighbors[typeBranchNeighbor].bottom
                                && listImageBranchFull[n].left
                                === arrNeighbors[typeBranchNeighbor].left
                                && listImageBranchFull[n].right
                                === arrNeighbors[typeBranchNeighbor].right) {
                            listGameBranch[i + 1][j].source = listImageBranchFull[n].source
                            listGameBranch[i + 1][j].top = listImageBranchFull[n].top
                            listGameBranch[i + 1][j].rotation = listImageBranchFull[n].rotation
                            listGameBranch[i + 1][j].name = listImageBranchFull[n].name
                            listGameBranch[i + 1][j].score = listImageBranchFull[n].score
                            sideBottom = 1
                            break
                        }
                    }
                }

                if (j + 1 === arrNeighbors[typeBranchNeighbor].posJ) {
                    for (var n = 0; n < listImageBranchFull.length; n++) {
                        if (listImageBranchFull[n].left !== arrNeighbors[typeBranchNeighbor].left
                                && listImageBranchFull[n].bottom
                                === arrNeighbors[typeBranchNeighbor].bottom
                                && listImageBranchFull[n].right
                                === arrNeighbors[typeBranchNeighbor].right
                                && listImageBranchFull[n].top
                                === arrNeighbors[typeBranchNeighbor].top) {
                            listGameBranch[i][j + 1].source = listImageBranchFull[n].source
                            listGameBranch[i][j + 1].left = listImageBranchFull[n].left
                            listGameBranch[i][j + 1].rotation = listImageBranchFull[n].rotation
                            listGameBranch[i][j + 1].name = listImageBranchFull[n].name
                            listGameBranch[i][j + 1].score = listImageBranchFull[n].score
                            sideRight = 1
                            break
                        }
                    }
                }

                if (j - 1 === arrNeighbors[typeBranchNeighbor].posJ) {
                    for (var n = 0; n < listImageBranchFull.length; n++) {
                        if (listImageBranchFull[n].right !== arrNeighbors[typeBranchNeighbor].right
                                && listImageBranchFull[n].bottom
                                === arrNeighbors[typeBranchNeighbor].bottom
                                && listImageBranchFull[n].left
                                === arrNeighbors[typeBranchNeighbor].left
                                && listImageBranchFull[n].top
                                === arrNeighbors[typeBranchNeighbor].top) {
                            listGameBranch[i][j - 1].source = listImageBranchFull[n].source
                            listGameBranch[i][j - 1].right = listImageBranchFull[n].right
                            listGameBranch[i][j - 1].rotation = listImageBranchFull[n].rotation
                            listGameBranch[i][j - 1].name = listImageBranchFull[n].name
                            listGameBranch[i][j - 1].score = listImageBranchFull[n].score
                            sideLeft = 1
                            break
                        }
                    }
                }

                var obBranch = getNotBlockBranch(sideLeft, sideRight, sideTop,
                                                 sideBottom)
                var objectBranch = {
                    "name": obBranch.name
                }
                objectBranch.source = obBranch.source
                objectBranch.left = obBranch.left
                objectBranch.right = obBranch.right
                objectBranch.top = obBranch.top
                objectBranch.bottom = obBranch.bottom
                objectBranch.rotation = obBranch.rotation
                objectBranch.typeItem = 1
                objectBranch.score = obBranch.score
                objectBranch.x = +xPos
                objectBranch.y = +yPos
                objectBranch.posI = i
                objectBranch.posJ = j
                objectBranch.isChecked = 0

                listGameBranch[i][j] = objectBranch

                var objectBranchNew = {
                    "name": obBranch.name
                }
                objectBranchNew.source = obBranch.source
                objectBranchNew.left = obBranch.left
                objectBranchNew.right = obBranch.right
                objectBranchNew.top = obBranch.top
                objectBranchNew.bottom = obBranch.bottom
                objectBranchNew.rotation = obBranch.rotation
                objectBranchNew.score = obBranch.score

                arrAvailableBranch[arrAvailableBranch.length] = objectBranchNew
            } else {
                typeBranch = getRandomInt(0, arrAvailableBranch.length - 1)

                objectBranch = {
                    "name": arrAvailableBranch[typeBranch].name
                }
                objectBranch.source = arrAvailableBranch[typeBranch].source
                objectBranch.left = arrAvailableBranch[typeBranch].left
                objectBranch.right = arrAvailableBranch[typeBranch].right
                objectBranch.top = arrAvailableBranch[typeBranch].top
                objectBranch.bottom = arrAvailableBranch[typeBranch].bottom
                objectBranch.rotation = arrAvailableBranch[typeBranch].rotation
                objectBranch.score = arrAvailableBranch[typeBranch].score
                objectBranch.typeItem = 1
                objectBranch.x = +xPos
                objectBranch.y = +yPos
                objectBranch.posI = i
                objectBranch.posJ = j
                objectBranch.isChecked = 0

                listGameBranch[i][j] = objectBranch
            }

            if (!(i == heightGame - 1 && j == widthGame - 1)) {
                isClosedBranch = 1
                failBranch = 0
                while (isClosedBranch !== 0) {
                    for (var i1 = 0; i1 < heightGame; i1++) {
                        for (var j1 = 0; j1 < widthGame; j1++) {
                            if (listGameBranch[i1][j1] !== null) {
                                listGameBranch[i1][j1].isChecked = 0
                            }
                        }
                    }
                    arrBranchClosed = []
                    branchClosed(i, j)

                    if (isClosedBranch === 1) {
                        var newArrAvailableBranch = []
                        for (var key in arrAvailableBranch) {
                            if (Number(key) !== Number(typeBranch)) {
                                //diff type!!
                                newArrAvailableBranch[newArrAvailableBranch.length]
                                        = arrAvailableBranch[key]
                            }
                        }
                        arrAvailableBranch = newArrAvailableBranch

                        if (arrAvailableBranch.length === 0) {
                            failBranch = 1
                            getAllNeighborsClosedBranch()
                            isClosedBranch = 0
                        } else {

                            typeBranch = getRandomInt(
                                        0, arrAvailableBranch.length - 1)

                            objectBranch = {
                                "name": arrAvailableBranch[typeBranch].name
                            }
                            objectBranch.source = arrAvailableBranch[typeBranch].source
                            objectBranch.left = arrAvailableBranch[typeBranch].left
                            objectBranch.right = arrAvailableBranch[typeBranch].right
                            objectBranch.top = arrAvailableBranch[typeBranch].top
                            objectBranch.bottom = arrAvailableBranch[typeBranch].bottom
                            objectBranch.rotation = arrAvailableBranch[typeBranch].rotation
                            objectBranch.score = arrAvailableBranch[typeBranch].score
                            objectBranch.typeItem = 1
                            objectBranch.x = +xPos
                            objectBranch.y = +yPos
                            objectBranch.posI = i
                            objectBranch.posJ = j
                            objectBranch.isChecked = 0

                            listGameBranch[i][j] = objectBranch
                        }
                    }
                }
            } else {
                arrBranchClosed = []
                branchClosed(i, j)
            }

            xPos += 31
        }
        yPos += 31
        xPos = 0
    }
}
