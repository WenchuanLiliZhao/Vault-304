/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

interface LinkProps {
  to: string;
  children: any;
  className?: string;
  id?: string;
  style?: object;
}

export const NavLinkToTop: React.FC<LinkProps> = ({
  to,
  children,
  className,
  id,
  style,
}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <NavLink to={to} className={className} id={id} style={style}>
      {children}
    </NavLink>
  );
};

export const LinkToTop: React.FC<LinkProps> = ({
  to,
  children,
  className,
  id,
  style,
}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Link to={to} className={className} id={id} style={style}>
      {children}
    </Link>
  );
};