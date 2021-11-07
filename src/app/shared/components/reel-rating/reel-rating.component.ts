import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reel-rating',
  templateUrl: './reel-rating.component.html',
  styleUrls: ['./reel-rating.component.scss'],
})
export class ReelRatingComponent implements OnInit {
  @Input() rating!: number;
  @Input() readOnly: boolean = true;
  @Output() ratingEmitter = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {
    console.log(this.rating);
  }

  rate(rating: number) {
    this.ratingEmitter.emit(rating);
  }
}
