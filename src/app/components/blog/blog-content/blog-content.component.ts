import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ContentfulService } from 'src/app/shared/contentful.service';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.scss']
})
export class BlogContentComponent implements OnInit {
  blog: any;
  title: any

  constructor(private contentfulService: ContentfulService, private activedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params: any) => {
      this.title = params.title;
      this.contentfulService.getBlog(this.title).subscribe(blogs => {
        this.blog = blogs[0];
        this.blog?.blogContent?.content.forEach((e: any) => {
          console.log(e?.data?.target?.fields);
        });
      });
    })
  }

  isHeading(text: any) {
    return text === 'heading-4';
  }

  isPara(text: any) {
    return text === 'paragraph';
  }

  onPrevBlog() {
    this.contentfulService.routePrevBlog(this.title);
  }
  onNextBlog() {
    this.contentfulService.routeNextBlog(this.title);
  }
}
