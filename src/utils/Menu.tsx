import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
    const claseActiva = "active";
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/" activeClassName={claseActiva}>
                        Logo
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link"  to="/" activeClassName={claseActiva}>
                                Peliculas
                            </NavLink>

                            <NavLink className="nav-link" to="/generos" activeClassName={claseActiva}>
                                Géneros
                            </NavLink>
                            <NavLink className="nav-link" to="/peliculas/filtrar" activeClassName={claseActiva}>
                                Filtrar Peliculas
                            </NavLink>
                            <NavLink className="nav-link" to="/actores" activeClassName={claseActiva}>
                                Actores
                            </NavLink>
                            <NavLink className="nav-link" to="/cines" activeClassName={claseActiva}>
                                Cines
                            </NavLink>
                            <NavLink className="nav-link" to="/peliculas/crear" activeClassName={claseActiva}>
                                Crear Peliculas
                            </NavLink>
                         
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}
