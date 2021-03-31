import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'historyfilter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(txns: any[], filter: []): any {
    let temp: any[] = [];
    txns.forEach(txn => {
      if (txn.values.length > 0) {
        temp.push(txn);
      } else {
        return null;
      }
    })
    

    return temp;
  }

}
