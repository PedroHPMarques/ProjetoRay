import { ButtonIndex } from "@/components/Button";
import { TableManager } from "@/components/Table";
import { Stack } from "@chakra-ui/react";


export default function Gerenciamento() {
    return (
        <Stack
            align={"center"}
            py={20}
        >
            <ButtonIndex textButton={"Adicionar Novo Membro +"} href={""}/>
            <Stack
                w={"50%"}
                py={10}
                spacing={10}
            >
                <TableManager nome={"Pedro"} email={"@gamil"} niver={"28/09/2000"} cargo={"Assessor"} />
            </Stack>
        </Stack>
    )
}