import { useEffect, useState } from "react"
import { initMongoose } from "../lib/mongoose"


const  Test = async ()=>{
    
    // const [products, setProducts] = useState({})

    // // await initMongoose()
    
    // // Test two UseEffect()
    // useEffect(()=>{
    //     fetch('/api/products')
    //     .then(res => res.json())
    //     .then(json => setProducts(json))
    // },[])

    // const productsInfo = await products.products
    // console.log(productsInfo)

    return <div>
        <h1>Test</h1>
        {/* {productsInfo.map(p => (
            <p>{p.name}</p>
        ))} */}
    </div>
}

export default Test


// export async function getServerSideProps(){
//     await initMongoose()

//     const response = await fetch("http://localhost:3000/api/products")
//     const products = await response.json()

//     return {
//         props : {   
//         products,
//         }
//     }
// }