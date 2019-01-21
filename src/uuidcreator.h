#ifndef UUIDCREATOR_H
#define UUIDCREATOR_H

#include <QtCore/QObject>

class UuidCreator : public QObject
{
    Q_OBJECT

public:
    explicit UuidCreator(QObject *parent = nullptr);
    virtual ~UuidCreator();

    Q_INVOKABLE QString createUuid();
};

#endif // UUIDCREATOR_H
