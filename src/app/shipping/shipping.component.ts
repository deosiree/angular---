// 在 shipping.component.ts 中导入 CartService
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent {
  // 把购物车服务注入到 ShippingComponent 的 constructor() 构造函数中
  constructor(private cartService: CartService) {}

  // 定义一个 shippingCosts 属性，并从 CartService 中利用购物车服务的 getShippingPrices() 方法设置它。
  shippingCosts!: Observable<{ type: string; price: number }[]>;

  // 在 ngOnInit() 方法内部初始化 shippingCosts 属性
  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
