import React from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
      <Navbar/>
      
      <main className="form-signin w-50 mx-auto my-5 shadow-lg p-5">
                <form>
                    <img className="mb-4" src="https://static-00.iconduck.com/assets.00/react-icon-2048x2048-o8k3ymqa.png" alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Register</h1>

                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="firstName" placeholder="firstname" />
                        <label for="firstName">First Name</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="lastName" placeholder="Lastname" />
                        <label for="lastName">First Name</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="date" placeholder="dob" />
                        <label for="floatingInput">Date of Birth</label>
                    </div>


                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div className="form-check text-start my-3">
                        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                            Remember me
                        </label>
                    </div>
                    <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                    Already have accout. <Link to={'/signin'}>Sign in</Link>
                </form>
            </main>
      <Footer/>
    </>
  )
}

export default Signup
