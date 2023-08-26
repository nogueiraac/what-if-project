import Image from "next/image";
import Link from "next/link";
import { StyledCardCharacter } from "./styles";
import { CardCharacterProps } from "@/types";

export function CardCharacter(props: CardCharacterProps) {
  const { name, image, slug } = props;
  return (
    <StyledCardCharacter>
      <Link href={`/character/${slug}`}>
        <div className="image">
          <Image src={image} width={280} height={372} alt={"Character Image"} />
        </div>
        <div className="info">
          <div>
            <h3>{name}</h3>
            <span>Marvel Studios</span>
          </div>
          <span>What if</span>
        </div>
      </Link>
    </StyledCardCharacter>
  )
}