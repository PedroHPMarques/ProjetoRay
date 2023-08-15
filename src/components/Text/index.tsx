import { Text } from "@chakra-ui/react"

interface TextIndexProps{
    text:string 
    color:string 
    size:string 
    textAlign?: any
}

export function TextIndex({text,color,size,textAlign}:TextIndexProps){
    return (
        <Text
        as="p"
        color={color}
        fontSize={size}
        fontWeight="bold"
        >
            {text}
        </Text>
    )
}