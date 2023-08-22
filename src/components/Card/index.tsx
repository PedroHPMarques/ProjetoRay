import { Stack } from "@chakra-ui/react";
import { Image } from "../Image";
import { TextIndex } from "../Text";

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
                border={"1px solid #000"}
                borderRadius={"16px"}
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