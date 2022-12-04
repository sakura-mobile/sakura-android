package com.derevenetz.oleg.sakura.rustore;

import java.io.File;

import android.content.ClipData;
import android.content.Intent;
import android.net.Uri;
import android.util.DisplayMetrics;
import android.util.Log;

import androidx.core.content.FileProvider;

import org.qtproject.qt5.android.bindings.QtActivity;

public class SakuraActivity extends QtActivity
{
    private static final int REQUEST_CODE_SHARE_IMAGE = 1001;

    private static native void shareImageCompleted();

    public int getScreenDpi()
    {
        DisplayMetrics metrics = getResources().getDisplayMetrics();

        return metrics.densityDpi;
    }

    public void shareImage(String image_path)
    {
        try {
            Uri uri = FileProvider.getUriForFile(this, BuildConfig.APPLICATION_ID + ".provider", new File(image_path));

            Intent intent = new Intent(Intent.ACTION_SEND);

            intent.setType("image/*");
            intent.setClipData(new ClipData(getResources().getString(R.string.share_image_clip_data_label),
                                            new String[] {intent.getType()},
                                            new ClipData.Item(uri)));
            intent.setFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
            intent.putExtra(Intent.EXTRA_STREAM, uri);

            startActivityForResult(Intent.createChooser(intent, getResources().getString(R.string.share_image_chooser_title)), REQUEST_CODE_SHARE_IMAGE);
        } catch (Exception ex) {
            Log.e("SakuraActivity", "shareImage() : " + ex.toString());
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data)
    {
        super.onActivityResult(requestCode, resultCode, data);

        if (requestCode == REQUEST_CODE_SHARE_IMAGE) {
            shareImageCompleted();
        }
    }
}
