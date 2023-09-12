import { Image } from "@/components/Image";
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
                    >
                        <TextIndex text={"Facebook"} color={"black"} size={"32px"}/>
                        <Image src={"/face.png"} alt={"logo Facebook"} width={60} height={60}/>
                    </HStack>
                    <HStack
                    spacing={8}
                    >
                        <TextIndex text={"Instagram"} color={"black"} size={"32px"}/>
                        <Image src={"/insta.png"} alt={"logo instagram"} width={60} height={60}/>
                    </HStack>
                    <HStack
                    spacing={16}
                    >
                        <TextIndex text={"Youtube"} color={"black"} size={"32px"}/>
                        <Image src={"/youtube.png"} alt={"logo youtube"} width={60} height={60}/>
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