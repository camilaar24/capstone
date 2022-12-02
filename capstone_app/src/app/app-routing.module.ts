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
import { ProfileComponent } from './user/profile/profile.component';

const appRoutes: Routes = [
  
    { path: 'classes', component: ClassesComponent, children: [
        { path: 'new', component: ClassEditComponent },
        { path: ':id', component: ClassDetailComponent },
        { path: ':id/edit', component: ClassEditComponent}
    ]},

    { path: 'flashcards', component: FlashcardListComponent },

    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'userprofile', component: ProfileComponent
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