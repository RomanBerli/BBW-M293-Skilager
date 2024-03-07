import "bootstrap/dist/css/bootstrap.min.css";
import "./_app.css"
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function App({ Component, pageProps }) {

  return (
    //Das wird immer Angezeit
    //im div code:

    <div>
      <Header></Header>





      <main>
        <Component {...pageProps} />
      </main>

      <Footer></Footer>

    </div>
  )
}