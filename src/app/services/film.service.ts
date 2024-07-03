import { Injectable } from '@angular/core';
import { Film } from '../model/Film';

@Injectable({
  providedIn: 'root'
})
export class FilmService 
{

  films: Film[] = [
    {
      id: 1,
      director: 'Steven Spielberg',
      release_date: new Date('1993-06-11'),
      title: 'Jurassic Park',
      publisher: 'Universal Pictures',
      duration: 127,
      imgUrl: 'https://m.media-amazon.com/images/I/81uO4hJd+JL._AC_SY679_.jpg'
    },
    {
      id: 2,
      director: 'Christopher Nolan',
      release_date: new Date('2010-07-16'),
      title: 'Inception',
      publisher: 'Warner Bros. Pictures',
      duration: 148,
      imgUrl: 'https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg'
    },
    {
      id: 3,
      director: 'Peter Jackson',
      release_date: new Date('2003-12-17'),
      title: 'The Lord of the Rings: The Return of the King',
      publisher: 'New Line Cinema',
      duration: 201,
      imgUrl: 'https://m.media-amazon.com/images/I/51Qvs9i5a%2BL._AC_.jpg'
    },
    {
      id: 4,
      director: 'George Lucas',
      release_date: new Date('1977-05-25'),
      title: 'Star Wars: Episode IV - A New Hope',
      publisher: '20th Century Fox',
      duration: 121,
      imgUrl: 'https://m.media-amazon.com/images/I/71kklTXSLSL._AC_SY679_.jpg'
    },
    {
      id: 5,
      director: 'James Cameron',
      release_date: new Date('1997-12-19'),
      title: 'Titanic',
      publisher: 'Paramount Pictures',
      duration: 195,
      imgUrl: 'https://m.media-amazon.com/images/I/71xZ9w4KsrL._AC_SY679_.jpg'
    }
  ];

  getAll():Film[]
  {
    return this.films;
  }

  deleteById(id:number):void
  {
    this.films.splice(this.films.findIndex(f=> f.id==id),1);
  }
}
