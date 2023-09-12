import { Box, HStack, Stack } from "@chakra-ui/react";
import { Image } from "../Image";
import { TextIndex } from "../Text";
import { InputIndex } from "../Form";
import { ButtonLogin } from "../Button";

interface CardIndexProps{
    src:string 
    width:number 
    heigth:number
    name:string
    price:string 
    alt:string 

}

export function CardIndex({src,width,heigth,alt,name,price}:CardIndexProps){
    return (
        <Stack spacing={9}>
            <Stack
                // border={"1px solid #000"}
                // borderRadius={"16px"}
                align={"center"}

            >
                <Image src={src} alt={alt} width={width} height={heigth}/>
            
            </Stack>
             <Stack>
                 <TextIndex text={name} color={"white"} size={"24px"}/>
                 <TextIndex text={price} color={"orange"} size={"24px"}/>
             </Stack>
        </Stack>
    )
}


export function CardLogin() {
    return (
      <Stack
        borderRadius={"16px"}
        spacing={0}
        bg={"white"}
        w={"60%"}
      >
        <Box
          bg={"orange"}
          width={"100%"}
          height={"80px"}
          borderRadius={"16px 16px 0 0"}
        />
        <TextIndex text={"oi"} color={"black"} size={"24px"}/>
        <Stack
        spacing={16}
        align={"center"}
        px={9}
        py={10}
        >
          <HStack
          w={"100%"}
          justify={"space-between"}
          >
            <InputIndex label={"Email"} type={"email"} w={"30%"} placeholder={"Digite aqui o email"}/>
            <InputIndex label={"Senha"} type={"password"} w={"30%"} placeholder={"Digite aqui a senha"}/>
          </HStack>
        <ButtonLogin textButton={"Entrar"} href={"#"}/>
        </Stack>
      </Stack>
    )
  }