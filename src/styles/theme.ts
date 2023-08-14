import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors:{
        orange: "#FFA500",
        gray: "B4B3B3"
    },
    
    styles:{
        global:{
            body:{
                bg: "#B4B3B3"
            }
        }
    },
    
    breakpoints:{
    "2xl": "2560px",
    "xl": "1440px",
    "lg": "1024px",
    "md": "768px",
    "sm": "425px",
    "xs": "375px",
    "xxs": "328px",
    "xxxs": "200px"
}
})