import "bootstrap/dist/css/bootstrap.min.css";
import "./_app.css"

export default function App({ Component, pageProps }) {
  
  return ( 
    //Das wird immer Angezeit
    //im div code:

  <div>
    <p>Hallo</p>




    
    
    <main>
      <Component {...pageProps} />
    </main>

    <footer>
      <div>
        <h3>
          Schule Gugus
        </h3>
        <p>Bergstrasse 12</p>
        <p>8000 Zürich</p>
        <p>Tel: <a href="tel:+791231945">079 123 19 45</a></p>
      </div>
       
      <div>
      <h3>
        Öffnungszeiten Schulverwaltung
        </h3>
       <p><strong>Montag  Donnerstag</strong></p>
       <p>8.00  12.00 Uhr und 13.30  17.00 Uhr</p>
       <p><strong>Freitag</strong></p>
       <p>8.00  12.00 Uhr</p>
      </div>
    </footer>



  </div>

  //ab hier kein code mehr!
  
  )
}