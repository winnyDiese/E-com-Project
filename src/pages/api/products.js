
import { initMongoose } from "../lib/mongoose";
import Product from "../models/product";

// export async function findAllProducts(){
//     // const products = await Product.find()
//     return Product.find().exec()
// }

// export default async function handle(req, res){
//     await initMongoose()
//     res.json(await findAllProducts)

//     // return res.json(await Product.find().exec())
// }


export default async function handle(req, res){
    await initMongoose()
    const products = await Product.find()

    res.json({products})

    // return res.json(await Product.find().exec())
}

