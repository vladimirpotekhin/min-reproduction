import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteFirstComponent } from './components/route-first/route-first.component';
import { RouteSecondComponent } from './components/route-second/route-second.component';

const routes: Routes = [
  { path: '', component: RouteFirstComponent },
  { path: 'second', component: RouteSecondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
