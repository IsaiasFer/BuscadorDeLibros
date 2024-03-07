import { useRef, useState, useEffect } from 'react'
import './assets/styles/index.css'
import Despliegue from './components/wresults/despliegue';
import { Libro } from './interfaces';
import { getEmaBooks, reemplazarEspaciosPorMas } from './funciones'
import axios from 'axios';
import { Toast } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const libroCargando: Libro = {
  name: 'libroEjemplodeCarga',
  author: "string",
  year: "1234",
  url: "",
  added: false
}

function App() {
  const [booksState, setBooksState] = useState<Libro[]>([])
  async function obtenerDatos(nombredelibro: string) {
    const imageUrlBase = 'https://covers.openlibrary.org/b/olid/';
    const nombreDeLibroFinal = reemplazarEspaciosPorMas(nombredelibro);
    const linkFinal = `https://openlibrary.org/search.json?q=${nombreDeLibroFinal}&fields=title,author_name,first_publish_year,cover_edition_key&limit=3`;
    const datos = [];
    setBooksState([libroCargando])
    try {
      const response = await axios.get(linkFinal);
      console.log("buscando " + linkFinal);

      for (const element of response.data.docs) {
        const imageUrlFinal = imageUrlBase + element.cover_edition_key + '-M.jpg';
        const libro = {
          name: element.title,
          author: element.author_name,
          year: element.first_publish_year,
          url: imageUrlFinal,
          added: false
        };
        datos.push(libro);
      }

      setBooksState(datos);
      /* console.log("Ya cargué el estado"); */
    } catch (error) {
      console.log("Hubo un error: " + error);
    }
  }
  const searchInput = useRef<HTMLInputElement | null>(null);



  const [showToast, setShowToast] = useState(false);
  const toastRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (toastRef.current) {
      const bsToast = new Toast(toastRef.current);
      bsToast.show();
    }
  }, [showToast]);

  getEmaBooks()

  return (
    <>
      <h1>Amazon Salteño</h1>
      <section className="searchSection">
        <input type="text" ref={searchInput} />
        <button className='' onClick={() => searchInput.current ? obtenerDatos(searchInput.current.value) : console.log("no hay Nada xD")}>
          Buscar Libros XD
        </button >
      </section>
      <div className="resultados">
        <Despliegue libros={booksState}></Despliegue>
      </div>
      {/* <div>
      <button className="btn btn-success" onClick={() => setShowToast(!showToast)}>
        {showToast ? 'Ocultar Toast' : 'Mostrar Toast'}
      </button>
      <div className="toast position-absolute m-4" role="alert" ref={toastRef}>
        <div className="toast-body">
          ¡Hola! Este es un mensaje de toast.
        </div>
      </div>
    </div> */}
    </>
  )
}

export default App
