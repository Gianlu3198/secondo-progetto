import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Book } from '../model/Book';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [MatCardModule,CommonModule,MatIconModule,MatButtonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent 
{

  @Input() content!:Book; //dichiariamo ciò che il padre manda al figlio

  //Ora dichiariamo un evento che il figlio può far scaturire
  //Output permette di parlare con il padre, EventEmitter emette un evento
  @Output() deleteEvent:EventEmitter<number> = new EventEmitter<number>();

  delete()
  {
    this.deleteEvent.emit(this.content.id);
  }


}
