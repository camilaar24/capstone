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
  originalClass!: Class;
  class!: Class;
  editMode: boolean = false;

  constructor(
    private classService: ClassService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      if (id === undefined || id === null) {
        this.editMode = false;
        return;
      }
      this.editMode = true;
      this.class = JSON.parse(JSON.stringify(this.originalClass));
    });
  }


  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}

