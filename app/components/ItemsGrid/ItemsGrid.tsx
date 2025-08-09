import React from 'react'
import styles from './ItemsGrid.module.scss';
import ItemsSlider from '../swiper/ItemsSlider';
import { AchievementCardInterface, SlideItemVariant } from '@/app/types/types';

interface ItemsGridProps {
    title: string
    items: AchievementCardInterface[]
    variant: SlideItemVariant
    countOfAchievements: number
}

const ItemsGrid = (props: ItemsGridProps) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.title}>
        <h2>{props.title}</h2>
        <sup>{props.countOfAchievements}</sup>
      </div>
      <ItemsSlider items={props.items} variant={props.variant} />
    </section>
  )
}

export default ItemsGrid