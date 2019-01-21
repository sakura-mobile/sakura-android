var listImageTree = new Array();
var listImageBranch = new Array();
var listGameBranch = new Array();
var listAnimationBranch = new Array();
var listObjectGlare = new Array();
var listGameScores = new Array();
listGameScores[3] = 4500
listGameScores[5] = 10000
listGameScores[7] = 15000
listGameScores[9] = 30000
listGameScores[11] = 45000

function initObjectBranch() {
//------------- 1 -------------------------
    var objectBranch={name: 'branch_01'}
    objectBranch.source = "qrc:/resources/images/branch/branch_01_00.png"
    objectBranch.left = 1
    objectBranch.right = 1
    objectBranch.top = 0
    objectBranch.bottom = 0
    objectBranch.rotation = 0
    listImageBranch[0] = objectBranch;

    objectBranch={name: 'branch_01'}
    objectBranch.source = "qrc:/resources/images/branch/branch_01_00.png"
    objectBranch.left = 0
    objectBranch.right = 0
    objectBranch.top = 1
    objectBranch.bottom = 1
    objectBranch.rotation = 90
    listImageBranch[1] = objectBranch;

    objectBranch={name: 'branch_01'}
    objectBranch.source = "qrc:/resources/images/branch/branch_01_00.png"
    objectBranch.left = 1
    objectBranch.right = 1
    objectBranch.top = 0
    objectBranch.bottom = 0
    objectBranch.rotation = 180
    listImageBranch[2] = objectBranch;

    objectBranch={name: 'branch_01'}
    objectBranch.source = "qrc:/resources/images/branch/branch_01_00.png"
    objectBranch.left = 0
    objectBranch.right = 0
    objectBranch.top = 1
    objectBranch.bottom = 1
    objectBranch.rotation = 270
    listImageBranch[3] = objectBranch;

//--------------- 2 -----------------------------------
    objectBranch ={name: 'branch_02'}
    objectBranch.source = "qrc:/resources/images/branch/branch_02_00.png"
    objectBranch.left = 1
    objectBranch.right = 0
    objectBranch.top = 0
    objectBranch.bottom = 1
    objectBranch.rotation = 0
    listImageBranch[4] = objectBranch;

    objectBranch ={name: 'branch_02'}
    objectBranch.source = "qrc:/resources/images/branch/branch_02_00.png"
    objectBranch.left = 1
    objectBranch.right = 0
    objectBranch.top = 1
    objectBranch.bottom = 0
    objectBranch.rotation = 90
    listImageBranch[5] = objectBranch;

    objectBranch ={name: 'branch_02'}
    objectBranch.source = "qrc:/resources/images/branch/branch_02_00.png"
    objectBranch.left = 0
    objectBranch.right = 1
    objectBranch.top = 1
    objectBranch.bottom = 0
    objectBranch.rotation = 180
    listImageBranch[6] = objectBranch;

    objectBranch ={name: 'branch_02'}
    objectBranch.source = "qrc:/resources/images/branch/branch_02_00.png"
    objectBranch.left = 0
    objectBranch.right = 1
    objectBranch.top = 0
    objectBranch.bottom = 1
    objectBranch.rotation = 270
    listImageBranch[7] = objectBranch;

//----------- 3 ------------------------------------

    objectBranch = {name: 'branch_03'}
    objectBranch.source = "qrc:/resources/images/branch/branch_03_00.png"
    objectBranch.left = 1
    objectBranch.right = 1
    objectBranch.top = 1
    objectBranch.bottom = 0
    objectBranch.rotation = 0
    listImageBranch[8] = objectBranch;

    objectBranch = {name: 'branch_03'}
    objectBranch.source = "qrc:/resources/images/branch/branch_03_00.png"
    objectBranch.left = 0
    objectBranch.right = 1
    objectBranch.top = 1
    objectBranch.bottom = 1
    objectBranch.rotation = 90
    listImageBranch[9] = objectBranch;

    objectBranch = {name: 'branch_03'}
    objectBranch.source = "qrc:/resources/images/branch/branch_03_00.png"
    objectBranch.left = 1
    objectBranch.right = 1
    objectBranch.top = 0
    objectBranch.bottom = 1
    objectBranch.rotation = 180
    listImageBranch[10] = objectBranch;

    objectBranch = {name: 'branch_03'}
    objectBranch.source = "qrc:/resources/images/branch/branch_03_00.png"
    objectBranch.left = 1
    objectBranch.right = 0
    objectBranch.top = 1
    objectBranch.bottom = 1
    objectBranch.rotation = 270
    listImageBranch[11] = objectBranch;

//----------- 4 ------------------------------------
    objectBranch = {name: 'branch_04'}
    objectBranch.source = "qrc:/resources/images/branch/branch_04_00.png"
    objectBranch.left = 0
    objectBranch.right = 0
    objectBranch.top = 0
    objectBranch.bottom = 1
    objectBranch.rotation = 0
    listImageBranch[12] = objectBranch;

    objectBranch = {name: 'branch_04'}
    objectBranch.source = "qrc:/resources/images/branch/branch_04_00.png"
    objectBranch.left = 1
    objectBranch.right = 0
    objectBranch.top = 0
    objectBranch.bottom = 0
    objectBranch.rotation = 90
    listImageBranch[13] = objectBranch;

    objectBranch = {name: 'branch_04'}
    objectBranch.source = "qrc:/resources/images/branch/branch_04_00.png"
    objectBranch.left = 0
    objectBranch.right = 0
    objectBranch.top = 1
    objectBranch.bottom = 0
    objectBranch.rotation = 180
    listImageBranch[14] = objectBranch;

    objectBranch = {name: 'branch_04'}
    objectBranch.source = "qrc:/resources/images/branch/branch_04_00.png"
    objectBranch.left = 0
    objectBranch.right = 1
    objectBranch.top = 0
    objectBranch.bottom = 0
    objectBranch.rotation = 270
    listImageBranch[15] = objectBranch;
}
