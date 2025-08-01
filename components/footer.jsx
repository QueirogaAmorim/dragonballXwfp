// components/Footer.tsx
import Link from 'next/link'
import { FaYoutube, FaInstagram } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 pt-8 pb-6">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-gray-600 mb-4 sm:mb-0">Follow us on</p>
        <div className="flex space-x-6">
          <Link
            href="https://www.youtube.com/@Dragon_Ball_X_7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="New Dragon Ball X on YouTube"
            className="hover:text-gray-500 transition-colors"
          >
            <FaYoutube size={24} />
          </Link>
          <Link
            href="https://www.instagram.com/_dragonball_x?igsh=MXNnbHl1bmU2YndzZw=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="New Dragon Ball X on Instagram"
            className="hover:text-gray-500 transition-colors"
          >
            <FaInstagram size={24} />
          </Link>
        </div>
        <p className="text-gray-400 text-sm mt-4 sm:mt-0">
          © {new Date().getFullYear()} New Dragon Ball X. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
