import React from 'react'
import { Text } from '@chakra-ui/react'

export default function GradientText({children,...props}) {
    return (
        <Text 
            bgGradient="linear(to-l, #7928CA,#FF0080)" 
            bgClip="text" 
            {...props}>
            {children}
        </Text>
    )
}
