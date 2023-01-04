import { Injectable } from "@nestjs/common";
import ProductModel from "./product.model";

@Injectable()
class Product {
    private products: ProductModel[] = [];

    insertProduct(title: string, description: string, price: number) {
        console.log(title, description, price);
        const prodId = new Date().toString();
        console.log(prodId)
        const newProduct = new ProductModel(prodId, title, description, price);
        console.log("new Product", newProduct)
        this.products.push(newProduct);
        console.log("This product", this.products)
        return prodId;
    }

    getProducts() {
        return this.products;
    };

    getSingleProduct(id: string): object {
        return this.products[id];
    }
};

export default Product;