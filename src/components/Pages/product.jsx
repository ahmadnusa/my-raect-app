import { Fragment, useEffect, useState } from 'react'
import ProductCard from '../Fragments/ProductCard'
import Button from '../Elements/Button'
import { getProduct } from '../../services/product.service'
import { useLogin } from '../../hooks/useLogin'

export default function ProductPage() {
  const [cart, setCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [products, setProducts] = useState([])
  const username = useLogin()

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || [])
  }, [])

  useEffect(() => {
    getProduct((data) => {
      setProducts(data)
    })
  }, [])

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const price = cart.reduce((total, item) => {
        const product = products.find((product) => product.id === item.id)
        return total + product.price * item.qty
      }, 0)
      setTotalPrice(price)
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart, products])

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

  function handleLogout() {
    localStorage.removeItem('token')
    window.location.href = '/login'
  }
  return (
    <Fragment>
      <div className="flex justify-end h-16 bg-blue-600 text-white items-center px-10">
        <p>{username}</p>
        <Button
          text="Logout"
          classname="ml-5 bg-black"
          onClick={handleLogout}
        />
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <ProductCard key={product.id}>
                <ProductCard.Header image={product.image} />
                <ProductCard.Body
                  title={product.title}
                  desc={product.description}
                />
                <ProductCard.Footer
                  price={product.price}
                  id={product.id}
                  handleAddToCart={handleAddToCart}
                />
              </ProductCard>
            ))}
        </div>
        {cart.length > 0 && (
          <div>
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
                {products.length > 0 &&
                  cart.map((item) => {
                    const product = products.find(
                      (product) => product.id === item.id
                    )
                    return (
                      <tr key={item.id}>
                        <td>{product.title.substring(0, 20)} ...</td>
                        <td>{item.qty}</td>
                        <td>
                          {product.price.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD'
                          })}
                        </td>
                        <td>
                          {(item.qty * product.price).toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD'
                          })}
                        </td>
                      </tr>
                    )
                  })}
                <tr>
                  <td colSpan={3}>
                    <b>Total price</b>
                  </td>
                  <td>
                    <b>
                      {products.length > 0 &&
                        totalPrice.toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD'
                        })}
                    </b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Fragment>
  )
}
