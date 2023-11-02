import fs from 'fs'
import { v4 as uuidv4 } from 'uuid';
class ProductsController{
getAllProducts(req,res){
    console.log(1111111)
    const fileProducts = fs.readFileSync("./src/models/products.json", "utf8");
    const listProducts = JSON.parse(fileProducts);

    res.json(listProducts);
  }
  getProductsById(req, res) {
    const id = req.params.id;
    const fileProducts = fs.readFileSync("./src/models/products.json", "utf8");
    const listProducts = JSON.parse(fileProducts);
    const product = listProducts.find((item) => item.id == id);
    res.json(product);
  }
  createProduct(req, res) {
    const newProduct = req.body;
    req.body.id = uuidv4();
    const fileProducts = fs.readFileSync("./src/models/products.json", "utf8");
    const listProducts = JSON.parse(fileProducts);
    listProducts.push(newProduct);
    fs.writeFileSync("./src/models/products.json", JSON.stringify(listProducts));
    res.json({
      status: 200,
      message: "Ok",
      data: listProducts,
    });
  }
  deleteProduct(req, res) {
    const id = req.params.id;
    const fileProducts = fs.readFileSync("./src/models/products.json", "utf8");
    const listProducts = JSON.parse(fileProducts);
    const newListProduct = listProducts.filter((item) => item.id != id);
    fs.writeFileSync("./src/models/products.json", JSON.stringify(newListProduct));

    res.json(newListProduct);
  }
  updateProduct(req, res) {
    const id = req.params.id;
    const fileProducts = fs.readFileSync("./src/models/products.json", "utf8");
    const listProducts = JSON.parse(fileProducts);
    listProducts.forEach((item, index) => {
      if (item.id == id) {
        listProducts.splice(index, 1, req.body);
        return;
      }
    });
    fs.writeFileSync("./src/models/products.json", JSON.stringify(listProducts));
    res.json({
      status: 200,
      message: "Ok",
      data: listProducts,
    });
  }
}

export default ProductsController;