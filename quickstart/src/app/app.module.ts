import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent }  from './header/header.component';
import { FooterComponent }  from './footer/footer.component';
import { SliderComponent }  from './slider/slider.component';
import { TopicsComponent }  from './topics/topics.component';
import { PopularComponent }  from './popular/popular.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, SliderComponent, TopicsComponent, PopularComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
