import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import { theme } from '@/styles/theme'
import { Navbar } from '@/components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
