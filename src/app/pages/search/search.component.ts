import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tvlist } from 'src/app/interfaces/tvlists.interface';
import { TvlistService } from 'src/app/services/tvlist.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
	route = inject(ActivatedRoute);
	router = inject(Router);
	tvService = inject(TvlistService);
	result: Tvlist[] = [];
	query: string = '';
	ngOnInit() {
		this.route.params.subscribe(params => {
			this.query = params['query'];
			this.tvService.getTvBySearch(params['query']).then(data => {
				this.result = data.results.filter((tv:Tvlist) => tv.poster_path != null);
			});
		});
	}

	searchTvShow(event: any){
		this.query = event.target.value;
		this.tvService.getTvBySearch(this.query).then(data => {
			this.result = data.results.filter((tv:Tvlist) => tv.poster_path != null);
		});
	}

	view(item:Tvlist){
		this.router.navigate(['/details', item.id]);
	}
}
