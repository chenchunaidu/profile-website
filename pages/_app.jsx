import { ChakraProvider } from "@chakra-ui/react"
import { Stack } from "@chakra-ui/layout"
import theme from 'theme'
import './styles.css'
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Stack width="100vw" height="100vh">
        <Component {...pageProps} />
      </Stack>
    </ChakraProvider>
  )
}
export default MyApp