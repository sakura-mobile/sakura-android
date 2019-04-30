#ifndef UUIDCREATOR_H
#define UUIDCREATOR_H

#include <QtCore/QObject>
#include <QtCore/QString>

class UuidCreator : public QObject
{
    Q_OBJECT

public:
    explicit UuidCreator(QObject *parent = nullptr);

    UuidCreator(const UuidCreator&) = delete;
    UuidCreator(UuidCreator&&) noexcept = delete;

    UuidCreator& operator=(const UuidCreator&) = delete;
    UuidCreator& operator=(UuidCreator&&) noexcept = delete;

    ~UuidCreator() noexcept override = default;

    Q_INVOKABLE QString createUuid();
};

#endif // UUIDCREATOR_H
