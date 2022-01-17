import { Container, Box, Heading, SimpleGrid, Dividers } from '@chakra-ui/react';
import Section from '../components/section';
import {WorkGridItem} from '../components/grid-item.js';
import Layout from '../components/layouts/article';

import pointy from '../public/images/pointy.jpg'

const Works = () => {
    return(
        <Layout>
            <Container>
                <Heading as="h3" size="20" mb={4} variant="page-title">
                    Works
                </Heading>

                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="imite" title="Imite" thumbnail={pointy}>
                            A sprite-based, simple and easy trading and selling platform. A project being heavily worked on.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="blender-projects" title="Blender Projects" thumbnail={pointy}>
                            I have made many different blender objects, and I am currently working on a few more.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="aurora" title="Aurora" thumbnail={pointy}>
                            A minecraft client with more than 30 mods, cross-platform and with original module designs. Currently being developed actively.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works;