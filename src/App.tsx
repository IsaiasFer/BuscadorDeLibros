import Despliegue from './components/wresults/despliegue';
import { useRef, useState, useEffect } from 'react'
import { Libro } from './interfaces';
import {obtenerDatos } from './funciones'
import { Toast } from 'bootstrap';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [booksState, setBooksState] = useState<Libro[]>([])
  const searchInput = useRef<HTMLInputElement | null>(null);
  const [showToast, setShowToast] = useState(false);
  const toastRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (toastRef.current) {
      const bsToast = new Toast(toastRef.current);
      bsToast.show();
    }
  }, [showToast]);

  return (
    <>
      <h1>Amazon Salteño</h1>
      <section className="searchSection">
        <form onSubmit={(event:React.FormEvent<HTMLFormElement>) => searchInput.current ? obtenerDatos(searchInput.current.value,event,setBooksState) : console.log("no hay Nada xD")}>
        <input type="text" ref={searchInput} />
        <button className=''>
          Buscar Libros
        </button >
        </form>
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
