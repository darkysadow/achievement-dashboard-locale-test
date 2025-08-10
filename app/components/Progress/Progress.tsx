'use client'

import { useState } from 'react'
import styles from './Progress.module.scss'

type LinearProgressBarProps = {
  progress: number
  variant: 'primary' | 'secondary'
}

export default function LinearProgressBar({
  progress = 0,
  variant = 'primary',
}: LinearProgressBarProps) {
  const [displayProgress] = useState(progress)

  return (
    <div className={`${styles.progressBar} ${styles[`progressBar-${variant}`]}`}>
      <div
        className={styles.progress}
        style={{
          width:
            variant === 'secondary'
              ? `calc(${Math.min(Math.max(displayProgress, 0), 100)}% - 2px)`
              : `${Math.min(Math.max(displayProgress, 0), 100)}%`,
        }}
      />
      <div
        className={styles.emptyProgress}
        style={{
          width:
            variant === 'secondary'
              ? `calc(${100 - Math.min(Math.max(displayProgress, 0), 100)}% - 2px)`
              : `${100 - Math.min(Math.max(displayProgress, 0), 100)}%`,
          display: displayProgress >= 100 ? 'none' : 'block',
          marginLeft: variant === 'secondary' ? '4px' : '0', // Додаємо відступ для gap
        }}
      />
    </div>
  )
}
