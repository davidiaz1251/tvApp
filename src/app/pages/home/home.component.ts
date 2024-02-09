import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Genre } from 'src/app/interfaces/genre.interface';
import { Tvlist } from 'src/app/interfaces/tvlists.interface';
import { TvlistService } from 'src/app/services/tvlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
	categories: Genre[] = [];
	tvList:Tvlist[] = [];
	tvService = inject(TvlistService);
	router = inject(Router);
	ngOnInit() {
		this.tvService.getTvList().then(data => {
			this.tvList = data.results.filter((tv:Tvlist) => tv.backdrop_path != null);
		});
		this.tvService.getAllCategories().then(data => this.categories = data.genres);
	}
	view(item:Tvlist){
		this.router.navigate(['/details', item.id]);
	}
}
