import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassEditComponent } from './classes/class-edit/class-edit.component'; 
import { ClassDetailComponent } from './classes/class-detail/class-detail.component'; 
import { ClassesComponent } from './classes/classes.component';

const appRoutes: Routes = [
  
    { path: 'classes', component: ClassesComponent, children: [
        { path: 'new', component: ClassEditComponent },
        { path: ':id', component: ClassDetailComponent },
        { path: ':id/edit', component: ClassEditComponent}
    ]}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}