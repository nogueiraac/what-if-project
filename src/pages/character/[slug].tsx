import { SectionHeroCharacter } from "@/components/CharacterInfo";
import { SectionCharactersList } from "@/components/CharactersList";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { useRouter } from "next/router";

export default function CharacterPage() {
  return (
    <>
      <PageTitle 
          title="What if - Codeboost | Detalhes do personagem" 
          description="Um projeto desenvolvido no curso Codeboost"
        />
      <Header />
      <SectionHeroCharacter />
      <SectionCharactersList />
    </>
  )
}