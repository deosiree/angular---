import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  // 将数据传递给子组件：product->Input->productAlerts，然后productList使用子组件productAlerts
  @Input() product!: Product;
  // 在 ProductAlertsComponent 类定义中，使用 @Input() 装饰器定义一个名为 product 的属性。@Input() 装饰器指出此属性值要从本组件的父组件 ProductListComponent 中传入

  // 将数据传递到父组件
  @Output() notify = new EventEmitter();
}
