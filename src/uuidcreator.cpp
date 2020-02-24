#include <QtCore/QUuid>

#include "uuidcreator.h"

UuidCreator::UuidCreator(QObject *parent) : QObject(parent)
{
}

UuidCreator &UuidCreator::GetInstance()
{
    static UuidCreator instance;

    return instance;
}

QString UuidCreator::createUuid() const
{
    return QUuid::createUuid().toString();
}
