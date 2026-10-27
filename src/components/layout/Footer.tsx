import { brand } from '../../data/site'
import { contactInfo } from '../../data/contact'
import { ArcMark } from '../ui/ArcMark'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-arc-blue/10 bg-arc-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                <ArcMark className="h-4 w-7" strokeClassName="stroke-arc-amber" />
              </span>
              <div>
                <p className="font-bold leading-tight">{brand.name}</p>
                <p className="text-xs text-white/70">{brand.founderCredit}</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/75">{brand.tagline}</p>
            <p className="mt-2 text-xs text-white/55">{contactInfo.registrationLine}</p>
          </div>

          <div className="text-sm">
            <p className="font-semibold text-white/90">Quick links</p>
            <ul className="mt-3 space-y-2 text-white/70">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#donate" className="hover:text-white">Donate</a></li>
              <li><a href="#need-help" className="hover:text-white">Need Help?</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-center text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            {brand.name}, {brand.founderCredit}
          </p>
          <p>© {year} {brand.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
