import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { isAfter, isBefore } from 'date-fns';
import { Reel } from '../models/reel';

export enum Range {
  BEFORE,
  AFTER,
  EXACT,
}
@Pipe({
  name: 'search',
})
@Injectable()
export class SearchPipe implements PipeTransform {
  transform(items: Reel[], term: string): any {
    if (term.includes('before') && term.length > 7) {
      return this.filterByYear(items, term, Range.BEFORE);
    } else if (term.includes('after') && term.length > 7) {
      return this.filterByYear(items, term, Range.AFTER);
    } else if (term.includes('older than') && term.length > 12) {
      return this.filterByYear(items, term, Range.BEFORE);
    } else if (term.includes('newer than') && term.length > 12) {
      return this.filterByYear(items, term, Range.AFTER);
    } else if (
      term.includes('star') &&
      !term.includes('at least') &&
      term.length > 5
    ) {
      return this.filterByRating(items, term, Range.EXACT);
    } else if (term.includes('at least') && term.includes('stars')) {
      return this.filterByRating(items, term, Range.AFTER);
    } else {
      return items.filter((item: any) =>
        Object.keys(item).some(
          (k) =>
            item[k] != null &&
            item[k].toString().toLowerCase().includes(term.toLowerCase())
        )
      );
    }
  }

  filterByYear(data: Reel[], term: string, range: Range) {
    let argument = term.match(/\d{4}/);
    let date = new Date();
    argument ? (date = new Date(argument[0])) : null;
    if (range === Range.BEFORE) {
      return data.filter((item) => isBefore(item.release, date));
    } else {
      return data.filter((item) => isAfter(item.release, date));
    }
  }

  filterByRating(data: Reel[], term: string, range: Range) {
    let argument = term.match(/\d{1}/);
    let rating: number;
    argument ? (rating = Number(argument[0])) : null;
    if (range === Range.EXACT) {
      return data.filter((item) => item.totalRating === rating);
    } else {
      return data.filter((item) => item.totalRating >= rating);
    }
  }
}
