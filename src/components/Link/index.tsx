import { Link } from "@chakra-ui/react";
import NextLink from 'next/link'
import { Image } from "../Image";

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
            fontSize={"16px"}
            fontWeight={"bold"}
            fontFamily="Roboto"
          
        >
           {text}
        </Link>
    )
}


interface LinkIndexProps{
    href:string
    src:string 
}

export function LinkIndex({href,src}:LinkIndexProps){
    return(
        <Link
            as={NextLink}
            href={href}
            color={"black"}
        >
           <Image src={src} alt={"Link Redes Sociais"} width={60} height={60}/>
        </Link>
    )
}