package global.minima.telco;

import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.os.Handler;
import android.os.IBinder;
import android.os.Looper;
import android.support.v4.app.NotificationCompat;
import android.util.Log;
import android.widget.Toast;

import org.minima.system.NativeListener;
import org.minima.Start;
import org.minima.objects.TxPoW;
import org.minima.system.brains.ConsensusHandler;
import org.minima.utils.messages.Message;

public class ForegroundService extends Service {

    public static final String CHANNEL_ID = "ForegroundServiceChannel";

    Start mStart;
    boolean mStarted = false;
    Handler mHandler;

    NotificationManager mNotificationManager, mNotificationManagerLow;
    android.app.Notification mNotificationBuilder;
    PendingIntent mPendingIntent;
    TxPoW txpow;
    public String mBLOCK_NUMBER;

    public static ForegroundService mForegroundService;
    @Override
    public void onCreate() {
        super.onCreate();

        //Start Minima
        mForegroundService = this;
        mStart = new Start();

        Log.d("Minima Call:", "" +  "Minima is running");
        Toast.makeText(this, "Minima is running..", Toast.LENGTH_LONG).show();

        mHandler = new Handler(Looper.getMainLooper());
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        createNotificationChannel();

        Intent NotificationIntent = new Intent(this, MainActivity.class);
        mPendingIntent = PendingIntent.getActivity(this, 0
                , NotificationIntent, 0);

        mNotificationBuilder = new NotificationCompat.Builder(this, CHANNEL_ID)
                .setContentTitle("Your Minima node is running..")
                .setContentText("Current Block number is: " + mBLOCK_NUMBER)
                .setSmallIcon(R.drawable.ic_minima_foreground)
                .setContentIntent(mPendingIntent)
                .build();

        startForeground(1, mNotificationBuilder);

        //do Heavy work on a background Thread
        if(!mStarted){
            mStarted = true;

            try{
                Thread.sleep(1000);
            }catch(Exception exc){ }


            mStart.getServer().getConsensusHandler().addListener(new NativeListener() {
                @Override
                public void processMessage(Message zMessage) {
                    //THIS GETS CALLED!
                    try {
                        if (zMessage.isMessageType(ConsensusHandler.CONSENSUS_NOTIFY_BALANCE)) {
                            mHandler.post(new Runnable() {
                                @Override
                                public void run() {

                                    mNotificationBuilder = new NotificationCompat.Builder(ForegroundService.this, CHANNEL_ID)
                                            .setContentTitle("Minima Node: ")
                                            .setContentText("You just received coins!")
                                            .setSmallIcon(R.drawable.ic_minima_foreground)
                                            .setContentIntent(mPendingIntent)
                                            .build();

                                    startForeground(1, mNotificationBuilder);

                                    Toast.makeText(ForegroundService.this,
                                            "You just received some coins!",
                                            Toast.LENGTH_SHORT).show();
                                }
                            });
                        } else if (zMessage.isMessageType(ConsensusHandler.CONSENSUS_NOTIFY_NEWBLOCK)) {
                            mHandler.post(new Runnable() {
                                @Override
                                public void run() {

                                    TxPoW txpow = (TxPoW) zMessage.getObject("txpow");

                                    mBLOCK_NUMBER = txpow.getBlockNumber().toString();

                                    mNotificationBuilder = new NotificationCompat.Builder(ForegroundService.this, CHANNEL_ID)
                                            .setContentTitle("Minima Node: ")
                                            .setContentText("Block no." + mBLOCK_NUMBER)
                                            .setSmallIcon(R.drawable.ic_minima_foreground)
                                            .setContentIntent(mPendingIntent)
                                            .build();

                                    startForeground(1, mNotificationBuilder);

                                }
                            });

                        }
                    }catch(Exception exc){

                    }
                }
            });
        }

        //stopSelf();

        return START_NOT_STICKY;
    }

    private void createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            NotificationChannel serviceChannel = new NotificationChannel(
                    CHANNEL_ID,
                    "Foreground Service Channel",
                    NotificationManager.IMPORTANCE_LOW
            );

            mNotificationManager =
                    getSystemService(NotificationManager.class);
            mNotificationManager.createNotificationChannel(serviceChannel);
        }
    }


    @Override
    public void onDestroy() {
        Toast.makeText(this, "Minima stopped running.", Toast.LENGTH_LONG).show();
        super.onDestroy();
    }

    @Override
    public IBinder onBind(Intent intent) {
        // TODO: Return the communication channel to the service.
        throw new UnsupportedOperationException("Not yet implemented");
    }
}