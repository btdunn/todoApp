import { Component } from 'react'

export default ({id, title, content, urgent}) => {
  return (
    <li>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>{urgent}</p>
    </li>
  )
}