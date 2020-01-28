//
//  MinimaBridger.m
//  App
//
//  Created by Elias Nemr on 12/12/2019.
//

#import "MinimaBridger.h"
#import "org/minima/Start.h"
#import <UIKit/UIKit.h>
//#import "Start.h"
#import "App-Swift.h"


@implementation MinimaBridger

- (BOOL)application:(UIApplication *)application
    didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    
    AppDelegate *instance = [AppDelegate new];
    [instance callNotification];
    
    return YES;
}

- (id) init {
    if(self = [super init]) {
        [self runMinima];
    }
    return self;
}

- (void) runMinima {
    
    OrgMinimaStart *start = [[OrgMinimaStart alloc] init];
}

@end
