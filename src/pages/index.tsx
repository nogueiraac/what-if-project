import { SectionHero } from "@/components/Home";
import { SectionCharactersList } from "@/components/CharactersList";
import { PageTitle } from "@/components/PageTitle";
import { getPrismicClinet } from "@/service/prismic";

export default function Page({ data, characters }: any) {
  return(
    <>
      <PageTitle 
        title="What if - Codeboost" 
        description="Um projeto desenvolvido no curso Codeboost"
      />
      <SectionHero data={data} />
      <SectionCharactersList characters={characters} />
    </>
  )   
};

export const getStaticProps = async () => {
  const prismic = getPrismicClinet();

  const contentPages = await prismic.getSingle('home');

  const characters = await prismic.getAllByType('character');

  return {
    props: {
      data: contentPages.data,
      characters,
    },
    revalidate: 60,
  }
}