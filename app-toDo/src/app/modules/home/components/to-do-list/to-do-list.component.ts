import { Component, DoCheck, OnInit } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements DoCheck {

  public taskList: Array<TaskList> = [];

  constructor() { }

  ngDoCheck(){
    this.taskList.sort( (first, last) => Number(first.checked) - Number(last.checked))
    //o primeiro item vira um número, que, se checado, vai para baixo
  }

  public setEmitTaskList(event: string){
    this.taskList.push({task: event, checked: false})
  }

  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1)
    //removendo um elemento a partir do valor recebido no html
  }

  public deleteAllTaskList(){
    const confirm = window.confirm("Você deseja realmente deletar tudo?");
    if(confirm){
      this.taskList= [];
    }
  }

  public validationInput(event: string, index:number){
    if(!event.length){
      const confirm = window.confirm("Task vazia! Deseja deletar?")

      if(confirm){
        this.deleteItemTaskList(index);
      }
    }
  }

}
