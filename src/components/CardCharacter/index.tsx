import Image from "next/image";
import Link from "next/link";

import ImageCharacter from '@/assets/character.jpg';

import { StyledCardCharacter } from "./styles";

export function CardCharacter () {
  return (
    <StyledCardCharacter>
      <Link href='#'>
        <div className="image">
          <Image src={ImageCharacter} width={280} height={372} alt={"Character Image"} />
        </div>
        <div className="info">
          <div>
            <h3>T'Challa</h3>
            <span>Marvel Studios</span>
          </div>
          <span>What if</span>
        </div>
      </Link>
    </StyledCardCharacter>
  )
}