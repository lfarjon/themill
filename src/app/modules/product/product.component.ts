import { Component, OnDestroy, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getImageUrl } from '@takeshape/routing';
import { Category, Product } from 'src/app/models/models';
import { ProductsService } from 'src/app/services/products/products.service';
import { Subject, interval, map, take, Subscription, Observable, timer } from 'rxjs';
import localeFr from '@angular/common/locales/fr'; 
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeFr);

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit, OnDestroy {
  
  product: any;
  loading: boolean = true;
  loadingOthers: boolean = true;
  categoryProducts: Product[] = [];
  category: any;
  getImageUrl = getImageUrl;
  countDown!: Subscription;
  countDown$!: Observable<any>;
  counter = 1800;
  tick = 1000;
  midnight = new Date();

  //To unsubscribe OnDestroy
  private _unsubscribeAll: Subject<any> = new Subject<any>();
    
  constructor(
    private _productsService: ProductsService,
    private _route: ActivatedRoute,
    private _router: Router,
    ) { }

  ngOnInit(): void {
    
    //Get the product
    this._productsService.getProduct(this._route.snapshot.params['slug'])
      .subscribe(({ data, loading }) => {
      this.loading = loading;
      this.product = data.getProductList.items[0] as Product;
    });

    //Get other products from same category
    this._productsService.getProducts(this._route.snapshot.params['slug'])
    .valueChanges
    .subscribe(({ data, loading }) => {
      this.loadingOthers = loading;
      this.category = data.getCategoryList.items[0] as Category;
      this.categoryProducts = this.category.products;
    });

    
    //countdown to midnight
    this.midnight.setHours(0, 0, 0, 0);
    this.midnight.setDate(this.midnight.getDate() + 1)
    this.countDown = timer(0, this.tick).subscribe(() => --this.counter);

    this.countDown$ = interval(1000).pipe(
      map((x) => {
        return Math.floor(
          (this.midnight.getTime() - new Date().getTime()) / 1000
        );
      })
    );

  }

  goToProduct(product:Product) {
    this._router.navigate(['/product', product.slug]);
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnDestroy() {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

}