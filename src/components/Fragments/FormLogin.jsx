import Button from '../Elements/Button'
import InputForm from '../Elements/Input'

export default function FormLogin() {
  function handleLogin(e) {
    e.preventDefault()
    localStorage.setItem('email', e.target.email.value)
    localStorage.setItem('password', e.target.password.value)
    window.location.href = '/product'
  }
  return (
    <form onSubmit={handleLogin}>
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
      <Button text="Login" type="submit" />
    </form>
  )
}
