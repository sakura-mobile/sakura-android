#ifndef ANDROIDGW_H
#define ANDROIDGW_H

#include <QtCore/QObject>

class AndroidGW : public QObject
{
    Q_OBJECT

public:
    explicit AndroidGW(QObject *parent = nullptr);

    static AndroidGW *instance();

signals:
    void setBannerViewHeight(int height);

private:
    static AndroidGW *Instance;
};

#endif // ANDROIDGW_H
