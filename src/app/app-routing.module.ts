import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'details/:id', component:  DetailsComponent},
	{ path: 'search/:query', component:  SearchComponent},
	{ path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
