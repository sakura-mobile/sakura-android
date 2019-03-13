#include <QtCore/QUuid>

#include "uuidcreator.h"

UuidCreator::UuidCreator(QObject *parent) : QObject(parent)
{
}

QString UuidCreator::createUuid()
{
    return QUuid::createUuid().toString();
}
