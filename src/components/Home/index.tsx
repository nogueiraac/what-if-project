import { Container } from "@/styles/global";
import { AreaSocial, ContentText, SectionHeroStyled } from "./styles";

import YoutubeIcon from '@/assets/youtube.svg';
import InstagramIcon from '@/assets/instagram.svg';
import { SocialType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { PopupVideo } from "../PopupVideo";

const socials: SocialType[] = [
  {
    name: 'Youtube',
    url: '#',
    icon: YoutubeIcon
  },
  {
    name: 'Instagram',
    url: '#',
    icon: InstagramIcon
  }
]

export function SectionHero() {
  return (
    <SectionHeroStyled>
      <Container>
        <AreaSocial>
          <ul>
            {
              socials.map((social: SocialType) => (
                <li key={social.name}>
                  <Link href={social.url}>
                    <Image src={social.icon} alt={social.name} />
                  </Link>
                </li>
              ))
            }
          </ul>
        </AreaSocial>
        <ContentText>
          <div className="left">
            <h3>COMING SOON</h3>
            <h1>Marvel WHAT IF</h1>
            <p>
            Disponível no Disney+, What If… ? é uma série de animação que leva o público para um terreno desconhecido ao contar, de forma alternativa, momentos cruciais do Universo Cinematográfico Marvel, imaginando o que teria acontecido aos super-heróis se a história fosse totalmente diferente e se passasse em outra realidade.
            </p>
            <Link href="#" target="_blank">
              Saiba mais
            </Link>
          </div>
          <PopupVideo />
        </ContentText>
      </Container>
    </SectionHeroStyled>
  )
}