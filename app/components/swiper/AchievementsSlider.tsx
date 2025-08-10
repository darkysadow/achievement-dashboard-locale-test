'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import styles from './AchievementsSlider.module.scss'

interface SlideInterface {
    text: string
    value: number
}

interface AchievementsSliderProps {
  items: SlideInterface[]
}

export default function AchievementsSlider({ items }: AchievementsSliderProps) {

  const swiperConfig = {
    breakpoints: {
        520: { slidesPerView: 2.1 },
        768: { slidesPerView: 3 },
        1200: { slidesPerView: 3, spaceBetween: 16 },
      }
  }

  return (
    <div className={`swiper-container ${styles.container}`}>
      <Swiper
        spaceBetween={8}
        slidesPerView={1.7021}
        {...swiperConfig}
        className={styles.slider}
      >
        {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.slide + " " + `${index === 0 && styles.slideActive}`}>
                <span>{index < 9 ? "0" + (index + 1) : index}</span>
                <div>
                    <h3>{item.text}</h3>
                    <p>{item.value}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}