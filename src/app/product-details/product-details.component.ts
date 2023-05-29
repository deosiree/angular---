import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// 导入 products 数组-查看产品详情
import { Product, products } from '../products';
// 导入购物车服务
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
// 添加导航-用于展示产品详情的新组件
export class ProductDetailsComponent implements OnInit {
  // 定义 product 属性(32行,在producted中找到和对应id相对应的产品赋值给product属性)
  product: Product | undefined;

  /**
   * Angular 路由器加载的每个组件都有自己专属的 ActivatedRoute。ActivatedRoute 中包含有关路由和路由参数的信息。
   * 通过注入 ActivatedRoute，你可以配置此组件以使用服务。管理数据那一步将更详细地介绍服务。
   */
  // 通过把购物车服务注入到这里的 constructor() 中来注入它
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  /**
   * 路由参数与你在此路由中定义的路径变量相对应。
   * 要访问路由参数，我们使用 route.snapshot，它是一个 ActivatedRouteSnapshot，其中包含有关该特定时刻的活动路由信息。
   * 与此路由匹配的 URL 提供了 productId。Angular 会使用 productId 来显示每个唯一产品的详情。
   */
  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.查找与route中提供的id对应的产品。
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }

  // 定义 addToCart() 方法，该方法会当前商品添加到购物车中。
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
