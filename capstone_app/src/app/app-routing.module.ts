import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassEditComponent } from './classes/class-edit/class-edit.component'; 
import { ClassDetailComponent } from './classes/class-detail/class-detail.component'; 
import { ClassesComponent } from './classes/classes.component';
import { FlashcardEditComponent } from './flashcards/flashcard-edit/flashcard-edit.component';
import { FlashcardItemComponent } from './flashcards/flashcard-item/flashcard-item.component';
import { FlashcardListComponent } from './flashcards/flashcard-list/flashcard-list.component';
import { FlashcardsComponent } from './flashcards/flashcards.component';

const appRoutes: Routes = [
  
    { path: 'classes', component: ClassesComponent, children: [
        { path: 'new', component: ClassEditComponent },
        { path: ':id', component: ClassDetailComponent },
        { path: ':id/edit', component: ClassEditComponent}
    ]},

    { path: 'flashcards', component: FlashcardListComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}