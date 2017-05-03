import { BubbleElt } from './bubble-elt';

export class BubbleDropdownElt extends BubbleElt<string> {
  controlType = 'dropdown';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}