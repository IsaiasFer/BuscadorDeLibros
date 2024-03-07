import React from "react";

interface childProps {
    onButtonClick: () => void;
  }


const DeleteButton:React.FC<childProps>=({onButtonClick}) =>{
    return (
        <>
            <div className="button deleteButton" onClick={onButtonClick}>
                Eliminar
            </div>
        </>
    )
}

export default DeleteButton