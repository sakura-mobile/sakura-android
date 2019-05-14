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

    QObject::connect(&AndroidGW::GetInstance(), &AndroidGW::setBannerViewHeight,        &AdMobHelper::GetInstance(), &AdMobHelper::setBannerViewHeight);
    QObject::connect(&AndroidGW::GetInstance(), &AndroidGW::notifyGameRequestCompleted, &FBHelper::GetInstance(),    &FBHelper::notifyGameRequestCompleted);

    QQmlApplicationEngine engine;

    engine.rootContext()->setContextProperty(QStringLiteral("AdMobHelper"), &AdMobHelper::GetInstance());
    engine.rootContext()->setContextProperty(QStringLiteral("FBHelper"), &FBHelper::GetInstance());
    engine.rootContext()->setContextProperty(QStringLiteral("UIHelper"), &UIHelper::GetInstance());
    engine.rootContext()->setContextProperty(QStringLiteral("ShareHelper"), &ShareHelper::GetInstance());
    engine.rootContext()->setContextProperty(QStringLiteral("UuidCreator"), &UuidCreator::GetInstance());
    engine.rootContext()->setContextProperty(QStringLiteral("GIFCreator"), &GIFCreator::GetInstance());

    engine.load(QUrl(QStringLiteral("qrc:/qml/main.qml")));

    QtAndroid::hideSplashScreen();

    if (engine.rootObjects().isEmpty())
        return -1;

    return QGuiApplication::exec();
}
