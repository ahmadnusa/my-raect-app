import { Link } from 'react-router-dom'
import Button from '../Elements/Button'
import InputForm from '../Elements/Input'

export default function FormRegister() {
  return (
    <form action="">
      <InputForm label="Name" name="name" type="text" placeholder="Your Name" />
      <InputForm
        label="Email"
        name="email"
        type="Email"
        placeholder="example@email.com"
      />
      <InputForm
        label="Password"
        name="password"
        type="Password"
        placeholder="Password"
      />
      <InputForm
        label="Confirm Password"
        name="corfirmPassword"
        type="Password"
        placeholder="Confirm Your Password"
      />
      <Button text="Register" />
      <p className="text-sm text-center mt-5">
        Already have an account?{' '}
        <Link to="/login" className="text-blue-600 font-bold">
          Log in
        </Link>
      </p>
    </form>
  )
}
