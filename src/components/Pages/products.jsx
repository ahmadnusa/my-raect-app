import { Fragment, useEffect, useState } from 'react'
import ProductCard from '../Fragments/ProductCard'
import { getProducts } from '../../services/product.service'
import { useLogin } from '../../hooks/useLogin'
import TableCart from '../Fragments/TableCart'
import Navbar from '../Layouts/Navbar'

export default function ProductPage() {
  const [products, setProducts] = useState([])
  useLogin()

  useEffect(() => {
    getProducts((data) => {
      setProducts(data)
    })
  }, [])

  return (
    <Fragment>
      <Navbar />
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <ProductCard key={product.id}>
                <ProductCard.Header image={product.image} id={product.id} />
                <ProductCard.Body
                  title={product.title}
                  desc={product.description}
                  id={product.id}
                />
                <ProductCard.Footer price={product.price} id={product.id} />
              </ProductCard>
            ))}
        </div>
        <TableCart products={products} />
      </div>
    </Fragment>
  )
}
