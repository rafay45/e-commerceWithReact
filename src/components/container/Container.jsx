import React from 'react'

function Container({children}) {
  return (
    <div className='dark:bg-gray-900'>{children}</div>
  )
}

export default Container