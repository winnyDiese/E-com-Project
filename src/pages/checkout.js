
import { useContext, useEffect, useState } from "react";
import Layout from "./components/Layout";
import { ProductsContext } from "./components/ProductContext";

export default function CheckoutPage(){

    const {selectedProducts, setSelectedProducts} = useContext(ProductsContext)
    const [productsInfo, setProductsInfo] = useState({})
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    useEffect(()=>{
        const uniqIds = [...new Set(selectedProducts)]

        fetch('/api/products?ids='+uniqIds.join(','))
        .then(response => response.json())
        .then(json => setProductsInfo(json))

    // }, [])
    }, [selectedProducts])

    function moreOfThisProduct(id){
        setSelectedProducts(prev => [...prev, id])
    }

    function lessOfThisProduct(id){
        const pos = selectedProducts.indexOf(id)
        if(pos !== -1){
            setSelectedProducts(prev => {
                return prev.filter((value, index)=>index !== pos)
            })
        }
    }

    console.log('The products are '+ {productsInfo})
    // console.log('Hello ')

    // {productsInfo.map(product => {
    //     console.log(product)
    // })}


    const deliveryPrice = 5
    let subtotal = 0

    if(selectedProducts?.length){
        for(let id of selectedProducts){
            console.log('--> '+typeof productsInfo)
            // console.log("Product here is : "+{productsInfo})
            // console.log("Product object here is : "+Object.values(productsInfo))
            // console.log('id is :'+id)

            // const price = productsInfo.find(p => p._id === id).price
            // const price = productsInfo.find(p => p._id === id)

            const price = Array.isArray(productsInfo) ? productsInfo?.find(p => p._id === id)?.price : 0 
            // const price = productsInfo.find(p => p._id === id)?.price || 0

            // const price = Array.isArray(productsInfo) ? productsInfo.find(p => p._id === id) : 0
            // const price = Array.isArray(productsInfo) ? productsInfo.find(p => p._id === id) : {productsInfo}
            // console.log('the price is '+price)

            // total = total + price
            subtotal += price  

            if(productsInfo != [Object]) console.log('Cool, price is ready') 
            else console.log("The price in't ready")
        }
    }else console.log('They are nothing here')

    const total = subtotal + deliveryPrice
    
    return (
        <Layout>
            {!productsInfo?.length  && (
                <div>No product in your shopping cart</div>
            )}

            {productsInfo?.length && productsInfo?.map(productInfo => {
                const amount = selectedProducts.filter(id => id === productInfo._id).length

            return (
                <div className="flex mb-5" key={productInfo._id}>
                    <div>
                        <div className="bg-gray-100 p-3 rounded-xl shrink-0">
                            <img className="w-24" src={productInfo.picture} />
                        </div>
                        <div className="pl-4">
                            <h3 className="font-bold text-lg">{productInfo.name}</h3>
                            <p className="text-sm leading-4 text-gray-500">{productInfo.description}</p>
                            <div className="flex">
                                <div className="grow">${productInfo.price}</div>
                                <div>
                                    <button onClick={()=>lessOfThisProduct(productInfo._id)} className="border border-emerald-300 px-2 rounded-lg text-emerald">-</button>
                                    <span className="px-2">
                                        {selectedProducts.filter(id => id === productInfo._id).length}
                                    </span>
                                    <button onClick={()=>moreOfThisProduct(productInfo._id)} className="bg-emerald-500 px-2 rounded-lg text-white">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )})}


            <form action="/api/checkout" method="POST">
                <div className="mt-4">
                    <input name="address" value={address} onChange={e=>setAddress(e.target.value)} className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2 " type="text" placeholder="Street adress, number" />
                    <input name="city" value={city} onChange={e=>setCity(e.target.value)} className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2 " type="text" placeholder="City and postal code" />
                    <input name="name" value={name} onChange={e=>setName(e.target.value)} className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2 " type="text" placeholder="Yoour name" />
                    <input name="email"  value={email} onChange={e=>setEmail(e.target.value)}className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2 " type="email" placeholder="Email address" />
                </div>
                <div className="mt-4">
                    <div className="flex my-3 ">
                        <h3 className="grow font-bold text-gray-400">Subtotal:</h3>
                        <h3 className="font-bold">${subtotal}</h3>
                    </div>
                    <div className="flex my-3 ">
                        <h3 className="grow font-bold text-gray-400">Delivery:</h3>
                        <h3 className="font-bold">${deliveryPrice}</h3>
                    </div>
                    <div className="flex my-3 border-t pt-3  border-dashed border-emerald-500">
                        <h3 className="grow font-bold text-gray-400">Total:</h3>
                        <h3 className="font-bold">${total}</h3>
                    </div>
                </div>
                <input type="hidden" name="products" value={selectedProducts.join(',')} />
                <button className="bg-emerald-500 px-5 py-2 rounded-xl font-bold text-white w-full my-4 shadow-emerald-300 shadow-lg">Pay ${total}</button>
            </form>
        </Layout>
    )
}



// export async function getServerSideProps(){

//     const {selectedProducts, setSelectedProducts} = useContext(ProductsContext)
//     const uniqIds = [...new Set(selectedProducts)]
  
//     const response = await fetch('http://localhost:3000/api/products?ids='+uniqIds.join(','))
//     const productsInfo = await response.json()
  
//     return {
//       props : {
//         productsInfo,
//         // products: JSON.parser(JSON.stringify(products))
  
//       }
//     }
  
//   }