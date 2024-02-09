import { Location } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Details, Episode, EpisodeElement } from 'src/app/interfaces/details.interface';
import { Tvlist } from 'src/app/interfaces/tvlists.interface';
import { TvlistService } from 'src/app/services/tvlist.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
	route = inject(ActivatedRoute);
	router = inject(Router);
	tvService = inject(TvlistService);
	result: Details = {} as Details;
	episodes: Episode = {} as Episode;
	location = inject(Location);
	
	ngOnInit() {
		this.route.params.subscribe(params => {
			this.tvService.getTvById(params['id']).then(data => {
				this.result = data;
			});
		});
	}

	goBack(){
		this.location.back();
	}
	
	view(item:Tvlist){
		console.log(item)
		this.router.navigate(['/details', item.id]);
	}


	searchEpisodes(event: any ){
		this.tvService.getSeasonByTv(this.result.id, event.target.value).then(data => {
			this.episodes = data;
		});
	}
}
