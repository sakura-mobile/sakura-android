QT += quick quickcontrols2 sql multimedia purchasing
CONFIG += c++11

DEFINES += QT_DEPRECATED_WARNINGS

SOURCES += src/main.cpp \
    src/admobhelper.cpp \
    src/androidgw.cpp \
    src/gifcreator.cpp \
    src/sharehelper.cpp \
    src/uihelper.cpp \
    src/uuidcreator.cpp

HEADERS += \
    src/admobhelper.h \
    src/androidgw.h \
    src/gif.h \
    src/gifcreator.h \
    src/sharehelper.h \
    src/uihelper.h \
    src/uuidcreator.h

RESOURCES += \
    qml.qrc \
    resources.qrc \
    translations.qrc

TRANSLATIONS += \
    translations/sakura_ru.ts \
    translations/sakura_de.ts \
    translations/sakura_fr.ts \
    translations/sakura_it.ts \
    translations/sakura_es.ts \
    translations/sakura_zh.ts \
    translations/sakura_ja.ts \
    translations/sakura_ko.ts

# Additional import path used to resolve QML modules in Qt Creator's code model
QML_IMPORT_PATH =

# Additional import path used to resolve QML modules just for Qt Quick Designer
QML_DESIGNER_IMPORT_PATH =

android {
    QT += androidextras

    OTHER_FILES += \
        android/source/AndroidManifest.xml \
        android/source/build.gradle \
        android/source/gradlew \
        android/source/gradlew.bat \
        android/source/gradle/wrapper/gradle-wrapper.jar \
        android/source/gradle/wrapper/gradle-wrapper.properties \
        android/source/res/drawable/splash_qt.xml \
        android/source/res/drawable/splash_theme.xml \
        android/source/res/drawable-hdpi/ic_splash_qt.png \
        android/source/res/drawable-hdpi/ic_splash_theme.png \
        android/source/res/drawable-mdpi/ic_splash_qt.png \
        android/source/res/drawable-mdpi/ic_splash_theme.png \
        android/source/res/drawable-xhdpi/ic_splash_qt.png \
        android/source/res/drawable-xhdpi/ic_splash_theme.png \
        android/source/res/drawable-xxhdpi/ic_splash_qt.png \
        android/source/res/drawable-xxhdpi/ic_splash_theme.png \
        android/source/res/drawable-xxxhdpi/ic_splash_qt.png \
        android/source/res/drawable-xxxhdpi/ic_splash_theme.png \
        android/source/res/mipmap-hdpi/ic_launcher.png \
        android/source/res/mipmap-mdpi/ic_launcher.png \
        android/source/res/mipmap-xhdpi/ic_launcher.png \
        android/source/res/mipmap-xxhdpi/ic_launcher.png \
        android/source/res/mipmap-xxxhdpi/ic_launcher.png \
        android/source/res/values/colors.xml \
        android/source/res/values/libs.xml \
        android/source/res/values/strings.xml \
        android/source/res/values/themes.xml \
        android/source/res/values-ru/strings.xml \
        android/source/res/values-de/strings.xml \
        android/source/res/values-fr/strings.xml \
        android/source/res/xml/provider_paths.xml \
        android/source/src/com/derevenetz/oleg/sakura/SakuraActivity.java

    ANDROID_PACKAGE_SOURCE_DIR = $$PWD/android/source

    contains(ANDROID_TARGET_ARCH,armeabi-v7a) {
        ANDROID_EXTRA_LIBS = \
            $$PWD/android/source/lib/armeabi-v7a/libcrypto.so \
            $$PWD/android/source/lib/armeabi-v7a/libssl.so
    }
}

CONFIG(release, debug|release) {
    CONFIG += qtquickcompiler
}

# Default rules for deployment.
include(deployment.pri)
