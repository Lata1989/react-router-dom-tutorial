import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";

export const Home = () => {

    const { usuario } = useContext(UsuarioContext)

    return (
        <>
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Tecnologia</th>
                            <th scope="col">Email</th>
                            <th scope="col">Redes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.tecnologia}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.redes}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    );
}