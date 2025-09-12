export class ProductsPage {
  constructor(page) { this.page = page; }
  async addToCart(productName) {
    await this.page.locator(`.inventory_item:has-text("${productName}") >> text=Add to cart`).click();
  }

  async goToCart() { await this.page.click('.shopping_cart_link'); }
}
