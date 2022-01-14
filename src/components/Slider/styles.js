import { lighten } from 'polished';
import styled from 'styled-components';

const Styled = {
  Swiper: styled.section`
    width: 100%;
    .swiperSlider {
      padding-bottom: 48px;
      .swiper-pagination {
        display: flex;
        align-items: center;
        justify-content: center;
        &-bullet {
          width: 12px;
          height: 12px;
          font-size: 12px;
          opacity: 1;
          background: ${(p) => lighten(0.3, p.variant && p.variant)};
          &-active {
            background: ${(p) => p.variant ? p.variant : `transparent`};
            padding: 8px;
          }
        }
      }
    }
    .swiperSliderImages {
      .swiper-button-prev,
      .swiper-button-next {
        background-image: none;
        &::after {
          font-size: 32px;
          color: ${(p) => p.variant ? p.variant : `transparent`};
        }
      }
    }
  `,
};

export default Styled;
