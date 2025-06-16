// components/Projects.jsx
const projects = [
  {
    title: 'Pdf Parsing App',
    description:
      'PDF LangChain Parser.',
    link: 'https://github.com/Ketz7/pdf_langchain_parser',
  },
  {
    title: 'RAG Semantic Search',
    description:
      'LangChain + OpenAI for financial document insights → 45% improved retrieval.',
    link: 'https://github.com/Ketz7/your-langchain-repo',
  },
  {
    title: 'Serverless PySpark Rules Engine',
    description:
      'AWS Lambda + PySpark ETL pipelines → 70% faster development.',
    link: 'https://github.com/Ketz7/your-pyspark-repo',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">
          Projects
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, description, link }) => (
            <a
              key={title}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-2 text-black">
                {title}
              </h3>
              <p className="text-gray-800">{description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
