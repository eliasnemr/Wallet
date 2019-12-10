//
//  MinimaBridger.m
//  App
//
//  Created by Elias Nemr on 02/12/2019.
//

#import "MinimaBridger.h"
#import "Start.h"

@implementation MinimaBridger

- (id) init {
    if (self = [super init]) {
        [self bridgeMe];
    }
    return self;
}

- (void) doBackup {
    
}

- (void) bridgeMe {
    
    FlowerMinimaStart *minima = [[FlowerMinimaStart alloc] init];
    
    //FlowerMinimaStart *start = [[FlowerMinimaStart alloc] init];
}

@end
