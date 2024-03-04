import { useRef, useState } from 'react'
import './assets/styles/index.css'
import Despliegue from './components/despliegue';
import { Libro } from './interfaces';
import {reemplazarEspaciosPorMas} from './funciones'


const libroCargando: Libro = {
  name: 'libroEjemplodeCarga',
  autor: "string",
  year: "1234",
  url: ""
}

function App() {
  const [booksState, setBooksState] = useState<Libro[]>([])
  async function obtenerDatos(nombredelibro: string) {
    let linkBase: string = 'https://openlibrary.org/search.json?q='
    let linkOptions: string = '&fields=title,author_name,first_publish_year,cover_edition_key&limit=3'
    let imageUrlBase: string = 'https://covers.openlibrary.org/b/olid/'
    let nombreDeLibroFinal: string = reemplazarEspaciosPorMas(nombredelibro)
    let linkFinal: string = linkBase + nombreDeLibroFinal + linkOptions
    let datos: Libro[] = []
    setBooksState([libroCargando])
    await fetch(linkFinal)
      .then(async (response) => {
        console.log("buscando " + linkFinal)
        const data = await response.json();
        for (let i = 0; i < data.docs.length; i++) {
          let element = data.docs[i];
          let imageUrlFinal = imageUrlBase + element.cover_edition_key + '-M.jpg'
          let libro: Libro = {
            name: element.title,
            autor: element.author_name,
            year: element.first_publish_year,
            url: imageUrlFinal
          }
          datos.push(libro)
        }
        setBooksState(datos)
        /* console.log("Ya cargue el estado") */
      })
      .catch(function (error) {
        console.log("Hubo un error :'(" + error);
      });
  }
  const searchInput = useRef<HTMLInputElement | null>(null);

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
    </>
  )
}

export default App
