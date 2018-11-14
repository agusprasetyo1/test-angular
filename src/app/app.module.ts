import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//Component
import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { FormTodoComponent } from './form-todo/form-todo.component';
import { PercobaanComponent } from './percobaan/percobaan.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { DirectiveDasarComponent } from './directive-dasar/directive-dasar.component';
import { BasicHighlightDirective } from './directive-dasar/basic-highlight.directive';
//Pipe
import { SortPipe } from './sort.pipe';
import { PangkatPipe } from './pangkat.pipe';
//Directive
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { BetterHighlight2Directive } from './better-highlight/better-highlight2.directive';
import { UnlessDirective } from './unless/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    FormTodoComponent,
    PercobaanComponent,
    SortPipe,
    PangkatPipe,
    FormValidationComponent,
    DirectiveDasarComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    BetterHighlight2Directive,
    UnlessDirective
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
