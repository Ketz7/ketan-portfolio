// components/Contact.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 max-w-lg text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-6 text-black">Get In Touch</h2>
        <p className="mb-8 text-gray-800">
          Feel free to reach out for job opportunities, collaboration, or just to say hi!
        </p>

        {/* Download Resume Button */}
        <a
          href="/Ketan_Maurya_Resume.pdf"
          download
          className="inline-block mb-8 px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-primary transition-colors"
        >
          Download My Resume
        </a>

        {/* Social Icons (Email, GitHub, LinkedIn) */}
        <div className="flex justify-center space-x-6 text-gray-800 mb-4">
          <a
            href="mailto:ketanmaurya@gmail.com"
            className="hover:text-primary transition"
          >
            <FaEnvelope size={28} />
          </a>
          <a
            href="https://github.com/Ketz7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/ketan-maurya-1b759517b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>
    </section>
  )
}
