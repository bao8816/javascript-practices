import {getProducts} from "../08-service-module/product-service.js";
import CartList from "./component/CartList.js";

class App {
  render() {
      getProducts().then(products => {
            const cartList = new CartList(products);
            this.app = document.getElementById('app');
            this.app.append(cartList.element);
      });
  }
}

new App().render();
