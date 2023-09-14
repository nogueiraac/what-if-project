import { SectionHeroCharacter } from "@/components/CharacterInfo";
import { SectionCharactersList } from "@/components/CharactersList";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { getPrismicClinet } from "@/service/prismic";
import { useRouter } from "next/router";

export default function CharacterPage({character, characters}: any) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Carregando...</p>
  }
  return (
    <>
      <PageTitle 
          title="What if - Codeboost | Detalhes do personagem" 
          description="Um projeto desenvolvido no curso Codeboost"
        />
      <Header />
      { character && <SectionHeroCharacter character={character} />}
      { characters && <SectionCharactersList characters={characters} />}
    </>
  )
};


export const getStaticPaths = async () => {
  const prismic = getPrismicClinet();

  const characters = await prismic.getAllByType('character');

  const paths = characters.map(({data}: any) => {
    return {
      params: { slug: data.slug }
    }
  });
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async (context: any) => {
  const prismic = getPrismicClinet();

  const characters = await prismic.getAllByType('character');

  const character = characters.find(({data}) => {
    return data.slug === context.params.slug
  })

  characters.splice(characters.findIndex((element: any) => {
    return element.data.slug === character?.data.slug
  }), 1);

  return {
    props: {
      character: character?.data,
      characters,
    }
  }
}