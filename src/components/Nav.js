import { Header, Avatar } from '@primer/react'
import { Link as RouterLink } from 'react-router-dom'
import logo from '../logo.svg'
import SwitchTheme from './SwitchTheme'

const Nav = () => {
    return (
        <>
            <Header>
                <Header.Item full>
                    <Header.Link as={RouterLink} to="/" fontSize={2}>
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
                    <Header.Link as={RouterLink} to="/about">
                        About
                    </Header.Link>
                </Header.Item>
            </Header>
        </>
    )
}

export default Nav
