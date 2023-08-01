import { Flex, Stack, Text } from 'components/core'
import { IconType } from 'react-icons'
import {
  SiCss3,
  SiCypress,
  SiFlutter,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiKotlin,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSass,
  SiTypescript,
  SiVtex
} from 'react-icons/si'
import { useTheme } from 'styled-components'

type LogoEntry = {
  icon: IconType
  color: string
}

const iconsMap: Map<string, LogoEntry> = new Map([
  ['React', { icon: SiReact, color: '#61DBFB' }],
  ['TypeScript', { icon: SiTypescript, color: '#007ACC' }],
  ['Next.js', { icon: SiNextdotjs, color: '#ebebeb' }],
  ['Node.js', { icon: SiNodedotjs, color: '#339933' }],
  ['HTML', { icon: SiHtml5, color: '#E34F26' }],
  ['CSS', { icon: SiCss3, color: '#1572B6' }],
  ['Sass', { icon: SiSass, color: '#CC6699' }],
  ['Git', { icon: SiGit, color: '#F05032' }],
  ['JavaScript', { icon: SiJavascript, color: '#F7DF1E' }],
  ['Flutter', { icon: SiFlutter, color: '#02569B' }],
  ['Kotlin', { icon: SiKotlin, color: '#7F52FF' }],
  ['Jest', { icon: SiJest, color: '#C21325' }],
  ['Cypress', { icon: SiCypress, color: '#ebebeb' }],
  ['VTEX', { icon: SiVtex, color: '#F71963' }]
])

const About = () => {
  const theme = useTheme()

  return (
    <Flex
      as="section"
      id="about"
      css={{
        flexDirection: 'column',
        alignItems: 'center',
        gap: theme.sizes.lg,
        padding: `${theme.sizes.xxl} 0`
      }}
    >
      <Stack
        css={{
          maxWidth: '1024px'
        }}
      >
        <Text
          as="h2"
          css={{
            fontSize: theme.sizes.lg,
            fontWeight: 700
          }}
        >
          About me
        </Text>
        <Flex
          css={{
            backdropFilter: 'blur(10px)',
            padding: theme.sizes.lg,
            borderRadius: theme.sizes.xs,
            backgroundColor: theme.colors.dark800,
            flexDirection: 'column',
            gap: theme.sizes.md
          }}
        >
          <Text
            as="h2"
            css={{
              fontSize: theme.sizes.lg,
              color: theme.colors.light600,
              textTransform: 'lowercase'
            }}
          >
            Technologies
          </Text>
          <Flex
            css={{
              flexDirection: 'column',
              gap: theme.sizes.md
            }}
          >
            {Array.from(iconsMap).map(([key, { color, icon: Icon }]) => (
              <Text
                key={key}
                css={{
                  fontSize: theme.sizes.md,
                  display: 'flex',
                  alignItems: 'center',
                  gap: theme.sizes.sm,
                  userSelect: 'none',
                  color: theme.colors.light,
                  svg: {
                    color: theme.colors.light600,
                    transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)'
                  },
                  ':hover svg': {
                    color
                  }
                }}
              >
                <Icon size={32} /> {key}
              </Text>
            ))}
          </Flex>
        </Flex>
      </Stack>
    </Flex>
  )
}

export default About
