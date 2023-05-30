class ProductModel {
  public id: number;
  public name: string;
  public price: number;
  public stock: number;

  constructor(product: ProductModel) {
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
    this.stock = product.stock;
  }

  public validate(): any {
    if (!this.name) return "Missing name";
    if (!this.price) return "Missing price";
    if (!this.stock) return "Missing stock";
    if (this.price < 0 || this.price > 1000)
      return "price must be between 0-1000";
    if (this.stock < 0 || this.stock > 1000)
      return "stock must be between 0-1000";
    return null;
  }
}

export default ProductModel;
