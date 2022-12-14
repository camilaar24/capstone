import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Class } from '../class.model';
import { ClassService } from '../class.service';


@Component({
  selector: 'app-class-edit',
  templateUrl: './class-edit.component.html',
  styleUrls: ['./class-edit.component.css']
})
export class ClassEditComponent implements OnInit {
  
  originalClass: Class;
  class: Class;
  editMode: boolean = false;


  constructor(
    private classService: ClassService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      if (id === undefined || id === null) {
        this.editMode = false;
        return;
      }
      this.originalClass = this.classService.getClass(id);
      if(
        this.originalClass === undefined ||
        this.originalClass === null
      ) {
        return;
      }
      this.editMode = true;
      this.class = JSON.parse(JSON.stringify(this.originalClass));
    });
  }

  onSubmit(form: NgForm) {
    let value = form.value;
    let newClass = new Class (
      null,
      value.name,
      value.description,
      value.url
    );
    if (this.editMode) {
      this.classService.updateClass(this.originalClass, newClass);
    } else {
      this.classService.addClass(newClass);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}

