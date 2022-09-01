import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpComponent } from './http/http.component';
import { CounterComponent } from './counter/counter.component';
import { InteractionComponent } from './interaction/interaction.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {
    path:'',
    component:HttpComponent
  },
  {
    path:'counter',
    component:CounterComponent
  },
  {
    path:'interaction',
    component:InteractionComponent
  },
  {
    path:'review',
    component:ReviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
