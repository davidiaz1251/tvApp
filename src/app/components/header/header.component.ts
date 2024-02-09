import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TvlistService } from 'src/app/services/tvlist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	router = inject(Router);
	searchTvShow(event: any){
		this.router.navigate(['/search', event.target.value]);
	}
}
