'use client'

import { useState } from 'react'
import styles from './Progress.module.scss'

type LinearProgressBarProps = {
  progress: number
}

export default function LinearProgressBar({ progress = 0 }: LinearProgressBarProps) {
  const [displayProgress] = useState(progress)

  return (
    <div className={styles.progressBar}>
      <div
        className={styles.progress}
        style={{
          width: `${displayProgress}%`,
        }}
      />
      <div
        className={styles.emptyProgress}
        style={{
          width: `${100 - displayProgress}%`,
        }}
      ></div>
    </div>
  )
}
