import { Component, OnInit } from '@angular/core';

import { ClassService } from './class.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit{


  constructor(private classService: ClassService) { }

  ngOnInit(): void {
    this.classService.classChangedEvent.subscribe()
    

}
}
