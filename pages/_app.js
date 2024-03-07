import "bootstrap/dist/css/bootstrap.min.css";
import "./_app.css"
import Footer from "../components/Footer";

export default function App({ Component, pageProps }) {

  return (
    //Das wird immer Angezeit
    //im div code:

    <div>
      <p>Hallo</p>






      <main>
        <Component {...pageProps} />
      </main>

      <Footer></Footer>

    </div>
  )
}