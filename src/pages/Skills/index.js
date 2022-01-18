import {
  Card,
  ListGroup,
  Rating,
  Slider,
  ThemeContext,
} from '../../components';
import Styled from './styles';
import useSkills from './hooks/useSkills';
import { useContext } from 'react';

const Skills = () => {
  const skills = useSkills();
  const { state: globalState } = useContext(ThemeContext);

  return (
    <Styled.Section id="skills" variant={globalState.colorPrimary}>
      <Styled.Title>skills</Styled.Title>
      <Slider
        spaceBetween={16}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        className={`swiperSlider`}
      >
        {skills.map((skill, index) => (
          <Card key={index} customStyle={{ 'min-height': '320px' }} variant={globalState.colorPrimary}>
            <Card.Header variant={globalState.colorPrimary}>
              {skill.icon}
              <Card.Text>{skill.title}</Card.Text>
            </Card.Header>

            <Card.Body>
              <ListGroup>
                {skill.specs.map((spec, index) => (
                  <ListGroup.Item key={index}>
                    <ListGroup.Text>{spec.name}</ListGroup.Text>
                    <Rating level={spec.level} />
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        ))}
      </Slider>
    </Styled.Section>
  );
};

export default Skills;
