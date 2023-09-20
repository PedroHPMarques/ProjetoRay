"use client"
import { toast } from 'react-toastify';
import { Button, HStack } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import 'react-toastify/dist/ReactToastify.css';
import { TableManager } from "@/components/Table"
import { useEffect, useState } from "react"
import { Stack } from '@chakra-ui/react';
import { MdDelete, MdOutlineEdit, MdRemoveRedEye } from 'react-icons/md';

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

    const handleEdit = async (memberId: number, updatedData: object) => {
        // Envia uma requisição PUT ou PATCH para a API para atualizar o membro.
        const res = await fetch(`${apiUrl}/${memberId}`, {
            method: "PUT", // Ou "PATCH" dependendo da sua API
            headers: {
                "Content-Type": "application/json", // Certifique-se de definir o tipo de conteúdo correto para a sua API
            },
            body: JSON.stringify(updatedData), // Os dados atualizados do membro em formato JSON
        });
    
        // Verifica se a atualização foi bem-sucedida.
        if (res.ok) {
            toast.success('Membro atualizado com sucesso!');
            // Atualiza a lista de membros após editar.
            getMembros();
        } else {
            // Em caso de erro, exibe um aviso de erro usando toast.
            console.error("Erro ao editar membro");
            toast.error('Não foi possível editar o membro');
        }
    };
    


    useEffect(() => {
        getMembros()
        console.log(membros)
    }, [])




    return (
        <Stack>
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
                        <TableManager nome={membroTest.name} email={membroTest.email} niver={membroTest.cargo} cargo={membroTest.aniversario} />
                    </Stack>

                    <Stack paddingBottom={10}>
                        <HStack justifyContent={"center"}>
                                    <Button onClick={() => handleDelete(membroTest.id)} leftIcon={<MdDelete />} colorScheme='blackAlpha' variant='solid'
                                    color={"orange"}>
                                    Deletar
                                    </Button>
                                    <Button leftIcon={<MdOutlineEdit />} colorScheme='blackAlpha' variant='solid'
                                    color={"orange"}>
                                    Editar
                                    </Button>
                                    <Button leftIcon={<MdRemoveRedEye />} colorScheme='blackAlpha' variant='solid'
                                     color={"orange"}>
                                    Visualizar
                                    </Button>
                            </HStack>
                    </Stack>

            </Stack>
                </div>
                        
            ))}
        </Stack>



)
}