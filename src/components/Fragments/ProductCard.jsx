import PropTypes from 'prop-types'
import Button from '../Elements/Button'

export default function ProductCard(props) {
  const { children } = props
  return (
    <div className=" flex flex-col justify-between w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2">
      {children}
    </div>
  )
}
function Header(props) {
  const { image } = props
  return (
    <a href="#">
      <img src={image} alt="product" className="p-7 rounded-t-lg" />
    </a>
  )
}
function Body(props) {
  const { title, children } = props
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {title}
        </h5>
        <p className="text-sm text-white">{children}</p>
      </a>
    </div>
  )
}
function Footer(props) {
  const { price } = props
  return (
    <div className="flex items-center justify-between px-5 ">
      <span className="text-xl font-bold text-white pb-6">{price}</span>
      <Button text="Add To Chart" />
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
  image: PropTypes.string
}
Body.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string
}
Footer.propTypes = {
  price: PropTypes.string
}
