import { NewsApiRequest } from './news-api-request';
import { HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export class NewsApiRequestBuilder {
  url = environment.newsApiUrl;
  apiKey = environment.apiKey;
  params = new HttpParams();

  topHeadlines() {
    this.url = this.url + 'top-headlines';
    return this;
  }
  everything() {
    this.url = this.url + 'top-headlines';
    return this;
  }
  sourceNames() {
    this.url = this.url + 'sources';
    return this;
  }
  fromCountry(country: string) {
    if (country && country.trim())
      this.params = this.params.append('country', country);
    return this;
  }
  fromSource(source: string) {
    if (source && source.trim())
      this.params = this.params.append('sources', source);
    return this;
  }

  withQuery(query: string) {
    if (query && query.trim()) this.params = this.params.append('q', query);
    return this;
  }

  fromDate(date: string) {
    if (date && date.trim()) this.params = this.params.append('from', date);
    return this;
  }

  toDate(date: string) {
    if (date && date.trim()) this.params = this.params.append('to', date);
    return this;
  }

  sortedBy(sortField: string) {
    if (sortField && sortField.trim())
      this.params = this.params.append('sortBy', sortField);
    return this;
  }

  inCategory(category: string) {
    if (category && category.trim())
      this.params = this.params.append('category', category);
    return this;
  }

  inLanguage(language: string) {
    if (language && language.trim())
      this.params = this.params.append('language', language);
    return this;
  }

  fromDomain(domain: string) {
    if (domain && domain.trim())
      this.params = this.params.append('domains', domain);
    return this;
  }

  build() {
    const params = this.params.append('apiKey', this.apiKey);
    return new NewsApiRequest(this.url, params);
  }
}
