import { CardIndex } from "@/components/Card";
import { SectionIndex } from "@/components/Section";
import { TitleIndex } from "@/components/Title";
import { HStack, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Stack
    as="main"
    spacing={40}
    bg={"#232222"}
    >
      <SectionIndex/>


        <Stack spacing={12}>
          <Stack
          align={"center"}
          
          >
            <TitleIndex text={"Ofertas da Semana"} color={"white"} size={"40px"}/>
          </Stack>
          
          <Stack>
            <HStack
            align={"flex-start"}
            spacing={10}
            px={10}
            justify={"center"}
            w="100%"
            >
              <CardIndex src={"/Farcry.png"} width={370} heigth={459} name={"Farcry New Dawn"} price={"R$ 50,00"} alt={"Farcry"}/>
              <CardIndex src={"/Nfs.png"} width={370} heigth={459} name={"Need For Speed"} price={"R$ 33,00"} alt={"Need For Speed"}/>
              <CardIndex src={"/Fifa.png"} width={370} heigth={459} name={"Fifa 21"} price={"R$ 20,00"} alt={"Fifa"}/>
            </HStack>
          </Stack>
        </Stack>

        <Stack spacing={12}>
          <Stack
          align={"center"}
          >
            <TitleIndex text={"Esportes"} color={"white"} size={"40px"}/>
          </Stack>
          
          <Stack>
            <HStack
            align={"flex-start"}
            spacing={10}
            px={10}
            justify={"center"}
            w="100%"
            >
              <CardIndex src={"/steep.png"} width={370} heigth={459} name={"Steep"} price={"R$ 110,00"} alt={"steep"}/>
              <CardIndex src={"/nba.png"} width={370} heigth={459} name={"Nba2k22"} price={"R$ 50,00"} alt={"nba"}/>
              <CardIndex src={"/Fifa.png"} width={370} heigth={459} name={"Fifa 21"} price={"R$ 20,00"} alt={"Fifa"}/>
            </HStack>
          </Stack>
        </Stack>


        <Stack spacing={12}>
          <Stack
          align={"center"}
          >
            <TitleIndex text={"Corrida"} color={"white"} size={"40px"}/>
          </Stack>
          
          <Stack>
            <HStack
            align={"flex-start"}
            spacing={10}
            px={10}
            justify={"center"}
            w="100%"
            >
              <CardIndex src={"/f1 1.png"} width={370} heigth={459} name={"Fórmula1"} price={"R$ 200,00"} alt={"f1 1"}/>
              <CardIndex src={"/drive 1.png"} width={370} heigth={459} name={"2K Drive"} price={"R$ 90,00"} alt={"drive 1"}/>
              <CardIndex src={"/Nfs.png"} width={370} heigth={459} name={"Need For Speed"} price={"R$ 33,00"} alt={"Need For Speed"}/>
            </HStack>
          </Stack>
        </Stack>


        <Stack spacing={12}>
          <Stack
          align={"center"}
          >
            <TitleIndex text={"Ação/Aventura"} color={"white"} size={"40px"}/>
          </Stack>
          
          <Stack>
            <HStack
            align={"flex-start"}
            spacing={10}
            px={10}
            justify={"center"}
            w="100%"
            >
              <CardIndex src={"/bf4 1.png"} width={370} heigth={459} name={"Battlefield 4"} price={"R$ 56,00"} alt={"bf4 1"}/>
              <CardIndex src={"/Farcry.png"} width={370} heigth={459} name={"Farcry New Dawn"} price={"R$ 50,00"} alt={"Farcry"}/>
              <CardIndex src={"/cod 1.png"} width={370} heigth={459} name={"Call of Duty Infinite Warfare"} price={"R$ 30,00"} alt={"cod 1"}/>
            </HStack>
          </Stack>
        </Stack>


      </Stack>
  )
}
