import React from 'react'
import { Stack } from '@chakra-ui/react'

export default function Container({children,background="white",id}) {

    return (
        <Stack minHeight="100vh" background={background} id={id}>
            {children}
        </Stack>
    )
}
