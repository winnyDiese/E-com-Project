// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Orignal.module.css'

import { useEffect, useState } from "react"

// const inter = Inter({ subsets: ['latin'] })

const Orignal = ()=>{

  // const [productsInfo, setProductsInfo] = useState([])

  // useEffect(()=>{
  //   fetch('/api/products')
  //   .then(res => res.json())
  //   .then(json => setProductsInfo(json))
  // },[])

  // console.log(productsInfo)

  // const categoriesNames = await productsInfo.map(p => p.category)
  // console.log({categoriesNames})

  // const categoriesNames = new Set(productsInfo.map( p => p.category))
  // console.log(categoriesNames)

  return (
   <div className='p-5'>
    <div>

      {products.map(p => (
        <h2 className="text-2xl">{p.category}</h2>
      ))}

      <h2 className="text-2xl">Mobiles</h2> 
      <div className='py-4'>
        <div className='w-64'>
          <div className='bg-blue-100 p-5 rounded-xl'>
            <img src='/products/none.png' alt='' style={{heigth: "40px", width: "200px"}}/>
          </div>
          <div className='mt-2 '>
            <h3 className='font-bold text-lg'>Iphone 14 Pro</h3>
          </div>
          <p className='text-sm mt-1 leading-4'>lorem  noiuoyu bbuy uybuy uyb uybuy uybuyb uybuy buyboyuboyub uybuybuybuyb oyubouyb ouyboyuboyub oyboyuboyub oyubouyb ouyboyub yboy lorem  </p>
          
          <div className='flex mt-1'>
            <div className='text-2xl font-bold grow'>$899</div>
            <button className='bg-emerald-400 text-white py-1 px-3 rounded-xl'>+</button>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

