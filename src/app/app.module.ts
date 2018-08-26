import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { ForecastDetailComponent } from './forecast-detail/forecast-detail.component';
import { FormSearchComponent } from './form-search/form-search.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherInfoComponent,
    ForecastDetailComponent,
    FormSearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
