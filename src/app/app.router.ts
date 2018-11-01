import { Routes, RouterModule } from "@angular/router";

// import { CockpitComponent } from "./cockpit/cockpit.component";
// import { ServerElementComponent } from "./server-element/server-element.component";
import { FormTodoComponent } from "./form-todo/form-todo.component";

const dataRouter : Routes = [
   {
      path: 'advance',
      component : FormTodoComponent,
   }
]

export const myRouter = RouterModule.forRoot(dataRouter);
