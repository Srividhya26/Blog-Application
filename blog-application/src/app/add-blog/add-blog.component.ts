import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/auth.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  data = {
    blogTitle : ' ',
    content : ' '
  };

  constructor(private blogs : AuthService){}

  ngOnInit(): void {
     
  }

  isBlogAdded = false;

  addNewBlog() : void
  {
   
    const datas = {
      blogTitle: this.data.blogTitle,
      content: this.data.content
    };

    this.blogs.create(datas)
      .subscribe((data) => {console.warn("added"),datas})
  }

}