import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='custom-css row bg-dark py-2 d-flex align-item-center justify-content-center'>
                    <div className='col-md-3 text-center'>
                        <Link class="navbar-brand fs-3 fw-bold text-white" to="/">Navbar</Link>
                    </div>
                    <div className='col-md-6'>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-warning" type="submit">Search</button>
                        </form>
                    </div>
                    <div className='col-md-3 d-flex justify-content-evenly'>
                        <Link to='/signin'><i class='bi bi-box-arrow-in-right fs-3 fw-bold text-white'></i></Link>
                        <Link to='/signup'><i class="bi bi-person-plus fs-3 fw-bold text-white"></i></Link>
                        <Link to='/cart'><i class="bi bi-cart-plus fs-3 fw-bold text-white"></i></Link>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg bg-secondary">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                               <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                            </li>
                            <li className="nav-item">
                               <Link className="nav-link" to="#">Links</Link>
                            </li>
                            <li className="nav-item">
                               <Link className="nav-link" to="#">Services</Link>
                            </li>
                            <li className="nav-item">
                               <Link className="nav-link" to="#">Blog</Link>
                            </li>
                            <li className="nav-item">
                               <Link className="nav-link" to="#">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
            </nav>
        </>
    )
}

export default Navbar
