import { Container, Box, Heading, Image, Text, Button, useColorModeValue, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import Section from '../components/section.js';
import Paragraph from '../components/paragraph.js';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Layout from '../components/layouts/article.js';
import {BioSection, BioYear} from '../components/bio.js';


const Page = () => {
    return(
        <Layout>
            <Container>
                <Box 
                borderRadius="lg" 
                bg={useColorModeValue('whiteAlpha.500',"whiteAlpha.200")}
                p={3} 
                mb={6} 
                align="center">
                    Hello, I&apos;m a web developer and a blender artist! 
                </Box>
                <Box display={{md: 'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Elbert Ainstein
                        </Heading>
                        <p>
                            Digital Ding Dong Coder ( Artist, Developer, Designer)
                        </p>
                    </Box>
                    <Box 
                    flexShrink={0} 
                    mt={{base: 4, md: 0, }} 
                    ml={{md: 6}} 
                    align="center">
                        <Image 
                        borderColor={useColorModeValue('blackAlpha.500', 'whiteAlpha.700')}
                        borderWidth="2px"
                        borderStyle="solid" 
                        maxWidth="100px" 
                        display="inline-block" 
                        borderRadius="full" 
                        src="/images/pointy.jpg"
                        alt="Profile Image" 
                        />
                        <Text 
                        fontSize='xs'
                        fontWeight="bold"
                        letterSpacing="tighter"
                        lineHeight="1"
                        >
                            dont even try <br></br> getting a pic of me
                        </Text>
                    </Box>
                </Box>
                <Section delay={0.1} >
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>
                        Elbert is this random nerdy programmer who uses react and electron to build different websites and apps. He is also a blender artist who loves to build projects and make cool games with friends. 
                        He also likes to also find solutions to solve frequent problems encountered by many other developers. Currently, he and his friend, Boosted,
                        are working on a product called {' '}
                        <NextLink href="/works/imite"> 
                            <Link>Imite</Link> 
                        </NextLink>
                        .
                    </Paragraph>
                    <Box
                    align="center"
                    my={4}
                    >
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon/>} color={useColorModeValue('2C7A7B','#38B2AC')}>
                                View Works
                            </Button>
                        </NextLink>
                    </Box>  
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2007</BioYear>
                        Born in Sydney, Australia.
                    </BioSection>
                    <BioSection>
                        <BioYear>2009</BioYear>
                        Moved to Guangzhou (广州), China.
                    </BioSection>
                    <BioSection>
                        <BioYear>2013-2019</BioYear>
                        Attending School in Hong Kong (香港), SAR China.
                    </BioSection>
                    <BioSection>
                        <BioYear>2019-2020</BioYear>
                        Attending the Bement School in Deerfield, MA, USA. 
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Starting to Code in Python, later switch to Javascript.
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        Attending School in Guangzhou (广州), China.
                    </BioSection>
                    <BioSection>
                        <BioYear>Currently:</BioYear>
                        Attending 8th grade at HKIS (Hong Kong International School).
                    </BioSection>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page