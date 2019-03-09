package com.derevenetz.oleg.sakura;

import java.io.File;
import java.util.Arrays;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.support.v4.content.FileProvider;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import org.qtproject.qt5.android.bindings.QtActivity;

import com.google.android.gms.ads.AdListener;
import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.AdSize;
import com.google.android.gms.ads.AdView;
import com.google.android.gms.ads.InterstitialAd;
import com.google.android.gms.ads.MobileAds;

import com.facebook.AccessToken;
import com.facebook.CallbackManager;
import com.facebook.FacebookCallback;
import com.facebook.FacebookException;
import com.facebook.FacebookSdk;
import com.facebook.login.LoginManager;
import com.facebook.login.LoginResult;
import com.facebook.share.model.GameRequestContent;
import com.facebook.share.widget.GameRequestDialog;

public class SakuraActivity extends QtActivity
{
    private AdView            bannerView        = null;
    private InterstitialAd    interstitial      = null;
    private CallbackManager   callbackManager   = null;
    private GameRequestDialog gameRequestDialog = null;

    private static native void bannerViewHeightUpdated(int height);

    private static native void fbGameRequestCompleted(int recipients_count);

    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
    }

    @Override
    public void onResume()
    {
        super.onResume();

        if (bannerView != null) {
            bannerView.resume();
        }
    }

    @Override
    public void onPause()
    {
        if (bannerView != null) {
            bannerView.pause();
        }

        super.onPause();
    }

    @Override
    public void onDestroy()
    {
        if (bannerView != null) {
            bannerView.destroy();

            bannerView = null;
        }

        super.onDestroy();
    }

    public int getScreenDPI()
    {
        DisplayMetrics metrics = getResources().getDisplayMetrics();

        return metrics.densityDpi;
    }

    public void shareImage(String image_file)
    {
        try {
            Intent intent = new Intent(Intent.ACTION_SEND);

            intent.setType("image/*");
            intent.putExtra(Intent.EXTRA_STREAM, FileProvider.getUriForFile(this, BuildConfig.APPLICATION_ID + ".provider", new File(image_file)));

            startActivity(Intent.createChooser(intent, getResources().getString(R.string.activity_header_share_image)));
        } catch (Exception ex) {
            // Ignore
        }
    }

    public void initAds(String app_id, String interstitial_unit_id)
    {
        final String  f_app_id               = app_id;
        final String  f_interstitial_unit_id = interstitial_unit_id;
        final Context f_context              = this;

        runOnUiThread(new Runnable() {
            @Override
            public void run()
            {
                MobileAds.initialize(f_context, f_app_id);

                interstitial = new InterstitialAd(f_context);

                interstitial.setAdUnitId(f_interstitial_unit_id);

                interstitial.setAdListener(new AdListener() {
                    @Override
                    public void onAdClosed()
                    {
                        if (interstitial != null) {
                            AdRequest.Builder builder = new AdRequest.Builder();

                            interstitial.loadAd(builder.build());
                        }
                    }

                    @Override
                    public void onAdFailedToLoad(int errorCode)
                    {
                        if (interstitial != null) {
                            new Handler().postDelayed(new Runnable() {
                                @Override
                                public void run()
                                {
                                    if (interstitial != null) {
                                        AdRequest.Builder builder = new AdRequest.Builder();

                                        interstitial.loadAd(builder.build());
                                    }
                                }
                            }, 60000);
                        }
                    }
                });

                AdRequest.Builder builder = new AdRequest.Builder();

                interstitial.loadAd(builder.build());
            }
        });
    }

    public void showBannerView(String unit_id)
    {
        final String  f_unit_id = unit_id;
        final Context f_context = this;

        runOnUiThread(new Runnable() {
            @Override
            public void run()
            {
                View view = getWindow().getDecorView().getRootView();

                if (view instanceof ViewGroup) {
                    ViewGroup view_group = (ViewGroup)view;

                    if (bannerView != null) {
                        view_group.removeView(bannerView);

                        bannerView.destroy();

                        bannerViewHeightUpdated(0);

                        bannerView = null;
                    }

                    FrameLayout.LayoutParams params = new FrameLayout.LayoutParams(FrameLayout.LayoutParams.WRAP_CONTENT,
                                                                                   FrameLayout.LayoutParams.WRAP_CONTENT,
                                                                                   Gravity.CENTER_HORIZONTAL | Gravity.BOTTOM);

                    bannerView = new AdView(f_context);

                    bannerView.setAdSize(AdSize.SMART_BANNER);
                    bannerView.setAdUnitId(f_unit_id);
                    bannerView.setLayoutParams(params);
                    bannerView.setVisibility(View.GONE);

                    bannerView.setAdListener(new AdListener() {
                        @Override
                        public void onAdLoaded()
                        {
                            if (bannerView != null) {
                                bannerView.setVisibility(View.VISIBLE);

                                bannerView.post(new Runnable() {
                                    @Override
                                    public void run()
                                    {
                                        if (bannerView != null) {
                                            bannerViewHeightUpdated(bannerView.getHeight());
                                        }
                                    }
                                });
                            }
                        }

                        @Override
                        public void onAdFailedToLoad(int errorCode)
                        {
                            if (bannerView != null) {
                                bannerView.setVisibility(View.VISIBLE);

                                bannerView.post(new Runnable() {
                                    @Override
                                    public void run()
                                    {
                                        if (bannerView != null) {
                                            bannerViewHeightUpdated(bannerView.getHeight());
                                        }
                                    }
                                });
                            }
                        }
                    });

                    view_group.addView(bannerView);

                    AdRequest.Builder builder = new AdRequest.Builder();

                    bannerView.loadAd(builder.build());
                }
            }
        });
    }

    public void hideBannerView()
    {
        runOnUiThread(new Runnable() {
            @Override
            public void run()
            {
                View view = getWindow().getDecorView().getRootView();

                if (view instanceof ViewGroup) {
                    ViewGroup view_group = (ViewGroup)view;

                    if (bannerView != null) {
                        view_group.removeView(bannerView);

                        bannerView.destroy();

                        bannerViewHeightUpdated(0);

                        bannerView = null;
                    }
                }
            }
        });
    }

    public void showInterstitial()
    {
        runOnUiThread(new Runnable() {
            @Override
            public void run()
            {
                if (interstitial != null && interstitial.isLoaded()) {
                    interstitial.show();
                }
            }
        });
    }

    public void initFB()
    {
        final Context f_app_context = this.getApplicationContext();

        runOnUiThread(new Runnable() {
            @Override
            public void run()
            {
                FacebookSdk.sdkInitialize(f_app_context);

                callbackManager = CallbackManager.Factory.create();
            }
        });
    }

    public void showFBGameRequest(String title, String message)
    {
        final String   f_title    = title;
        final String   f_message  = message;
        final Activity f_activity = this;

        runOnUiThread(new Runnable() {
            @Override
            public void run()
            {
                if (callbackManager != null) {
                    final FacebookCallback<GameRequestDialog.Result> game_request_callback = new FacebookCallback<GameRequestDialog.Result>() {
                        @Override
                        public void onSuccess(GameRequestDialog.Result result) {
                            if (result != null && result.getRequestRecipients() != null) {
                                fbGameRequestCompleted(result.getRequestRecipients().size());
                            }
                        }

                        @Override
                        public void onCancel() {
                        }

                        @Override
                        public void onError(FacebookException exception) {
                            String exception_str = "";

                            if (exception != null) {
                                exception_str = exception.toString();
                            }

                            Log.w("SakuraActivity", "showFBGameRequest() : " + exception_str);
                        }
                    };

                    if (AccessToken.getCurrentAccessToken() != null && !AccessToken.getCurrentAccessToken().isExpired()) {
                        gameRequestDialog = new GameRequestDialog(f_activity);

                        gameRequestDialog.registerCallback(callbackManager, game_request_callback);
                        gameRequestDialog.show(new GameRequestContent.Builder().setFilters(GameRequestContent.Filters.APP_NON_USERS)
                                                                               .setTitle(f_title)
                                                                               .setMessage(f_message)
                                                                               .build());
                    } else {
                        LoginManager login_manager = LoginManager.getInstance();

                        login_manager.registerCallback(callbackManager, new FacebookCallback<LoginResult>() {
                            @Override
                            public void onSuccess(LoginResult loginResult) {
                                if (callbackManager != null) {
                                    gameRequestDialog = new GameRequestDialog(f_activity);

                                    gameRequestDialog.registerCallback(callbackManager, game_request_callback);
                                    gameRequestDialog.show(new GameRequestContent.Builder().setFilters(GameRequestContent.Filters.APP_NON_USERS)
                                                                                           .setTitle(f_title)
                                                                                           .setMessage(f_message)
                                                                                           .build());
                                }
                            }

                            @Override
                            public void onCancel() {
                            }

                            @Override
                            public void onError(FacebookException exception) {
                                String exception_str = "";

                                if (exception != null) {
                                    exception_str = exception.toString();
                                }

                                Log.w("SakuraActivity", "showFBGameRequest() : " + exception_str);
                            }
                        });

                        login_manager.logInWithReadPermissions(f_activity, Arrays.asList("public_profile"));
                    }
                }
            }
        });
    }

    public void logoutFB()
    {
        runOnUiThread(new Runnable() {
            @Override
            public void run()
            {
                LoginManager.getInstance().logOut();
            }
        });
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data)
    {
        super.onActivityResult(requestCode, resultCode, data);

        if (callbackManager != null) {
            callbackManager.onActivityResult(requestCode, resultCode, data);
        }
    }
}
