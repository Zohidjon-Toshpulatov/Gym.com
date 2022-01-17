import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from 'src/app/shared/contentful.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogs: Entry<any>[] = [];
  authors: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.contentfulService.getProducts().then(items => {
      this.blogs = items
        .filter(item => item.sys.contentType.sys.id === 'blogPost')

      this.authors = items
        .filter(item => item.sys.contentType.sys.id === 'blogAuthor')

      console.log(this.blogs)
      console.log(this.authors)
    });
  }

}
