//@ts-check
import { Component } from '@angular/core';

export type EditorType = 'modul3' | 'percobaan' | 'formValidation' | 'todoApp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{ type: 'server', name : 'Test server', content: 'Just a test' }];
  editor: EditorType = 'modul3';
  
  public get showModul3(){
    return this.editor === 'modul3';
  }

  public get showTodo(){
    return this.editor === 'todoApp';
  }
  
  public get showPercobaan() {
    return this.editor === 'percobaan';
  }

  public get showFormValidation() {
    return this.editor === 'formValidation';
  }
  
  toogleEditor(type:EditorType){
    this.editor = type;
  }

  onServerAdded(serverData:{serverName:string, serverContent:string}) {
    console.log(serverData);
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData : {blueprintName : string, blueprintContent : string}){
    console.log(blueprintData);
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintContent
    });
  }
}
