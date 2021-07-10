import Head from 'next/head'
import { Stack } from '@chakra-ui/react'
import {IndexAbout,IndexBlog,IndexWork,IndexHome} from 'components/index'

export default function Index() {
  return (
    <Stack width="full" height="full">
      <IndexHome/>
      <IndexWork/>
      <IndexBlog/>
      <IndexAbout/>
    </Stack>
  )
}
