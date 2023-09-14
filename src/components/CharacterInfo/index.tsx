import { Container } from "@/styles/global";
import { StyledSectionCharacter } from "./styles";

import ImageCharacter from '@/assets/character.jpg';
import Image from "next/image";

export function SectionHeroCharacter({character}: any) {
  return (
    <StyledSectionCharacter>
      <Container>
        <div className="image">
          <Image 
            src={character.image_character.url}
            width={character.image_character.dimensions.width}
            height={character.image_character.dimensions.height}
            alt='Character Image' />
        </div>
        <div className="info">
          <span>A História</span>
          <div>
            <h1>{character.name_character}</h1>
            <p>
              {character.description_character[0].text}
            </p>
          </div>
        </div>  
      </Container>
    </StyledSectionCharacter>
  )
}