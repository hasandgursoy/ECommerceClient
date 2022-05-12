import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';

declare var alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  // message(message:String,messageType:MessageType,position:Positon,delay:number=3){
  //   alertify.set('notifier','delay',delay)
  //   alertify.set('notifier','position',position);
  //   alertify[messageType](message);

  // }

  message(message: String, options: Partial<AlertfiyOptions>) {
    alertify.set('notifier', 'delay', options.delay);
    alertify.set('notifier', 'position', options.position);
    const mjs = alertify[options.messageType!](message);
    if(options.dismissOthers){
      mjs.dismiss();
    }
  }

  dismiss() {
    alertify.dismissAll();
  }


}

export class AlertfiyOptions {
  messageType: MessageType = MessageType.Message;
  position: Position = Position.BottomLeft;
  delay: number = 3;
  dismissOthers: boolean = true;
}

export enum MessageType {
  Error = "error",
  Message = "message",
  Notify = "notify",
  Success = "success",
  Warning = "warning"
}

export enum Position {
  TopCenter = "top-center",
  TopRight = "top-right",
  TopLeft = "top-left",
  BottomRight = "bottom-right",
  BottomLeft = "bottom-left",
  BottomCenter = "bottom-center"
}