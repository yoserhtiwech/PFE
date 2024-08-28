import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CallNotification } from 'src/app/services/models/CallNotification';
import{WebSocketService}from'src/app/services/service/WebSocket.service';

@Component({
  selector: 'app-call-popup',
  templateUrl: './call-popup.component.html',
  styleUrls: ['./call-popup.component.scss']
})
export class CallPopupComponent implements OnInit {
  callerName:string;
  callNotification: CallNotification | null = null;

  constructor(private webSocketService: WebSocketService,
    public dialogRef: MatDialogRef<CallPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
  ngOnInit(): void {
   this.webSocketService.getCallNotifications().subscribe(notification => {
      this.callNotification = notification;
      // Display a popup or handle the notification as needed
    });
  }

  answerCall(): void {
    this.dialogRef.close('answer');
  }

  hangUp(): void {
    this.dialogRef.close('hangup');
  }
}
