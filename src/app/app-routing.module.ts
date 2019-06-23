import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedsComponent } from './components/feeds/feeds.component';

const routes: Routes = [
  { path: '', redirectTo: '/feeds', pathMatch: 'full' },
  { path: 'feeds', component: FeedsComponent },
  { path: '**', component: FeedsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
