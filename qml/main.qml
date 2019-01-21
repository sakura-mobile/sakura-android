import QtQuick 2.9
import QtQuick.Window 2.3
import QtQuick.Controls 2.2
import QtQuick.LocalStorage 2.0

Window {
    id:         mainWindow
    title:      qsTr("Sakura")
    visibility: Window.FullScreen
    visible:    true

    property bool appInForeground: Qt.application.active
    property bool disableAds:      false

    onAppInForegroundChanged: {
        AudioHelper.refresh();
    }

    onDisableAdsChanged: {
        setSetting("DisableAds", disableAds ? "true" : "false");

        if (mainStackView.depth > 0 && mainStackView.currentItem.hasOwnProperty("bannerViewHeight")) {
            if (disableAds) {
                AdMobHelper.hideBannerView();
            } else {
                AdMobHelper.showBannerView();
            }
        }
    }

    function showInterstitial() {
        if (!disableAds) {
            AdMobHelper.showInterstitial();
        }
    }

    function addScore(text, score, difficulty) {
        var db = LocalStorage.openDatabaseSync("SakuraDB", "1.0", "SakuraDB", 1000000);

        db.transaction(function(tx) {
            tx.executeSql("CREATE TABLE IF NOT EXISTS HIGHSCORES(NAME TEXT, SCORE NUMBER, DATE TEXT, DIFFICULTY TEXT)");

            tx.executeSql("INSERT INTO HIGHSCORES (NAME, SCORE, DATE, DIFFICULTY) VALUES (?, ?, ?, ?)", [text, score, Qt.formatDate(new Date(), "dd.MM.yyyy"), difficulty]);
        });
    }

    function setSetting(key, value) {
        var db = LocalStorage.openDatabaseSync("SakuraDB", "1.0", "SakuraDB", 1000000);

        db.transaction(function(tx) {
            tx.executeSql("CREATE TABLE IF NOT EXISTS SETTINGS(KEY TEXT PRIMARY KEY, VALUE TEXT)");

            tx.executeSql("REPLACE INTO SETTINGS (KEY, VALUE) VALUES (?, ?)", [key, value]);
        });
    }

    function getSetting(key, defaultValue) {
        var value = defaultValue;
        var db    = LocalStorage.openDatabaseSync("SakuraDB", "1.0", "SakuraDB", 1000000);

        db.transaction(function(tx) {
            tx.executeSql("CREATE TABLE IF NOT EXISTS SETTINGS(KEY TEXT PRIMARY KEY, VALUE TEXT)");

            var res = tx.executeSql("SELECT VALUE FROM SETTINGS WHERE KEY=?", [key]);

            if (res.rows.length > 0) {
                value = res.rows.item(0).VALUE;
            }
        });

        return value;
    }

    Rectangle {
        anchors.fill: parent
        color:        "black"

        StackView {
            id:           mainStackView
            anchors.fill: parent

            onCurrentItemChanged: {
                for (var i = 0; i < depth; i++) {
                    var item = get(i, false);

                    if (item !== null) {
                        item.focus = false;

                        if (item.hasOwnProperty("pageActive")) {
                            item.pageActive = false;
                        }
                    }
                }

                if (depth > 0) {
                    currentItem.forceActiveFocus();

                    if (currentItem.hasOwnProperty("pageActive")) {
                        currentItem.pageActive = true;
                    }

                    if (currentItem.hasOwnProperty("bannerViewHeight")) {
                        if (mainWindow.disableAds) {
                            AdMobHelper.hideBannerView();
                        } else {
                            AdMobHelper.showBannerView();
                        }
                    } else {
                        AdMobHelper.hideBannerView();
                    }
                }
            }
        }

        MainPage {
            id: mainPage
        }

        StorePage {
            id: storePage
        }

        MouseArea {
            id:           screenLockMouseArea
            anchors.fill: parent
            z:            100
            enabled:      mainStackView.busy
        }

        Component.onCompleted: {
            disableAds = (getSetting("DisableAds", "false") === "true");

            mainStackView.push(mainPage);
        }
    }
}
