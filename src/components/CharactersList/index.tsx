import { Container } from "@/styles/global";
import { StyledCharactersSection, StyledListCharacters } from "./styles";
import ImageCharacter from '@/assets/character.jpg';
import LogoMarvel from '@/assets/logo.svg';
import { CardCharacter } from "../CardCharacter";
import { CardCharacterProps } from "@/types";
import Image from "next/image";

const characters: CardCharacterProps[] = [
  {
    name: 'Killmonger',
    image: ImageCharacter,
    slug: '/killmonger'
  },
  {
    name: 'Killmonger',
    image: ImageCharacter,
    slug: '/killmonger'
  },
  {
    name: 'Killmonger',
    image: ImageCharacter,
    slug: '/killmonger'
  },
  {
    name: 'Killmonger',
    image: ImageCharacter,
    slug: '/killmonger'
  },
  {
    name: 'Killmonger',
    image: ImageCharacter,
    slug: '/killmonger'
  },
  {
    name: 'Killmonger',
    image: ImageCharacter,
    slug: '/killmonger'
  },
  {
    name: 'Killmonger',
    image: ImageCharacter,
    slug: '/killmonger'
  }
];

export function SectionCharactersList() {
  return(
    <StyledCharactersSection>
      <Container>
        <div className="title">
          <span>
            What if
          </span>
          <h2>
            Personagens Marvel
          </h2>
        </div>
        <StyledListCharacters>
          {
            characters.map((character: CardCharacterProps) => (
              <CardCharacter key={character.name} name={character.name} image={character.image} slug={character.slug} />
            ))
          }
          <div className="marvel">
            <Image src={LogoMarvel} alt="Marvel Studios Logo" />
          </div>
        </StyledListCharacters>
      </Container>
    </StyledCharactersSection>
  )
}