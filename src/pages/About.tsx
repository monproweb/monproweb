import { Box, Text, Avatar, Heading } from '@primer/react'
import cat from '../images/cat.webp'
import rsm from '../images/rsm.webp'
import ship from '../images/ship.webp'
import mind from '../images/mind.webp'

const sections = [
    {
        image: cat,
        alt: 'Cat in space',
        text: 'Monproweb is a startup that specialized in building web and mobile applications with a focus on sustainability and the use of Ethereum blockchain technology. Our team of experienced developers utilizes the React library to create intuitive and user-friendly apps that deliver powerful functionality.',
    },
    {
        image: rsm,
        alt: 'Positive change ambassador badge from RSM',
        text: 'As an eco-friendly company, we prioritize the use of clean and renewable technologies in all aspects of our work. This not only benefits the environment, but also allows us to provide our clients with cutting-edge solutions that are built to last.',
    },
    {
        image: ship,
        alt: 'A boat with Ethereum sail',
        text: 'In addition to our focus on sustainability, we also have extensive experience with Ethereum blockchain technology. This allows us to build applications that are secure, transparent, and highly scalable. Whether you need a simple web application or a complex decentralized application, we have the skills and expertise to deliver the solution you need.',
    },
    {
        image: mind,
        alt: 'ChatGPT mind',
        text: 'At Monproweb, we pride ourselves on our ability to deliver high-quality web and mobile solutions that meet the unique needs of each of our clients. Contact us today to discuss your project and learn more about how we can help bring your vision to life.',
    },
]

function AboutSection({ image, alt, text }) {
    return (
        <Box>
            <Box sx={{ textAlign: 'center' }} role="region">
                <Avatar src={image} size={100} alt={alt} />
            </Box>
            <Text>{text}</Text>
        </Box>
    )
}

export default function About() {
    return (
        <>
            <Heading sx={{ fontSize: 42, mb: 2 }}>About Monproweb</Heading>
            <Box
                sx={{
                    '> *': {
                        borderWidth: 1,
                        borderColor: 'border.default',
                        borderStyle: 'solid',
                        borderBottomWidth: 0,
                        padding: 2,
                        ':last-child': {
                            borderBottomWidth: 1,
                        },
                        ':hover': {
                            bg: 'neutral.muted',
                        },
                    },
                }}
            >
                {sections.map((section, index) => (
                    <AboutSection key={index} {...section} />
                ))}
            </Box>
        </>
    )
}
