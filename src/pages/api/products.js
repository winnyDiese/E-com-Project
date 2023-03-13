
import { initMongoose } from "../lib/mongoose";
import Product from "../models/product";

// export async function findAllProducts(){
//     const products = Product.find()
//     return products
// }

export default async function handle(req, res){
    await initMongoose()
    const products = await Product.find()
    return res.json({products})

    // return res.json(await Product.find().exec())
}
