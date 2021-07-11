import { ChakraProvider } from "@chakra-ui/react"
import { Stack } from "@chakra-ui/layout"
import theme from 'theme'
import './styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Stack>
        <Component {...pageProps} />
      </Stack>
    </ChakraProvider>
  )
}
export default MyApp