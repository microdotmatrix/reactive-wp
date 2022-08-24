import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="grid w-full h-full">
        <Alert preview={preview} />
        <main className="flex-1">{children}</main>
      </div>
      <Footer />
    </>
  )
}
