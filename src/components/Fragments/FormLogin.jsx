import { useState } from 'react'
import { login } from '../../services/auth.service'
import Button from '../Elements/Button'
import InputForm from '../Elements/Input'

export default function FormLogin() {
  const [loginFailed, setLoginFailed] = useState('')
  function handleLogin(e) {
    const { username, password } = e.target
    e.preventDefault()
    login(username.value, password.value, (status, res) => {
      if (status) {
        localStorage.setItem('token', res)
        window.location.href = '/products'
      } else {
        setLoginFailed(res.response.data)
      }
    })
  }
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        name="username"
        type="text"
        placeholder="Your Username"
      />
      <InputForm
        label="Password"
        name="password"
        type="Password"
        placeholder="Password"
      />
      <Button text="Login" type="submit" />
      {loginFailed && (
        <p className="text-red-500 mt-5 text-center">{loginFailed}</p>
      )}
    </form>
  )
}
