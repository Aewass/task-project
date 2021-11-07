import { SearchPipe } from './../shared/pipes/search.pipe';
import { Reel } from './../shared/models/reel';
import { ReelsService } from './../shared/services/reels.service';
import { Component, OnDestroy, OnInit, Pipe } from '@angular/core';

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
  public searchInput = '';
  public reels: Reel[] = [];
  public filteredReels: Reel[] = [];
  page!: Page;
  timer: any;
  constructor(
    private reelsService: ReelsService,
    private searchPipe: SearchPipe
  ) {}

  ngOnInit(): void {
    this.fetchReels(true);
  }

  ngOnDestroy(): void {
    // clears mock timeouts (used to simulate request + display loader)
    clearTimeout(this.timer);
  }

  public reset() {
    this.reels = [];
    this.filteredReels = [];
    this.searchInput = '';
  }

  public fetchMoreReels(page: Page) {
    this.initialLoad = false;
    this.isLoading = true;
    this.timer = setTimeout(() => {
      this.page = {
        start: page.start,
        end: page.end + 10,
        hasNext:
          page.end + 10 >=
          (this.searchInput.length < 2
            ? this.reels.length
            : this.filteredReels.length)
            ? false
            : true,
      };
      this.isLoading = false;
    }, 1000);
  }

  public fetchReels(showMovies: boolean) {
    this.reset();
    this.initialLoad = true;
    this.isLoading = true;
    this.reelsService.getReels(showMovies).subscribe(
      (res) => {
        if (res) {
          this.timer = setTimeout(() => {
            this.reels = res;
            this.page = {
              start: 0,
              end: 10,
              hasNext: this.reels.length < 10 ? false : true,
            };
            this.isLoading = false;
            this.showMovies = showMovies;
          }, 2000);
        }
      },
      (error) => {
        alert('Uh Oh, something happened!');
      }
    );
  }

  public searchReels(search: string) {
    this.searchInput = search;
    if (this.searchInput.length >= 2) {
      this.filteredReels = this.searchPipe.transform(this.reels, search);
    } else {
      this.page = {
        start: 0,
        end: 10,
        hasNext: this.reels.length < 10 ? false : true,
      };
    }
  }
}
