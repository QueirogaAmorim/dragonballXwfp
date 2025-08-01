// components/Footer.tsx
import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 pt-8 pb-6">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        
        {/* Follow-us text */}
        <p className="text-gray-600 mb-4 sm:mb-0">
          Follow us on
        </p>
        
        {/* Social icons */}
        <div className="flex space-x-6">
          <Link
            href="https://www.youtube.com/@NewDragonBallX"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="New Dragon Ball X on YouTube"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/icons/youtube-small.svg"
              alt="YouTube"
              width={24}
              height={24}
            />
          </Link>

          <Link
            href="https://www.instagram.com/_dragonball_x?igsh=MXNnbHl1bmU2YndzZw=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="New Dragon Ball X on Instagram"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/icons/instagram-small.svg"
              alt="Instagram"
              width={24}
              height={24}
            />
          </Link>
        </div>
        
        {/* Copyright */}
        <p className="text-gray-400 text-sm mt-4 sm:mt-0">
          © {new Date().getFullYear()} New Dragon Ball X. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
