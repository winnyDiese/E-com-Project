
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
    const {ids} = req.query

    if(ids){

        // console.log('id first --> '+ids)
        // const idsArray = ids.split(',')
        // console.log('id Second --> '+ids)
        // console.log('Array --> '+idsArray.join(','))


        // console.log('Id are '+ids)
        const idsArray = ids.split(',')
        // console.log(idsArray)
        const products = await Product.find({_id:{$in:idsArray}})
        // console.log(products)
        res.json(products)



        // // Test
        // const phrase = "world,pascal,andrea,abondance"
        // const show = phrase.split(',')
        // console.log(phrase)
        // console.log(show)



        // const productId = await Product.find('_id',{$in:ids.join(',')})
        // const productId = await Product.find($in:{_id:ids.join(',')})

        // const idsToFind = ids.join(',')

        // const productId = await Product.find({_id:{$in:idsToFind}})
        // res.json({productId})

        // res.json(await Product.find('_id',{$in:ids.split(',')}))
        return
    }
    else{
        res.json({products})
        console.log("They are'nt the id ")
    }

    // return res.json(await Product.find().exec())
}

