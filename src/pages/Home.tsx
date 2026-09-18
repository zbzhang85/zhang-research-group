import Navbar from '@/sections/Navbar'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Research from '@/sections/Research'
import News from '@/sections/News'
import Publications from '@/sections/Publications'
import Talks from '@/sections/Talks'
import Team from '@/sections/Team'
import Gallery from '@/sections/Gallery'
import Teaching from '@/sections/Teaching'
import Contact from '@/sections/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Research />
        <News />
        <Publications />
        <Talks />
        <Team />
        <Gallery />
        <Teaching />
      </main>
      <Contact />
    </div>
  )
}
