'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import ItemsSliderSlide from './ItemsSliderSlide'
import styles from './ItemsSlider.module.scss';
import { AchievementCardInterface, SlideItemVariant } from '@/app/types/types'

interface ItemsSliderProps {
  variant: SlideItemVariant
  items: AchievementCardInterface[]
}

export default function ItemsSlider({ variant, items }: ItemsSliderProps) {
  const swiperConfig = {
    'one-col': {
      slidesPerView: 1.5846,
      spaceBetween: 16,
      breakpoints: {
        440: { slidesPerView: 2 },
        640: { slidesPerView: 3 },
        743: { slidesPerView: 3.3432 },
        839: { slidesPerView: 4.2 },
        1024: { slidesPerView: 5 },
        1200: { slidesPerView: 6 },
      }
    },
    'two-cols': {
      slidesPerView: 1.5846,
      spaceBetween: 16,
      breakpoints: {
        440: { slidesPerView: 2 },
        640: { slidesPerView: 3 },
        743: { slidesPerView: 3.3432 },
        839: { slidesPerView: 4.2 },
        1024: { slidesPerView: 5 },
        1200: { slidesPerView: 6 },
      }
    }
  }

  const createChessPairs = () => {
    const half = Math.ceil(items.length / 2)
    return Array.from({ length: half }).map((_, index) => [
      items[index],
      items[index + half]
    ])
  }

  const chessPairs = variant === 'two-cols' ? createChessPairs() : []

  return (
    <div className={`swiper-container ${variant} ${styles.container}`}>
      <Swiper
        modules={[Navigation, Pagination]}
        {...swiperConfig[variant]}
        pagination={{ clickable: true }}
        className={styles.slider}
      >
        {variant === 'two-cols' ? (
          chessPairs.map((pair, index) => (
            <SwiperSlide key={`pair-${index}`}>
              <div className={styles.item}>
                {pair.map((item, idx) => (
                  item && (
                    <div key={`${index}-${idx}`} className="h-full">
                      <ItemsSliderSlide {...item} />
                    </div>
                  )
                ))}
              </div>
            </SwiperSlide>
          ))
        ) : (
          items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="h-full">
                <ItemsSliderSlide {...item} />
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  )
}