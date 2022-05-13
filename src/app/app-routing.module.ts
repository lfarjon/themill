import { Route } from '@angular/router';
import { LayoutComponent } from './layouts/layout/layout.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: LayoutComponent,
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'category/:slug',
    pathMatch: 'full',
    component: LayoutComponent,
    loadChildren: () => import('./modules/category/category.module').then(m => m.CategoryModule)
  },
  {
    path: 'product/:slug',
    pathMatch: 'full',
    component: LayoutComponent,
    loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule)
  }
];