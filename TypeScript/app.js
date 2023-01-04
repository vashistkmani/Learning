function getProduct(id) {
    return {
        id: id,
        name: `Awesome Gadget ${id}`,
        price: 99.5
    }
}
const product = getProduct(1);
console.log(`The product ${product.name} costs $${product.price}`);