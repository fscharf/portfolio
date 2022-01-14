import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import Styled from './styles';
import { useContext } from 'react';
import { ThemeContext } from '..';

SwiperCore.use([Pagination, Navigation]);

const Slider = ({ children, ...settings }) => {
  const { state: globalState } = useContext(ThemeContext);

  return (
    <Styled.Swiper variant={globalState.colorPrimary}>
      <Swiper {...settings}>
        {children.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </Styled.Swiper>
  );
};

export default Slider;
