import PropTypes from 'prop-types'
import FormRegister from '../Fragments/FormRegister'
import FormLogin from '../Fragments/FormLogin'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { DrakModeContext } from '../../context/darkMode'

import { FaSun, FaMoon } from 'react-icons/fa'

export default function AuthLayout(props) {
  const { title } = props
  const { darkMode, setDarkMode } = useContext(DrakModeContext)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div
      className={`flex justify-center min-h-screen items-center  ${
        darkMode ? 'dark:bg-slate-600' : ''
      }`}
    >
      <div className="w-full max-w-xs">
        <div className="flex justify-end mb-2">
          <button
            onClick={toggleDarkMode}
            className="text-gray-500 dark:text-gray-300"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-4">
          {title === 'Login'
            ? 'Welcome, please login to your account.'
            : 'Create your account.'}
        </p>
        {title === 'Login' ? <FormLogin /> : <FormRegister />}
        <p className="text-sm text-center mt-5">
          {title === 'Login'
            ? "Don't have an account? "
            : 'Already have an account? '}
          <Link
            to={title === 'Login' ? '/register' : '/login'}
            className="text-blue-600 font-bold"
          >
            {title === 'Login' ? 'Register' : 'Login'}
          </Link>
        </p>
      </div>
    </div>
  )
}

AuthLayout.propTypes = {
  title: PropTypes.string
}
