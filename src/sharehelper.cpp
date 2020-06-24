#include <QtCore/QLatin1String>
#include <QtCore/QDir>
#include <QtCore/QStandardPaths>
#include <QtAndroidExtras/QtAndroid>
#include <QtAndroidExtras/QAndroidJniObject>

#include "sharehelper.h"

ShareHelper::ShareHelper(QObject *parent) :
    QObject(parent)
{
}

ShareHelper &ShareHelper::GetInstance()
{
    static ShareHelper instance;

    return instance;
}

QString ShareHelper::imageFilePath() const
{
    QString tmp_dir = QStandardPaths::writableLocation(QStandardPaths::TempLocation);

    if (tmp_dir != QLatin1String("")) {
        QDir().mkpath(tmp_dir);
    }

    return QDir(tmp_dir).filePath(QStringLiteral("image.jpg"));
}

void ShareHelper::shareImage(const QString &image_path) const
{
    QAndroidJniObject j_image_path = QAndroidJniObject::fromString(image_path);

    QtAndroid::androidActivity().callMethod<void>("shareImage", "(Ljava/lang/String;)V", j_image_path.object<jstring>());
}
