import { Component, Input } from '@angular/core';
import { Reel } from '../../models/reel';

@Component({
  selector: 'app-reel-list',
  templateUrl: './reel-list.component.html',
  styleUrls: ['./reel-list.component.scss'],
})
export class ReelListComponent {
  @Input() reels: Reel[] = [];
}
