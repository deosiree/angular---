import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

// 要使用 Angular 的 HTTP 客户端之前，你必须先配置你的应用来使用 HttpClientModule。
// Angular 的 HttpClientModule 中注册了在整个应用中使用 HttpClient 服务的单个实例所需的服务提供者。
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';

@NgModule({
  // 全局导入的包，以便全局注册这些模块中的组件
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent }, // 根目录的路由
      { path: 'products/:productId', component: ProductDetailsComponent }, // 产品详细页的路由
      { path: 'cart', component: CartComponent }, // 创建购物车视图的路由
      { path: 'shipping', component: ShippingComponent }, // 创建配送路由
    ]),
  ],
  // 新创建的 组件 都会添加到 app.module.ts 中模块的 declarations 中
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
