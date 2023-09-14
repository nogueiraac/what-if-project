import Image from "next/image";
import { StyledPopupVideo } from "./styles";

import IconPlay from '@/assets/play.svg';

export function PopupVideo({ label, thumb }: any) {
  return (
    <StyledPopupVideo>
      <span>{label}</span>
      <button style={{ background: `url(${thumb}) no-repeat center center`}}>
        <div>
          <Image src={IconPlay} alt="Icon play" />
        </div>
      </button>
    </StyledPopupVideo>
  )
}