import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { io } from "socket.io-client";
import { environment } from 'src/environments/environment';
import { CommanService } from './comman.service';
const socket = io(environment.SOCKET_ENDPOINT);

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {
  messageEvent = new Subject()
  countdown = new Subject<Number>()
  constructor(private comman:CommanService) { this.socketInit() }

  socketInit() {

    //CHECK CONNECTION EVENT
    socket.on("connect", () => {
      // console.log(socket.id, 'Connected'); // x8WIv7-mJelg7on_ALbx
    });

    //disconnect Event
    socket.on("disconnect", () => {
      // console.log(socket.id); // undefined
    });

    socket.on("qr", (data) => {
      this.messageEvent.next(data);
      this.countdown.next(data.count);
    });
  }

}
