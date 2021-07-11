import React from "react"
import { Stack } from "@chakra-ui/react"
import Nav from "./nav"
import Footer from "./footer"
export default function Layout({children}){

return(
    <Stack>
        <Nav/>
        {children}
        <Footer/>
    </Stack>
)
}