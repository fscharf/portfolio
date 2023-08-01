import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  gap: 32px;

  @media (max-width: 768px) {
    align-items: center;
  }
`

export const Title = styled.h2`
  font-size: 32px;
  color: ${props => props.theme.colors.light};
`
