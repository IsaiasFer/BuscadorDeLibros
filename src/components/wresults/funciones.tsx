import { Libro } from "../../interfaces";
import { libroEjemplo1, libroEjemplo2 } from "../../objetos";

export function comprobarExistencia(libroParaComprobar: Libro): boolean {
    const addedBooks: Libro[] = [libroEjemplo1, libroEjemplo2]
    for (const libro of addedBooks) {
        if (libro.name === libroParaComprobar.name) {
            return true;
        }
    }
    return false;
}