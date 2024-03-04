function Pelicula({ name, autor, url, year }: { name: string, autor: string, url: string, year: string }) {
    return (
        <div className="movieContainer">
            <div className="info">
                <div className="title">
                    <span>{name}</span>
                </div>
                <div className="autor">
                    <p>Autor:</p>
                    <span>{autor}</span>
                </div>
                <div className="year">
                    <p>Año: </p>
                    <span>{year}</span>
                </div>
            </div>
            <div className="media">
                <figure>
                    <img src={url} alt="" />
                </figure>
            </div>
        </div>
    )
}

export default Pelicula