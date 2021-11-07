import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-reel-rating',
  templateUrl: './reel-rating.component.html',
  styleUrls: ['./reel-rating.component.scss'],
})
export class ReelRatingComponent {
  @Input() rating!: number;
  @Input() readOnly: boolean = true;
  @Output() ratingEmitter = new EventEmitter<number>();

  setRating(ev: number) {
    this.rating = ev;
  }
}
