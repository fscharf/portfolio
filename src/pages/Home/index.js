import Personal from '../../assets/images/personal.png';
import * as Fa from 'react-icons/fa';
import Styled from './styles';
import { Tooltip, useTheme } from '../../components';

const Home = () => {
  const { state } = useTheme();
  const { colorPrimary } = state;
  const tools = [
    { title: 'JavaScript', icon: <Fa.FaJs /> },
    { title: 'React', icon: <Fa.FaReact /> },
    { title: 'SASS', icon: <Fa.FaSass /> },
    { title: 'Node', icon: <Fa.FaNodeJs /> },
    { title: 'GitHub', icon: <Fa.FaGithub /> },
  ];

  return (
    <Styled.Section id="home">
      <Styled.Column data-aos={`fade-down`}>
        <Styled.ImgWrapper>
          <Styled.Img src={Personal} alt={`Personal Image`} />
          <Styled.BgBlob variant={colorPrimary} />
        </Styled.ImgWrapper>
      </Styled.Column>
      <Styled.Column isContent data-aos={`fade-up`}>
        <Styled.Title>hi, i'm felipe</Styled.Title>
        <Styled.Subtitle variant={colorPrimary}>
          front-end developer
        </Styled.Subtitle>
        <Styled.Text data-aos={`fade-up`}>
          tech enthusiast and coffee lover, nowadays i develop high level
          interfaces using react and vtex io for e-commerce, besides i also work
          in personal projects in my free time to practice.
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
