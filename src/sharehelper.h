#ifndef SHAREHELPER_H
#define SHAREHELPER_H

#include <QtCore/QObject>
#include <QtCore/QString>

class ShareHelper : public QObject
{
    Q_OBJECT

    Q_PROPERTY(QString imageFilePath READ imageFilePath)

private:
    explicit ShareHelper(QObject *parent = nullptr);
    ~ShareHelper() noexcept override = default;

public:
    ShareHelper(const ShareHelper &) = delete;
    ShareHelper(ShareHelper &&) noexcept = delete;

    ShareHelper &operator=(const ShareHelper &) = delete;
    ShareHelper &operator=(ShareHelper &&) noexcept = delete;

    static ShareHelper &GetInstance();

    QString imageFilePath() const;

    Q_INVOKABLE void shareImage(const QString &image_path) const;

public slots:
    void handleImageSharingCompletion();

signals:
    void shareImageCompleted();
};

#endif // SHAREHELPER_H
