import { MoviesService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];
  baseImageUrl = 'https://image.tmdb.org/t/p/original';
  constructor(private moviesService: MoviesService) { }
  ngOnInit(): void {
    this.moviesService.getMovies().subscribe({
      next: (data: any) => {
        this.movies = data.results;
      },
      error: (error) => {
        console.error('Error fetching movies:', error);
      }
    });
  }
}
