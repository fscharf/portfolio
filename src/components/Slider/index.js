import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import Styled from './styles';
import { useTheme } from '..';

SwiperCore.use([Pagination, Navigation]);

const Slider = ({ children, ...settings }) => {
  const { state } = useTheme();
  const { colorPrimary } = state;

  return (
    <Styled.Swiper variant={colorPrimary}>
      <Swiper {...settings}>
        {children.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </Styled.Swiper>
  );
};

export default Slider;
