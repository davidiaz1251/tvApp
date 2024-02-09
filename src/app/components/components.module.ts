import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';

import { SwiperDirective } from '../directives/swiper.directive';

import { register } from 'swiper/element/bundle';
register();

@NgModule({
  declarations: [
	CardComponent,
	HeaderComponent,
	CategoryComponent
  ],
  imports: [
    CommonModule,
	SwiperDirective,
  ],
  exports: [
	CardComponent,
	HeaderComponent,
	CategoryComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
