import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/auth.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  blog = {
    title : '',
    content : ''
  };

  isBlogAdded = false;

  constructor(private blogs : AuthService) { }

  ngOnInit(): void {
  }

  addBlog(): void
  {
    const data = {
      title : this.blog.title,
      content : this.blog.content
    };

    // if(!data.title)
    // {
    //   alert('please add a blog title');
    //   return;
    // }

    this.blogs.create(data).subscribe(response => {
      console.log(response);
      this.isBlogAdded = true;
    },
    error =>
    {
      console.log(error);
    });
  }
  
  newBook() : void{
    this.isBlogAdded = false;
    this.blog = {
      title : '',
      content : ''
    };
  }

}
