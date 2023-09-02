import { StyledFooter } from "./styles"
import { Container } from "@/styles/global"
import Image from "next/image"

import LogoCodeboost from "@/assets/logo-codeboost.svg"

export function Footer() {
  return (
    <StyledFooter>
      <Container>
        <div>
          <strong>2022 Codeboost</strong>
          <p>
            O curso Codeboost foi desenvolvido por William Moreira. As vagas
            são distribuídas por turmas de forma sazonal. Caso perca alguma oportunidade
            é só aguardar a próxima turma que normalmente acontece dentro do período de 3 a 4 meses.
          </p>
        </div>
        <Image src={LogoCodeboost} alt='Logo Codeboost' />
      </Container>
    </StyledFooter>
  )
}