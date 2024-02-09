import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { SearchComponent } from './pages/search/search.component';



@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		DetailsComponent,
		SearchComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgbModule,
		ComponentsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
