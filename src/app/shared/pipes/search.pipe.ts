import { Pipe, PipeTransform, Injectable } from '@angular/core';
@Pipe({
  name: 'search',
})
@Injectable()
export class SearchPipe implements PipeTransform {
  transform(items: any, term: any): any {
    if (term) {
      console.log(term);

      return items.filter((item: any) =>
        Object.keys(item).some(
          (k) =>
            item[k] != null &&
            item[k].toString().toLowerCase().includes(term.toLowerCase())
        )
      );
    }
    return items;
  }
}
