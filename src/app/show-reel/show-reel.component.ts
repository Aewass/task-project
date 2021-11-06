import { IReel } from './../shared/models/reel';
import { ReelsService } from './../shared/services/reels.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-show-reel',
  templateUrl: './show-reel.component.html',
  styleUrls: ['./show-reel.component.scss'],
})
export class ShowReelComponent implements OnInit {
  public showMovies = true;
  public movies: IReel[] = [];
  constructor(private reelsService: ReelsService) {}

  ngOnInit(): void {
    this.reelsService.getMovies().subscribe((res) => {
      if (res) {
        console.log(res);
        this.movies = res;
        this.showMovies = true;
      }
    });
  }
}
