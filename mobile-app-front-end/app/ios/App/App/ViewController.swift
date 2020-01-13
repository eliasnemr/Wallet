//
//  ViewController.swift
//  App
//
//  Created by Elias Nemr on 13/12/2019.
//

import UIKit

class ViewController: UIViewController {

    var playSong: PlaySong = PlaySong()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        playSong.playSound()
        print("Song is playing now..")
        // Do any additional setup after loading the view.
    }


}
