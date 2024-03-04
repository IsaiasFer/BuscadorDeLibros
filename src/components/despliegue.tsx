import { Libro } from "../interfaces"
import LoadingCard from "./loadingCard"
import Pelicula from "./pellicula"

function Despliegue({ libros }: {
    libros: Libro[]
}) {

    function cargarLibros() {
        if (libros[0].name=='libroEjemplodeCarga'){
            return <LoadingCard/>
        }
        /* console.log("acabo de cargar libros") */
        return libros.map((libro) =>
            <div className="libro">
                {<Pelicula name={libro.name} autor={libro.autor} year={libro.year} url={libro.url} />
                }
            </div>
        )
    }
    return (
        <>
            <section className="moviesContainer">
                {libros.length ? cargarLibros() : "Introduce una Nueva Busqueda de tu libro!"}
            </section>
        </>
    )
}

export default Despliegue;