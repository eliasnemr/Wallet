package global.minima.telco;

import android.app.ActivityManager;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.util.Log;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class MainActivity extends BridgeActivity {

  public static MainActivity mMainLink;

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    startForegroundService();
    // Initializes the Bridge

    // Poll through this
    this.isServiceRunning("ForegroundService");

    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
    }});

    mMainLink = this;

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
    }});
  }

  private void startForegroundService() {
    Intent intent = new Intent(this, ForegroundService.class);

    if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
      startForegroundService(intent);
    }
  }

  private boolean isServiceRunning(String serviceName){
    boolean serviceRunning = false;
    ActivityManager am = (ActivityManager) this.getSystemService(ACTIVITY_SERVICE);
    List<ActivityManager.RunningServiceInfo> l = am.getRunningServices(50);
    Iterator<ActivityManager.RunningServiceInfo> i = l.iterator();
    while (i.hasNext()) {
      ActivityManager.RunningServiceInfo runningServiceInfo = i
              .next();

      if(runningServiceInfo.service.getClassName().equals(serviceName)){
        serviceRunning = true;

        if(runningServiceInfo.foreground)
        {
          //service run in foreground
          Log.d("Minima: " , " Service is online!");

        }
      }
    }
    return serviceRunning;
  }
}
