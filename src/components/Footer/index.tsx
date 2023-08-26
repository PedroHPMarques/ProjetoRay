import { HStack, Stack } from "@chakra-ui/react";
import { Image } from "../Image";
import { TextIndex } from "../Text";


export function Footer(){
    return(
        <HStack
        bg={"orange"}
        px={20}
        py={10}
        align={"flex-end"}
        spacing={20}
        >

            {/* primeira metade */}
            <Stack
            w={"50%"}
            spacing={20}
            >
            <Stack>
                <Image src={"/logo.png"} alt={"Logo Ray"} width={75} height={75}/>
            </Stack>
            <Stack>
                <TextIndex text={"RaY Store ©Copyright 2023. Todos os direitos reservados."} color={"#000"} size={"20"}/>
            </Stack>
            </Stack>
            
            {/* segunda metada */}
            <Stack
            w={"50%"}
            spacing={10}
            >
                <Stack>
                    <Image src={"/redes.png"} alt={"Redes Sociais"} width={272} height={60}/>
                </Stack>
                <Stack>
                    <TextIndex text={"Telefone:(123) 456-7890"} color={"#000"} size={"20"}/>
                </Stack>
                <Stack>
                <TextIndex text={"Endereço:1234 Rua dos Jogos, Bairro GamerCity Cidade dos Jogos,Estado GCC"} color={"#000"} size={"20"}/>
                <TextIndex text={" CEP: 12345-678"} color={"#000"} size={"20"}/>
                </Stack>
            </Stack>
        </HStack>
    )
}