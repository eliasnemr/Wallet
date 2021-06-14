import { Subject } from 'rxjs';
import { Token } from 'minima';
import * as SparkMD5 from 'spark-md5';
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements OnInit {
  @Input() tokenArr: Subject<Token[]>;
  public avatar: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {}

  createIcon(tokenid: string) {
    return this.avatar = 'https://www.gravatar.com/avatar/' + SparkMD5.hash(tokenid) + '?d=identicon';
  }

  getFileSize(url: string) {
    // this.xmlHttpRequest.open('HEAD', url, true);
    // return new Promise((resolve, reject) => {
    //   this.xmlHttpRequest.onprogress = (event) => {
    //     if (event.lengthComputable) {
    //       resolve(event.total);
    //     } else {
    //       reject(new Error('No content-length available'));
    //     }
    //     this.xmlHttpRequest.abort();
    //   };
    //   this.xmlHttpRequest.send();
    // });
  }
}
