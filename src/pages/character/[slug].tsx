import { SectionHeroCharacter } from "@/components/CharacterInfo";
import { SectionCharactersList } from "@/components/CharactersList";
import { Header } from "@/components/Header";
import { useRouter } from "next/router";

export default function CharacterPage() {
  const router = useRouter();
  return (
    <>
      <Header />
      <SectionHeroCharacter />
      <SectionCharactersList />
    </>
  )
}