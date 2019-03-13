#ifndef ANDROIDGW_H
#define ANDROIDGW_H

#include <QtCore/QObject>

class AndroidGW : public QObject
{
    Q_OBJECT

public:
    explicit AndroidGW(QObject *parent = nullptr);
    ~AndroidGW() override = default;

    static AndroidGW *instance();

signals:
    void setBannerViewHeight(int height);

    void notifyGameRequestCompleted(int recipients_count);

private:
    static AndroidGW *Instance;
};

#endif // ANDROIDGW_H
