import React from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
      <Navbar />
      <main className="form-signin w-50 mx-auto my-5 shadow-lg p-5">
        <form>
          <div className="text-center">
          <img className="mb-4" src="https://static-00.iconduck.com/assets.00/react-icon-2048x2048-o8k3ymqa.png" alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Sign Up</h1>
</div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInput" placeholder="firstname" />
            <label for="floatingInput">First Name</label>
          </div>

          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInput" placeholder="lastname" />
            <label for="floatingInput">Last Name</label>
          </div>


          <div className="form-floating mb-3">
            <input type="date" className="form-control" id="floatingInput" placeholder="dob" />
            <label for="floatingInput">Date of Birth</label>
          </div>

          <div className="form-floating mb-3 overflow-hidden">
            <div className="d-flex form-control">
              &nbsp;&nbsp;&nbsp;
              <div className="row d-flex">
                <div className="form-check">

                  <input className="form-check-input mt-1 me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label className="form-check-label" for="flexRadioDefault1">
                    Male
                  </label>
                </div>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="row d-flex">
                <div className="form-check">
                  <input className="form-check-input mt-1 me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label className="form-check-label" for="flexRadioDefault1">
                    Female
                  </label>
                </div>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="row d-flex">
                <div className="form-check">
                  <input className="form-check-input mt-1 me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label className="form-check-label" for="flexRadioDefault1">
                    Others
                  </label>
                </div>
              </div>
            </div>
            <label>Gender</label>
          </div>


          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="example@gmail.com" />
            <label for="floatingInput">Email</label>
          </div>

          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="confirmPassword" />
            <label for="floatingPassword">Password</label>
          </div>

          <div className="form-check text-start my-3">
            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
            <label className="form-check-label" for="flexCheckDefault">
              I agree to the terms and conditions
            </label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">Sign Up</button>
        </form>
        Already have account. <Link to={'/signin'}>Sign in</Link>
      </main >
      
      <Footer />
    </>
  )
}

export default Signup
