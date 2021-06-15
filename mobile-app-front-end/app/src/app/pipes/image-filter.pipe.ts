import { Subscription } from 'rxjs';
import { Token } from 'minima';
import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'imageFilter',

})
export class ImageFilterPipe implements PipeTransform {
  $subscribe: Subscription;
  constructor(private http: HttpClient) {}

  transform(token: Token[], ...args: any[]): any {
    let filterToken: Token[] = token;
    if (token && token.length > 0) {
      console.log(token);
      filterToken.forEach((token: Token) => {
        if (token.tokenid !== '0x00') {
          let size: any = 0;
          const getSize: any = async () => {
            size = await this.getImageSize(token.icon);
            if (size > 10000) {
              console.log('Image too large');
            }
          };
          getSize();
        }
      });
    }
    return filterToken;
  }
  getImageSize(url: string) {
    return new Promise((resolve) => {
      this.http.get(url, {responseType: 'blob'}).subscribe((res) => {
        console.log(res);
        resolve(res.size);
      });
    });
  }
}
