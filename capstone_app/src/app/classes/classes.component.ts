import { Component, OnInit } from '@angular/core';
import { Class } from './class.model';
import { ClassService } from './class.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit{
  selectedClass!: Class;

  constructor(private classService: ClassService) { }

  ngOnInit(): void {
    this.classService.selectedClassEvent.subscribe()
    

}
}
