import { HStack } from "@chakra-ui/react";

import { Image } from "../Image";
import { LinkNavbar } from "../Link";

export function Navbar(){
    return(
        <HStack
        bg={"orange"}
        // px={20}
        py={2}
        position={"sticky"}
        zIndex={"1000"}
        top={"0"}
        justify={"space-evenly"}
        >
            <Image src={"/logo.png"} alt={"Logo Ray"} width={75} height={75}/>
            <LinkNavbar href={"#"} text={"Home"}/>
            <LinkNavbar href={"#"} text={"Contato"}/>
            <LinkNavbar href={"#"} text={"Membros"}/>
            <LinkNavbar href={"#"} text={"Gerenciamento"}/>
            <LinkNavbar href={"#"} text={"Login"}/>
        </HStack>
    )
}