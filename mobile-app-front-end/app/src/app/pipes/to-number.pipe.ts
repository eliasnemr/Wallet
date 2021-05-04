import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toNumber',
  pure: false
})
export class ToNumberPipe implements PipeTransform {

  transform(items: any): any {
    if (!items) {
      return 0;
    }
    console.log('Piping'+items+' toNumber');
    return parseInt(items, 10);
  }

}
