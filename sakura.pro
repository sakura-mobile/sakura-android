QT += quick androidextras
CONFIG += c++11

# The following define makes your compiler emit warnings if you use
# any Qt feature that has been marked deprecated (the exact warnings
# depend on your compiler). Refer to the documentation for the
# deprecated API to know how to port your code away from it.
DEFINES += QT_DEPRECATED_WARNINGS

# You can also make your code fail to compile if it uses deprecated APIs.
# In order to do so, uncomment the following line.
# You can also select to disable deprecated APIs only up to a certain version of Qt.
#DEFINES += QT_DISABLE_DEPRECATED_BEFORE=0x060000    # disables all the APIs deprecated before Qt 6.0.0

SOURCES += src/main.cpp \
    src/uuidcreator.cpp \
    src/uihelper.cpp
#    src/gifcreator.cpp \
#    src/uuidcreator.cpp

#OBJECTIVE_SOURCES += \
#    src/sakuraapplicationdelegate.mm \
#    src/sharehelper.mm \
#    src/admobhelper.mm \
#    src/fbhelper.mm \
#    src/storehelper.mm \
#    src/audiohelper.mm \
#    src/reachabilityhelper.mm

HEADERS += \
    src/uuidcreator.h \
    src/uihelper.h
#    src/sakuraapplicationdelegate.h \
#    src/gif.h \
#    src/gifcreator.h \
#    src/sharehelper.h \
#    src/admobhelper.h \
#    src/fbhelper.h \
#    src/storehelper.h \
#    src/audiohelper.h \
#    src/reachabilityhelper.h

RESOURCES += qml.qrc

# Additional import path used to resolve QML modules in Qt Creator's code model
QML_IMPORT_PATH =

# Additional import path used to resolve QML modules just for Qt Quick Designer
QML_DESIGNER_IMPORT_PATH =

# Default rules for deployment.
qnx: target.path = /tmp/$${TARGET}/bin
else: unix:!android: target.path = /opt/$${TARGET}/bin
!isEmpty(target.path): INSTALLS += target

DISTFILES += \
    android/src/com/derevenetz/oleg/sakura/SakuraActivity.java \
    android/AndroidManifest.xml \
    android/gradle/wrapper/gradle-wrapper.jar \
    android/gradlew \
    android/res/values/libs.xml \
    android/build.gradle \
    android/gradle/wrapper/gradle-wrapper.properties \
    android/gradlew.bat

contains(ANDROID_TARGET_ARCH,armeabi-v7a) {
    ANDROID_PACKAGE_SOURCE_DIR = \
        $$PWD/android
}

HEADERS += \
    src/uuidcreator.h
