import { EventEmitter, Injectable } from '@angular/core';
import { Flashcard } from './flashcard.model'; 
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FlashcardService {
  selectedFlashcardEvent= new EventEmitter<Flashcard>();
  flashcardChangedEvent = new Subject<Flashcard[]>();

  private flashcards: Flashcard[] = [];
  private maxFlashcardId: number;

  flashcardListChangedEvent:any;

  constructor(private http: HttpClient) {
    this.maxFlashcardId = this.getMaxId();
  }

  getFlashcards(): Flashcard[] {
    
    return this.flashcards.slice();
  }

  getMaxId(): number {
    let maxId = 0;
    this.flashcards.forEach((d) => {
      if (+d.id > maxId) maxId = +d.id;
    });
    return maxId;
  }

  getFlashcard(id: string):Flashcard {
    return this.flashcards.find((d) => d.id === id);
    }

  addFlashcard(newFlashcard: Flashcard) {
    if (newFlashcard === null || newFlashcard === undefined) return;
    this.maxFlashcardId++;
    newFlashcard.id = `${this.maxFlashcardId}`;
    this.flashcards.push(newFlashcard);
    this.flashcardListChangedEvent.next(this.flashcards.slice());
  }


}