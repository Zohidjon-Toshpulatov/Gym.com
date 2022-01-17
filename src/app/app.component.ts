import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from './shared/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  blogs: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.contentfulService.getProducts().then(blogs => {
      this.blogs = blogs;
      // console.log(this.blogs);
      // console.log(this.blogs[0].fields);
      return this.blogs;
    });
  }

}
