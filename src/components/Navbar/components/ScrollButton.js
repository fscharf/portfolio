import { HiOutlineChevronUp } from 'react-icons/hi'
import Styled from '../styles'
import { scrollTop } from '../../../utils/navigation'

const ScrollButton = ({ variant }) => {
  return (
    <Styled.NavLink
      id={`scrollTopButton`}
      className={`highlight d-none`}
      onClick={() => scrollTop()}
      variant={variant}
      title={`scroll to top`}
    >
      <HiOutlineChevronUp size={28} />
    </Styled.NavLink>
  )
}

export default ScrollButton
