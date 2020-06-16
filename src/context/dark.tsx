import React, {createContext, useCallback, useState} from "react"

interface Props {
  dark: Boolean,
  handleChangeTheme(): void
}

export const Context = createContext({} as Props)

const DarkProvider : React.FC = ({children}) => {

  const [dark, setDark] = useState(true)

  const handleChangeTheme = useCallback(() => {
    setDark(prevState => !prevState)
  }, [])

 
  return (
    <Context.Provider value={{dark, handleChangeTheme}}>
      {children} 
    </Context.Provider>
    // {children} -> As páginas é jogada para dentro da variável children
    // sendo assim, todos components que pertencem ao contexto tem acesso
    // as variáveis exportadas | dark e handleChangeTheme
  )
}

export default DarkProvider