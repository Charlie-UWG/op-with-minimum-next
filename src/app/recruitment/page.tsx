import Image from 'next/image'
import hero from '~/assets/hero-sample-01.jpg'
import Header from '~/components/Header'

export default function RecruitmentPage() {
  return (
    <div id="container">
      {/* <img id="background" src={background.src} alt="" fetchpriority="high" /> */}
      <main>
        <Header />
        <h2 className="mt-8 flex justify-center text-xl font-bold sm:text-5xl">
          Recruitment Page
        </h2>
        <h3 className="mt-4 flex justify-center text-lg lg:text-2xl">
          障害者就労 採用ページ
        </h3>
        <div className="relative mx-auto mt-4 aspect-[16/9] w-full max-w-4xl">
          <Image
            id="hero"
            src={hero}
            alt="Hero Sample"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            className="z-0 object-cover"
            priority
          />
        </div>
        <p className="mx-4 mt-6 font-medium lg:mx-24">
          最新鋭のデジタルスキャニング技術を駆使し、紙媒体を効率的にデジタル化。過去の資料を未来へと引き継ぎ、アクセスしやすいデジタル資産に変えます。障害者就労支援を通じて社会貢献も実現しています。
        </p>

      </main>
    </div>
  )
}
