"use client"
import { TableManager } from "@/components/Table";
import { TitleIndex } from "@/components/Title";
import { Stack } from "@chakra-ui/react";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react"
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const apiUrl = "http://localhost:3001/membros"

type Membro = {
    userId: number,
    id: number,
    name: string,
    email: string,
    aniversario: string,
    cargo: string,
    completed: boolean,
}

export default function Membros() {

    const [membros, setMembros] = useState<Membro[]>([])
    const [newMembro, setNewMembro] = useState<Partial<Membro>>({});
    // Tipo parcial, pois não temos todos os dados do membro
    const getMembros = async () => {
        const res = await fetch(apiUrl)

        if (!res.ok) {
            console.error("Não acessou")
        }

        const data: Membro[] = await res.json()

        setMembros(data)
    }
    useEffect(() => {
        getMembros()
        console.log(membros)
    }, [])

    return (
        <Stack>
            <Navbar/>
            <Stack
                spacing={20}
            >
                <Stack pt={10} align={"center"}>
                    <TitleIndex text={"Membros"} color={"black"} size={"64px"} />
                </Stack>
            
                    <Stack pb={16}>
                        {membros.map((membroTest, index) => (
                            <div key={index}>
                                <Stack p={6}>
                                    <TableManager nome={membroTest.name} email={membroTest.email} niver={membroTest.cargo} cargo={membroTest.aniversario} />
                                </Stack>
                            </div>
                        ))}
                    </Stack>
            </Stack>
            <Footer/>
        </Stack>
    )
}