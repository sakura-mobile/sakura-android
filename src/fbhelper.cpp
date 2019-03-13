#include <QtAndroidExtras/QtAndroid>
#include <QtAndroidExtras/QAndroidJniObject>

#include "fbhelper.h"

FBHelper::FBHelper(QObject *parent) : QObject(parent)
{
    QtAndroid::androidActivity().callMethod<void>("initFB");
}

void FBHelper::showGameRequest(const QString &title, const QString &message)
{
    QAndroidJniObject j_title   = QAndroidJniObject::fromString(title);
    QAndroidJniObject j_message = QAndroidJniObject::fromString(message);

    QtAndroid::androidActivity().callMethod<void>("showFBGameRequest", "(Ljava/lang/String;Ljava/lang/String;)V", j_title.object<jstring>(),
                                                                                                                  j_message.object<jstring>());
}

void FBHelper::logout()
{
    QtAndroid::androidActivity().callMethod<void>("logoutFB");
}

void FBHelper::notifyGameRequestCompleted(int recipients_count)
{
    emit gameRequestCompleted(recipients_count);
}
