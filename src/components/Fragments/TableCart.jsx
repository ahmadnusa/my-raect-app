import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useTotalPrice, useTotalPriceDispatch } from '../../context/TotalPrice'

export default function TableCart(props) {
  const { products } = props
  const cart = useSelector((state) => state.cart.data)
  const [isCartVisible, setIsCartVisible] = useState(true)
  const dispatch = useTotalPriceDispatch()
  const { total: totalPrice } = useTotalPrice()

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const price = cart.reduce((total, item) => {
        const product = products.find((product) => product.id === item.id)
        return total + product.price * item.qty
      }, 0)
      dispatch({
        type: 'ADD',
        payload: {
          total: price
        }
      })
      localStorage.setItem('cart', JSON.stringify(cart))
    }
    setIsCartVisible(cart.length > 0)
  }, [cart, dispatch, products])

  return (
    <div name="cart" style={{ display: isCartVisible ? 'block' : 'none' }}>
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
              const product = products.find((product) => product.id === item.id)
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
                {totalPrice.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD'
                })}
              </b>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

TableCart.propTypes = {
  products: PropTypes.array
}
