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
    virtual ~ShareHelper();

    QString imageFilePath() const;

    Q_INVOKABLE void shareImage(QString image_path);
};

#endif // SHAREHELPER_H
