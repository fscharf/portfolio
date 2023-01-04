import {
  SiCss3,
  SiGit,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTypescript
} from 'react-icons/si'
import { Tooltip } from '../../components'
import { useTheme } from '../../contexts/theme'
import {
  BgBlob,
  Column,
  Flag,
  Icon,
  IconsWrapper,
  Img,
  ImgWrapper,
  Section,
  Subtitle,
  Text,
  Title
} from './styles'

const Home = () => {
  const { primaryColor } = useTheme()

  const tools = [
    { title: 'Typescript', icon: <SiTypescript /> },
    { title: 'React', icon: <SiReact /> },
    { title: 'Next', icon: <SiNextdotjs /> },
    { title: 'CSS3', icon: <SiCss3 /> },
    { title: 'Node', icon: <SiNodedotjs /> },
    { title: 'Git', icon: <SiGit /> }
  ]

  return (
    <Section id="home">
      <Column data-aos={`fade-down`}>
        <ImgWrapper>
          <Img src="/personal.png" alt={`Personal Image`} />
          <BgBlob variant={primaryColor} />
        </ImgWrapper>
      </Column>
      <Column isContent data-aos={`fade-up`}>
        <Title>Hi, I'm Felipe</Title>
        <Subtitle>Frontend Engineer</Subtitle>
        <Text data-aos={`fade-up`}>
          Through constant learning and practice, I'm a tech enthusiast who
          loves coding, gaming and coffee.
        </Text>
        <Flag bgColor={primaryColor}>Updates soon 👀</Flag>
        <IconsWrapper>
          {tools.map((tool, index) => (
            <Tooltip key={index} text={tool.title}>
              <Icon>{tool.icon}</Icon>
            </Tooltip>
          ))}
        </IconsWrapper>
      </Column>
    </Section>
  )
}

export default Home
