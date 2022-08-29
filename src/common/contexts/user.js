import React, { useContext, useState, useEffect, createContext } from 'react'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [theme, setTheme] = useState(null)
  const [lang, setLang] = useState('nl')

  return (
    <UserContext.Provider value={{ theme, setTheme, lang, setLang }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
