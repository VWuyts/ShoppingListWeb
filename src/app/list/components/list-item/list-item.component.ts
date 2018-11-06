import { Component, Input, OnInit } from '@angular/core';

import { ListItem } from '../../basic-classes/list-item';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() childListItem: ListItem;

  constructor() { }

  ngOnInit() {
  }

  getNote() {
    let completeNote = '';
    if (this.childListItem.note) {
      completeNote += (this.childListItem.amount ? ' - ' : '');
      completeNote += this.childListItem.note;
    }

    return completeNote;
  }
}
