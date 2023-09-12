import { CardLogin } from "@/components/Card";
import { Stack } from "@chakra-ui/react";

export default function Login(){
    return(
        <Stack
        as="main"
        p={10}
        align="center"
        >
            <CardLogin/>
        </Stack>
    )
}