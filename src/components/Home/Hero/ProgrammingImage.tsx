import { Box, Avatar } from '@primer/react'
import Programming from '../../../images/programming.svg'

export default function ProgrammingImage() {
    return (
        <Box p={3}>
            <Avatar
                src={Programming}
                alt="programming"
                sx={{
                    width: '300px',
                    height: '300px',
                    display: 'block',
                    transition: 'transform 0.3s',
                    ':hover': {
                        transform: 'scale(1.1)',
                    },
                }}
            />
        </Box>
    )
}
