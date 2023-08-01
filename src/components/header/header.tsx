import { Flex, Text } from 'components/core'
import React from 'react'
import { useTheme } from 'styled-components'
import { useToggle } from 'usehooks-ts'
import { Navbar, Sidebar, ThemeSwitcher } from '..'

const Header = () => {
  const [isOpen, toggleIsOpen] = useToggle(false)
  const theme = useTheme()

  return (
    <React.Fragment>
      <header>
        <Navbar onClickCallback={toggleIsOpen} />
      </header>
      <Sidebar isOpen={isOpen} onClose={toggleIsOpen}>
        <Flex
          css={{
            flexDirection: 'column',
            gap: theme.sizes.xxs,
            padding: theme.sizes.xl
          }}
        >
          <Text>Choose your theme</Text>
          <ThemeSwitcher />
        </Flex>
      </Sidebar>
    </React.Fragment>
  )
}

export default Header
