1) Install Angular Material

ng add @angular/material


2) Create the component kanban 

ng generate component kanban

3) import DragDropModule into app.Module.ts


import {DragDropModule} from '@angular/cdk/drag-drop';


imports: 
    DragDropModule,
  

