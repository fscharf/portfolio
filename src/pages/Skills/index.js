import {
  Card,
  ListGroup,
  Rating,
  Slider,
  Tooltip,
  useTheme,
} from '../../components';
import Styled from './styles';
import useSkills from './hooks/useSkills';

const Skills = () => {
  const skills = useSkills();
  const { state } = useTheme();
  const { colorPrimary } = state;

  const dynamicTitle = (value) =>
    value <= 1
      ? 'Básico'
      : value === 2
      ? 'Intermediário'
      : value >= 3 && 'Avançado';

  return (
    <Styled.Section id="skills" variant={colorPrimary}>
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
          <Card
            key={index}
            customStyle={{ 'min-height': '320px' }}
            variant={colorPrimary}
          >
            <Card.Header variant={colorPrimary}>
              {skill.icon}
              <Card.Text>{skill.title}</Card.Text>
            </Card.Header>

            <Card.Body>
              <ListGroup>
                {skill.specs.map((spec, index) => (
                  <ListGroup.Item key={index}>
                    <ListGroup.Text>{spec.name}</ListGroup.Text>
                    <Tooltip top text={dynamicTitle(spec.level)}>
                      <Rating level={spec.level} />
                    </Tooltip>
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
