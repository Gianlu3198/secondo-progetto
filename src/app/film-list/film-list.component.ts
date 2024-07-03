import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { FilmComponent } from '../film/film.component';
import { Film } from '../model/Film';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-film-list',
  standalone: true,
  imports: [CommonModule, FilmComponent, MatGridListModule],
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.css'
})
export class FilmListComponent 
{
  constructor(private filmService:FilmService)
  {
    this.films = filmService.getAll();
  }

  films:Film[];

  deleteFilm(id:number)
  {
    this.filmService.deleteById(id);
  }
}
