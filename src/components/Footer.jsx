import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#f7f6ed]" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 sm:px-32 2xl:px-8  lg:pt-4">
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500">&copy; 2024 Brandon Saldan.</p>
          <p className="text-xs leading-5 text-gray-500"><a href="https://github.com/brandonsaldan/mash-his-132" className="text-[#39bc9f] hover:text-[#63cfb7] transition-colors">View source on GitHub</a></p>
        </div>
      </div>
    </footer>
  )
}