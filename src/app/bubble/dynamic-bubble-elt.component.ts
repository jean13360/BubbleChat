import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { BubbleElt } from './models/bubble-elt';
@Component({
  selector: 'df-bubble',
  templateUrl: './dynamic-bubble-elt.component.html'
})
export class DynamicBubbleEltComponent {
  @Input() bubble: BubbleElt<any>;
  @Input() form: FormGroup;

  get isValid() {
    /* return this.form.controls[this.bubble.key].valid; */
  return true;}
}