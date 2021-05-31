import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private subject$ = new BehaviorSubject<number>(1);

  constructor() {
    console.log('New instance of store service');
  }

  getCounter() {
    return this.subject$.asObservable();
  }

  serCounter(value: number) {
    this.subject$.next(value);
  }
}
