import { Component,ElementRef,EventEmitter,OnInit,Output,ViewChild, } from '@angular/core';
import { Flashcard } from '../flashcard.model';
import { FlashcardService } from '../flashcard.service';

@Component({
  selector: 'app-flashcard-edit',
  templateUrl: './flashcard-edit.component.html',
  styleUrls: ['./flashcard-edit.component.css']
})
export class FlashcardEditComponent implements OnInit {
  @ViewChild('question')
  question!: ElementRef;
  @ViewChild('answer')
  answer!: ElementRef;

  constructor(private flaschardService: FlashcardService) {}

  ngOnInit(): void {}
    
    onSendFlashcard() {
      const question = this.question.nativeElement.value;
      const answer = this.answer.nativeElement.value;
      const flashcard = new Flashcard ('1', question, answer);
      this.flaschardService.addFlashcard(flashcard);
    }

    onClear() {
      this.question.nativeElement.value='';
      this.answer.nativeElement.value='';
    }
  }

