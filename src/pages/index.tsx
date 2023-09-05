import { SectionHero } from "@/components/Home";
import { SectionCharactersList } from "@/components/CharactersList";
import { PageTitle } from "@/components/PageTitle";

export default function Page() {
  return(
    <>
      <PageTitle 
        title="What if - Codeboost" 
        description="Um projeto desenvolvido no curso Codeboost"
      />
      <SectionHero />
      <SectionCharactersList />
    </>
  )   
}