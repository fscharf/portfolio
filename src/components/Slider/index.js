import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTheme } from '../../contexts/theme';
import Styled from './styles';

SwiperCore.use([Pagination, Navigation]);

const Slider = ({ children, ...settings }) => {
  const { primaryColor } = useTheme();

  return (
    <Styled.Swiper variant={primaryColor}>
      <Swiper {...settings}>
        {children.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </Styled.Swiper>
  );
};

export default Slider;
