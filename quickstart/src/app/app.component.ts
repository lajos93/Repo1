import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `  

  <header></header>
  <main class="Site-content">
  	<router-outlet></router-outlet>
  	</main>
  	
  <footer></footer>
   `,
})
export class AppComponent  { }
