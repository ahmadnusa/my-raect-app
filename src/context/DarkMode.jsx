import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const DrakModeContext = createContext()

export default function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <DrakModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DrakModeContext.Provider>
  )
}

DarkModeProvider.propTypes = {
  children: PropTypes.node.isRequired
}
