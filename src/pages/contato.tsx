import { Image } from "@/components/Image";
import { LinkIndex } from "@/components/Link";
import { TextIndex } from "@/components/Text";
import { TitleIndex } from "@/components/Title";
import { HStack, Stack } from "@chakra-ui/react";

export default function Contato(){
    return(
        <Stack
        bg={"#B4B3B3"}
        py={20}
        spacing={20}
        >
            <Stack align={"center"}>
                <TitleIndex text={"Fale Conosco"} color={"black"} size={"64px"}/>
            </Stack>
            <HStack
            px={20}
            align={"flex-end"}
            >
                <Stack
                spacing={10}
                w={"50%"}
                >
                    <Stack>
                        <TitleIndex text={"Redes Sociais"} color={"black"} size={"48px"}/>
                    </Stack>
                    <HStack
                    spacing={10}
                    >
                        <TextIndex text={"Facebook"} color={"black"} size={"32px"}/>
                        <LinkIndex href={"#"} src={"/face.png"}/>
                    </HStack>
                    <HStack
                    spacing={8}
                    >
                        <TextIndex text={"Instagram"} color={"black"} size={"32px"}/>
                        <LinkIndex href={"#"} src={"/insta.png"}/>
                    </HStack>
                    <HStack
                    spacing={16}
                    >
                        <TextIndex text={"Youtube"} color={"black"} size={"32px"}/>
                        <LinkIndex href={"#"} src={"/youtube.png"}/>
                    </HStack>
                </Stack>

                <Stack
                w={"50%"}
                >
                    <TextIndex text={"Telefone:(123) 456-7890"} color={"black"} size={"32px"}/>
                    <TextIndex text={"Email:raystore@contato.com"} color={"black"} size={"32px"}/>
                </Stack>

                


            </HStack>
            
        </Stack>
    )
}