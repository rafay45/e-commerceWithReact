import React from 'react'

function Container({children}) {
// const [theme, setTheme] = useState("")
  return (
    <div
    className='bg-gray-100'
    >{children}</div>
  )
}

export default Container