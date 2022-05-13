import { Injectable } from '@angular/core';
import {Apollo } from 'apollo-angular';
import { GET_CATEGORY, GET_CATEGORIES } from './queries';

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {

  constructor(private apollo: Apollo) { }

  getCategoryList() {
    return this.apollo
    .watchQuery<any>({
      query: GET_CATEGORIES
    })
  }
  
  getCategory(slug: string) {
    return this.apollo
    .watchQuery<any>({
      query: GET_CATEGORY,
      variables: {
        "slug": slug
      }
    })
  }
}