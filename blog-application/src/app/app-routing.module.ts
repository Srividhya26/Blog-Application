import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { DisplayBlogComponent } from './display-blog/display-blog.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { ListOfBlogComponent } from './list-of-blog/list-of-blog.component';

const routes: Routes = [
  { path : '', redirectTo : 'blogs',pathMatch:'full'},
  { path : 'blogs' , component : DisplayBlogComponent},
  { path : 'blogs/:id' , component:ListOfBlogComponent},
  { path : 'add' , component:AddBlogComponent},
  { path : 'edit/:id' , component:EditBlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
