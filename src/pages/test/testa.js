
import { useEffect, useState } from "react"
import { ProductsContext } from "../components/ProductContext"

const Testa = ()=>{

    const [products, setProduct] = useState([])

    useEffect(()=>{
        // const uniqIds = [...new Set(selectedProducts)]

        
        fetch('/api/products')
        .then(res => res.json())
        .then(json => setProduct(json))
    },[])

    const prodInfo = [...new Set(products.products)]
    console.log(prodInfo)

    return <div>
        <h1>Hello</h1>
        {prodInfo?.map(prod => (
            <h1>{prod.name}</h1>
        ))}
    </div>
}

export default Testa

