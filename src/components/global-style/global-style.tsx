import React from 'react'
import "./global-style.css"

type Props = {
    children: React.ReactNode;
}

export default function GlobalStyle(props: Props) {
  return (
    <>{props.children}</>
  )
}
