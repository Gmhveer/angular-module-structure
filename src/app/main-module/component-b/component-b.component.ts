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
    console.log('On componentB running:ngOnInit');
    
    this.subscription = this.comman.bonus.subscribe(result => this.bonusPoint = this.bonusPoint + result)
  }
  ngOnChanges(){
    console.log('On componentB running: ngOnChanges');
    
  }

  ngDoCheck(){
    console.log("On ng: Docheck");
    
  }
  ngOnDestroy(): void {
    console.log("Ng destroy");
    
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription = this.subscription ? undefined : this.subscription;
  }

  ngAfterContentChecked(){
    console.log("ngAfterContent Checked called");
    
  }
}
