// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-dark text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Ketan Maurya. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
