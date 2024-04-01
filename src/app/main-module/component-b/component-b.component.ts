import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommanService } from 'src/app/services/comman.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss']
})
export class ComponentBComponent implements OnInit {
  @Input()
  inputFromParent!: any;
  bonusPoint: any = 0;
  subscription: Subscription | undefined;
  constructor(
    private comman: CommanService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.comman.bonus.subscribe(result => this.bonusPoint = this.bonusPoint + result)
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription = this.subscription ? undefined : this.subscription;
  }


}
