import { styled } from "@/styles";
import { Container } from "@/styles/global";

export const StyledFooter = styled('footer', {
  borderTop: '1px solid rgba(255, 255, 255 ,0.2)',
  padding: '4rem 0',
  [`${Container}`]: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    '& > div': {
      display: 'flex',
      alignItems: 'center',
      strong: {
        fontWeight: 700,
        fontSize: '1.4rem',
        lineHeight: '2.1rem',
        color: '$white',
      },
      p: {
        flex: 1,
        maxWidth: 593,
        fontWeight: 400,
        fontSize: '1.4rem',
        lineHeight: '2.1rem',
        color: '$gray500',
        marginLeft: '18.6rem',
      }
    }
  }
})