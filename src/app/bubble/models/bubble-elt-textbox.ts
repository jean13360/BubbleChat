import { BubbleElt } from './bubble-elt';

export class BubbleTextboxElt extends BubbleElt<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}