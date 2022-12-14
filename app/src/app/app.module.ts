import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClassesComponent } from './classes/classes.component';
import { ClassListComponent } from './classes/class-list/class-list.component';
import { FlashcardsComponent } from './flashcards/flashcards.component';
import { FlashcardListComponent } from './flashcards/flashcard-list/flashcard-list.component';
import { FlashcardEditComponent } from './flashcards/flashcard-edit/flashcard-edit.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClassItemComponent } from './classes/class-item/class-item.component';
import { DropdownDirective } from './header/dropdown.directive';
import { ClassDetailComponent } from './classes/class-detail/class-detail.component';
import { ClassEditComponent } from './classes/class-edit/class-edit.component';
import { FlashcardItemComponent } from './flashcards/flashcard-item/flashcard-item.component';
import { DndModule } from 'ng2-dnd';
import { AuthModule } from '@auth0/auth0-angular';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ClassesComponent,
    ClassListComponent,
    FlashcardsComponent,
    FlashcardListComponent,
    FlashcardEditComponent,
    HeaderComponent,
    ClassItemComponent,
    DropdownDirective,
    ClassDetailComponent,
    ClassEditComponent,
    FlashcardItemComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    DndModule.forRoot(),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
