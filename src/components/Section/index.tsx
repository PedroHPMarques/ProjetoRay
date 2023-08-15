import { Stack } from "@chakra-ui/react";
import { TitleIndex } from "../Title";
import { TextIndex } from "../Text";

export function SectionIndex() {
    return (
        <Stack
            bgImage="url('/fundo_home.png')"
            bgRepeat={"no-repeat"}
            bgSize={"100%"}
            px={12}
            py={10}
        >
            <Stack spacing={6} w={"50%"}>
                <TitleIndex text={"Nossa História"} color={"white"} />
                <TextIndex text={"Olá, gamers entusiastas! É com grande entusiasmo que apresentamos a vocês o RaY Store, o destino definitivo para os apaixonados por jogos. No RaY, estamos comprometidos em proporcionar uma experiência de jogo extraordinária, trazendo até você uma variedade incrível de títulos"} color={"white"} size={"20px"}/>
                <TextIndex text={"No RaY, acreditamos que jogar não é apenas sobre vencer, mas também sobre criar memórias duradouras. Oferecemos uma seleção diversificada de jogos que vão desde aventuras épicas até desafios estratégicos, garantindo que você encontre algo que alimente sua paixão por jogos."} color={"white"} size={"20px"}/>
            </Stack>
        </Stack>
    )
}