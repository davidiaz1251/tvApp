import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class TvlistService {
	urlimg = 'https://image.tmdb.org/t/p/original';
	private url = 'https://api.themoviedb.org/3/';
	private options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTVmMjBhOGU0NGVlNjExOTI0NzI5NTU1YThkMGY4NSIsInN1YiI6IjVkOTkxODQ1OGM0MGY3MDAxMTdhMjhjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bIqeRQYwcwdN3H5jxdWSmwbWtdXJCot5a98uz7Jra3g'
		}
	};
	getTvList() {
		return fetch(`${this.url}tv/popular?language=en-US&page=1`, this.options).then(response => response.json());
	}
	getAllCategories() {
		return fetch(`${this.url}genre/tv/list?language=en`, this.options).then(response => response.json());
	}
	getTvListByCategory(id?: number) {
		return fetch(`${this.url}discover/tv?with_genres=${id}`, this.options).then(response => response.json());
	}
	getTvById(id?: number) {
		return fetch(`${this.url}tv/${id}`, this.options).then(response => response.json());
	}
	getTvBySearch(query?: string) {
		return fetch(`${this.url}search/tv?query=${query}`, this.options).then(response => response.json());
	}
	getSeasonByTv(id?: number, season?: number) {
		return fetch(`${this.url}tv/${id}/season/${season}`, this.options).then(response => response.json());
	}
}
