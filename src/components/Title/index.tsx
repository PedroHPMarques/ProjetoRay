import { Heading } from "@chakra-ui/react";

interface TitleIndexProps{
    text:string
    color:string
}

export function TitleIndex({text,color}:TitleIndexProps){
    return(
       
        <Heading
        as="h1"
        color= {color}
        font-family="Roboto"
        fontSize= {"64px"}
        fontWeight={700}
        
        >
            
                {text}
        </Heading>
        
    )
}