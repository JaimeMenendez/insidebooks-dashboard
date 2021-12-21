import React from 'react'
import {Link} from "react-router-dom";
import logo from "../assets/images/Logo_2.2.png"

function Sidebar() {
    return (
        <>
            <ul className="navbar-nav bg-dark sidebar sidebar-dark accordion " id="accordionSidebar">
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={logo} alt="Digital House" />
                    </div>
                </Link>

                <hr className="sidebar-divider my-0" />

                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - InsideBooks</span></Link>
                </li>


                <hr className="sidebar-divider" />


                <div className="sidebar-heading">Acciones</div>
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/products">
                        <i className="fas fa-fw fa-book"></i>
                        <span>Libros</span>
                    </Link>
                </li>


                <li className="nav-item">
                    <Link className="nav-link" to="/users">
                        <i className="fas fa-fw fa-user"></i>
                        <span>Usuarios</span></Link>
                </li>



                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
        </>
    )
}

export default Sidebar