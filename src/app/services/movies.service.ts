import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private moviesApi = 'https://api.themoviedb.org/3/trending/all/day?api_key=866cd3a065ef9304a549f1d65e494940';
  constructor(private http: HttpClient) { }
  getMovies() {
    return this.http.get(this.moviesApi);
  }
}
