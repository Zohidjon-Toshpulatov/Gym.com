import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ContentfulService } from 'src/app/shared/contentful.service';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.scss']
})
export class BlogContentComponent implements OnInit {
  blog: any;
  pClasses = 'text-xl';
  headingClasses = 'text-2xl font-bold';

  constructor(private contentfulService: ContentfulService, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params: any) => {
      this.contentfulService.getBlog(params.title).subscribe(blogs => {
        this.blog = blogs[0];
        for (let item of blogs[0]?.blogContent?.content) {
          if (item.content.length)
            console.log(item)
        }
      });
    })
  }

  isHeading(text: any) {
    return text === 'heading-4';
  }

  isPara(text: any) {
    return text === 'paragraph';
  }
}
