import {
    Avatar,
    CircleOcticon,
    Header,
    StyledOcticon,
    Tooltip,
} from '@primer/react'
import { SearchIcon, SignInIcon } from '@primer/styled-octicons'
import React, { Component } from 'react'

class TouchNavigation extends Component {
    render() {
        return (
            <Header>
                <Header.Item full>
                    <Header.Link href="/">
                        <Avatar
                            src="/logo192.png"
                            size={32}
                            sx={{ mr: 2 }}
                            alt="@monproweb"
                        />
                    </Header.Link>
                    <StyledOcticon icon={SearchIcon} size={24} />
                </Header.Item>
                <Header.Item>
                    <Tooltip aria-label="Se connecter" direction="sw">
                        <StyledOcticon
                            icon={SignInIcon}
                            size={20}
                            sx={{ mr: 2 }}
                        />
                    </Tooltip>
                </Header.Item>
            </Header>
        )
    }
}

export default TouchNavigation
