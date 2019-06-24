import { ElMundoComponent } from './components/feed/el-mundo/el-mundo.component';
import { CreateComponent } from './components/feed/create/create.component';
import { FeedComponent } from './components/feed/feed.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedsComponent } from './components/feeds/feeds.component';
import { EditComponent } from './components/feed/edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/feeds', pathMatch: 'full' },
  { path: 'feeds', component: FeedsComponent },
  { path: 'feed/:id', component: FeedComponent },
  { path: 'feed/:id/edit', component: EditComponent },
  { path: 'create', component: CreateComponent },
  { path: 'el-mundo', component: ElMundoComponent },
  { path: '**', component: FeedsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
