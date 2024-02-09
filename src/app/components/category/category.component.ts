import { Component, Input } from '@angular/core';
import { Genre } from 'src/app/interfaces/genre.interface';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
@Input() category?: Genre ;

constructor() { 
	
  }
}
