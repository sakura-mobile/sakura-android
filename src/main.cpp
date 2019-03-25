#include <QtCore/QString>
#include <QtCore/QLocale>
#include <QtCore/QTranslator>
#include <QtGui/QGuiApplication>
#include <QtQml/QQmlApplicationEngine>
#include <QtQml/QQmlContext>
#include <QtAndroidExtras/QtAndroid>

#include "androidgw.h"
#include "admobhelper.h"
#include "fbhelper.h"
#include "uihelper.h"
#include "sharehelper.h"
#include "uuidcreator.h"
#include "gifcreator.h"

int main(int argc, char *argv[])
{
    QTranslator     translator;
    QGuiApplication app(argc, argv);

    if (translator.load(QString(":/tr/sakura_%1").arg(QLocale::system().name()))) {
        QGuiApplication::installTranslator(&translator);
    }

    auto android_gw   = new AndroidGW(&app);
    auto admob_helper = new AdMobHelper(&app);
    auto fb_helper    = new FBHelper(&app);

    QObject::connect(android_gw, &AndroidGW::setBannerViewHeight,        admob_helper, &AdMobHelper::setBannerViewHeight);
    QObject::connect(android_gw, &AndroidGW::notifyGameRequestCompleted, fb_helper,    &FBHelper::notifyGameRequestCompleted);

    QQmlApplicationEngine engine;

    engine.rootContext()->setContextProperty(QStringLiteral("AdMobHelper"), admob_helper);
    engine.rootContext()->setContextProperty(QStringLiteral("FBHelper"), fb_helper);
    engine.rootContext()->setContextProperty(QStringLiteral("UIHelper"), new UIHelper(&app));
    engine.rootContext()->setContextProperty(QStringLiteral("ShareHelper"), new ShareHelper(&app));
    engine.rootContext()->setContextProperty(QStringLiteral("UuidCreator"), new UuidCreator(&app));
    engine.rootContext()->setContextProperty(QStringLiteral("GIFCreator"), new GIFCreator(&app));

    engine.load(QUrl(QStringLiteral("qrc:/qml/main.qml")));

    QtAndroid::hideSplashScreen();

    if (engine.rootObjects().isEmpty())
        return -1;

    return QGuiApplication::exec();
}
