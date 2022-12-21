import * as React from "react";
import { Outlet } from "react-router-dom";
import { Header, Avatar } from '@primer/react';
import logo from '../logo.svg';
import Ethereum from './Ethereum';
import metamask from '../images/metamask.svg';

function Layout() {
  const [rotation, setRotation] = React.useState(0);

  React.useEffect(() => {
    const handleMouseMove = (event) => {
      const rect = event.target.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const radians = Math.atan2(y, x);
      const degrees = (radians * 180) / Math.PI;
      setRotation(degrees);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <Header>
        <Header.Item full>
          <Header.Link href="/" fontSize={2}>
            <Avatar src={logo} size={32} sx={{ mr: 2 }} alt="@monproweb" />
            <span>Mon Pro Web</span>
          </Header.Link>
        </Header.Item>
        <Header.Item mr={0}>
          <Header.Link href="/about">About</Header.Link>
        </Header.Item>
        <Header.Item mr={0}>
          <Header.Link href="/contact">Contact</Header.Link>
        </Header.Item>
        <Header.Item mr={0}>
          <Ethereum />
        </Header.Item>
        <Header.Item mr={0}>
          <Avatar
            src={metamask}
            size={20}
            square
            alt="@metamask"
            style={{ transform: `rotate(${rotation}deg)` }}
          />
        </Header.Item>
      </Header>
      <Outlet />
    </>
  );
}

export default Layout;
