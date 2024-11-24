/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { NavLink } from "react-router-dom";

interface NavLinkProps {
  to: string
  children: any
  className?: string
  id?: string
  style?: object
}

export const NavLinkToTop: React.FC<NavLinkProps> = ({to, children, className, style}) => {
  return (
    <NavLink to={to} className={className} style={style}>
      {children}
    </NavLink>
  )
}