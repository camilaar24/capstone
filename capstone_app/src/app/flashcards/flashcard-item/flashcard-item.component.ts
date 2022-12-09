import { Component, Input, OnInit } from '@angular/core';
import { Flashcard } from '../flashcard.model';
import { FlashcardService } from '../flashcard.service';
import { WinRefService } from 'src/app/win-ref.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-flashcard-item',
  templateUrl: './flashcard-item.component.html',
  styleUrls: ['./flashcard-item.component.css']
})
export class FlashcardItemComponent implements OnInit{
  @Input()
  flashcard!: Flashcard;
  nativeWindow: any;
  flashcardSender!: string;
  flashcards: Flashcard [] = [];
  
  constructor(private flashcardService: FlashcardService,private router: Router,
    private route: ActivatedRoute,
    private winRef: WinRefService){}

  ngOnInit(): void {
    this.nativeWindow = this.winRef.getNativeWindow();
    this.flashcards = this.flashcardService.getFlashcards();

    this.route.params.subscribe((params: Params) => {
      let id: string = (+params['id']).toString();
      this.flashcard = this.flashcardService.getFlashcard(id);
 
  });
}
}
