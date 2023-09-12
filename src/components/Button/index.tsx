import { Button } from "@chakra-ui/react";
import NextLink from 'next/link'

interface ButtonIndexProps{
    textButton:string
    href:string
}

export function ButtonIndex({textButton,href}:ButtonIndexProps){
    return(
        <Button
        as={NextLink}
        href={href}
        bg={"orange"}
        color={"000"}
        fontSize={"20px"}
        fontFamily={"Montserrat"}
        w={"20%"}
        zIndex={1}
        _hover={{bg:"#d6b223" , zIndex:"{-2}"}}
        >
            {textButton}
        </Button>
    )
}

interface ButtonLoginProps{
    textButton:string 
    href:string
}

export function ButtonLogin({textButton,href}:ButtonLoginProps){
    return(

        <Button
        as={NextLink}
        href={href}
        bg={"orange"}
        color={"000"}
        fontSize={"24px"}
        fontWeight={"bold"}
        // fontFamily="Montserrat"
        w={"30%"}
        py={6}
        zIndex={1}
        _hover={{bg:"#d6b223" , zIndex:"{-2}"}}
        >
        {textButton}
    </Button>
        )
}