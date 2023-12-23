import PropTypes from 'prop-types'

export default function Button(props) {
  const {
    text,
    classname = 'bg-blue-600 w-full',
    onClick = () => {},
    type = 'button'
  } = props
  return (
    <div>
      <button
        type={type}
        className={`h-10 px-6 font-semibold rounded-md ${classname} text-white `}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  classname: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string
}
