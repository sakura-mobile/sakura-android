#ifndef GIFCREATOR_H
#define GIFCREATOR_H

#include <QtCore/QObject>
#include <QtCore/QString>

class GIFCreator : public QObject
{
    Q_OBJECT

    Q_PROPERTY(QString imageFilePathMask READ imageFilePathMask)
    Q_PROPERTY(QString gifFilePath       READ gifFilePath)

private:
    explicit GIFCreator(QObject *parent = nullptr);
    ~GIFCreator() noexcept override = default;

public:
    GIFCreator(const GIFCreator&) = delete;
    GIFCreator(GIFCreator&&) noexcept = delete;

    GIFCreator &operator=(const GIFCreator&) = delete;
    GIFCreator &operator=(GIFCreator&&) noexcept = delete;

    static GIFCreator &GetInstance();

    QString imageFilePathMask() const;
    QString gifFilePath() const;

    Q_INVOKABLE bool createGIF(int frames_count, int frame_delay);
};

#endif // GIFCREATOR_H
