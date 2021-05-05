import { Subscription } from 'rxjs';
import { UserTerminal } from '../../service/userterminal.service';
import { Component, OnInit  } from '@angular/core';


@Component({
  selector: 'app-pop-term',
  templateUrl: './pop-term.component.html',
  styleUrls: ['./pop-term.component.scss'],
})
export class PopTermComponent implements OnInit {

  $fontSizeSubscription: Subscription;
  fontSize: number;

  constructor(public userTerminal: UserTerminal) { }

  ngOnInit() {}

  ionViewWillEnter() {

    this.$fontSizeSubscription = this.userTerminal.fontSizeEmitter.subscribe((res: any) => {

      let FONT_SIZE = res.size;
      this.fontSize = FONT_SIZE;

    });

  }

  ionViewWillLeave() {

    this.$fontSizeSubscription.unsubscribe();

  }

  onActivate() {

    this.userTerminal.fontSizeEmitter.next({size: this.fontSize+1});
  }

  onActivateLess() {

    this.userTerminal.fontSizeEmitter.next({size: this.fontSize-1});
  
  }
  

}
