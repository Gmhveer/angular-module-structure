import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommanService {
  bonus = new Subject();
  counterNumber = new Subject();
  constructor() { }
}
