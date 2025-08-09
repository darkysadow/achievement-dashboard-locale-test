import React from 'react'
import styles from './TotalItems.module.scss'
import { AllAchievements } from '@/app/types/types'

interface TotalItemsProps {
  achievements: AllAchievements
}

const TotalItems = (props: TotalItemsProps) => {
  const { achievements } = props
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.titleBlock}>
          <h1>{achievements.title}</h1>
          <p>{achievements.bestText[0] + ' ' + achievements.percent + achievements.bestText[1]}</p>
        </div>
      </div>
    </section>
  )
}

export default TotalItems
