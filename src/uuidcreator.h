#ifndef UUIDCREATOR_H
#define UUIDCREATOR_H

#include <QtCore/QObject>
#include <QtCore/QString>

class UuidCreator : public QObject
{
    Q_OBJECT

private:
    explicit UuidCreator(QObject *parent = nullptr);
    ~UuidCreator() noexcept override = default;

public:
    UuidCreator(const UuidCreator&) = delete;
    UuidCreator(UuidCreator&&) noexcept = delete;

    UuidCreator &operator=(const UuidCreator&) = delete;
    UuidCreator &operator=(UuidCreator&&) noexcept = delete;

    static UuidCreator &GetInstance();

    Q_INVOKABLE QString createUuid();
};

#endif // UUIDCREATOR_H
