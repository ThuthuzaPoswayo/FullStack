import { getProductsDB, insertProductDB, getProductDB, updateProductDB, deleteProductDB } from '../model/productDB.js'

const fetchProducts = async (req,res) => {
    res.json(await getProductsDB())
}

const fetchProduct = async (req,res) => {
    res.json(await getProductDB(req.params.id))
}

const insertProduct = async (req,res) => {
    let {prodName, quantity, amount, category, prodUrl} = req.body
    console.log(req.body);

    await insertProductDB(prodName, quantity, amount, category, prodUrl)
    res.send('Product added successfully :)')
}

const updateProduct = async (req,res) => {
    let {prodName, quantity, amount, category, prodUrl} = req.body
    let Products = await getProductDB(req.params.id);
        
        prodName?prodName=prodName:prodName=Products.prodName
        quantity?quantity=quantity:quantity=Products.quantity
        amount?amount=amount:amount=Products.amount
        category?category=category:category=Products.category
        prodUrl?prodUrl=prodUrl:prodUrl=Products.prodUrl

        await updateProductDB(prodName, quantity, amount, category, prodUrl, req.params.id)
        res.send('Product has been updated')
}

const deleteProduct = async (req,res) => {
    await deleteProductDB(req.params.id)
    res.send('Product has been deleted')
}

export { fetchProducts, insertProduct, fetchProduct, updateProduct, deleteProduct }