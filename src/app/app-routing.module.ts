import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import { MergemapComponent } from './rxjs/mergemap/mergemap.component';
import { SwitchmapComponent } from './rxjs/switchmap/switchmap.component';
import { ForkjoinComponent } from './rxjs/forkjoin/forkjoin.component';

const routes: Routes = [
  {
    path: "model-driven",
    component: ModelDrivenComponent
  },
  {
    path: "mergemap",
    component: MergemapComponent
  },
  {
    path: "switchmap",
    component: SwitchmapComponent
  },
  {
    path: "forkjoin",
    component: ForkjoinComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
