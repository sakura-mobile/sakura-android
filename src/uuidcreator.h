#ifndef UUIDCREATOR_H
#define UUIDCREATOR_H

#include <QtCore/QObject>
#include <QtCore/QString>

class UuidCreator : public QObject
{
    Q_OBJECT

public:
    explicit UuidCreator(QObject *parent = nullptr);
    ~UuidCreator() override = default;

    Q_INVOKABLE QString createUuid();
};

#endif // UUIDCREATOR_H
