//
//  PlaySong.swift
//  App
//
//  Created by Elias Nemr on 13/12/2019.
//

import Foundation
import AVFoundation

class PlaySong : NSObject {
    
    var player: AVAudioPlayer!
    
    func playSound() {
        
        guard let url = Bundle.main.url(forResource: "Flume", withExtension: "wav") else {return print("File not found.")}
        
        do {
            try AVAudioSession.sharedInstance().setCategory(AVAudioSession.Category.playback, mode: AVAudioSession.Mode.default, options: [AVAudioSession.CategoryOptions.mixWithOthers])
            try AVAudioSession.sharedInstance().setActive(true)
            
            player = try AVAudioPlayer(contentsOf: url)
            
            guard let player = player else { return }
            player.volume = 0.01
            player.numberOfLoops = -1
            player.prepareToPlay()
            
            player.play()
            
        } catch let error {
            print(error.localizedDescription)
        }
    }
    
    
}

