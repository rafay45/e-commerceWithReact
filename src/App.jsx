import { useState, useEffect } from 'react'
import { switcherProvider } from './components/switcher/switcher'
import './App.css'
import { Container, Navbar, Footer } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [theme, setTheme] = useState("light")
  
  const darktheme = () => {
    setTheme("dark")
  }
  const lightTheme = () => {
    setTheme("light")
  }

  useEffect(() => {
   document.querySelector('html').classList.remove('light', 'dark');
   document.querySelector('html').classList.add(theme)
  }, [theme])
  
  return (
   <div>
    <switcherProvider value={{theme, darktheme, lightTheme}}>
    <Container>
    <Navbar />
    <Outlet />
    <Footer />
    </Container>
    </switcherProvider>
   </div>
  )
}


export default App
