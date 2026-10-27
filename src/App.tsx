import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Impact } from './components/sections/Impact'
import { About } from './components/sections/About'
import { HowWeHelp } from './components/sections/HowWeHelp'
import { Stories } from './components/sections/Stories'
import { Trust } from './components/sections/Trust'
import { Donate } from './components/sections/Donate'
import { NeedHelp } from './components/sections/NeedHelp'
import { Contact } from './components/sections/Contact'
import { ArcDivider } from './components/ui/ArcDivider'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow-lg"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <ArcDivider className="text-[#f6faff]" />
        <Impact />
        <ArcDivider className="text-[#e8f2fb]" />
        <About />
        <ArcDivider className="text-[#f1f7fd]" />
        <HowWeHelp />
        <ArcDivider className="text-[#f6faff]" />
        <Stories />
        <ArcDivider className="text-[#e8f2fb]" />
        <Trust />
        <ArcDivider className="text-[#f1f7fd]" />
        <Donate />
        <ArcDivider className="text-[#f6faff]" />
        <NeedHelp />
        <ArcDivider className="text-[#e8f2fb]" />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
