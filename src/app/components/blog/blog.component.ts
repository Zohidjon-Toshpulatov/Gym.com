import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from 'src/app/shared/contentful.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogs: any;
  blogItems: any;
  newReleased: any;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.contentfulService.getBlogs().subscribe((blogs: any) => {
      this.blogs = blogs
      this.blogItems = this.blogs.slice(0, 4);
      this.newReleased = blogs.filter((blog: any) => blog.isNewBlogPost === true);
      console.log(this.newReleased);
    });
  }

  loadMore() {
    if (this.blogItems && this.blogs.length > this.blogItems.length) {
      const newItems = this.blogs.slice(this.blogItems.length, this.blogItems.length + 4)
      this.blogItems.push(...newItems)
    }
  }
}
