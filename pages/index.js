import Head from 'next/head'
import { Stack } from '@chakra-ui/react'
import {IndexAbout,IndexBlog,IndexWork,IndexHome} from 'components/index'
import Layout from "components/layout"

export default function Index() {
  return (
    <Stack>
      <IndexHome/>
      <IndexAbout/>
      <IndexWork/>
      <IndexBlog/>
    </Stack>
  )
}
