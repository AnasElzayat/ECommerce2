import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format',
  standalone: true
})
export class FormatPipe implements PipeTransform {

  transform(val: number) {
    let valToString: string = val.toString();

    let formattedVal: string = '';
    for (let i = 0; i < valToString.length; i += 4) {
      formattedVal += valToString.substr(i, 4) + '-';
    }

    formattedVal = formattedVal.slice(0, -1);

    return formattedVal;
  }

}


