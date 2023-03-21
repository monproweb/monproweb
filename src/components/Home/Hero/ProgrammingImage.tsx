import { Box } from '@primer/react'
import Programming from '../../../images/programming.svg'

export default function ProgrammingImage() {
    return (
        <Box p={3}>
            <img
                className="programming"
                src={Programming}
                alt="programming"
                width="300px"
                height="300px"
            />
        </Box>
    )
}
