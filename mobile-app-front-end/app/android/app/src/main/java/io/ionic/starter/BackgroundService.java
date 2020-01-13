package io.ionic.starter;

import android.app.Service;
import android.content.Intent;
import android.os.IBinder;
import android.support.v4.app.NotificationCompat;
import android.util.Log;
import android.widget.Toast;

import org.minima.Start;

import static io.ionic.starter.Notification.MinimaChannel;

public class BackgroundService extends Service {

    @Override
    public void onCreate() {
        super.onCreate();
        Start m = new Start();
        Log.d("Minima Call:", "" +
                "Minima is running");
        Toast.makeText(this, "Minima is running..", Toast.LENGTH_LONG).show();

    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
//        Intent notificationIntent =  new Intent(this, MainActivity.class);
//        PendingIntent pendingIntent = PendingIntent.getActivity(this, 0,
//                notificationIntent, 0);
//
//        android.app.Notification noti = new NotificationCompat.Builder(this, MinimaChannel)
//                .setContentTitle("Minima")
//                .setContentText("has Started")
//                .setSmallIcon(R.drawable.ic_minima)
//                .setContentIntent(pendingIntent)
//                .build();
//
//        startForeground(1, noti);
//
//        return START_NOT_STICKY;


        return super.onStartCommand(intent, flags, startId);

    }

    @Override
    public void onDestroy() {
        Toast.makeText(this, "Minima stopped running.", Toast.LENGTH_LONG).show();
        super.onDestroy();
    }

    public BackgroundService() {
    }

    @Override
    public IBinder onBind(Intent intent) {
        // TODO: Return the communication channel to the service.
        throw new UnsupportedOperationException("Not yet implemented");
    }
}
