import { ReelSwitchComponent } from './shared/components/reel-switch/reel-switch.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowReelComponent } from './show-reel/show-reel.component';
import { ReelCardComponent } from './shared/components/reel-card/reel-card.component';
import { ReelRatingComponent } from './shared/components/reel-rating/reel-rating.component';
import { ReelTitleComponent } from './shared/components/reel-title/reel-title.component';
import { ReelSearchComponent } from './shared/components/reel-search/reel-search.component';
import { ReelLoaderComponent } from './shared/components/reel-loader/reel-loader.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReelListComponent } from './shared/components/reel-list/reel-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowReelComponent,
    ReelCardComponent,
    ReelRatingComponent,
    ReelTitleComponent,
    ReelSearchComponent,
    ReelSwitchComponent,
    ReelLoaderComponent,
    ReelListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
