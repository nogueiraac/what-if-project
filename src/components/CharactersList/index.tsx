import { Container } from "@/styles/global";
import { StyledCharactersSection, StyledListCharacters } from "./styles";
import ImageCharacter from '@/assets/character.jpg';
import LogoMarvel from '@/assets/logo.svg';
import { CardCharacter } from "../CardCharacter";
import { CardCharacterProps } from "@/types";
import Image from "next/image";

export function SectionCharactersList({characters}: any) {

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
            characters.map((character: any) => (
              <CardCharacter key={character.data.name_character} name={character.data.name_character} image={character.data.image_character.url} slug={character.data.slug} />
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