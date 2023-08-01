import { lighten } from 'polished'
import styled from 'styled-components'

export const Wrapper = styled.section<{ color?: string }>`
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
        background: ${props => lighten(0.3, props.color ?? '#fff')};
        &-active {
          background: ${props => props.color};
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
        color: ${props => props.color};
      }
    }
  }
`
