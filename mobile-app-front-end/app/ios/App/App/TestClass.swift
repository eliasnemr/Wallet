import Foundation
import UserNotifications

@objc class TestClass : NSObject {
    override
    init(){super.init(); self.callNotification()}
    
    func callNotification() {
        let center = UNUserNotificationCenter.current()
        
        center.requestAuthorization(options: [.alert, .sound, .badge])
        { (granted, error) in
        }
        
        let content = UNMutableNotificationContent()
        content.title = "Minima"
        content.body = "You just received some Minima!"
        
        let date = Date().addingTimeInterval(5)
        
        let dateComponent = Calendar.current.dateComponents([.year, .month, .day, . hour, .minute, .second], from: date)
        
        let trigger =
            UNCalendarNotificationTrigger(dateMatching: dateComponent, repeats: false)
            
        // Step 4: Create the request..
        let uuidString = UUID().uuidString
        let request = UNNotificationRequest(identifier: uuidString, content: content, trigger: trigger)
        
        //Step 5: Register the request
        center.add(request) { (error) in
            // Check the error parameter and handle any errors
            
        }
    }
    
}
