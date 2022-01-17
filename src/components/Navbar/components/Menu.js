import { HiOutlineExternalLink } from 'react-icons/hi';
import { Sidebar, toggleSidebar } from '../..';
import Styled from '../styles';

const Menu = ({ links }) => {
  return (
    <Sidebar title={`menu`} id={`menuSidebar`}>
      {links.navigation.map((link, index) => (
        <Styled.NavLink
          key={index}
          href={link.url}
          className={`nav-link ${index === 0 && `active`}`}
          onClick={() => toggleSidebar('menuSidebar')}
        >
          {link.text}
        </Styled.NavLink>
      ))}
      {links.socials.map((link, index) => (
        <Styled.NavLink
          key={index}
          href={link.url}
          title={link.text}
          target={`_blank`}
          rel={`noopener noreferrer`}
        >
          {link.text} <HiOutlineExternalLink />
        </Styled.NavLink>
      ))}
    </Sidebar>
  );
};

export default Menu;
