import Footer from '~/components/Footer'
import Header from '~/components/Header'

export default function AboutPage() {
  return (
    <div id="container">
      {/* <img id="background" src={background.src} alt="" fetchpriority="high" /> */}
      <main>
        <Header />
        <div className="min-h-[60vh]">
          <h2 className="mt-8 flex justify-center text-xl font-bold sm:text-5xl">
            About Page
          </h2>
          <h3 className="mt-4 flex justify-center text-lg lg:text-2xl">
            高機能デジタルスキャニングセンター
          </h3>
        </div>
        <Footer />
      </main>
    </div>
  )
}
