#ifndef GIFCREATOR_H
#define GIFCREATOR_H

#include <QtCore/QObject>
#include <QtCore/QString>

class GIFCreator : public QObject
{
    Q_OBJECT

    Q_PROPERTY(QString imageFilePathMask READ imageFilePathMask)
    Q_PROPERTY(QString gifFilePath       READ gifFilePath)

public:
    explicit GIFCreator(QObject *parent = nullptr);
    ~GIFCreator() override = default;

    QString imageFilePathMask() const;
    QString gifFilePath() const;

    Q_INVOKABLE bool createGIF(int frames_count, int frame_delay);
};

#endif // GIFCREATOR_H
