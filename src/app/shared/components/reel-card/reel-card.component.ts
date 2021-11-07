import { Component, Input, OnInit } from '@angular/core';
import { Reel } from '../../models/reel';

@Component({
  selector: 'app-reel-card',
  templateUrl: './reel-card.component.html',
  styleUrls: ['./reel-card.component.scss'],
})
export class ReelCardComponent implements OnInit {
  @Input() movie!: Reel;
  constructor() {}

  ngOnInit(): void {}
}
