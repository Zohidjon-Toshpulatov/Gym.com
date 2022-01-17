import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

const CONFIG = {
  space: 'wjkda6rgadko',
  accessToken: 'mL3TP0TDr9IMa1jqFAys9J4ZplVOAJrY7IlG_JxNe3E',
}

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private client = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() { }

  getProducts() {
    return this.client.getEntries()
      .then(res => res.items);
  }
}
