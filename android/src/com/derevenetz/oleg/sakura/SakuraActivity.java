package com.derevenetz.oleg.sakura;

import android.util.DisplayMetrics;

import org.qtproject.qt5.android.bindings.QtActivity;

public class SakuraActivity extends QtActivity
{
    private SakuraActivity activity = null;

    public SakuraActivity()
    {
        activity = this;
    }

    public int getScreenDPI()
    {
        DisplayMetrics metrics = getResources().getDisplayMetrics();

        return metrics.densityDpi;
    }
}
