import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Class } from '../class.model';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit{
  nativeWindow: any;
  class!: Class;

  constructor(
    private classService: ClassService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {});
  }

  onDelete() {
    this.classService.deleteClass(this.class);
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
