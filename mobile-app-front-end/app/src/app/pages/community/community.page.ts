import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.page.html',
  styleUrls: ['./community.page.scss'],
})
export class CommunityPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  gitImgMode() {
    if(document.body.classList.value === 'dark') {
      return './assets/githubdark.svg';
    } else {
      return './assets/Github.svg';
    }
  }
  teleImgMode() {
    if(document.body.classList.value === 'dark') {
      return './assets/telegramdark.svg';
    } else {
      return './assets/telegram.svg';
    }
  }

}
