import { styled } from "@/styles";
import { Container } from "@/styles/global";

export const HeaderStyled = styled("header", {
  position: "absolute",
  top: 0,
  width: "100%",
  height: 96,
  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
  display: 'flex',
  alignItems: 'center',
  zIndex: '2023',
  [`${Container}`]: {
    height: '100%',
    borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
    borderRight: '1px solid rgba(255, 255, 255, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  '.logo': {
    position: 'relative',
    paddingLeft: 23,
    '&:before': {
      content: '',
      backgroundColor: '$red800',
      boxShadow: '0px 2px 4px rgba(255, 4, 13, 0.16)',
      width: 104,
      height: 1,
      position: 'absolute',
      bottom: -28,
      left: 23,
    }
  },
  '.code': {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '0 23px',
    borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
  }
}); 