#include <QtAndroidExtras/QAndroidJniObject>

#include "androidgw.h"

AndroidGW *AndroidGW::Instance = nullptr;

AndroidGW::AndroidGW(QObject *parent) : QObject(parent)
{
    Instance = this;
}

AndroidGW *AndroidGW::instance()
{
    return Instance;
}

extern "C" JNIEXPORT void JNICALL Java_com_derevenetz_oleg_sakura_SakuraActivity_bannerViewHeightUpdated(JNIEnv *, jclass, jint height)
{
    emit AndroidGW::instance()->setBannerViewHeight(height);
}
