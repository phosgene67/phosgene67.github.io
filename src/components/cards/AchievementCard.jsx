const typeStyles = {
  certification: 'bg-blue-100 text-blue-700',
  ambassador: 'bg-purple-100 text-purple-700',
  workshop: 'bg-green-100 text-green-700',
  competition: 'bg-orange-100 text-orange-700'
}

const typeLabels = {
  certification: 'Certification',
  ambassador: 'Ambassador',
  workshop: 'Workshop',
  competition: 'Competition'
}

export default function AchievementCard({ achievement }) {
  const hasEvidence = achievement.certificateImage || achievement.certificatePdfUrl || achievement.certificateLink

  return (
    <article className="bg-white overflow-hidden rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-lg smooth-transition flex flex-col h-full">
      {achievement.certificateImage && (
        <a
          href={achievement.certificateImage}
          target="_blank"
          rel="noreferrer"
          className="block h-44 bg-neutral-100 overflow-hidden"
          aria-label={`View ${achievement.title} certificate image`}
        >
          <img
            src={achievement.certificateImage}
            alt={`${achievement.title} certificate`}
            className="h-full w-full object-cover smooth-transition hover:scale-105"
          />
        </a>
      )}

      <div className="p-6 md:p-7 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-4 gap-3">
          <h3 className="text-lg font-bold font-poppins text-neutral-900 flex-1">
            {achievement.title}
          </h3>
          <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${typeStyles[achievement.type]}`}>
            {typeLabels[achievement.type]}
          </span>
        </div>

        <p className="text-sm text-neutral-500 font-semibold mb-2">
          {achievement.date}
        </p>

        <p className="text-neutral-600 text-sm leading-relaxed flex-grow">
          {achievement.description}
        </p>

        {hasEvidence && (
          <div className="flex flex-wrap gap-2 pt-4 mt-4 border-t border-neutral-100">
            {achievement.certificateImage && (
              <a href={achievement.certificateImage} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-3 py-2 text-xs font-semibold text-primary-700 border border-primary-200 rounded-md hover:bg-primary-50 smooth-transition">
                View Image
              </a>
            )}
            {achievement.certificatePdfUrl && (
              <a href={achievement.certificatePdfUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-3 py-2 text-xs font-semibold text-white bg-primary-600 rounded-md hover:bg-primary-700 smooth-transition">
                View PDF
              </a>
            )}
            {achievement.certificateLink && (
              <a href={achievement.certificateLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-3 py-2 text-xs font-semibold text-primary-700 border border-primary-200 rounded-md hover:bg-primary-50 smooth-transition">
                Credential Link
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
