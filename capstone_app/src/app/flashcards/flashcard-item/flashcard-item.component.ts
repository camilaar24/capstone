import { Component, Input, OnInit } from '@angular/core';
import { Flashcard } from '../flashcard.model';
import { FlashcardService } from '../flashcard.service';

@Component({
  selector: 'app-flashcard-item',
  templateUrl: './flashcard-item.component.html',
  styleUrls: ['./flashcard-item.component.css']
})
export class FlashcardItemComponent implements OnInit{
  @Input()
  flashcard!: Flashcard;
  flashcardSender!: string;
  
  constructor(private flashcardService: FlashcardService){}

  ngOnInit(): void {
 
  }
}
