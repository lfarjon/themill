import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { Router } from '@angular/router';
import { getImageUrl } from '@takeshape/routing';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
categories: any;
loading: boolean = true;
getImageUrl = getImageUrl;

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
    
}
