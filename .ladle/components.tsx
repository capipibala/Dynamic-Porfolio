import type { GlobalProvider } from '@ladle/react'
import './style.css'
import React from 'react'

export const Provider: GlobalProvider = ({ children, globalState }) => (
  <>
  {children}
  </>
)