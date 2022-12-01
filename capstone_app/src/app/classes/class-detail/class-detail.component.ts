import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Class } from '../class.model';
import { ClassService } from '../class.service';
import { WinRefService } from 'src/app/win-ref.service';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit{
  nativeWindow: any;
  class: Class;

  constructor(
    private classService: ClassService,
    private router: Router,
    private route: ActivatedRoute,
    private winRef: WinRefService
  ) {}

  ngOnInit(): void {
    this.nativeWindow = this.winRef.getNativeWindow();

    this.route.params.subscribe((params: Params) => {
      let id: string = (+params['id']).toString();
      this.class = this.classService.getClass(id);
    });
  }

  onDelete() {
    this.classService.deleteClass(this.class);
    this.router.navigateByUrl('/class');
  }
}
