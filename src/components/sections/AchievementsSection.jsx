import Section from '../common/Section'
import SectionTitle from '../common/SectionTitle'
import AchievementCard from '../cards/AchievementCard'
import { achievementsData } from '../../data/achievements'

export default function AchievementsSection() {
  return (
    <Section id="achievements" className="bg-neutral-50">
      <SectionTitle>Achievements & Certifications</SectionTitle>

      <p className="max-w-2xl mx-auto -mt-8 mb-10 text-center text-sm text-neutral-600">
        Selected certifications, leadership roles, and competition results.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {achievementsData.map((achievement) => (
          <AchievementCard
            key={achievement.id}
            achievement={achievement}
          />
        ))}
      </div>
    </Section>
  )
}
