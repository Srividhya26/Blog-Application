import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { DisplayBlogComponent } from './display-blog/display-blog.component';
import { ListOfBlogComponent } from './list-of-blog/list-of-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBlogComponent,
    DisplayBlogComponent,
    ListOfBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
