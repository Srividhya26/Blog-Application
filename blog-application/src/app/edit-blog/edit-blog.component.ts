import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

  blogs: any;

  id: any;
  blogDetails: any;
  editForm: FormGroup = new FormGroup({});
  dataLoaded: boolean = false;

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router, private builder: FormBuilder) { }

  ngOnInit(): void {
    this.dataLoaded = false;
    this.route.params.subscribe((data) => {
      this.id = data.id;
    });

    if (this.id !== '') {
      this.authService.getItem(this.id).toPromise().then((data) => {
        this.blogDetails = data;
        Object.assign(this.blogDetails, data);

        this.editForm = this.builder.group({
          'blogTitle': new FormControl(this.blogDetails.blogTitle),
          'content': new FormControl(this.blogDetails.content)
        })

        this.dataLoaded = true;

      })
        .catch(err => {
          console.log(err);
        })
    }
  }

  editBlog(): void {
    this.authService.update(this.id, { ...this.editForm.value, id: parseInt(this.id) }).subscribe((data) => console.log("Updated"), this.editForm.value);

    //   const datas = {
    //     blogTitle: this.data.blogTitle,
    //     content: this.data.content
    //   };

    //   this.authService.update(this.route.snapshot.params['id'],this.data).subscribe((datas) => {
    //     this.data = datas;
    //   });
  }

}

