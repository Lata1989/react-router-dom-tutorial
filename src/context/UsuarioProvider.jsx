import { useState } from "react";
import { UsuarioContext } from "./UsuarioContext";

// const usuario = {
//     nombre: "Latita",
//     tecnologia: "React",
//     email: "pabloalejandrodelaiglesia@gmail.com",
//     redes: "Latitarg"
// }


export const UsuarioProvider = ({ children }) => {

    const [usuario, setUsuario] = useState({})

    return (
        // <UsuarioContext.Provider value={{usuario, pais: "Argentina", moneda: "$"}}>
        <UsuarioContext.Provider value={{ usuario, setUsuario }}>
            {children}
        </UsuarioContext.Provider>
    );
}