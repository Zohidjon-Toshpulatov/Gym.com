import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogContentComponent } from './components/blog/blog-content/blog-content.component';
import { BlogComponent } from './components/blog/blog.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,

  },
  {
    path: 'equipment',
    component: EquipmentComponent
  },
  {
    path: 'blog/:title',
    component: BlogContentComponent
  },
  {
    path: 'blog',
    component: BlogComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
