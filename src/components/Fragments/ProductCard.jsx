import PropTypes from 'prop-types'
import Button from '../Elements/Button'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/actions/cartSlice'

export default function ProductCard(props) {
  const { children } = props
  return (
    <div className=" w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow mx-3 my-2 flex flex-col justify-between">
      {children}
    </div>
  )
}
function Header(props) {
  const { image, id } = props
  return (
    <Link to={`/product/${id}`}>
      <img
        src={image}
        alt="product"
        className="p-8 rounded-t-lg h-96 w-full object-cover"
      />
    </Link>
  )
}
function Body(props) {
  const { title, desc, id } = props
  return (
    <div className="px-6 pb-5 h-full">
      <Link to={`/product/${id}`}>
        <h5 className="text-xl font-semibold tracking-tight text-white pb-2">
          {title.substring(0, 23)} . . .
        </h5>
        <p className="text-m text-white">{desc.substring(0, 100)} . . .</p>
      </Link>
    </div>
  )
}
function Footer(props) {
  const { price, id } = props
  const dispatch = useDispatch()
  return (
    <div className="flex items-center justify-between px-5 pb-6">
      <span className="text-xl font-bold text-white ">
        {price.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })}
      </span>
      <Button
        text="Add To Chart"
        onClick={() => dispatch(addToCart({ id, qty: 1 }))}
      />
    </div>
  )
}

ProductCard.Header = Header
ProductCard.Body = Body
ProductCard.Footer = Footer

ProductCard.propTypes = {
  children: PropTypes.array
}
Header.propTypes = {
  image: PropTypes.string,
  id: PropTypes.number
}
Body.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  id: PropTypes.number
}
Footer.propTypes = {
  price: PropTypes.number,
  handleAddToCart: PropTypes.func,
  id: PropTypes.number
}
