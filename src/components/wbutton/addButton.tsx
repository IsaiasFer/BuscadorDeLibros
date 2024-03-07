interface childProps {
    onButtonClick: () => void;
  }

const AddButton: React.FC<childProps> = ({ onButtonClick }) => {
    return (
        <>
            <div className="button addButton" onClick={onButtonClick}>
                Agregar
            </div>
        </>
    )
}

export default AddButton