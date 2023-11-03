import express from "express"
import ProductsController from "../controllers/product.controller.js";

const productsRouter= express.Router();
const productsController = new ProductsController();
// get all users
productsRouter.get("/", productsController.getAllProducts);
// get user by id
productsRouter.get("/:id", productsController.getProductById);
// create user
productsRouter.post("/", productsController.createProduct);
// delete user
productsRouter.delete("/:id", productsController.deleteProduct);
// update user
productsRouter.put("/:id", productsController.updateProduct);

export default productsRouter;