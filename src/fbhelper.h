#ifndef FBHELPER_H
#define FBHELPER_H

#include <QtCore/QObject>
#include <QtCore/QString>

class FBHelper : public QObject
{
    Q_OBJECT

public:
    explicit FBHelper(QObject *parent = nullptr);
    virtual ~FBHelper();

    Q_INVOKABLE void showGameRequest(QString title, QString message);
    Q_INVOKABLE void logout();

public slots:
    void notifyGameRequestCompleted(int recipients_count);

signals:
    void gameRequestCompleted(int recipientsCount);
};

#endif // FBHELPER_H
