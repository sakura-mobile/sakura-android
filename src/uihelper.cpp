#include <QtAndroidExtras/QtAndroid>
#include <QtAndroidExtras/QAndroidJniObject>

#include "uihelper.h"

UIHelper::UIHelper(QObject *parent) : QObject(parent)
{
}

int UIHelper::getScreenDPI()
{
    return QtAndroid::androidActivity().callMethod<jint>("getScreenDPI");
}
