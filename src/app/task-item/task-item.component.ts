import { Component } from '@angular/core';
import { Tasks } from '../tasks';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  tasks!:Tasks; 

  constructor(public tasksService: TasksService ){

  }

  ngOnInit(){
    this.tasks=this.tasksService.nuevaTarea(); 
  }

agregarTarea():void{
  this.tasksService.addTasks(this.tasks);
  this.tasks=this.tasksService.nuevaTarea(); 
}


}
