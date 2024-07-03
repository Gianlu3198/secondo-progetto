import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookComponent } from "./book/book.component";
import { BookListComponent } from "./book-list/book-list.component";
import { FilmListComponent } from "./film-list/film-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, BookComponent, BookListComponent, FilmListComponent]
})
export class AppComponent {
  title = 'secondo-progetto';
}
