#ifndef SHAREHELPER_H
#define SHAREHELPER_H

#include <QtCore/QObject>
#include <QtCore/QString>

class ShareHelper : public QObject
{
    Q_OBJECT

    Q_PROPERTY(QString imageFilePath READ imageFilePath)

public:
    explicit ShareHelper(QObject *parent = nullptr);

    ShareHelper(const ShareHelper&) = delete;
    ShareHelper(ShareHelper&&) noexcept = delete;

    ShareHelper& operator=(const ShareHelper&) = delete;
    ShareHelper& operator=(ShareHelper&&) noexcept = delete;

    ~ShareHelper() noexcept override = default;

    QString imageFilePath() const;

    Q_INVOKABLE void shareImage(const QString &image_path);
};

#endif // SHAREHELPER_H
