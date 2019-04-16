#ifndef FBHELPER_H
#define FBHELPER_H

#include <QtCore/QObject>
#include <QtCore/QString>

class FBHelper : public QObject
{
    Q_OBJECT

public:
    explicit FBHelper(QObject *parent = nullptr);

    FBHelper(const FBHelper&) = delete;
    FBHelper(const FBHelper&&) noexcept = delete;

    FBHelper& operator=(const FBHelper&) = delete;
    FBHelper& operator=(const FBHelper&&) noexcept = delete;

    ~FBHelper() noexcept override = default;

    Q_INVOKABLE void showGameRequest(const QString &title, const QString &message);
    Q_INVOKABLE void logout();

public slots:
    void notifyGameRequestCompleted(int recipients_count);

signals:
    void gameRequestCompleted(int recipientsCount);
};

#endif // FBHELPER_H
