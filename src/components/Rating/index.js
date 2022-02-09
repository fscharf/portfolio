import * as Hi from 'react-icons/hi';
import Styled from './styles';

const Rating = ({ level, ...rest }) => {
  return (
    <Styled.Wrapper
      {...rest}
      title={
        level === 1
          ? 'Básico'
          : level === 2
          ? 'Intermediário'
          : level === 3 && 'Avançado'
      }
    >
      <Hi.HiStar />
      {level >= 2 ? <Hi.HiStar /> : <Hi.HiOutlineStar />}
      {level >= 3 ? <Hi.HiStar /> : <Hi.HiOutlineStar />}
    </Styled.Wrapper>
  );
};

export default Rating;
