import React from 'react'
import Container from './container'
import { Box, Stack, Text } from '@chakra-ui/react'
import Sliders from './sliders'

export default function IndexHome() {
    return (
        <Container>
                <Sliders>
                    Design 
                </Sliders>
                <Sliders>
                    Develop 
                </Sliders>
                <Sliders>
                    Deploy
                </Sliders>
        </Container>
    )
}
