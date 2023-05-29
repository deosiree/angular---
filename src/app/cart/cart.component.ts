import { Component } from '@angular/core';
// 从 @angular/forms 包导入 FormBuilder。此服务提供了用来生成控件的便捷方法。
import { FormBuilder } from '@angular/forms';
// 显示购物车商品
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
// 创建购物车视图
export class CartComponent {
  // 定义 items 属性，以便把商品存放在购物车中。
  items = this.cartService.getItems();

  // 收集用户的姓名和地址:使用 FormBuilder 的 group() 方法，把 checkoutForm 属性设置为一个包含 name 和 address 字段的表单模型。
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  // 注入 CartService，以便购物车组件可以使用它。
  // 注入 FormBuilder 服务。该服务是你已经导入过的 ReactiveFormsModule 模块的一部分。
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  /**
   * 定义一个 onSubmit() 方法来处理表单。
   * 该方法允许用户提交其姓名和地址。
   * 此外，此方法会使用 CartService 的 clearCart() 方法重置表单并清除购物车。
   */
  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
