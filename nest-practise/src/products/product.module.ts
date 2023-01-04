import { Module } from "@nestjs/common";
import { Product } from "./product.controller";
import ProductService from "./product.service"

@Module({
    controllers: [Product],
    providers: [ProductService]
})
export class ProductModule { }