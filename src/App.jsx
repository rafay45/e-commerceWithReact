import { useState, useEffect } from 'react'
import { Container, Navbar, Footer } from './components'
import { SwitcherProvider } from "./components/switcher/switcher"
import { Outlet } from 'react-router-dom'
function App() {
  const [theme, setTheme] = useState("light")
  const [rotate, setRotate] = useState(false)

    const darkTheme = () => {
      const getTheme = localStorage.getItem('themeToggle');
      if(getTheme){
        setTheme(getTheme)
        document.querySelector('html').classList.add(getTheme)
      }else{
        document.querySelector('html').classList.add('light')
      }
    }

  const lightTheme = () => {
     setTheme("light")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove(theme === 'light' ? 'dark' : 'light');
    document.querySelector('html').classList.add(theme)
    localStorage.setItem('themeToggle', theme)
  }, [theme])

  return (
    <div>
      <SwitcherProvider value={{ theme, darkTheme, lightTheme }}>
        <Container>
          <Navbar />
          <Outlet />
          <Footer />
        </Container>
      </SwitcherProvider>
    </div>
  )
}


export default App
