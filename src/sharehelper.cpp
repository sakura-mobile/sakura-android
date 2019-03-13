#include <QtCore/QDir>
#include <QtCore/QStandardPaths>
#include <QtAndroidExtras/QtAndroid>
#include <QtAndroidExtras/QAndroidJniObject>

#include "sharehelper.h"

ShareHelper::ShareHelper(QObject *parent) : QObject(parent)
{
}

QString ShareHelper::imageFilePath() const
{
    QString tmp_dir = QStandardPaths::writableLocation(QStandardPaths::TempLocation);

    if (tmp_dir != "") {
        QDir().mkpath(tmp_dir);
    }

    return QDir(tmp_dir).filePath("image.jpg");
}

void ShareHelper::shareImage(const QString &image_path)
{
    QAndroidJniObject j_image_file = QAndroidJniObject::fromString(image_path);

    QtAndroid::androidActivity().callMethod<void>("shareImage", "(Ljava/lang/String;)V", j_image_file.object<jstring>());
}
