import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassEditComponent } from './classes/class-edit/class-edit.component'; 
import { ClassDetailComponent } from './classes/class-detail/class-detail.component'; 
import { ClassesComponent } from './classes/classes.component';
import { FlashcardListComponent } from './flashcards/flashcard-list/flashcard-list.component';
import { FlashcardsComponent } from './flashcards/flashcards.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  
    { path: 'classes', component: ClassesComponent, children: [
        { path: 'new', component: ClassEditComponent },
        { path: ':id', component: ClassDetailComponent },
        { path: ':id/edit', component: ClassEditComponent}
    ]},

    { path: 'flashq', component: HomeComponent },

    {
        path: 'signup', component: SignUpComponent
    },
    {
        path: 'signin', component: SignInComponent
    },
    {
        path: 'home', component: HomeComponent
    },

    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}