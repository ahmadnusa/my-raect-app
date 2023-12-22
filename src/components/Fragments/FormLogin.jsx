import Button from '../Elements/Button'
import InputForm from '../Elements/Input'

import { Link } from 'react-router-dom'

export default function FormLogin() {
  return (
    <form action="">
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
      <Button text="Login" />
      <p className="text-sm text-center mt-5">
        Don&apos;t have an account?{' '}
        <Link to="/register" className="text-blue-600 font-bold">
          Sign up
        </Link>
      </p>
    </form>
  )
}
