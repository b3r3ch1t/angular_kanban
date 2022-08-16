import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  incomingItems = ['Carrots', 'Tomatoes', 'Onions', 'Apples', 'Avocados'];

  availableItems = ['Oranges', 'Bananas', 'Cucumbers', 'Try to move me'];

  soldItems = ['Pears', 'Strawberries', 'Limes', 'Mangoes'];

  items = [
    {value: 'Oranges', disabled: false},
    {value: 'Bananas', disabled: true},
    {value: 'Mangoes', disabled: false},
  ];

  task = '';
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  onAddCard(){

  }

}
