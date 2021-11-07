import { Component, Input, OnInit } from '@angular/core';
import { Reel } from '../../models/reel';

@Component({
  selector: 'app-reel-list',
  templateUrl: './reel-list.component.html',
  styleUrls: ['./reel-list.component.scss'],
})
export class ReelListComponent implements OnInit {
  @Input() reels: Reel[] = [];
  constructor() {}

  ngOnInit(): void {
    console.log(this.reels);
  }
}
