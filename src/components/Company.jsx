import React from 'react'

export function Company({ name, email, description }) {
  return (
    <div className="company">
      <header>
        <h3>{name}</h3>
        <a href={email}></a>
      </header>
      <div className="content">
        <p>{description}</p>
      </div>
      <p className="actions">
        <a href="#edit"></a>
      </p>
    </div>
  )
}
