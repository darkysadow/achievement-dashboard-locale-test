export type LocalesType = 'uk' | 'en' | 'nl'

export type SlideItemVariant = 'one-col' | 'two-cols'

export interface AchievementCardInterface {
    available: boolean
    name: string
    completedText: string
    progress: number
    progressNeeded: number
    tooltipText: string
    bg: string
}

interface AchievementProgress {
  text: string;
  value: number;
  total: number;
}

interface AchievementRank {
  text: string;
  value: number;
}

interface AchievementCard {
  text: string;
  value: number;
}

interface AchievementSelectOption {
  text: string;
  value: string;
}

export interface AllAchievements {
  title: string;
  percent: number;
  bestText: string[];
  progress: AchievementProgress;
  firstRank: AchievementRank;
  secondRank: AchievementRank;
  thirdRank: AchievementRank;
  closed: Omit<AchievementRank, 'total'>;
  cards: AchievementCard[];
  select: AchievementSelectOption[];
}