import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_PRODUCT, GET_PRODUCTS } from './queries';


@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(private apollo: Apollo) { }

  getProduct(slug: string){
    return this.apollo
    .watchQuery<any>({
      query: GET_PRODUCT,
      pollInterval: 500,
      variables: {
        "slug": slug
      }
    })
    .valueChanges;
  };

  getProducts(slug: string) {
    console.log('refect')
    return this.apollo
    .watchQuery<any>({
      query: GET_PRODUCTS,
      variables: {
        "slug": slug, 
        size: 1
      }
    })
    
  };

}