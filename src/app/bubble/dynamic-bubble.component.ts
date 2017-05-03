import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BubbleElt } from './models/bubble-elt';
import { BubbleService } from './bubble.service';
@Component({
  selector: 'dynamic-bubble',
  templateUrl: './dynamic-bubble.component.html',
  providers: [ BubbleService ]
})
export class DynamicBubbleComponent implements OnInit {
  @Input() bubbles: BubbleElt<any>[] = [];
  form: FormGroup;

  constructor(private qcs: BubbleService) {  }
  ngOnInit() {

    this.form = this.qcs.getBubbleElts(this.qcs.getChats());
  }

}