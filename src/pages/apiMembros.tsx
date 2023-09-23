"use client"
import { toast } from 'react-toastify';
import { Button, HStack } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import 'react-toastify/dist/ReactToastify.css';
import { TableManager } from "@/components/Table"
import { useEffect, useState } from "react"
import { Stack } from '@chakra-ui/react';
import { MdDelete, MdOutlineEdit } from 'react-icons/md';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

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

export default function ApiMembros() {
    const [membros, setMembros] = useState<Membro[]>([])
    const [newMembro, setNewMembro] = useState<Partial<Membro>>({});
    const [editMembroId, setEditMembroId] = useState<number | null>(null);
    // Tipo parcial, pois não temos todos os dados do membro
    const getMembros = async () => {
        const res = await fetch(apiUrl)

        if (!res.ok) {
            console.error("Não acessou")
        }

        const data: Membro[] = await res.json()

        setMembros(data)
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        // Envia uma requisição POST para a API com os detalhes do novo membro.
        const res = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newMembro),
        });

        // Exibe um aviso de sucesso usando toast.
        if (res.ok) {
            toast.success('Membro criado com sucesso!');
            // Limpa o estado do novo membro e atualiza a lista após a criação.
            setNewMembro({});
            getMembros();
        } else {
            // Em caso de erro, exibe um aviso de erro usando toast.
            console.error("Erro ao criar membro");
            toast.error('Não foi possível criar o membro');
        }
    };


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setNewMembro((prevMembro) => ({ ...prevMembro, [name]: value }));
    };



    const handleDelete = async (memberId: number) => {
        const confirmDelete = window.confirm('Tem certeza que deseja excluir o membro?');

        if (confirmDelete) {
            // Envia uma requisição DELETE para a API para excluir o membro.
            const res = await fetch(`${apiUrl}/${memberId}`, {
                method: "DELETE",
            });

            // Exibe um aviso de sucesso usando toast.
            if (res.ok) {
                toast.success('Membro excluído com sucesso!');
                // Atualiza a lista de membros após excluir.
                getMembros();
            } else {
                // Em caso de erro, exibe um aviso de erro usando toast.
                console.error("Erro ao excluir membro");
                toast.error('Não foi possível excluir o membro');
            }
        }
    };

    const handleSaveEdit = async (memberId: number) => {

        const response = await fetch(`${apiUrl}/${memberId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMembro)
        })
        if (response.ok) {
            alert("Membro editado com sucesso")
            setEditMembroId(null)
            setNewMembro({})
            getMembros()
        }
        else {
            alert("Erro ao tentar editar")
        }
    }

    const handleEdit = (memberId: number) => {
        setEditMembroId(memberId)
    }



    useEffect(() => {
        getMembros()
        console.log(membros)
    }, [])




    return (
        <Stack>
            <Navbar/>
            <Stack
                py={10}
            >
                <form onSubmit={handleSubmit}>

                    <Stack spacing={5}>
                        <Stack align={"center"}>
                            <Input size='sm' focusBorderColor='orange' placeholder='Nome' name='name' w={"20%"} bg={"white"} borderRadius={"8px"}
                                value={newMembro.name || ""}
                                // Mostra valores originais do membro, caso não tenha valor, mostra vazio
                                // no caso não terá valor, porque estamos criando um usuário novo
                                onChange={handleInputChange}
                            // Captura as mudanças de valor
                            />
                            <Input size='sm' focusBorderColor='orange' placeholder='Email' name='email' w={"20%"} bg={"white"} borderRadius={"8px"}
                                value={newMembro.email || ""}
                                // Mostra valores originais do membro, caso não tenha valor, mostra vazio
                                // no caso não terá valor, porque estamos criando um usuário novo
                                onChange={handleInputChange}
                            // Captura as mudanças de valor
                            />
                            <Input size='sm' focusBorderColor='orange' placeholder='Aniversario' name='aniversario' w={"20%"} bg={"white"} borderRadius={"8px"}
                                value={newMembro.aniversario || ""}
                                // Mostra valores originais do membro, caso não tenha valor, mostra vazio
                                // no caso não terá valor, porque estamos criando um usuário novo
                                onChange={handleInputChange}
                            // Captura as mudanças de valor
                            />
                            <Input size='sm' focusBorderColor='orange' placeholder='Cargo' name='cargo' w={"20%"} bg={"white"} borderRadius={"8px"}
                                value={newMembro.cargo || ""}
                                // Mostra valores originais do membro, caso não tenha valor, mostra vazio
                                // no caso não terá valor, porque estamos criando um usuário novo
                                onChange={handleInputChange}
                            // Captura as mudanças de valor
                            />
                        </Stack>
                        <Stack
                            align={"center"}
                        >
                            <Button
                                type='submit'
                                colorScheme='blackAlpha'
                                color={"orange"}
                                w={"20%"}
                            >
                                Criar Membro +
                            </Button>
                        </Stack>
                    </Stack>
                </form>
            </Stack>

            {membros.map((membroTest, index) => (

                <div key={index}>
                    <Stack >

                        <Stack py={4}>
                            {editMembroId === membroTest.id ? (
                                <Stack>
                                    <div>
                                        <input
                                            placeholder="nome"
                                            name="name"
                                            type="text"
                                            value={newMembro.name || membroTest.name}
                                        onChange={handleInputChange}
                                    />
                                        <input
                                            placeholder="cargo"
                                            name="cargo"
                                            type="text"
                                            value={newMembro.cargo || membroTest.cargo}
                                        onChange={handleInputChange}
                                    />
                                        <input
                                            placeholder="email"
                                            name="email"
                                            type="email"
                                            value={newMembro.email ||  membroTest.email}
                                        onChange={handleInputChange}
                                    />
                                        <input
                                            placeholder="aniversario"
                                            name="aniversario"
                                            type="text"
                                            value={newMembro.aniversario ||  membroTest.aniversario}
                                        onChange={handleInputChange}
                                    />
                                        <button type="submit" onClick={() => handleSaveEdit(membroTest.id)}>Salvar</button>
                                    </div>
                                </Stack>
                            ) : (
                                <TableManager nome={membroTest.name} email={membroTest.email} niver={membroTest.cargo} cargo={membroTest.aniversario} />
                            )}
                        </Stack>

                        <Stack paddingBottom={10}>
                            <HStack justifyContent={"center"}>
                                <Button onClick={() => handleDelete(membroTest.id)} leftIcon={<MdDelete />} colorScheme='blackAlpha' variant='solid'
                                    color={"orange"}>
                                    Deletar
                                </Button>
                                <Button onClick={() => handleEdit(membroTest.id)} leftIcon={<MdOutlineEdit />} colorScheme='blackAlpha' variant='solid'
                                    color={"orange"}>
                                    Editar
                                </Button>

                            </HStack>
                        </Stack>
                    </Stack>
                </div>

            ))}
            <Footer/>
        </Stack>
    )
}