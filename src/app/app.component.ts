import { Component, OnInit }       from '@angular/core';
import { BubbleService } from './bubble/bubble.service';

@Component({
  selector: 'my-app',

  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
  providers:  [BubbleService]
})
export class AppComponent {
  questions: any[];


  constructor(private service: BubbleService) {
    this.questions = service.createcomponents(service.getChats());
    console.debug(this.questions)
  }
}
