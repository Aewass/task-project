import { Reel } from './../models/reel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root',
})
export class ReelsService {
  movies = 'assets/movies.json';
  shows = 'assets/shows.json';
  constructor(private httpClient: HttpClient) {}

  public getReels(getMovies: boolean): Observable<Reel[]> {
    // mock http gets movies/shows based on getMovies boolean
    return this.httpClient
      .get<Reel[]>(getMovies ? this.movies : this.shows)
      .pipe(
        map((result) => {
          // sort by rating && convert release to date
          return this.normalize(result);
        })
      );
  }

  public normalize(data: Reel[]) {
    data.sort((a, b) => b.totalRating - a.totalRating);
    data.forEach((reel) => {
      reel.release = this.toDate(reel.release);
    });
    return data;
  }

  public toDate(date: any) {
    return new Date(date);
  }
}
