import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommanService } from 'src/app/services/comman.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentAComponent implements OnInit {
  @Output() componentAToMain = new EventEmitter<any>();
  constructor(private comman: CommanService) { }

  ngOnInit(): void {
  }
  sendToParent(name: Number) {
    this.componentAToMain.emit(name);
    this.comman.bonus.next(name);
  }
}
