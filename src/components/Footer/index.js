import Profile from '../../assets/images/personal-icon.png';
import { links } from '..';
import Styled from './styles';

const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.Wrapper>
        <Styled.Img src={Profile} alt={`Personal Icon`} />{' '}
        <Styled.Text light>made with 🖤 by</Styled.Text>
        <Styled.Text bold>felipescharf</Styled.Text>
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
  );
};

export default Footer;
