import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneKittyComponent } from './one-kitty/one-kitty.component';

const routes: Routes = [
  { path: '', component: OneKittyComponent }, // core

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
