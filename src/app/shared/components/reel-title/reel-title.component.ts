import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reel-title',
  templateUrl: './reel-title.component.html',
  styleUrls: ['./reel-title.component.scss'],
})
export class ReelTitleComponent implements OnInit {
  @Input() title: string = '';
  constructor() {}

  ngOnInit(): void {}
}
