import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import { ValidationError } from "../4-models/error-models";
import ProductModel from "../4-models/ProductModel";

async function getAllProducts(): Promise<ProductModel[]> {
  const sql =
    "SELECT ProductID AS id, ProductName AS name, UnitPrice as price, UnitsInStock AS stock FROM products";
  const products = await dal.execute(sql);
  return products;
}

async function addProduct(product: ProductModel): Promise<ProductModel> {
  const error = product.validate();
  if (error) throw new ValidationError(error);
  const sql =
    "INSERT INTO products(ProductName, UnitPrice, UnitsInStock  VALUES(?,?,?)";
  const info: OkPacket = await dal.execute(sql, [
    product.name,
    product.price,
    product.stock,
  ]);
  product.id = info.insertID;
  return product;
}

export default {
  getAllProducts,
  addProduct,
};
