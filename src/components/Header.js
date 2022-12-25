/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Avatar } from '@primer/react';
import logo from '../logo.svg';
import metamask from '../images/metamask.svg';
import { useMemo, useCallback } from 'react';

const MemoizedLayout = React.memo(() => {
  const expensiveCalculation = useMemo(() => {
  }, []);

  const callback = useCallback(() => {
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
          <Avatar
            src={metamask}
            size={20}
            square
            alt="@metamask"
          />
        </Header.Item>
      </Header>
      <Outlet />
    </>
  );
});

export default MemoizedLayout;
