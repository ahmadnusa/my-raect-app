import { Fragment, useState } from 'react'
import ProductCard from '../Fragments/ProductCard'
import Button from '../Elements/Button'

const products = [
  {
    id: 1,
    title: 'Sepatu Baru',
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Iusto inventore aut, excepturi voluptates ex impedit a rem accusamus dolorum, 
    nihil harum numquam odit quae sint incidunt quam delectus, aperiam qui!`,
    image: '/images/shoes.jpg',
    price: 1000000
  },
  {
    id: 2,
    title: 'Sepatu Lama',
    description: `Lorem ipsum dolor sit amet, 
    consectetur adipisicing elit. Iusto inventore aut, 
    excepturi voluptates ex impedit a rem accusamus dolorum`,
    image: '/images/shoes.jpg',
    price: 1500000
  },
  {
    id: 3,
    title: 'Sepatu ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: '/images/shoes.jpg',
    price: 1500000
  }
]
const email = localStorage.getItem('email')

export default function ProductPage() {
  function handleLogout() {
    localStorage.clear()
    window.location.href = '/login'
  }
  const [cart, setCart] = useState([])

  function handleAddToCart(id) {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      )
    } else {
      setCart([...cart, { id, qty: 1 }])
    }
  }
  return (
    <Fragment>
      <div className="flex justify-end h-16 bg-blue-600 text-white items-center px-10">
        <p>{email}</p>
        <Button
          text="Logout"
          classname="ml-5 bg-black"
          onClick={handleLogout}
        />
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.map((product) => (
            <ProductCard key={product.id}>
              <ProductCard.Header image={product.image} />
              <ProductCard.Body title={product.title}>
                {product.description}
              </ProductCard.Body>
              <ProductCard.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </ProductCard>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                )
                return (
                  <tr key={item.id}>
                    <td>{product.title}</td>
                    <td>{item.qty}</td>
                    <td>
                      {product.price.toLocaleString('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                      })}
                    </td>
                    <td>
                      {(item.qty * product.price).toLocaleString('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                      })}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  )
}
