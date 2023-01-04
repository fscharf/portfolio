import { FaGithub } from 'react-icons/fa'
import {
  HiBadgeCheck,
  HiOutlineCloudUpload,
  HiOutlineEye,
  HiTag
} from 'react-icons/hi'
import { Slider } from '../../components'
import { useTheme } from '../../contexts/theme'
import { projects } from '../../data'
import Styled from './styles'

const Projects = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span key="${index}" class="${className}"></span>`
    }
  }
  const { primaryColor } = useTheme()

  return (
    <Styled.Section id="projects" fullHeight>
      <Slider className={`swiperSlider`} pagination={pagination}>
        {projects.map((project, index) => {
          const { images } = project

          return (
            <Styled.Container key={index}>
              <Styled.ImgWrapper>
                <Slider className={`swiperSliderImages`} navigation={true}>
                  {images.map((image, index) => (
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
                <Styled.Title variant={primaryColor}>
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
                      variant={primaryColor}
                    >
                      <HiOutlineEye /> preview
                    </Styled.Link>
                  )}
                  {project.apiUrl && (
                    <Styled.Link
                      href={project.apiUrl}
                      target={`_blank`}
                      primary
                      variant={primaryColor}
                    >
                      <HiOutlineCloudUpload /> api source
                    </Styled.Link>
                  )}
                  <Styled.Link
                    href={project.repoUrl}
                    target={`_blank`}
                    outline
                    variant={primaryColor}
                  >
                    <FaGithub /> source
                  </Styled.Link>
                </Styled.LinkWrapper>

                <Styled.Tools>
                  {project.tools.map((tool, index) => (
                    <Styled.Tool key={index} variant={primaryColor}>
                      {' '}
                      <HiTag /> {tool}
                    </Styled.Tool>
                  ))}
                </Styled.Tools>
              </Styled.Wrapper>
            </Styled.Container>
          )
        })}
      </Slider>
    </Styled.Section>
  )
}

export default Projects
