import Header from '~/components/Header'

export default function Home() {
  return (
    <div id="container">
      {/* <img id="background" src={background.src} alt="" fetchpriority="high" /> */}
      <main>
        <Header />
        <h2 className="mt-8 flex justify-center text-xl font-bold lg:text-5xl">
          未来へつながるデジタル化
        </h2>
        <h3 className="mt-4 flex justify-center text-lg lg:text-2xl">
          2025年4月 高機能デジタルスキャニングセンターが誕生
        </h3>
        {/* <img id="hero" src={hero} alt="Hero Sample" className="mt-4 mx-auto sm:max-h-[40vh]"> */}
        <p className="mx-4 mt-6 font-medium lg:mx-24">
          最新鋭のデジタルスキャニング技術を駆使し、紙媒体を効率的にデジタル化。過去の資料を未来へと引き継ぎ、アクセスしやすいデジタル資産に変えます。障害者就労支援を通じて社会貢献も実現しています。
        </p>

        <div className="mx-8 my-4">
          <h2 className="mt-6 text-center text-xl font-semibold sm:text-4xl">対象の書類</h2>
          <ul className="sd:grid-cols-2 mx-8 my-6 grid grid-cols-2 gap-4 *:min-h-32 *:rounded *:border *:border-gray-300 *:bg-white *:p-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <li>書籍・本・論文</li>
            <li>書類・紙文書</li>
            <li>大判図面</li>
            <li>医療カルテ</li>
            <li>マイクロフィルム</li>
            <li>手書き書類</li>
            <li>社内広報誌・アーカイブ</li>
            <li>社内広報誌・アーカイブ</li>
            <li>プリント写真</li>
            <li>絵画・アート作品</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
