import { styled } from "@/styles";

export const StyledCharactersSection = styled("section", {
  paddintTop: 56,
  paddingBottom: 72,
  '.title': {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 56,
    span: {
      fontWeight: 400,
      fontSize: '1.8rem',
      lineHeight: '2.7rem',
      color: '$white',
      opacity: 0.4,
      marginRight: '11.3rem'
    },
    h2: {
      position: 'relative',
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: '3.5rem',
      color: '$white',
      maxWidth: '21.6rem',
      marginLeft: 16,
      '&:before': {
        content: '',
        position: 'absolute',
        top: 5.5,
        left: 0,
        width: 2,
        height: 59, 
        backgroundColor: '$red800'
      }
    }
  }
})

export const StyledListCharacters = styled("div", {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '4rem 3.3rem',
  '.marvel': {
    width: '28rem',
    height: '36.8rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})