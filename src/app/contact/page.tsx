import Footer from '~/components/Footer'
import Header from '~/components/Header'

export default function ContactPage() {
  return (
    <div id="container">
      {/* <img id="background" src={background.src} alt="" fetchpriority="high" /> */}
      <main>
        <Header />
        <div className="min-h-[60vh]">
          <h2 className="mt-6 text-center text-xl font-semibold sm:text-4xl">お問い合わせフォーム</h2>
          <form className="mx-8 my-6 grid grid-cols-1 gap-4">
            <label>
              <span>お名前</span>
              <input type="text" name="name" className="rounded border border-gray-300 p-2" />
            </label>
            <label>
              <span>メールアドレス</span>
              <input type="email" name="email" className="rounded border border-gray-300 p-2" />
            </label>
            <label>
              <span>お問い合わせ内容</span>
              <textarea name="message" className="rounded border border-gray-300 p-2" />
            </label>
            <button type="submit" className="rounded bg-blue-500 p-2 text-white">送信</button>
          </form>
        </div>
        <Footer />
      </main>
    </div>
  )
}
