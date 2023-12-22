import PropTypes from 'prop-types'
import Input from './Input'
import Label from './Label'

export default function InputForm(props) {
  const { label, type, placeholder, name } = props
  return (
    <div className="mb-6">
      <Label label={label} htmlFor={name} />
      <Input type={type} placeholder={placeholder} name={name} />
    </div>
  )
}

InputForm.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string
}
