import { initMongoose } from "../lib/mongoose";
import Product from "../models/product";

export default async function handle(req, res){
    await initMongoose()
    const products = await Product.find()
    return res.json({products})
}
