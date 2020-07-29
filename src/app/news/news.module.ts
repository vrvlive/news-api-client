import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { ArticleComponent } from './article/article.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { NavListComponent } from './nav-list/nav-list.component';
@NgModule({
  declarations: [ArticleComponent, MainPageComponent, NavListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    NewsRoutingModule,
  ],
})
export class NewsModule { }
