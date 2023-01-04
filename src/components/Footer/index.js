import { HiOutlineHeart } from 'react-icons/hi'
import { links } from '..'
import Styled from './styles'

const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.Wrapper style={{ display: 'flex', alignItems: 'center' }}>
        <Styled.Text light>made with</Styled.Text>
        <HiOutlineHeart />
      </Styled.Wrapper>

      <Styled.Socials>
        {links.socials.map((link, index) => (
          <Styled.Link
            key={index}
            href={link.url}
            title={link.text}
            target={`_blank`}
            rel={`noopener noreferrer`}
          >
            {link.icon}
          </Styled.Link>
        ))}
      </Styled.Socials>
    </Styled.Footer>
  )
}

export default Footer
