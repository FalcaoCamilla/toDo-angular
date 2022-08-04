import { Component, DoCheck, OnInit } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements DoCheck {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');
  //verifica se no localStorage há algum valor e dá um parse nele, transformando ele em objeto novamente
  //se estiver vazio, salva e pega o valor como array

  constructor() { }

  ngDoCheck(){
    this.setLocalStorage();
    console.log('houve mudança')
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

  public setLocalStorage(){
    if(this.taskList){
    this.taskList.sort( (first, last) => Number(first.checked) - Number(last.checked))
    //o primeiro item vira um número, que, se checado, vai para baixo
    localStorage.setItem("list", JSON.stringify(this.taskList));
    //guardar os dados no localStorage. Apenas asa strings são guardadas, então o JSON.stringify deve convertê-lo antes
    }
  }
}
