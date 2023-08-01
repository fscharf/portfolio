import React from 'react'
import { useTheme } from 'styled-components'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import 'swiper/css/bundle'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import { Wrapper } from './styles'

SwiperCore.use([Pagination, Navigation])

type Props = {
  children?: React.ReactNode[]
} & SwiperProps

const Slider = ({ children, ...settings }: Props) => {
  const theme = useTheme()

  return (
    <Wrapper color={theme.colors.primary}>
      <Swiper {...settings}>
        {children
          ? children.map((item, index) => (
              <SwiperSlide key={index}>{item}</SwiperSlide>
            ))
          : null}
      </Swiper>
    </Wrapper>
  )
}

export default Slider
