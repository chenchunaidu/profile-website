import React from 'react'
import Container from './container'
import {Stack,Image, Button, SimpleGrid,Box,Text} from "@chakra-ui/react"
import ProfilePic from "public/profile-pic.png"
import Nav from 'components/layout/nav'
import GradientText from 'components/text/gradientText'
import {FaFigma} from "react-icons/fa"
import {AiFillGithub} from "react-icons/ai"
import {FaAws} from "react-icons/fa"
import {SiNetlify} from "react-icons/si"
import {DiReact,DiPython,DiNodejsSmall} from "react-icons/di"
import {IoLogoVercel} from "react-icons/io5"
import IconContainerCircle from './icon-container-circle'
import {ImArrowRight2} from "react-icons/im"

export default function IndexHome() {
    return (
        <Container id="home">
            <Nav/>
           <Stack direction={{base:"column-reverse",lg:"row"}} height="full">
                <Stack  
                    width={{base:"100%",lg:"50%"}}  
                    justifyContent="center" 
                    alignItems="center" 
                    p="4"  
                    margin="auto"
                >
                 <Stack width="auto" maxWidth={{base:"100%", lg:"50%"}}>
                        <GradientText fontWeight="semibold" fontSize="4xl">
                            Chenchunaidu 
                        </GradientText>
                        <GradientText  fontWeight="semibold" fontSize="2xl">
                            Fullstack developer
                        </GradientText>
                        <GradientText  fontSize="lg" opacity="60%">
                            I can help you design,develop and deploy beautiful and responsive web apps Fastly.
                        </GradientText>
                        <Box>
                            <Button
                                _hover={{
                                    bgGradient:"linear(to-l, #7928CA,#FF0080)" ,
                                    color:"white", 
                                    boxShadow:"xl",
                                }} 
                                _active={{
                                    bgGradient:"linear(to-l, #7928CA,#FF0080)" ,
                                    color:"white", 
                                    boxShadow:"xl",
                                }} 
                                bgGradient="linear(to-l, #7928CA,#FF0080)" 
                                color="white" 
                                px="8"
                                
                            > 
                                <Text mr="4">
                                    Check My Work
                                </Text>
                                <ImArrowRight2/>
                            </Button>
                        </Box>
                    </Stack>
                </Stack>
                <Stack width={{base:"100%",lg:"50%"}} alignItems="center" justifyContent="center" margin="auto" p="4">
                    <SimpleGrid maxWidth="lg" columns="3" spacing={{base:"8",lg:"10"}}>
                        <IconContainerCircle>
                            <FaFigma size="70%"/>
                        </IconContainerCircle>
                        <IconContainerCircle>
                            <AiFillGithub size="70%"/>
                        </IconContainerCircle>
                        <IconContainerCircle>
                            <DiReact size="70%"/>
                        </IconContainerCircle>
                        <IconContainerCircle>
                            <DiPython size="70%"/>
                        </IconContainerCircle>
                        <Image
                        padding="2"
                        src={ProfilePic}
                        alt="Chenchunaidu maddineni"
                        borderRadius="full"
                        />
                        <IconContainerCircle>
                            <DiNodejsSmall size="70%"/>
                        </IconContainerCircle>
                        <IconContainerCircle>
                            <SiNetlify size="70%"/>
                        </IconContainerCircle>
                        <IconContainerCircle>
                            <FaAws size="70%"/>
                        </IconContainerCircle>
                        <IconContainerCircle>
                            <IoLogoVercel size="70%"/>
                        </IconContainerCircle>
                        
                                              
                    </SimpleGrid>
                </Stack>
                
           </Stack>
        </Container>
    )
}
