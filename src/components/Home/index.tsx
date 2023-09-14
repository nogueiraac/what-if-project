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

export function SectionHero({ data }: any) {
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
            <h3>{data.subtitle_hero}</h3>
            <h1>{data.title_hero}</h1>
            <p>
              {data.description_hero[0].text}
            </p>
            <Link href={data.url_button.url} target="_blank">
              {data.label_button}
            </Link>
          </div>
          <PopupVideo label={data.label_trailer} thumb={data.thumbnail_trailer.url} />
        </ContentText>
      </Container>
    </SectionHeroStyled>
  )
}