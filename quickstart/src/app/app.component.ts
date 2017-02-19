import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `  
  <header></header>

  <main class="Site-content">
  			<slider></slider>
  			<topics></topics>
  			<popular></popular>
  			<signup></signup>
  </main>
  <footer></footer>
   `,
})
export class AppComponent  { }
