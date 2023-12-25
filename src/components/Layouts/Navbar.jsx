import { useEffect, useState } from 'react'
import { useLogin } from '../../hooks/useLogin'
import Button from '../Elements/Button'
import { useSelector } from 'react-redux'
import { FaShoppingCart } from 'react-icons/fa'

export default function Navbar() {
  const username = useLogin()
  const [totalCart, setTotalCart] = useState(0)
  const cart = useSelector((state) => state.cart.data)

  useEffect(() => {
    const sum = cart.reduce((total, item) => {
      return total + item.qty
    }, 0)
    setTotalCart(sum)
  }, [cart])

  function handleLogout() {
    localStorage.removeItem('token')
    window.location.href = '/login'
  }

  return (
    <div className="flex justify-end h-16 bg-blue-600 text-white items-center px-10">
      <p>{username}</p>
      <Button text="Logout" classname="ml-5 bg-black" onClick={handleLogout} />
      <div className="relative">
        <FaShoppingCart size={20} className="ml-2" />
        {totalCart > 0 && (
          <span className="absolute -mt-2 ml-6 text-xs bg-red-500 rounded-full px-1">
            {totalCart}
          </span>
        )}
      </div>
    </div>
  )
}
