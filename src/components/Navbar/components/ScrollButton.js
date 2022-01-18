import { HiOutlineChevronUp } from 'react-icons/hi';
import Styled from '../styles';
import { utils } from '../utils';

const ScrollButton = ({ variant }) => {
  return (
    <Styled.NavLink
      id={`scrollTopButton`}
      className={`highlight d-none`}
      onClick={() => utils.scrollTop()}
      variant={variant}
      title={`scroll to top`}
    >
      <HiOutlineChevronUp size={28} />
    </Styled.NavLink>
  );
};

export default ScrollButton;
