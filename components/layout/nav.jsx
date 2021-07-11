import React from 'react'
import { Stack } from '@chakra-ui/react'
import GradientText from 'components/text/gradientText'
export default function Nav() {
    return (
        <Stack 
            direction="row" 
            justifyContent="center" 
            fontWeight="semibold" 
            fontSize="lg"
            mt="8"
            > 
            <Stack>

            </Stack>
            <Stack direction="row" spacing={{base:"6",lg:"16"}}>
                <GradientText as="a" href="#home">
                    Home
                </GradientText>
                <GradientText as="a" href="#about">
                    About
                </GradientText>
                <GradientText as="a" href="#work">
                    Work
                </GradientText >
                <GradientText as="a" href="#blog">
                    Blog
                </GradientText >
            </Stack>
        </Stack>
    )
}
