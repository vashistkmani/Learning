import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import ProductService from "./product.service"
@Controller('/products')
export class Product {
    constructor(private readonly productService: ProductService) { }
    @Post()
    addProduct(@Body() completeBody: { title: string, description: string, price: number }) {
        return { sucess: true, id: this.productService.insertProduct(completeBody.title, completeBody.description, completeBody.price) };
    };

    @Get()
    getProducts() {
        return {
            success: true,
            products: this.productService.getProducts()
        }
    };

    @Get(':id')
    getSingleProduct(@Param('id') productId: string) {
        return { sucess: true, data: this.productService.getSingleProduct(productId) }
    }
}