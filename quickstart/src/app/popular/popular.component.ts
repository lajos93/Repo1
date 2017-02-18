import { Component } from '@angular/core';

@Component({
  selector: "popular",
	templateUrl:"./app/popular/popular.component.html"
})
export class PopularComponent  {  

products: any = [{
		"id" : 1,
		"name" : "Nike 34rerew TZ",
		"description" : "Make the best strawberry tart there is",
		"type" : "Lorem ipsum dolor sit amet, conscettur adipusisdas eli",
		"image" : "./img/shoe.png",
		"price" : 89,
		},
		{

		"id" : 2,
		"name" : "Puma Sport TZ",
		"description" : "Make the best strawberry tart there is",
		"type" : "Lorem ipsum dolor sit amet, conscettur adipusisdas eli",
		"image" : "./img/shoe.png",
		"price" : 79,
		}];

}

