import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardItemComponent } from './flashcard-item.component';

describe('FlashcardItemComponent', () => {
  let component: FlashcardItemComponent;
  let fixture: ComponentFixture<FlashcardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashcardItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashcardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
