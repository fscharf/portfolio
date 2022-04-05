import * as Hi from 'react-icons/hi';
import Styled from './styles';

const Rating = ({ level, ...rest }) => {
  return (
    <Styled.Wrapper {...rest}>
      <Hi.HiStar />
      {level >= 2 ? <Hi.HiStar /> : <Hi.HiOutlineStar />}
      {level >= 3 ? <Hi.HiStar /> : <Hi.HiOutlineStar />}
    </Styled.Wrapper>
  );
};

export default Rating;
