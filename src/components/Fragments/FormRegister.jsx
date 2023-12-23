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
    </form>
  )
}
