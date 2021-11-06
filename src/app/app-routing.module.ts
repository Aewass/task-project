import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowReelComponent } from './show-reel/show-reel.component';

const routes: Routes = [
  { path: 'reels', component: ShowReelComponent },
  { path: '', pathMatch: 'full', redirectTo: 'reels' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
