import {pool} from '../config/config.js'

const  getProductsDB = async () => {
    let [data] = await pool.query('SELECT * FROM Products')
    return data
}

const  getProductDB = async (id) => {
    let [[data]] = await pool.query('SELECT * FROM Products WHERE prodID = ?', [id])
    return data
}

const  insertProductDB = async (prodName, quantity, amount, category, prodUrl) => {
    let [data] = await pool.query(`
        INSERT INTO Products (prodName, quantity, amount, category, prodUrl) VALUES (?, ?, ?, ?, ?)
        `, [prodName, quantity, amount, category, prodUrl])
}

const  updateProductDB = async (prodName, quantity, amount, category, prodUrl, id) => {
    await pool.query('UPDATE Products SET prodName = ?, quantity = ?, amount = ?, category = ?, prodUrl = ? WHERE prodID = ?', [prodName, quantity, amount, category, prodUrl, id])
}

const deleteProductDB = async (id) => {
    let [data] = await pool.query('DELETE FROM Products WHERE prodID = ?', [id])
    return data
}

export {getProductsDB, getProductDB, insertProductDB, updateProductDB, deleteProductDB}