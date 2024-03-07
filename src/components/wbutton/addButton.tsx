import { Libro } from "../../interfaces";

interface childProps {
    onButtonClick: (libro:Libro) => void;
    libro:Libro;
  }

const AddButton: React.FC<childProps> = ({ onButtonClick,libro}) => {
    return (
        <>
            <div className="button addButton" onClick={()=>onButtonClick(libro)}>
                Agregar
            </div>
        </>
    )
}

export default AddButton