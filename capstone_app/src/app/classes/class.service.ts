import { EventEmitter, Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Class } from './class.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClassService {
  selectedClassEvent = new EventEmitter<Class>();
  classListChangedEvent = new Subject<Class[]>();

  private classes: Class[] = [];
  private maxClassId!: number;
  class: any;


  constructor(private http: HttpClient){ 
    this.getClasses();
  }

  getClasses(): Class[] {
    this.http
    .get<Class[]>(this.class)
    .subscribe((clases: Class[]) => {
      this.classes = clases;
      this.maxClassId = this.getMaxId();
      this.classes.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      });
      this.classListChangedEvent.next(this.classes.slice());
    });
    return this.classes.slice();
  }


  getClass(id: string) {
    for (this.class of this.classes.slice()) {
      if (this.class.id === id) {
        return this.class;
      };
    };
  }

  storeClasses() {
    this.http
    .put(this.class, JSON.stringify(this.class), {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
    .subscribe(() => {
      this.classes.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      });
      this.classListChangedEvent.next(this.classes.slice());
    });
  }

  addClass(newClass: Class) {
    if (newClass == null || newClass === undefined) return;
    this.maxClassId++;
    newClass.id = `${this.maxClassId}`;
    this.classes.push(newClass);
    this.storeClasses();
  }

  getMaxId(): number {
    let maxId = 0;
    this.classes.forEach((d) => {
      if (+d.id > maxId) maxId = +d.id;
    });
    return maxId;
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
    this.storeClasses();
  }

  deleteClass: any;

}


