import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResortsComponent } from './resorts/resorts.component';
import { WeatherComponent } from './resorts/weather/weather.component';
import { SocialInfoComponent } from './resorts/social-info/social-info.component';
import { ResortListComponent } from './resorts/resort-list/resort-list.component';
import { ResortItemComponent } from './resorts/resort-list/resort-item/resort-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ByTypePipe } from './resorts/resort-list/by-type.pipe';
import { ResortFilterPipe } from './resorts/resort-list/resort-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ResortsComponent,
    WeatherComponent,
    SocialInfoComponent,
    ResortListComponent,
    ResortItemComponent,
    ByTypePipe,
    ResortFilterPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
