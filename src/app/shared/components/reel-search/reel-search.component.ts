import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reel-search',
  templateUrl: './reel-search.component.html',
  styleUrls: ['./reel-search.component.scss'],
})
export class ReelSearchComponent implements OnInit {
  @Output() searchEmitter = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  onSearch(search: string) {
    // todo add debounce + checks
    this.searchEmitter.emit(search);
  }
}
