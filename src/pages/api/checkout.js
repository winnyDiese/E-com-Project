import { initMongoose } from "../lib/mongoose";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)


export default async function handler(req,res){
    await initMongoose()

    if(req.method !== 'POST'){
        res.json('Not POST method')
        return
    }

    const productIds = req.body.products.split(',')
    const uniqIds = [...new Set(productIds)]
    const products = await Product.find({_id:{$in:uniqIds}}).exec()
    res.json(products)
    return

    const session = await stripe.checkout.sessions.create({
        line_items:[
            {
                // Provide the exact Price ID (for example )
                price:'{{PRICE_ID}}',
                quantity:1
            },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`
    })
    res.redirect(303, session.url)


    res.json(req.method)
}

