import { MinimaApiService } from './../service/minima-api.service';
import { Pipe, PipeTransform } from '@angular/core';
import { TransactionOutput } from 'minima';

export interface OutputRelevant extends TransactionOutput {
  relevant?: boolean;
}

@Pipe({
  name: 'outgoing',
})
export class OutgoingPipe implements PipeTransform {
  constructor(private minimaApiService: MinimaApiService) { }
  transform(outputs: TransactionOutput[], ...args: any[]): any {
    const amendedOutput: TransactionOutput[] = outputs;
    amendedOutput.forEach((output: OutputRelevant) => {
      const checkRelevance = async () => {
        const res: any =
         await this.minimaApiService.checkAddressRelevance(output.mxaddress);
        if (res) {
          output.relevant = true;
        } else {
          output.relevant = false;
        }
      };
      checkRelevance();
    });
    return amendedOutput;
  }
}
