import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reel-loader',
  templateUrl: './reel-loader.component.html',
  styleUrls: ['./reel-loader.component.scss'],
})
export class ReelLoaderComponent implements OnInit {
  @Input() initialLoad = false;
  constructor() {}

  ngOnInit(): void {}
}
