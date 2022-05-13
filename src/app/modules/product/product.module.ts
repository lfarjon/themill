import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//Component & Routes
import { ProductComponent } from './product.component';
import { FormatTimePipe } from 'src/app/pipes/formatTime';
import { productRoutes } from './product.routing';
//Angular Material
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    ProductComponent,
    FormatTimePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes),
    //Angular Material
    MatProgressSpinnerModule
  ]
})
export class ProductModule { }
