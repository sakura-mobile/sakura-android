#include <QtAndroidExtras/QtAndroid>
#include <QtAndroidExtras/QAndroidJniObject>

#include "uihelper.h"

UIHelper::UIHelper(QObject *parent) : QObject(parent)
{
}

UIHelper &UIHelper::GetInstance()
{
    static UIHelper instance;

    return instance;
}

int UIHelper::getScreenDpi() const
{
    return QtAndroid::androidActivity().callMethod<jint>("getScreenDpi");
}
