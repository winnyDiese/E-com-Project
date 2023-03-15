import { useContext, useEffect, useState } from "react";
import Layout from "./components/Layout";
import { ProductsContext } from "./components/ProductContext";

export default function CheckoutPage(){

    const {selectedProducts} = useContext(ProductsContext)
    const [productsInfo, setProductsInfo] = useState([])

    useEffect(()=>{

        const uniqIds = [...new Set(selectedProducts)]

        fetch('/api/products?ids='+uniqIds.join(','))
        .then(response => response.json())
        .then(json => setProductsInfo(json))

    }, [selectedProducts])

    console.log('The product : '+productsInfo)

    
    return (
        <Layout>
            {/* {selectedProducts.join(',')} */}
            {!productsInfo.length  && (
                <div>No product in your shopping cart</div>
            )}

            {productsInfo.length && productsInfo.map(productInfo => (
                <div className="flex mb-5">
                    {/* {productInfo.name} */}

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
                                    <button className="border border-emerald-300 px-2 rounded-lg text-emerald">-</button>
                                    <span className="px-2">
                                        {selectedProducts.filter(id => id === productInfo._id).length}
                                    </span>
                                    <button className="bg-emerald-500 px-2 rounded-lg text-white">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Layout>
    )
}
