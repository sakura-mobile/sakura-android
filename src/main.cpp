#include <QtCore/QString>
#include <QtCore/QLocale>
#include <QtCore/QTranslator>
#include <QtGui/QGuiApplication>
#include <QtQml/QQmlApplicationEngine>
#include <QtQml/QQmlContext>
#include <QtQuickControls2/QQuickStyle>
#include <QtAndroidExtras/QtAndroid>

#include "androidgw.h"
#include "gifcreator.h"
#include "sharehelper.h"
#include "uihelper.h"
#include "uuidcreator.h"

int main(int argc, char *argv[])
{
    QTranslator     translator;
    QGuiApplication app(argc, argv);

    if (translator.load(QStringLiteral(":/tr/sakura_%1").arg(QLocale::system().name()))) {
        QGuiApplication::installTranslator(&translator);
    }

    QObject::connect(&AndroidGW::GetInstance(), &AndroidGW::shareImageCompleted, &ShareHelper::GetInstance(), &ShareHelper::handleImageSharingCompletion);

    QQmlApplicationEngine engine;

    engine.rootContext()->setContextProperty(QStringLiteral("GIFCreator"), &GIFCreator::GetInstance());
    engine.rootContext()->setContextProperty(QStringLiteral("ShareHelper"), &ShareHelper::GetInstance());
    engine.rootContext()->setContextProperty(QStringLiteral("UIHelper"), &UIHelper::GetInstance());
    engine.rootContext()->setContextProperty(QStringLiteral("UuidCreator"), &UuidCreator::GetInstance());

    QQuickStyle::setStyle(QStringLiteral("Default"));

    engine.load(QUrl(QStringLiteral("qrc:/qml/main.qml")));

    QtAndroid::hideSplashScreen();

    if (engine.rootObjects().isEmpty()) {
        return -1;
    } else {
        return QGuiApplication::exec();
    }
}
