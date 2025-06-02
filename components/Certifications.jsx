// components/Certifications.jsx
export default function Certifications() {
  const certs = [
    {
      name: 'AWS Certified Developer – Associate',
      issuer: 'Amazon Web Services',
      date: 'July 2024',
      logoSrc: '/aws-certified-developer-associate.svg',
      link: 'https://www.credly.com/badges/e4ff3fda-4caa-4606-85b7-ec58628bab16/public_url',
    },
    {
      name: 'Terraform Associate (003)',
      issuer: 'HashiCorp',
      date: 'July 2023',
      logoSrc: '/hashicorp-certified-terraform-associate-003.svg',
      link: 'https://www.credly.com/badges/355ef7b7-fd16-4e84-8618-4d06a99c9c6a/public_url', // replace with your HashiCorp credential link
    },
  ]

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">
          Certifications
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {certs.map(({ name, issuer, date, logoSrc, link }) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <img
                src={logoSrc}
                alt={issuer}
                className="w-24 h-24 object-contain mb-4"
              />
              <h3 className="text-2xl font-semibold mb-1 text-black">
                {name}
              </h3>
              <p className="text-gray-700">{issuer}</p>
              <p className="text-gray-500 text-sm">{date}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
