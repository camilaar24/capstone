import { EventEmitter, Injectable } from '@angular/core';
import { Flashcard } from './flashcard.model'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FlashcardService {
  flashcardChangedEvent = new EventEmitter<Flashcard[]>();
  private flashcards: Flashcard[] = [];
  private maxFlashcardId!: number;

  constructor(private http: HttpClient) {}

  getFlashcards(): Flashcard[] {
    
    return this.flashcards.slice();
  }
  storeFlashcard() {
    this.http
      .put(JSON.stringify(this.flashcards), {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
      })
      .subscribe(() => {
        this.flashcards.sort((a, b) => {
          if (a < b) return -1;
          if (a > b) return 1;
          return 0;
        });
        this.flashcardChangedEvent.next(this.flashcards.slice());
      });
  }
  getMaxId(): number {
    let maxId = 0;
    this.flashcards.forEach((m) => {
      if (+m.id > maxId) maxId = +m.id;
    });
    return maxId;
  }

  getFlashcard(id: string) {
    return this.flashcards.find((m) => m.id === id);
    }

  addFlashcard(newFlashcard: Flashcard) {
    if (newFlashcard === null || newFlashcard === undefined) return;
    this.maxFlashcardId++;
    newFlashcard.id = `${this.maxFlashcardId}`;
    this.flashcards.push(newFlashcard);
    this.storeFlashcard();
  }
}