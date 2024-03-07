import AddButton from '../wbutton/addButton'
import DeleteButton from '../wbutton/deleteButton'
import { cambiarEstado } from '../../funciones'
import '../wbutton/buttons.css'
import { Libro } from '../../interfaces'


function Book({ name, author, url, year, code, added }: { name: string, author: string, url: string, year: string, code: string, added: boolean }) {
    const libro: Libro = {
        name: name,
        author: author,
        year: year,
        url: url,
        code: code,
        added: added
    }
    return (
        <div className="movieContainer">
            <div className="info">
                <div className="title">
                    <span>{name}</span>
                </div>
                <div className="autor">
                    <p>Autor:</p>
                    <span>{author}</span>
                </div>
                <div className="year">
                    <p>Año: </p>
                    <span>{year}</span>
                </div>
                <section className="buttonSection">
                    {added ? <DeleteButton onButtonClick={cambiarEstado} libro={libro} /> : <AddButton onButtonClick={cambiarEstado} libro={libro} />}
                </section>
            </div>
            <div className="media">
                <figure>
                    <img src={url} alt="" />
                </figure>
            </div>
        </div>
    )
}

export default Book