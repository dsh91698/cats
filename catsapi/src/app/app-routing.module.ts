import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatSetComponent } from './components/cat-set/cat-set.component';
import { OneKittyComponent } from './components/one-kitty/one-kitty.component';

const routes: Routes = [
  { path: '', component: OneKittyComponent }, // core
  { path: 'set', component: CatSetComponent }, // core
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
