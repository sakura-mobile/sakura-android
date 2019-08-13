import QtQuick 2.12
import QtQuick.Window 2.12
import QtQuick.Controls 2.5
import QtQuick.LocalStorage 2.12

ApplicationWindow {
    id:         mainWindow
    title:      qsTr("Sakura")
    visibility: Window.FullScreen
    visible:    true

    property bool disableAds:     false

    property string adMobConsent: ""

    onDisableAdsChanged: {
        setSetting("DisableAds", disableAds ? "true" : "false");

        updateFeatures();
    }

    onAdMobConsentChanged: {
        setSetting("AdMobConsent", adMobConsent);

        updateFeatures();
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

    function updateFeatures() {
        if (!disableAds && (adMobConsent === "PERSONALIZED" || adMobConsent === "NON_PERSONALIZED")) {
            AdMobHelper.setPersonalization(adMobConsent === "PERSONALIZED");

            AdMobHelper.initAds();
        }

        if (mainStackView.depth > 0 && typeof mainStackView.currentItem.bannerViewHeight === "number") {
            if (disableAds) {
                AdMobHelper.hideBannerView();
            } else {
                AdMobHelper.showBannerView();
            }
        } else {
            AdMobHelper.hideBannerView();
        }
    }

    function showInterstitial() {
        if (!disableAds) {
            AdMobHelper.showInterstitial();
        }
    }

    function showAdMobConsentDialog() {
        adMobConsentDialog.open();
    }

    StackView {
        id:           mainStackView
        anchors.fill: parent

        onCurrentItemChanged: {
            for (var i = 0; i < depth; i++) {
                var item = get(i, StackView.DontLoad);

                if (item !== null) {
                    item.focus = false;
                }
            }

            if (depth > 0) {
                currentItem.forceActiveFocus();

                if (typeof currentItem.bannerViewHeight === "number") {
                    if (mainWindow.disableAds) {
                        AdMobHelper.hideBannerView();
                    } else {
                        AdMobHelper.showBannerView();
                    }
                } else {
                    AdMobHelper.hideBannerView();
                }
            } else {
                AdMobHelper.hideBannerView();
            }
        }
    }

    MainPage {
        id: mainPage
    }

    StorePage {
        id: storePage
    }

    MultiPointTouchArea {
        anchors.fill: parent
        z:            1
        enabled:      mainStackView.busy
    }

    AdMobConsentDialog {
        id: adMobConsentDialog

        onPersonalizedAdsSelected: {
            mainWindow.adMobConsent = "PERSONALIZED";
        }

        onNonPersonalizedAdsSelected: {
            mainWindow.adMobConsent = "NON_PERSONALIZED";
        }
    }

    Component.onCompleted: {
        disableAds   = (getSetting("DisableAds",   "false") === "true");
        adMobConsent =  getSetting("AdMobConsent", "");

        updateFeatures();

        mainStackView.push(mainPage);

        if (!disableAds && adMobConsent !== "PERSONALIZED" && adMobConsent !== "NON_PERSONALIZED") {
            adMobConsentDialog.open();
        }
    }
}
