import { Injectable } from '@angular/core';
import { BubbleDropdownElt } from './models/bubble-elt-dropdown';
import { BubbleElt } from './models/bubble-elt';
import { BubbleTextboxElt } from './models/bubble-elt-textbox';
import { Validators, FormGroup, FormControl } from '@angular/forms';
@Injectable()
export class BubbleService {

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getBubbleElts(chatsElements) {
    return this.createBubbleElts(chatsElements.sort((a, b) => a.order - b.order));
  }
  
  createBubbleElts(chatsElements) {
      const group: any = {};
      chatsElements.forEach(chatElt => {
        const bubbleelt = this.createcomponent(chatElt);

        group[bubbleelt.key] = new FormControl(bubbleelt.value || '');
     
      });
      return new FormGroup(group);
  }

   createcomponents(chatsElements) {
    const bubbleelt: any = [];
    chatsElements.forEach(chatElt => {
         bubbleelt.push( this.createcomponent(chatElt));
      });
      return bubbleelt;
  }

 createcomponent(chatElt) {
    if (chatElt.type === 'label') {return this.createLabelComponent(chatElt); }
    if (chatElt.type === 'date') {return this.createTbDateComponent(chatElt); }
    if (chatElt.type === 'dropdown') {return this.createDropDownComponent(chatElt); }
    return null;
  }

createDropDownComponent(chatElt) {
  return new BubbleDropdownElt({
      key: chatElt.key,
      label:   chatElt.text,
      options: chatElt.options,
      order: chatElt.order});
  }
  createTbDateComponent(chatElt) {
    const currentDate = new Date();
     return new BubbleTextboxElt({
        key: chatElt.text,
        label:  chatElt.text,
        type: 'date',
        value: new Date(),
        order: chatElt.order
      });
  }
  createLabelComponent(chatElt) {
     return new BubbleElt({
        key: chatElt.text,
        label: chatElt.text,
        value: chatElt.text,
        required: false,
        order: chatElt.order
      });
  }

  getChats() {
      const chat = [
        {
          type: 'label',
          text: 'Veuillez préciser votre demande',
          order: 1
        }, {
          type: 'date',
          text: 'Du',
          order: 2
        }, {
          type : 'dropdown',
          key: 'dudd',
          label: 'periode',
          options: [
            {key: 'am',  value: 'Matin'},
            {key: 'pm',  value: 'Apres midi'},
            {key: 'jour',   value: 'Jour entier'},
          ], order: 3

        }, {
          type: 'date',
          text: 'Au',
          order: 4
        }, {
          type : 'dropdown',
          key: 'dudd',
          label: 'periode',
          options: [
            {key: 'am',  value: 'Matin'},
            {key: 'pm',  value: 'Apres midi'},
            {key: 'jour',   value: 'Jour entier'},
          ], order: 5

        }, {
          type : 'dropdown',
          key: 'type',
          label: 'Type d absence',
          options: [
            {key: 'cp',  value: 'Congés payés'},
            {key: 'rtt',  value: 'RTT'},
            {key: 'form',   value: 'Formation'},
          ], order: 5

        }
      ];
      return chat;

  }
}