import React, { useContext } from 'react';
import * as Hi from 'react-icons/hi';
import { FaLinkedinIn } from 'react-icons/fa';
import { ThemeContext, toggleSidebar } from '..';
import { FiGithub } from 'react-icons/fi';
import Styled from './styles';
import Menu from './components/Menu';
import Socials from './components/Socials';
import ScrollButton from './components/ScrollButton';
import { utils } from './utils';

const Navbar = () => {
  const { state: globalState } = useContext(ThemeContext);

  window.onscroll = () => {
    utils.fixNavbar();
    utils.changeLinkState();
    utils.toggleScrollBtn();
  };

  return (
    <>
      <Styled.Nav id="navbar">
        <Styled.Wrapper>
          <Styled.Brand href="#" variant={globalState.colorPrimary}>
            <Hi.HiChevronLeft />
            <Styled.Span>
              {window.innerWidth > 768 ? `felipescharf` : `fs`}
            </Styled.Span>
            <Hi.HiChevronRight />
          </Styled.Brand>
          <Styled.Column>
            {window.innerWidth > 1024 ? (
              links.navigation.map((link, index) => (
                <Styled.NavLink
                  key={index}
                  href={link.url}
                  className={`nav-link ${index === 0 && `active`}`}
                >
                  {link.text}
                </Styled.NavLink>
              ))
            ) : (
              <Styled.NavLink
                className={`active`}
                onClick={() => toggleSidebar('menuSidebar')}
              >
                <Hi.HiOutlineMenuAlt4 size={28} />
              </Styled.NavLink>
            )}
            <Styled.NavLink
              className={`highlight`}
              variant={globalState.colorPrimary}
              onClick={() => toggleSidebar('colorSidebar')}
            >
              <Hi.HiOutlineCog size={24} />
            </Styled.NavLink>
          </Styled.Column>
        </Styled.Wrapper>
      </Styled.Nav>
      <Menu links={links} />
      <Socials links={links} variant={globalState.colorPrimary} />
      <ScrollButton variant={globalState.colorPrimary} />
    </>
  );
};

export const links = {
  navigation: [
    { url: '#', text: 'home' },
    { url: '#skills', text: 'skills' },
    { url: '#projects', text: 'portfolio' },
  ],
  socials: [
    {
      url: 'https://linkedin.com/in/felipe-scharf',
      text: 'linkedin',
      icon: <FaLinkedinIn size={28} />,
    },
    {
      url: 'https://github.com/fscharf',
      text: 'github',
      icon: <FiGithub size={28} />,
    },
  ],
};

export default Navbar;
