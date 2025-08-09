import ItemsGrid from '../components/ItemsGrid/ItemsGrid'
import TotalItems from '../components/TotalItems/TotalItems'
import { LocalesType } from '../types/types'
import styles from './Dashboard.module.scss'
import { getDictionary } from './dictionaries'

export default async function Page({ params }: { params: { locale: LocalesType } }) {
  const { locale } = await params

  const dict = await getDictionary(locale)
  return (
    <main className={styles.main}>
      <TotalItems achievements={dict.allAchievements} />
      <ItemsGrid
        variant="two-cols"
        title={dict.platformAchievements.title}
        items={dict.platformAchievements.items}
        countOfAchievements={dict.platformAchievements.countOfAchievements}
      />
      <ItemsGrid
        variant="one-col"
        title={dict.specialistAchievements.title}
        items={dict.specialistAchievements.items}
        countOfAchievements={dict.specialistAchievements.countOfAchievements}
      />
    </main>
  )
}
