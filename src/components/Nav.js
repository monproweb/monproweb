import { Header, Avatar } from '@primer/react'
import logo from '../logo.svg'
import SwitchTheme from './SwitchTheme'

const Nav = () => {
    return (
        <>
            <Header>
                <Header.Item full>
                    <Header.Link href="/" fontSize={2}>
                        <Avatar
                            src={logo}
                            size={32}
                            sx={{ mr: 2 }}
                            alt="@monproweb"
                        />
                        <span>MonProWeb</span>
                    </Header.Link>
                </Header.Item>
                <Header.Item mr={0}>
                    <Header.Item>
                        <SwitchTheme />
                    </Header.Item>
                    <Header.Link href="/about">About</Header.Link>
                </Header.Item>
            </Header>
        </>
    )
}

export default Nav
