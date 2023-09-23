import { FormControl, FormLabel, Input } from "@chakra-ui/react";

interface InputIndexProps{
    label:string 
    type:string
    w:string
    placeholder:string
}

export function InputIndex({label,type,w,placeholder}:InputIndexProps) {
    return (
        <FormControl
        w={w}
        >
            <FormLabel
            fontFamily="montserrat"
            fontWeight={"bold"}
            fontSize={"20px"}
            >{label}</FormLabel>
            <Input focusBorderColor='orange' type={type} placeholder={placeholder}/>
        </FormControl>
    )
}