import { IReel } from './../models/reel';
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

  public getMovies(): Observable<IReel[]> {
    return this.httpClient.get<IReel[]>(this.movies).pipe(
      map((result) => {
        return this.normalize(result);
      })
    );
  }

  public getShows(): Observable<IReel[]> {
    return this.httpClient.get<IReel[]>(this.shows).pipe(
      map((result) => {
        return this.normalize(result);
      })
    );
  }

  public normalize(data: IReel[]) {
    return data.sort((a, b) => b.totalRating - a.totalRating);
  }
}
