import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { BehaviorSubject, filter, find, map, Subject, tap } from 'rxjs';

const CONFIG = {
  space: 'wjkda6rgadko',
  accessToken: 'mL3TP0TDr9IMa1jqFAys9J4ZplVOAJrY7IlG_JxNe3E',
}

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private blogs$ = new BehaviorSubject<any>([]);

  private client = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() { }

  getProducts() {
    return this.client.getEntries()
      .then(res => {
        const blogs = res.items.filter(item => item.sys.contentType.sys.id === 'blogPost');
        this.setBlogs(blogs);
        return res.items;
      });
  }

  setBlogs(blogs: any) {
    console.log(blogs);
    this.blogs$.next(
      blogs
        .map((blog: any) => blog.fields).
        sort(
          function (x: any, y: any) {
            return (x.isNewBlogPost === y.isNewBlogPost) ? 0 : x.isNewBlogPost ? -1 : 1;
          }
        )
    )
  }

  getBlogs() {
    return this.blogs$.asObservable();
  }

  getBlog(title: string) {
    return this.blogs$.pipe(map((blogs: any) => {
      return blogs.filter((blog: any) => {
        return blog.blogTitle == title;
      })
    }))
  }
}
