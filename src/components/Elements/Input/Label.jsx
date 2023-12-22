import PropTypes from 'prop-types'

export default function Label(props) {
  const { label, htmlFor } = props
  return (
    <label htmlFor={htmlFor} className="block text-slate-600 text-sm font-bold mb-2">
      {label}
    </label>
  )
}

Label.propTypes = {
  label: PropTypes.string,
  htmlFor: PropTypes.string
}
