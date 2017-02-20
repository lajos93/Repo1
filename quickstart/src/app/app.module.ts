import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppComponent }  from './app.component';
import { HeaderComponent }  from './header/header.component';
import { FooterComponent }  from './footer/footer.component';
import { SliderComponent }  from './slider/slider.component';
import { TopicsComponent }  from './topics/topics.component';
import { PopularComponent }  from './popular/popular.component';
import { SignupComponent }  from './signup/signup.component';
import { ContactComponent }  from './contact/contact.component';
import { MainViewComponent }  from './mainview/mainview.component';
import { DetailedComponent }  from './detailed/detailed.component';



@NgModule({
  imports:      [ 
  BrowserModule, 
  RouterModule.forRoot ([
  	{ path: 'home', component: MainViewComponent },
  	{ path: 'contact', component: ContactComponent },
  	{ path: 'detailed', component: DetailedComponent },
  	{ path: '', redirectTo: 'home', pathMatch: 'full' },
  	{ path: '**', redirectTo: 'home', pathMatch: 'full' }
  ]),

   ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, SliderComponent, TopicsComponent, PopularComponent, SignupComponent, ContactComponent, MainViewComponent, DetailedComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
