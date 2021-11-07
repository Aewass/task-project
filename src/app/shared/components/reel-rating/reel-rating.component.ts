import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Reel } from '../../models/reel';

@Component({
  selector: 'app-reel-rating',
  templateUrl: './reel-rating.component.html',
  styleUrls: ['./reel-rating.component.scss'],
})
export class ReelRatingComponent {
  @Input() rating = 0;
  @Input() readOnly = true;
  @Input() reel!: Reel;
  @Input() displayUserRating = false;

  setRating(ev: number) {
    this.reel.userRating = ev;
  }
}
