import { Stack } from "@chakra-ui/react";
import { TitleIndex } from "../Title";

export function SectionIndex() {
    return (
        <Stack
            bgImage="url('/fundo_home.png')"
            bgRepeat={"no-repeat"}
            bgSize={"100%"}
            px={12}
            py={10}
        >
            <Stack>
                <TitleIndex text={"Nossa História"} color={"white"} />
            </Stack>
        </Stack>
    )
}