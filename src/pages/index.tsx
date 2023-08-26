import { Header } from "@/components/Header";
import { SectionHero } from "@/components/Home";
import { SectionCharactersList } from "@/components/CharactersList";

export default function Page() {
  return(
    <>
      <Header />
      <SectionHero />
      <SectionCharactersList />
    </>
  )   
}