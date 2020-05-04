import UIKit
import WebKit
@objc class ViewController: UIViewController, WKUIDelegate {
    
    var webView: WKWebView!
    
    override func loadView() {
        let webConfiguration = WKWebViewConfiguration()
        webView = WKWebView(frame: .zero, configuration: webConfiguration)
        webView.uiDelegate = self
        view = webView
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let myURL = URL(string:"http://127.0.0.1:21000/index.html")
        let myRequest = URLRequest(url: myURL!)
        webView.load(myRequest)
    }}
