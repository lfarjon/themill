import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//Component & Routes
import { CategoryComponent } from './category.component';
import { categoryRoutes } from './category.routing';
//Angular Material
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(categoryRoutes),
    //Angular Material
    MatProgressSpinnerModule
  ]
})
export class CategoryModule { }
