import { Link } from "@chakra-ui/react";
import NextLink from 'next/link'

interface LinkNavbarProps{
    href:string
    text:string
}

export function LinkNavbar({href,text}:LinkNavbarProps){
    return(
        <Link
            as={NextLink}
            href={href}
            color={"black"}
            fontSize={"20px"}
            fontWeight={"bold"}
            fontFamily={"Roboto"}
        >
        {text}
        </Link>
    )
}