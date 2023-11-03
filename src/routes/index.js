import productsRouter from "./products.route.js";
import receiptRouter from "./receipt.route.js";


export function route(app) {
  app.use("/api/v1/products", productsRouter);
  app.use("/api/v1/receipt",receiptRouter);
}