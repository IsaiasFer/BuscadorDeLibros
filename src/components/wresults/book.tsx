import AddButton from '../wbutton/addButton'
import DeleteButton from '../wbutton/deleteButton'
import { cambiarEstado } from '../../funciones'
import '../wbutton/buttons.css'

function Book({ name, author, url, year ,added}: { name: string, author: string, url: string, year: string ,added:boolean}) {
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
                    {added?<DeleteButton onButtonClick={cambiarEstado}/>:<AddButton onButtonClick={cambiarEstado}/>}
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