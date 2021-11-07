import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'app-reel-search',
  templateUrl: './reel-search.component.html',
  styleUrls: ['./reel-search.component.scss'],
})
export class ReelSearchComponent implements OnInit {
  @Output() searchEmitter = new EventEmitter<string>();
  public search = new FormControl();
  subscription!: Subscription;
  constructor() {}

  ngOnInit(): void {
    this.subscription = this.search.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((input: string) => this.searchEmitter.emit(input));
    // emits value with debounce time
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
