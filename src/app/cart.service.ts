// 注入 HttpClient 服务到你的服务中, 这样你的应用可以获取数据并且与外部 API 和资源互动。
import { HttpClient } from '@angular/common/http';
// 将 Product 接口从 ./products.ts 导入到 cart.service.ts 文件中
import { Product } from './products';
import { Injectable } from '@angular/core';
/* . . . */
@Injectable({
  providedIn: 'root',
})
// 购物车服务
export class CartService {
  // 在 CartService 类中，定义一个 items 属性来存储购物车中当前产品的数组。
  items: Product[] = [];

  /**
   * 把 HttpClient（变量名http） 注入到 CartService 的构造函数中
   */
  constructor(private http: HttpClient) {}
  /* . . . */

  // addToCart() 方法会将产品附加到 items 数组中。
  addToCart(product: Product) {
    this.items.push(product);
  }

  // getItems() 方法会收集用户加到购物车中的商品，并返回每个商品及其数量。
  getItems() {
    return this.items;
  }

  // clearCart() 方法返回一个空数组。
  clearCart() {
    this.items = [];
    return this.items;
  }

  // 从 shipping.json 中得到商品数据
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
  /* . . . */
}
