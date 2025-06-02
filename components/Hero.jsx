// components/Hero.jsx
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-primary to-secondary text-white px-4">
      <div className="max-w-xl text-center">
        <Image
          src="/avatar.jpg"
          width={150}
          height={150}
          alt="Ketan Maurya"
          className="rounded-full mx-auto mb-6 shadow-lg"
        />
        <h1 className="text-5xl font-extrabold mb-4">Hi, I’m Ketan Maurya</h1>
        <p className="text-xl mb-6">
          Backend Engineer specializing in FastAPI, AWS, and scalable systems.  
          Open to relocation or remote work.
        </p>
        <Link
          href="#projects"
          className="inline-block px-8 py-3 bg-dark rounded-lg uppercase tracking-wide hover:opacity-90 transition"
        >
          View Projects
        </Link>
      </div>
    </section>
  )
}
