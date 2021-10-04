import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

export default function Movie({movie}) {

    const {user,toggleMovie}=useContext(UserContext)

    const imgStyles={
        height:'250px',
        objectFit:'cover',
        objectPosition:'top'
    }

    //ponemoslos ? en caso de user si existe el usuario pues las pelicula sino no las pongas= sin esto al cerrar ecion sale errro
    //en caso de favorite movies si existe la propiedad incluye si no no lo hagas
    const isFavorite =user?.favoriteMovies?.includes(movie.id)

    return (
        <div className="card">
            <img src={movie.imageUrl} alt={movie.title}
                className="card-image-top "
                style={ imgStyles}
            />
            <div className="card-body">
            <h2>{ movie.title}</ h2>
            
            {/* //si no esta logueado ocultar el boton de favorite */}
            {user &&
                <button 
                className={ `btn ${isFavorite? 'btn-success': 'btn-outline-primary '}`}
                    onClick={()=>toggleMovie(movie.id)}
                >
                    Favorito
                </button>
             

            }
            </div>

        </div>
    )
}
