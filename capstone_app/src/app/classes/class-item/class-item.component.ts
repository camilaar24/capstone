import { Component, Input, OnInit } from '@angular/core';
import { Class } from '../class.model';

@Component({
  selector: 'app-class-item',
  templateUrl: './class-item.component.html',
  styleUrls: ['./class-item.component.css']
})
export class ClassItemComponent implements OnInit {

  @Input() class: Class;

  constructor() { }

  ngOnInit(): void {
    
  }

}
