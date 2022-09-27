import {
  SiCss3,
  SiGit,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from 'react-icons/si';
import Personal from '../../assets/images/personal.png';
import { Tooltip } from '../../components';
import { useTheme } from '../../contexts/theme';
import Styled from './styles';

const Home = () => {
  const { primaryColor } = useTheme();

  const tools = [
    { title: 'Typescript', icon: <SiTypescript /> },
    { title: 'React', icon: <SiReact /> },
    { title: 'Next', icon: <SiNextdotjs /> },
    { title: 'CSS3', icon: <SiCss3 /> },
    { title: 'Node', icon: <SiNodedotjs /> },
    { title: 'Git', icon: <SiGit /> },
  ];

  return (
    <Styled.Section id="home">
      <Styled.Column data-aos={`fade-down`}>
        <Styled.ImgWrapper>
          <Styled.Img src={Personal} alt={`Personal Image`} />
          <Styled.BgBlob variant={primaryColor} />
        </Styled.ImgWrapper>
      </Styled.Column>
      <Styled.Column isContent data-aos={`fade-up`}>
        <Styled.Title>hi, i'm felipe</Styled.Title>
        <Styled.Subtitle variant={primaryColor}>
          front-end developer
        </Styled.Subtitle>
        <Styled.Text data-aos={`fade-up`}>
          and a very curious guy.
          <Styled.Text style={{ fontSize: '12px', color: '#aeaeae' }}>
            updates soon 👀
          </Styled.Text>
        </Styled.Text>
        <Styled.IconsWrapper>
          {tools.map((tool, index) => (
            <Tooltip key={index} text={tool.title}>
              <Styled.Icon>{tool.icon}</Styled.Icon>
            </Tooltip>
          ))}
        </Styled.IconsWrapper>
      </Styled.Column>
    </Styled.Section>
  );
};

export default Home;
