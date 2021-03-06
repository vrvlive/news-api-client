# NewsApiClient

This is a simple Angular 10 application for displaying latest news, by calling news API provided by https://newsapi.org/. 

## Note

Register at https://newsapi.org/ and obtain an API key for running the application. API key is not given in this source code. 

## Warning

Do not use this code in production, without having a proxy of your own and having additional authentication, as your your API key can easily be retrieved by anyone from the browser. 

## Running the application

- Get your API from https://newsapi.org/
- Update environment variable  `apiKey: '<get_your_own_key>'` in `environment.ts` file
- run `npm update`
- run  `ng serve -o` to view the latest news served by the API. 
- Or run it with docker 
  - `docker build . -t news-reader-app`
  - `docker run -d -p 80:80 --rm --name news-site news-reader-app`


## Sample Screenshots 

- Large screen rendering 

![Large Screen](/images/large_screen.png "Title")

- Small screen rendering and navigation 

![Small Screen](/images/iphonex.png "Title") ![Small Screen](/images/navbar.png "Title")

