import { EventEmitter, Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Class } from './class.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClassService {
  selectedClassEvent = new EventEmitter<Class>();
  classChangedEvent= new Subject<Class[]>();

  private classes: Class[] = [];
  private maxClassId!: number;

  class: any;
  classListChangedEvent: any;


  constructor(private http: HttpClient){ 
    this.maxClassId = this.getMaxId();
  }

  getClasses(): Class[] {
    
    return this.classes.slice();
  }


  getClass(id: string): Class {
    return this.classes.find((d) => d.id === id);
  }

getMaxId(): number {
  let maxId = 0;
    this.classes.forEach((d) => {
      if (+d.id > maxId) maxId = +d.id;
    });
    return maxId;
}

addClass(newClass: Class) {
  if (newClass === null || newClass === undefined) return;
  this.maxClassId++;
  newClass.id = `${this.maxClassId}`;
  this.classes.push(newClass);
  this.classListChangedEvent.next(this.classes.slice());
}

updateClass(original: Class, newClass: Class) {
  if(
    newClass == null ||
    newClass == undefined ||
    original == null ||
    original == undefined
  ){
    return;
  }
  const pos = this.classes.indexOf(original);
    if (pos < 0) return;

    newClass.id = original.id;
    this.classes[pos] = newClass;
    this.classListChangedEvent.next(this.classes.slice());
  }

  deleteClass: (arg0: Class) => void

}
