import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Article } from '../models';
import { ApiClientService } from '../services/api-client.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  articles$: Observable<Article[]>;

  constructor(
    private newsService: ApiClientService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.articles$ = this.route.paramMap.pipe(
      switchMap((params) => {
        console.log(params);
        const country = params.get('country') || '';
        const sources = params.get('source') || '';
        const category = params.get('category') || '';
        const query = params.get('query') || '';
        return this.newsService.getTopHeadlines(
          country,
          sources,
          category,
          query);
      })
    );

  }
}
