#include <QtCore/QUuid>

#include "uuidcreator.h"

UuidCreator::UuidCreator(QObject *parent) : QObject(parent)
{
}

UuidCreator::~UuidCreator()
{
}

QString UuidCreator::createUuid()
{
    return QUuid::createUuid().toString();
}
