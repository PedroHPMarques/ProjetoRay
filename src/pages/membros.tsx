import { TableIndex } from "@/components/Table";
import { TitleIndex } from "@/components/Title";
import { Stack } from "@chakra-ui/react";



export default function Membros(){
    return(
        <Stack
        align="center"
        >
            <Stack>
                <TitleIndex text={"Membros"} color={"black"} size={"64px"}/>
            </Stack>
            <Stack
            py={10}
            spacing={10}
            >
           <TableIndex nome={"Pedro"} email={"@gmail"} niver={"28/09/2000"} cargo={"Asessor"}/>
            <TableIndex nome={"Pedro"} email={"@gmail"} niver={"28/09/2000"} cargo={"Asessor"}/>
            </Stack>
        </Stack>
    )
}