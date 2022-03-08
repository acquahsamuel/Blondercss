import React from 'react'
import {
  Nav,
  NavList,
  NavListItem,
  NavLink,
  ColorModeSwitcher,
  Button,
} from 'smooth-doc/components'

export function AppNav() {
  return (
    <Nav>
      <NavList>
        <NavListItem>
          <NavLink to="/docs/">Docs</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink as={ColorModeSwitcher} />
        </NavListItem>
      </NavList>
    </Nav>
  )
}