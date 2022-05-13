import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, Product } from 'src/app/models/models';
import { getImageUrl } from '@takeshape/routing';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit, OnDestroy {
  
  category: any;
  products: Product[] = [];
  loading: boolean = true;
  getImageUrl = getImageUrl;
  
  //To unsubscribe OnDestroy
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _categoriesService: CategoriesService,
    private _router: Router,
    private _route: ActivatedRoute) {}


  ngOnInit(): void {
    this._categoriesService.getCategory(this._route.snapshot.params['slug'])
    .valueChanges
    .subscribe(({ data, loading }) => {
      this.loading = loading;
      this.category = data.getCategoryList.items[0] as Category;
      this.products = this.category.products;
    })
  }

  goToProduct(product: any) {
    this._router.navigate([`product/${product['slug']}`])
  }

  ngOnDestroy() {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

}
