class ProductList {
    listOfProducts = []

    addItem(newItem) {
        this.listOfProducts.push(newItem)
    }


}

let productsDB = new ProductList()

function getProductProps() {
    let name = document.getElementById('name').value
    let brand = document.getElementById('brand').value
    let value = document.getElementById('value').value

    return [name, brand, value]
}

class Product {
    constructor(name, brand, value) {
        this.id = Math.random(Math.floor(10000000 * 1000000000))
        this.name = name
        this.brand = brand
        this.value = value
    }
}




function addidNewProduct() {
    /// pegar os valores do produto
    let [productName, productBrand, productValue] = getProductProps()
    /// criar um objeto do produto
    let newProduct = new Product(productName, productBrand, productValue)
    /// salvar o produto
    productsDB.addItem(newProduct)
    console.log(productsDB.listOfProducts)
}