import Personal from '../../assets/images/personal.png';
import * as Fa from 'react-icons/fa';
import Styled from './styles';
import { useContext } from 'react';
import { ThemeContext } from '../../components';

const Home = () => {
  const { state } = useContext(ThemeContext);
  const icons = [
    <Fa.FaJs />,
    <Fa.FaReact />,
    <Fa.FaSass />,
    <Fa.FaNodeJs />,
    <Fa.FaGithub />,
  ];

  return (
    <Styled.Section id="home">
      <Styled.Column data-aos={`fade-down`}>
        <Styled.ImgWrapper>
          <Styled.Img src={Personal} alt={`Personal Image`} />
          <Styled.BgBlob variant={state.colorPrimary} />
        </Styled.ImgWrapper>
      </Styled.Column>
      <Styled.Column isContent data-aos={`fade-up`}>
        <Styled.Title>hi, i'm felipe</Styled.Title>
        <Styled.Subtitle variant={state.colorPrimary}>
          front-end developer
        </Styled.Subtitle>
        <Styled.Text data-aos={`fade-up`}>
          i'm used to develop high/standard level e-commerce interfaces using
          react and vtex io, besides i also work in personal projects in my free
          time to practice.
        </Styled.Text>
        <Styled.IconsWrapper>
          {icons.map((icon, index) => (
            <Styled.Icon key={index}>{icon}</Styled.Icon>
          ))}
        </Styled.IconsWrapper>
      </Styled.Column>
    </Styled.Section>
  );
};

export default Home;
