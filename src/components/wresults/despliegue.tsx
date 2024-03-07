import { Libro } from "../../interfaces"
import LoadingCard from "../wloadingCard/loadingCard"
import Book from "./book"

const libroEjemplo1: Libro = {
    name: "Harry Potter and the Philosopher's Stone",
    author: "string",
    year: "1234",
    url: "",
    added: true
}
const libroEjemplo2: Libro = {
    name: "Le petit prince",
    author: "string",
    year: "1234",
    url: "",
    added: true
}

const addedBooks: Libro[] = [libroEjemplo1, libroEjemplo2]

function Despliegue({ libros }: {
    libros: Libro[]
}) {
    function comprobarExistencia(libroParaComprobar: Libro): boolean {
        for (const libro of addedBooks) {
            /* console.log('Comparando \n' + libro.name, 'con \n' + libroParaComprobar.name); */
            if (libro.name === libroParaComprobar.name) {
                /* console.log("Encontré una coincidencia"); */
                return true;
            }
        }
        return false;
    }

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