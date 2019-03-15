#include <QtAndroidExtras/QAndroidJniObject>

#include "androidgw.h"

#define JAVA_NATIVE_METHOD_NAME(class_name, method_name) Java_com_derevenetz_oleg_sakura_ ## class_name ## _ ## method_name

AndroidGW *AndroidGW::Instance = nullptr;

AndroidGW::AndroidGW(QObject *parent) : QObject(parent)
{
    Instance = this;
}

AndroidGW *AndroidGW::instance()
{
    return Instance;
}

extern "C" JNIEXPORT void JNICALL JAVA_NATIVE_METHOD_NAME(SakuraActivity, bannerViewHeightUpdated)(JNIEnv *, jclass, jint height)
{
    emit AndroidGW::instance()->setBannerViewHeight(height);
}

extern "C" JNIEXPORT void JNICALL JAVA_NATIVE_METHOD_NAME(SakuraActivity, fbGameRequestCompleted)(JNIEnv *, jclass, jint recipients_count)
{
    emit AndroidGW::instance()->notifyGameRequestCompleted(recipients_count);
}
