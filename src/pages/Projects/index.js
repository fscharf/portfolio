import {
  HiBadgeCheck,
  HiOutlineCloudUpload,
  HiOutlineEye,
  HiTag
} from 'react-icons/hi';
import { Slider, useTheme } from '../../components';
import useProjects from './hooks/useProjects';
import Styled from './styles';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = useProjects();
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span key="${index}" class="${className}"></span>`;
    },
  };
  const { state } = useTheme();
  const { colorPrimary } = state;

  return (
    <Styled.Section id="projects" fullHeight>
      <Slider className={`swiperSlider`} pagination={pagination}>
        {projects.map((project, index) => (
          <Styled.Container key={index}>
            <Styled.ImgWrapper>
              <Slider className={`swiperSliderImages`} navigation={true}>
                {project.images.map((image, index) => (
                  <Styled.Img
                    key={index}
                    src={image}
                    alt={project.title}
                    loading={`lazy`}
                  />
                ))}
              </Slider>
            </Styled.ImgWrapper>
            <Styled.Wrapper>
              <Styled.Title variant={colorPrimary}>
                {project.title}{' '}
                {project.finished && (
                  <HiBadgeCheck title={`done`} color={`#02db38`} />
                )}
              </Styled.Title>
              <Styled.Text>{project.description}</Styled.Text>
              <Styled.LinkWrapper>
                {project.siteUrl && (
                  <Styled.Link
                    href={project.siteUrl}
                    target={`_blank`}
                    primary
                    variant={colorPrimary}
                  >
                    <HiOutlineEye /> preview
                  </Styled.Link>
                )}
                {project.apiUrl && (
                  <Styled.Link
                    href={project.apiUrl}
                    target={`_blank`}
                    primary
                    variant={colorPrimary}
                  >
                    <HiOutlineCloudUpload /> api source
                  </Styled.Link>
                )}
                <Styled.Link
                  href={project.repoUrl}
                  target={`_blank`}
                  outline
                  variant={colorPrimary}
                >
                  <FaGithub /> source
                </Styled.Link>
              </Styled.LinkWrapper>
              <Styled.Strip />

              <Styled.Tools>
                {project.tools.map((tool, index) => (
                  <Styled.Tool key={index} variant={colorPrimary}>
                    {' '}
                    <HiTag /> {tool}
                  </Styled.Tool>
                ))}
              </Styled.Tools>
            </Styled.Wrapper>
          </Styled.Container>
        ))}
      </Slider>
    </Styled.Section>
  );
};

export default Projects;
