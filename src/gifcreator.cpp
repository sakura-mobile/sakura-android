#include <QtCore/QtMath>
#include <QtCore/QLatin1String>
#include <QtCore/QSize>
#include <QtCore/QDir>
#include <QtCore/QStandardPaths>
#include <QtGui/QImage>
#include <QtGui/QImageReader>

#include <gif-h/gif.h>

#include "gifcreator.h"

GIFCreator::GIFCreator(QObject *parent) :
    QObject(parent)
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

    if (tmp_dir != QLatin1String("")) {
        QDir().mkpath(tmp_dir);
    }

    return QDir(tmp_dir).filePath(QStringLiteral("image_%1.jpg"));
}

QString GIFCreator::gifFilePath() const
{
    QString tmp_dir = QStandardPaths::writableLocation(QStandardPaths::TempLocation);

    if (tmp_dir != QLatin1String("")) {
        QDir().mkpath(tmp_dir);
    }

    return QDir(tmp_dir).filePath(QStringLiteral("image.gif"));
}

bool GIFCreator::createGIF(int frames_count, int frame_delay) const
{
    QImageReader first_reader(imageFilePathMask().arg(0));

    if (first_reader.canRead()) {
        QSize size = first_reader.size();

        if (!size.isEmpty()) {
            if (static_cast<qreal>(size.width()) * static_cast<qreal>(size.height()) > GIF_MPIX_LIMIT * 1000000.0) {
                qreal scale = qSqrt((static_cast<qreal>(size.width()) * static_cast<qreal>(size.height())) / (GIF_MPIX_LIMIT * 1000000.0));

                size.setWidth(qFloor(size.width()   / scale));
                size.setHeight(qFloor(size.height() / scale));
            }

            if (!size.isEmpty()) {
                GifWriter gif_writer = {};

                if (GifBegin(&gif_writer, gifFilePath().toUtf8(), static_cast<uint32_t>(size.width()),
                                                                  static_cast<uint32_t>(size.height()),
                                                                  static_cast<uint32_t>(frame_delay))) {
                    for (int frame = 0; frame < frames_count; frame++) {
                        QImageReader reader(imageFilePathMask().arg(frame));

                        if (reader.canRead()) {
                            reader.setScaledSize(size);

                            QImage image = reader.read();

                            if (!image.isNull() && image.size() == size) {
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
        } else {
            return false;
        }
    } else {
        return false;
    }
}
