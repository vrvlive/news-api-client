import { Injectable } from '@angular/core';
import { Observable, EMPTY, from } from 'rxjs';
import { map, catchError, share } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Article, NewsItems } from '../models';
import { NewsApiRequestBuilder } from './news-api-request-builder'
import { ArticleComponent } from '../article/article.component';

@Injectable({
  providedIn: 'root',
})
export class ApiClientService {


  errorArticles: Article[] = [{
    source:
    {
      id: '401',
      name: 'error'
    },
    author: 'app',
    title: 'Get Your Own Api Ket from NewsAPI Website',
    description: 'Get your own key',
    url: 'https://newsapi.org/docs/get-started',
    urlToImage: 'assets/newsapilogo.png',
    publishedAt: Date.now().toString(),
    content: 'Get Your Own Api Ket from newsapi.org, and configure environment variable  - apiKey: \'<get_your_own_key>\' in the project '
  }];

  constructor(private http: HttpClient) { }

  getTopHeadlines(country = 'us', source = '', category = '', query = '', language = 'en'): Observable<Article[]> {

    if ((source && source.trim()) || (category && category.trim()))
      country = '';

    const request = new NewsApiRequestBuilder()
      .topHeadlines()
      .fromCountry(country)
      .fromSource(source)
      .inCategory(category)
      .withQuery(query)
      .inLanguage(language)
      .build();
    return this.callNewsApi(request.url, request.params);
  }

  callNewsApi(url: string, params: HttpParams): Observable<Article[]> {
    return this.http
      .get<NewsItems>(url, { params })
      .pipe(
        map((res) => res.articles),
        map((articles: Article[]) =>
          articles.filter((p) => {
            const hasContent = p.content && p.content.trim() != '';
            const hasImage = p.urlToImage && p.urlToImage.trim() != '';
            return hasContent && hasImage;
          })
        ),
        catchError((err) => {
          console.log(err);
          return from([this.errorArticles]);
        }),
        share()
      );
  }
}
