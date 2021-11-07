import { Observable } from 'rxjs';
import { FunctionService } from './../shared/services/function.service';
import { Reel } from './../shared/models/reel';
import { ReelsService } from './../shared/services/reels.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

export interface Page {
  start: number;
  end: number;
  hasNext: boolean;
}
@Component({
  selector: 'app-show-reel',
  templateUrl: './show-reel.component.html',
  styleUrls: ['./show-reel.component.scss'],
})
export class ShowReelComponent implements OnInit, OnDestroy {
  public showMovies = true;
  public isLoading = true;
  public initialLoad = true;
  public reels: Reel[] = [];
  page!: Page;
  timer: any;
  constructor(private reelsService: ReelsService) {}

  ngOnInit(): void {
    this.fetchReels(true);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

  public fetchMoreReels(page: Page) {
    this.initialLoad = false;
    this.isLoading = true;
    this.timer = setTimeout(() => {
      this.page = {
        start: page.start,
        end: page.end + 10,
        hasNext: page.end + 10 >= this.reels.length ? false : true,
      };
      this.isLoading = false;
      console.log(this.reels);
    }, 1000);
  }

  public fetchReels(showMovies: boolean) {
    this.reels = [];
    this.initialLoad = true;
    this.isLoading = true;
    this.reelsService.getReels(showMovies).subscribe((res) => {
      if (res) {
        this.timer = setTimeout(() => {
          this.reels = res;
          this.page = {
            start: 0,
            end: 10,
            hasNext: this.reels.length < 10 ? false : true,
          };
          this.isLoading = false;
          console.log(this.reels);
        }, 2000);
      }
    });
    this.showMovies = showMovies;
  }

  public searchReels(search: string) {
    console.log(search);
  }
}
