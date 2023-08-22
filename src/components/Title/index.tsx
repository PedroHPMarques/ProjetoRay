import { Heading } from "@chakra-ui/react";

interface TitleIndexProps{
    text:string
    color:string
    size:string
}

export function TitleIndex({text,color,size}:TitleIndexProps){
    return(
       
        <Heading
        as="h1"
        color= {color}
        font-family="Roboto"
        fontSize= {size}
        fontWeight={700}
        
        >
            
                {text}
        </Heading>
        
    )
}