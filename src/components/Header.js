import { Outlet } from 'react-router-dom';
import { Header, Avatar, ActionMenu, ActionList, Link, Text } from '@primer/react';
import logo from '../logo.svg';
import metamask from '../images/metamask.svg';
import { ThreeBarsIcon, InfoIcon, MailIcon } from '@primer/octicons-react';

const Layout = () => {
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
            <ActionMenu>
              <ActionMenu.Button>
                <ThreeBarsIcon size={16} />
              </ActionMenu.Button>
              <ActionMenu.Overlay>
                <ActionList>
                  <ActionList.Item>
                    <ActionList.LeadingVisual>
                      <InfoIcon />
                    </ActionList.LeadingVisual>
                    <Link href="/about">About</Link>
                  </ActionList.Item>
                  <ActionList.Item>
                    <ActionList.LeadingVisual>
                      <MailIcon />
                    </ActionList.LeadingVisual>
                    <Link href="/contact">Contact</Link>
                  </ActionList.Item>
                  <ActionList.Divider />
                  <ActionList.Item>
                    <ActionList.LeadingVisual>
                      <Avatar src={metamask} square alt="@metamask" />
                    </ActionList.LeadingVisual>
                    <Text> Metamask</Text>
                  </ActionList.Item>
                </ActionList>
              </ActionMenu.Overlay>
            </ActionMenu>
          </Header.Item>
        </Header>
      <Outlet />
    </>
  );
}

export default Layout;
