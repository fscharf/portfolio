import React, { Fragment, useEffect, useState } from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import * as Hi from 'react-icons/hi'
import { toggleSidebar } from '..'
import { useTheme } from '../../contexts/theme'
import { changeLinkState, toggleScrollButton } from '../../utils/navigation'
import Menu from './components/Menu'
import ScrollButton from './components/ScrollButton'
import Socials from './components/Socials'
import Styled from './styles'

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false)
  const { primaryColor } = useTheme()

  const handleScroll = () => {
    if (window.scrollY > 200) return setIsFixed(true)
    setIsFixed(false)
  }

  useEffect(() => {
    window.onscroll = () => {
      changeLinkState()
      toggleScrollButton()
      handleScroll()
    }
  }, [])

  return (
    <Fragment>
      <Styled.Nav id="navbar" fixed={isFixed}>
        <Styled.Wrapper>
          <Styled.Brand href="#" variant={primaryColor}>
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
              variant={primaryColor}
              onClick={() => toggleSidebar('colorSidebar')}
            >
              <Hi.HiOutlineColorSwatch size={24} />
            </Styled.NavLink>
          </Styled.Column>
        </Styled.Wrapper>
      </Styled.Nav>
      <Menu links={links} />
      <Socials links={links} variant={primaryColor} />
      <ScrollButton variant={primaryColor} />
    </Fragment>
  )
}

export const links = {
  navigation: [
    { url: '#', text: 'Home' },
    { url: '#skills', text: 'Skills' },
    { url: '#projects', text: 'Projects' }
  ],
  socials: [
    {
      url: 'https://linkedin.com/in/felipe-scharf',
      text: 'linkedin',
      icon: <FaLinkedinIn size={28} />
    },
    {
      url: 'https://github.com/fscharf',
      text: 'github',
      icon: <FiGithub size={28} />
    }
  ]
}

export default Navbar
