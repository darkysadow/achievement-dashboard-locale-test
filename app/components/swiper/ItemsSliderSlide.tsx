import React from 'react'
import styles from './ItemsSliderSlide.module.scss'
import { BlockedIcon, InfoIcon, ShieldDoneIcon } from '../icons/icons'
import { AchievementCardInterface } from '@/app/types/types'
import Tooltip from '../ui/tooltip/Tooltip'
import LinearProgressBar from '../Progress/Progress'

const ItemsSliderSlide = (props: AchievementCardInterface) => {
  const { available, completedText, name, progress, progressNeeded, tooltipText, bg } = props

  return (
    <div className={styles.card + ' ' + styles[bg + '-bg']}>
      <div className={styles.imageBlock}>
        <figure className={styles.icon}>{available ? <ShieldDoneIcon /> : <BlockedIcon />}</figure>
        <div className={styles.tooltip}>
          <Tooltip text={tooltipText}>
            <div className={styles.infoIcon}>
              <InfoIcon />
            </div>
          </Tooltip>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.textBlock}>
        <h3>{name}</h3>
        {progress < progressNeeded ? (
          <CardProgressBlock progress={progress} progressNeeded={progressNeeded} />
        ) : (
          <p>{completedText}</p>
        )}
      </div>
    </div>
  )
}

const CardProgressBlock = ({
  progress,
  progressNeeded,
}: {
  progress: number
  progressNeeded: number
}) => {
  return (
    <div className={styles.progressBlockContainer}>
      <div className={styles.progressBlock}>
        <p>Досягнення</p>
        <div className={styles.progressText}>
          <span>{progress}</span> <p>/ {progressNeeded}</p>
        </div>
      </div>
      <LinearProgressBar progress={Math.min((progress / progressNeeded) * 100, 100)} />
    </div>
  )
}

export default ItemsSliderSlide
