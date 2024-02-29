import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  
  return ( 
  <main>
    <Component {...pageProps} />
  </main>
  )
}