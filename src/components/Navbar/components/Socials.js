import Styled from '../styles'

const Socials = ({ links, variant }) => {
  return (
    <Styled.Socials variant={variant}>
      {links.socials.map((link, index) => (
        <Styled.NavLink
          key={index}
          href={link.url}
          title={link.text}
          target={`_blank`}
          rel={`noopener noreferrer`}
        >
          {link.icon}
        </Styled.NavLink>
      ))}
    </Styled.Socials>
  )
}
export default Socials
