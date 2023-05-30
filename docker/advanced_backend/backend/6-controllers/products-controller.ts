import express, { NextFunction, Request, Response } from "express";
import ProductModel from "../4-models/ProductModel";
import logic from "../5-logic/products-logic";

const router = express.Router();

router.get(
  "/products",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const products = await logic.getAllProducts();
      response.status(200).json(products);
    } catch (err: any) {
      next(err);
    }
  }
);

router.post(
  "/products",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const product = new ProductModel(request.body);
      const addProduct = await logic.addProduct(product);
      response.status(201).json(addProduct);
    } catch (err: any) {
      next(err);
    }
  }
);

export default router;
