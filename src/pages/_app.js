import '@/styles/globals.css'
import { ProductsContext, ProductsContextProvider } from './components/ProductContext'

export default function App({ Component, pageProps }) {
  return(
    <ProductsContextProvider>
      <Component {...pageProps} />
    </ProductsContextProvider>
  )
}
