package com.awesomeproject;

import android.content.Context;

import okhttp3.Cache;
import okhttp3.CacheControl;
import okhttp3.Interceptor;
import okhttp3.OkHttpClient;
import okhttp3.Response;
import com.facebook.react.modules.network.OkHttpClientFactory;
import com.facebook.react.modules.network.ReactCookieJarContainer;

public class CustomNetworkModule implements OkHttpClientFactory {
    Context context=null;
    CustomNetworkModule(Context context){
        this.context = context;
    }
    public OkHttpClient createNewNetworkModuleClient() {
        int cacheSize = 10 * 1024 * 1024;
        OkHttpClient.Builder builder = new OkHttpClient.Builder().cookieJar(new ReactCookieJarContainer()).cache(new Cache(context.getCacheDir(), cacheSize));
        return builder.build();
    }
}