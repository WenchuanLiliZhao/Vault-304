/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Page } from "../../../pages/_types/PageShapes";

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

interface PageLinkProps {
  link: Page;
  children: string | React.ReactNode;
  className?: string;
  id?: string;
  style?: object;
}

export const PageLink: React.FC<PageLinkProps> = ({
  link,
  children,
  className,
  id,
  style,
}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const isExternalLink = link.info.path.startsWith("https");

  const pageLink = isExternalLink ? `${link.info.path}` : `/${link.info.path}`;
  const linkTarget = isExternalLink ? "_blank" : "";

  return (
    <Link
      to={pageLink}
      className={className}
      id={id}
      style={style}
      target={linkTarget}
    >
      {children}
    </Link>
  );
};

export const PageNavLink: React.FC<PageLinkProps> = ({
  link,
  children,
  className,
  id,
  style,
}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const isExternalLink = link.info.path.startsWith("http");

  const pageLink = isExternalLink ? `${link.info.path}` : `/${link.info.path}`;
  const linkTarget = isExternalLink ? "_black" : "";

  return (
    <NavLink
      to={pageLink}
      className={className}
      id={id}
      style={style}
      target={linkTarget}
    >
      {children}
    </NavLink>
  );
};
