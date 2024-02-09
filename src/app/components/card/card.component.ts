import { Component, Input, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Tvlist } from 'src/app/interfaces/tvlists.interface';
import { TvlistService } from 'src/app/services/tvlist.service';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
	@Input() idCategoria?: number;
	tvService = inject(TvlistService);
	router = inject(Router);
	tvList: Tvlist[] = [];
	public config: any = {
		spaceBetween: 10,
		slidesPerView: 4,
		breakpointsBase: 'container',
		breakpoints: {
			320: {
				slidesPerView: 1.2,
				spaceBetween: 20
			},
			480: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			640: {
				slidesPerView: 3,
				spaceBetween: 20
			},
			1000: {
				slidesPerView: 4,
				spaceBetween: 20
			}
		}
	};
	ngOnInit() {
		this.tvService.getTvListByCategory(this.idCategoria).then(data => {
			this.tvList = data.results.filter((tv: Tvlist) => tv.poster_path != null);
		});
	}

	view(item: Tvlist) {
		this.router.navigate(['/details', item.id]);
	}
}
