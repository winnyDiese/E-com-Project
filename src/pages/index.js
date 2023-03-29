

import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Layout from "./components/Layout"
import Product from "./components/Product"
import { initMongoose } from "./lib/mongoose"


const Home = ({products})=>{

  const [phrase, setPhrase] = useState('')
  
  // Extraction du produit, product is an object => [object][object],
  // Alors on l'extrait
  const showProducts = products.products
  
  const categoriesNames = [...new Set(showProducts.map(p=> p.category))]

  let prod 
  if(phrase){
    prod = showProducts.filter(p => p.name.toLowerCase().includes(phrase))
  }else
    prod = showProducts



  return (
   <div className='p-5'>
    <input value={phrase} onChange={e => setPhrase(e.target.value)} type="text" placeholder="Search for products..." className="bg-gray-100 w-full py-2 px-4 rounded-xl" />
    <div>
      {categoriesNames.map(categoriesName => (
        <div key={categoriesName}>

          {prod.find(p => p.category === categoriesName) && (
            <div>
              <h1 className="text-2xl py-5 uppercase capitalize">{categoriesName}</h1>
              <div className="flex -mx-5 overflow-x-scroll snap-x scrollbar-hide">
                {prod.filter(p => p.category === categoriesName).map(productInfo => (
                  <div key={productInfo._id} className="px-5 snap-start ">
                    <Product {...productInfo} />
                  </div>
                )) }
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
    
    <Layout />
    {/* <Footer /> */}

   </div>
  )
}


export default Home



export async function getServerSideProps(){

  await initMongoose()

  const response = await fetch("http://localhost:3000/api/products")
  const products = await response.json()

  return {
    props : {
      products,
      // products: JSON.parser(JSON.stringify(products))

    }
  }

}