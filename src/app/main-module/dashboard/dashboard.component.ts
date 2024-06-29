import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { CommanService } from 'src/app/services/comman.service';
import { SocketIoService } from 'src/app/services/socket-io.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  productList: any;
  counter: Number = 0;
  constructor(private http: HttpService, private comman: CommanService) { }
  message: any;
  num: any;
  bonusPoint: any = 0;
  ngOnInit(): void {
    // console.log(this.socket.messageEvent,'Message event in Dashboard');
       this.comman.counterNumber.subscribe(result => this.bonusPoint = this.bonusPoint + result)

  }
  ngOnChanges(){
    console.log('On changes dashboard running');
    
  }
  onLogin(name: any) {
    this.counter = this.counter + name;
  }
}

