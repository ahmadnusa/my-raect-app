import PropTypes from 'prop-types'
import FormRegister from '../Fragments/FormRegister'
import FormLogin from '../Fragments/FormLogin'

export default function AuthLayout(props) {
  const { title } = props
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-5">
          {title == 'Login'
            ? 'Welcome, please login to your account.'
            : 'Create your account.'}
        </p>
        {title == 'Login' ? <FormLogin /> : <FormRegister />}
      </div>
    </div>
  )
}

AuthLayout.propTypes = {
  title: PropTypes.string
}
