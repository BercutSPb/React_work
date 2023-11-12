import React, { FC } from "react";

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return <header className="header">{title}</header>;
};
 
export default Header;
