#include <QtCore/QDir>
#include <QtCore/QStandardPaths>
#include <QtGui/QImage>

#include "gif.h"
#include "gifcreator.h"

GIFCreator::GIFCreator(QObject *parent) : QObject(parent)
{
}

GIFCreator &GIFCreator::GetInstance()
{
    static GIFCreator instance;

    return instance;
}

QString GIFCreator::imageFilePathMask() const
{
    QString tmp_dir = QStandardPaths::writableLocation(QStandardPaths::TempLocation);

    if (tmp_dir != "") {
        QDir().mkpath(tmp_dir);
    }

    return QDir(tmp_dir).filePath("image_%1.jpg");
}

QString GIFCreator::gifFilePath() const
{
    QString tmp_dir = QStandardPaths::writableLocation(QStandardPaths::TempLocation);

    if (tmp_dir != "") {
        QDir().mkpath(tmp_dir);
    }

    return QDir(tmp_dir).filePath("image.gif");
}

bool GIFCreator::createGIF(int frames_count, int frame_delay)
{
    QImage first_image(imageFilePathMask().arg(0));

    if (!first_image.isNull()) {
        GifWriter gif_writer = {};

        if (GifBegin(&gif_writer, gifFilePath().toUtf8(), static_cast<uint32_t>(first_image.width()),
                                                          static_cast<uint32_t>(first_image.height()),
                                                          static_cast<uint32_t>(frame_delay))) {
            for (int frame = 0; frame < frames_count; frame++) {
                QImage image(imageFilePathMask().arg(frame));

                if (!image.isNull()) {
                    if (!GifWriteFrame(&gif_writer,
                                       image.convertToFormat(QImage::Format_Indexed8).
                                             convertToFormat(QImage::Format_RGBA8888).constBits(),
                                       static_cast<uint32_t>(image.width()),
                                       static_cast<uint32_t>(image.height()),
                                       static_cast<uint32_t>(frame_delay))) {
                        GifEnd(&gif_writer);

                        return false;
                    }
                } else {
                    GifEnd(&gif_writer);

                    return false;
                }
            }

            return GifEnd(&gif_writer);
        } else {
            return false;
        }
    } else {
        return false;
    }
}
