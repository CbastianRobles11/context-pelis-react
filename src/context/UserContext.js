//aki e guardara la informacion del usuario autentificado

import { createContext,useState } from "react";

const UserContext = createContext()

const initialUser={
    id:1,
    name:'Sebastian1',
    favoriteMovies:[1,2,3]
}

const UserProvider=({children})=>{
    
    const [user,setUser]=useState(initialUser)
    
    const login=()=>{
        setUser(initialUser)
    }

    const logout=()=>{
        setUser(null)
    }

    //seleccion de peliculas favoritas
    const toggleMovie=(movieid)=>{

        const isFavorite=user.favoriteMovies.includes(movieid)
        const favoriteMovies=isFavorite
        ?user.favoriteMovies.filter(m=> m!==movieid) //que borre las que no sean igual a id
        :[...user.favoriteMovies,movieid]  //incluya las que selecciono


       setUser({
           ...user,
           favoriteMovies
       })

    }

    const data={user,login ,logout,toggleMovie}
    
    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}
export {UserProvider}
export default UserContext
