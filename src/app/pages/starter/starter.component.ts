import { Component, OnInit } from '@angular/core';
import { books } from "../../data-books";

@Component({
	selector: 'app-books-main',
	templateUrl: './starter.component.html'
})

export class StarterComponent implements OnInit {

	booksList: any[];
  
	constructor() { 
	  this.booksList = [];
	}
  
	ngOnInit() {
	  this.booksList = books.items;
	}
  
  }
  