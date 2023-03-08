import { initMongoose } from "../lib/mongoose";
import Product from "../models/product";

export default async function handle(req, res){
    await initMongoose()
    return res.json(await Product.find())
}
