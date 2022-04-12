import { Component, OnInit } from '@angular/core';
import { ForumService } from './forum.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  listOfArticles: any = [];
  articleFormGroup: FormGroup;

  constructor(private service: ForumService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.getArticles();
    this.articleFormGroup = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      body: ['', [Validators.required]],
      slug: ['', [Validators.required]]


    })



    this.getArticles();
  }

  getArticles() {
    this.service.getArticle("Tag", "Author", "Favorited", 0, 20).subscribe(res => {
      this.listOfArticles = res.articles;
      console.log(this.listOfArticles)
    },
      error => {
        console.log(error);
      }
    )
  }


  postArticle() {
    this.service.postArticle(this.articleFormGroup.value).subscribe(res => {
      this.listOfArticles = res;
      console.log(res);

    },
      error => {
        console.log(error.error.message)
      });
  }

}
