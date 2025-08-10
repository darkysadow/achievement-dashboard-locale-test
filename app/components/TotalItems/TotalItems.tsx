import React from 'react'
import styles from './TotalItems.module.scss'
import { AllAchievements } from '@/app/types/types'
import { AchievementsIcon } from '../icons/icons'
import LinearProgressBar from '../Progress/Progress'

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
        <div className={styles.mainInfo}>
          <div className={styles.stats}>
            <div className={styles.progressContainer}>
              <div className={styles.progressTitleContainer}>
                <div className={styles.progressTitle}>
                  <div className={styles.progressTitleIcon}>
                    <AchievementsIcon />
                  </div>
                  <h2>{achievements.progress.text}</h2>
                </div>
                <div className={styles.progressTotal}>
                  <span>{achievements.progress.value}</span> <p>/ {achievements.progress.total}</p>
                </div>
              </div>
              <div className={styles.progressbarContainer}>
                <LinearProgressBar
                  variant="secondary"
                  progress={Math.min(
                    (achievements.progress.value / achievements.progress.total) * 100,
                    100,
                  )}
                />
              </div>
            </div>
            <div className={styles.achievementsRanks}>
              <div className={styles.achievementsRank}>
                <p>{achievements.firstRank.value}</p>
                <h3>{achievements.firstRank.text}</h3>
              </div>
              <div className={styles.achievementsRank}>
                <p>{achievements.secondRank.value}</p>
                <h3>{achievements.secondRank.text}</h3>
              </div>
              <div className={styles.achievementsRank}>
                <p>{achievements.thirdRank.value}</p>
                <h3>{achievements.thirdRank.text}</h3>
              </div>
              <div className={styles.achievementsRank}>
                <p>{achievements.closed.value}</p>
                <h3>{achievements.closed.text}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TotalItems
