import React from 'react'
import { Icon } from '../Icon'

export function Company({ name, email, description }) {
  return (
    <div className="company">
      <header>
        <h3>{name}</h3>
        <a href={email}>
          <Icon name="link" />
        </a>
      </header>
      <div className="content">
        <p>{description}</p>
      </div>
      <p className="actions">
        <a href="#edit">
          <Icon name="edit" />
        </a>
      </p>
    </div>
  )
}
