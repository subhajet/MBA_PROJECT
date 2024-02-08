

const { createProduct, getProducts, getProduct, UpdateProduct, deleteProduct } = require("../Controllers/Product.controller")

module.exports = (app) =>{
    app.post("/ecome/api/v1/products", createProduct);
    app.get("/ecome/api/v1/products", getProducts);
    app.get("/ecome/api/v1/products/:id", getProduct);
    app.put("/ecome/api/v1/products/:id", UpdateProduct);
    app.delete("/ecome/api/v1/products/:id", deleteProduct);
}