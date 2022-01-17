import Head from 'next/head';  
import NavBar from '../navbar.js'
import NoSsr from '../no-ssr.js';
import { Box, Container } from '@chakra-ui/react'
import BlenderMan from '../blender-man.js';

const Main = ({ children, router}) => {
    return(
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Elbert Ainstein - Homepage</title>
            </Head>

            <NavBar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <NoSsr>
                    <BlenderMan />
                </NoSsr>
                {children}
            </Container>
        </Box>
    )
}

export default Main;