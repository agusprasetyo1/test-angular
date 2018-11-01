import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pangkat'
})
export class PangkatPipe implements PipeTransform {

  transform(value: number, args: number): any {
    return Math.pow(value, args);
  }

}
