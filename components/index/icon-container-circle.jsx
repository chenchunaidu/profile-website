import React from 'react'
import { Circle } from '@chakra-ui/react'

export default function IconContainerCircle({children}) {
    return (
        <Circle borderRadius="full" size={{base:"24",lg:"144"}} bgGradient="linear(to-l, #7928CA,#FF0080)" color="white">
            {children}
        </Circle>
    )
}
