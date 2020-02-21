import { UserTerminal } from './../userterminal.service';
import { Observable } from 'rxjs';
import { Component, OnInit  } from '@angular/core';


@Component({
  selector: 'app-pop-term',
  templateUrl: './pop-term.component.html',
  styleUrls: ['./pop-term.component.scss'],
})
export class PopTermComponent implements OnInit {

  constructor(public userTerminal: UserTerminal) {}

  ngOnInit() {
    
  }

  onActivate() {
    this.userTerminal.fontSizeEmitter.next(1);
  }
  onActivateLess() {
    this.userTerminal.fontSizeEmitter.next(-1);
  }
  

}
