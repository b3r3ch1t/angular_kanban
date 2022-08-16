import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'; 

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent implements OnInit {
  public task : string;

  constructor() { 
    this.task=''; 
  }

  ngOnInit(): void {
  }

  backLogItems =['task1', 'task2']

  toDoItems = ['task3', 'task4', 'task5', 'task6'];

  onGoingItems = ['task7', 'task8', 'task9', 'task10'];

  doneItens = ['task11', 'task12', 'task13', 'task14'];

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
    this.backLogItems.push(this.task);
  }

  onCardDelete(card: any) { 
    
    var index =  this.backLogItems.indexOf(card);
    if (index !== -1) {
      this.backLogItems.splice(index, 1);
    } 
  }

 

}
