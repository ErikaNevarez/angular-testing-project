import { Injectable } from '@angular/core';
import { Tasks } from './tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks!:Tasks[]; 

  constructor() { 
    this.tasks=JSON.parse(localStorage.getItem("data") || '[]' ); 
  }

  getTasks(){
    return this.tasks; 
  }

  addTasks(tasks:Tasks){
    this.tasks.push(tasks);
    localStorage.setItem('data', JSON.stringify(this.tasks)); 
  }

  nuevaTarea():Tasks{
    return {
      id_tasks:0,
      tasks:''
    }
  }


}
 