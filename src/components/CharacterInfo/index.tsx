import { Container } from "@/styles/global";
import { StyledSectionCharacter } from "./styles";

import ImageCharacter from '@/assets/character.jpg';
import Image from "next/image";

export function SectionHeroCharacter() {
  return (
    <StyledSectionCharacter>
      <Container>
        <div className="image">
          <Image src={ImageCharacter} alt='Character Image' />
        </div>
        <div className="info">
          <span>A História</span>
          <div>
            <h1>T’Challa Senhor das Estrelas</h1>
            <p>
              Nulla eu sapien ante. Praesent convallis posuere rhoncus. 
              Aliquam aliquet ut odio ac lobortis. Vestibulum ante ipsum primis 
              in faucibus orci luctus et ultrices posuere cubilia curae; 
              Aliquam erat volutpat. Aenean facilisis diam quis nunc tempus,
              in placerat sem tincidunt. Sed id aliquet neque, quis varius ligula.
            </p>
          </div>
        </div>  
      </Container>
    </StyledSectionCharacter>
  )
}