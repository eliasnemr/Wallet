import { Subscription } from 'rxjs';
import { Token } from 'minima';
import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';

export function validUrl(data: string) {
  const pattern =
  new RegExp('(http(s?):)([\\/|\\.|\\w|\\s|\\-])*\.(?:jpg|jpeg|png|gif|svg)$');

  return !!pattern.test(data);
}

@Pipe({
  name: 'imageFilter',
})
export class ImageFilterPipe implements PipeTransform {
  $subscribe: Subscription;
  constructor(private http: HttpClient) {}

  transform(token: Token[], ...args: any[]): any {
    const filterToken: Token[] = token;
    if (token && token.length > 0) {
      filterToken.forEach((token: Token) => {
        if (token.tokenid !== '0x00') {
          const isValid = validUrl(token.icon);
          if (isValid) {
            let size: any = 0;
            const getSize: any = async () => {
              size = await this.getImageSize(token.icon);
              if (size > 1000000) {
                console.log(token.icon);
                token.icon = 'avatar';
                // console.log('Image too large');
              }
            };
            getSize();
          }
        }
      });
    }
    return filterToken;
  }
  getImageSize(url: string) {
    return new Promise((resolve) => {
      let fileSize = '';
      const http = new XMLHttpRequest();
      http.open('HEAD', url, false);
      http.send(null);
      if (http.status === 200) {
        fileSize = http.getResponseHeader('content-length');
        resolve(fileSize);
      } else {
        resolve('');
      }
    });
  }
}
