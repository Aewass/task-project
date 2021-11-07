import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reel-switch',
  templateUrl: './reel-switch.component.html',
  styleUrls: ['./reel-switch.component.scss'],
})
export class ReelSwitchComponent implements OnInit {
  @Input() showMovies: boolean = true;
  @Output() reelSwitch = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  onSwitch(statement: boolean) {
    // boolean that switches from movies to shows and vice versa
    this.showMovies = statement;
    this.reelSwitch.emit(this.showMovies);
  }
}
