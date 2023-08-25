import Image from "next/image";
import { StyledPopupVideo } from "./styles";

import IconPlay from '@/assets/play.svg';

export function PopupVideo() {
  return (
    <StyledPopupVideo>
      <span>ASSISTA AO TRAILER</span>
      <button>
        <div>
          <Image src={IconPlay} alt="Icon play" />
        </div>
      </button>
    </StyledPopupVideo>
  )
}