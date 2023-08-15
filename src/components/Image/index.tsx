import { Stack } from "@chakra-ui/react";
import NextImage from "next/image"

interface ImageProps{
    src:string 
    alt:string 
    width:number 
    height:number 

}

export function Image({src,alt,width,height}:ImageProps){
    return(
        <Stack
        as="picture"
        >
            <NextImage src={src} alt={alt} width={width} height={height}/>
        </Stack>
    )
}