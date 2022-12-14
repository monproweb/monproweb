import * as React from "react";
import { Outlet } from "react-router-dom";
import { Header, Avatar } from '@primer/react'
import logo from '../logo.svg'
import Ethereum from './Ethereum'
import metamask from '../images/metamask.svg'

function Layout() {

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <>
      <Header>
        <Header.Item>
          <Header.Link href="/" fontSize={2}>
            <Avatar src={logo} size={32} sx={{ mr: 2 }} alt="@monproweb" />
          </Header.Link>
        </Header.Item>
        <Header.Item>
          <Header.Link onClick={handleClick("about")}>About</Header.Link>
        </Header.Item>
        <Header.Item full>
          <Header.Link href="/contact">Contact</Header.Link>
        </Header.Item>
        <Header.Item mr={0}>
          <Ethereum />
        </Header.Item>
        <Header.Item mr={0}>
          <Avatar src={metamask} size={20} square alt="@metamask" />
        </Header.Item>
      </Header>
      <Outlet />
    </>
  );
}

export default Layout;