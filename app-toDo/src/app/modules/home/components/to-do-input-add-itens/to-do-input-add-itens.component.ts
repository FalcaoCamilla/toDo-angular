import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-input-add-itens',
  templateUrl: './to-do-input-add-itens.component.html',
  styleUrls: ['./to-do-input-add-itens.component.scss']
})
export class ToDoInputAddItensComponent implements OnInit {

  @Output() public emitItemTaskList = new EventEmitter(); //decorator para emitir aos outros components

  public addItemTaskList: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public submitItemTaskList(){

    this.addItemTaskList = this.addItemTaskList.trim(); //remove os espaços adicionais

    if(this.addItemTaskList){ //para não permitir vazio
      this.emitItemTaskList.emit(this.addItemTaskList); 
      //sempre que der o enter, haverá o emit do this.addItemTaskList
      this.addItemTaskList = "";
    }
  }

}
