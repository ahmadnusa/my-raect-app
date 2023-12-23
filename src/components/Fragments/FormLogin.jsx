import Button from '../Elements/Button'
import InputForm from '../Elements/Input'

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
    </form>
  )
}
