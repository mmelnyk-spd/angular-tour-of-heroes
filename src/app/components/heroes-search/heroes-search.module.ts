import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSearchService } from './hero-search.service';
import { HeroSearchComponent } from './hero-search.component';



@NgModule({
  imports: [
    CommonModule
  ],
  providers: [HeroSearchService],
  declarations: [HeroSearchComponent],
  exports: [HeroSearchComponent]
})
export class HeroesSearchModule { }
