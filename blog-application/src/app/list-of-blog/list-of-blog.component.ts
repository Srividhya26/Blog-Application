import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthService} from 'src/app/auth.service';

@Component({
  selector: 'app-list-of-blog',
  templateUrl: './list-of-blog.component.html',
  styleUrls: ['./list-of-blog.component.css']
})
export class ListOfBlogComponent implements OnInit {

  currentBlog : any;

  id !: number;

  constructor(private blogService : AuthService,private route : ActivatedRoute,private router : Router) { }

  ngOnInit(): void {
      this.blogService.getItem(this.route.snapshot.params['id']).subscribe((data : any) => {
        this.currentBlog = data;
      });
  }
}
