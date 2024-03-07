import { Libro } from "../../interfaces"
import LoadingCard from "../wloadingCard/loadingCard"
import Book from "./book"
import { comprobarExistencia } from "./funciones"
import './styles.css'

function Despliegue({ libros }: {
    libros: Libro[]
}) {
    function cargarLibros() {
        if (libros[0].name == 'libroEjemplodeCarga') {
            return <LoadingCard />
        }
        /* console.log("acabo de cargar libros") */
        return libros.map((libro) =>
            <div className="libro">
                {<Book name={libro.name} author={libro.author} year={libro.year} url={libro.url} added={comprobarExistencia(libro)} />}
            </div>
        )
    }
    return (
        <>
            <section className="moviesContainer" key={crypto.randomUUID()}>
                {libros.length ? cargarLibros() : "Introduce una Nueva Busqueda de tu libro!"}
            </section>
        </>
    )
}

export default Despliegue;