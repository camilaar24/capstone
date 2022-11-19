import { Component, OnInit } from '@angular/core';
import { Flashcard } from '../flashcard.model';
import { FlashcardService } from '../flashcard.service';

@Component({
  selector: 'app-flashcard-list',
  templateUrl: './flashcard-list.component.html',
  styleUrls: ['./flashcard-list.component.css']
})
export class FlashcardListComponent implements OnInit {
  flashcards: Flashcard [] = [];

  constructor(private flashcardService: FlashcardService ){}

  ngOnInit(): void {
    this.flashcards = this.flashcardService.getFlashcards();
    this.flashcardService.flashcardChangedEvent.subscribe((flashcards: Flashcard[]) => {
      this.flashcards=flashcards;
    });
  }

  onAddFlashcard(flashcard: Flashcard) {
    this.flashcards.push(flashcard);
  }

}
