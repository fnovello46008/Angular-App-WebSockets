import { Component, OnInit } from '@angular/core';
import { MessagingService } from '../app/Services/messaging.service';
import { Subscription, from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Angular-App';

  subscription:Subscription;

  ngOnInit()
  {
    this.messagingService.sendMessageToServer("Hello from Client");
  }

  constructor(private messagingService: MessagingService){
    this.subscription = this.messagingService.subject.subscribe(msg => {
        console.log(msg);
    });
  }
}
