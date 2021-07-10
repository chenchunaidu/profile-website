
import {Stack} from "@chakra-ui/react"
export default function Container({children}) {
    return (
        <Stack height="full" width="full">
            {children}
        </Stack>
    )
}
