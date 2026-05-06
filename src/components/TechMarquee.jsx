const techStack = [
  'Python','TensorFlow','PyTorch','Apache Spark','dbt','Airflow',
  'Kubernetes','Terraform','AWS','GCP','Azure','React','Node.js',
  'PostgreSQL','Snowflake','Kafka','Docker','FastAPI','LangChain','OpenAI',
]

export default function TechMarquee() {
  const doubled = [...techStack, ...techStack]

  return (
    <div className="py-8 border-t border-b border-accent-primary/15 bg-bg-secondary/90 overflow-hidden">
      <p className="text-center text-2xs font-semibold uppercase tracking-[0.12em] text-slate-600 mb-4">
        Powering solutions with
      </p>
      <div className="overflow-hidden marquee-mask">
        <div className="flex w-max animate-marquee">
          {doubled.map((tech, i) => (
            <div key={`${tech}-${i}`}
                 className="flex items-center gap-2.5 px-7 text-[0.85rem] font-medium text-slate-600
                            whitespace-nowrap transition-colors duration-150 hover:text-slate-100">
              <span className="w-1 h-1 rounded-full bg-accent-primary opacity-50 flex-shrink-0"/>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
