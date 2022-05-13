import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { Router } from '@angular/router';
import { getImageUrl } from '@takeshape/routing';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy{
categories: any;
loading: boolean = true;
getImageUrl = getImageUrl;

//To unsubscribe OnDestroy
private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _categoriesService: CategoriesService,
    private _router: Router,
    ) { }

    ngOnInit(): void {
      this._categoriesService.getCategoryList()
      .valueChanges
      .subscribe(({ data, loading }) => {
        this.loading = loading;
        this.categories = data.getCategoryList.items;
        console.log(this.categories)
      })
    }

    ngOnDestroy() {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next(null);
      this._unsubscribeAll.complete();
    }
    
}
