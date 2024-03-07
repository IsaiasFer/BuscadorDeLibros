import { Libro } from "../../interfaces";

interface childProps {
    onButtonClick: (libro:Libro) => void;
    libro:Libro;
  }


const DeleteButton:React.FC<childProps>=({onButtonClick,libro}) =>{
    return (
        <>
            <div className="button deleteButton" onClick={()=>onButtonClick(libro)}>
                Eliminar
            </div>
        </>
    )
}

export default DeleteButton