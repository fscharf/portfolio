import { Card, ListGroup, Slider } from '../../components';
import { useTheme } from '../../contexts/theme';
import { skills } from '../../data';
import Styled from './styles';

const Skills = () => {
  const { primaryColor } = useTheme();

  return (
    <Styled.Section id="skills" variant={primaryColor}>
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
        {skills.map((skill, index) => {
          const { specs } = skill;

          return (
            <Card
              key={index}
              customStyle={{ 'min-height': '320px' }}
              variant={primaryColor}
            >
              <Card.Header variant={primaryColor}>
                {skill.icon}
                <Card.Text>{skill.title}</Card.Text>
              </Card.Header>

              <Card.Body>
                <ListGroup>
                  {specs.map((spec, index) => (
                    <ListGroup.Item key={index}>
                      <ListGroup.Text>{spec}</ListGroup.Text>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          );
        })}
      </Slider>
    </Styled.Section>
  );
};

export default Skills;
