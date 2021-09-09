import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-display-blog',
  templateUrl: './display-blog.component.html',
  styleUrls: ['./display-blog.component.css']
})
export class DisplayBlogComponent implements OnInit {

  constructor(private router : Router,private blogService : AuthService) { }

  blogs : any = [];

  ngOnInit(): void {
    this.displayAllBlogs();
  }

  displayAllBlogs() : void
  {
     this.blogService.list().subscribe(
       (blogs : any) => 
       {
         this.blogs = blogs;
       },
       (error : any) => 
       {
        console.log(error);
       }
     );
  }

  gotoadd()
  {
    this.router.navigate(['add']);
  }

}
