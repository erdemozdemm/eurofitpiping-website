import type React from "react"

interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, className = "" }) => {
  return (
    <div className={`mb-8 md:mb-12 text-center ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-industrial-blue mb-2">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  )
}

export default SectionTitle
