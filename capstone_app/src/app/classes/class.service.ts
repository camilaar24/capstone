import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Class } from './class.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClassService {
  maxClassId: any;
  addClass(newClass: Class) {
    throw new Error('Method not implemented.');
  }
  selectedClassEvent = new EventEmitter<Class>();
  classListChangedEvent = new Subject<Class[]>();

  private classes: Class[] = [];
  deleteClass: any;
  
  constructor(private http: HttpClient) {}

  getClass(): Class[] {
    return this.classes.slice();
  }

  getMaxId(): number {
    let maxId = 0;
    this.classes.forEach((d) => {
      if (+d.id > maxId) maxId = +d.id;
    });
    return maxId;
  }

  addDocument(newClass: Class) {
    if (newClass === null || newClass === undefined) return;
    this.maxClassId++;
    newClass.id = `${this.maxClassId}`;
    this.classes.push(newClass);
    this.classListChangedEvent.next(this.classes.slice()); 
  }

  updateClass(original: Class, newClass: Class) {
    if (
      newClass === null ||
      newClass === undefined ||
      original === null ||
      original === undefined
    ) {
      return;
    }
    const pos = this.classes.indexOf(original);
    if (pos < 0) return;

    newClass.id = original.id;
    this.classes[pos] = newClass;
  }

  }

