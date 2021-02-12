import React from 'react'
import { useHistory } from 'react-router-dom'

const NotFound = () => {
  // console.log(props)
  const history = useHistory()

  setTimeout(() => {
    history.push('/')
  }, 2000)

  return (
    <div className="container content py-4">
      <h1>404 not found</h1>
    </div>
  )
}

export default NotFound