import Image from "next/image";
import Link from "next/link";

import Logo from '../../assets/logo.svg'
import LogoCodeBoost from '../../assets/logo-codeboost.svg'

import { HeaderStyled } from "./styles";
import { Container } from "@/styles/global";

export function Header() {
  return (
    <HeaderStyled>
       <Container>
        <div className="logo">
          <Link href="/">
            <Image src={Logo} alt='Logo Marvel Studios' />
          </Link>
        </div>
        <div className="code">
          <Image src={LogoCodeBoost} alt="Logo Codeboost" />
        </div>
      </Container>
    </HeaderStyled>
  ) 
}