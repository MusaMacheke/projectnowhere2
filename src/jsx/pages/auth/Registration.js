import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { connect } from 'react-redux';

// image
import logo from "../../../images/logo-full.png";

import axios from "axios";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.css'

library.add(faEyeSlash, faEye)

function Register(props) {
  const usernameRef = useRef(null)
  const emailRef = useRef(null)
  const passRef = useRef(null)
  const cpassRef = useRef(null)
  const [showPass, setShowPass] = useState(false)
  const [showCpass, setShowCpass] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      pass: passRef.current.value,
      cpass: cpassRef.current.value
    }
    console.log(usernameRef, emailRef)
    if (!user.username || !user.email || !user.pass || !user.cpass)
      return new Swal('Oops', 'Please fill up all the fields', 'error')
    if (user.pass !== user.cpass)
      return new Swal('Oops', `Password don't match with confirm password`, 'error')

    axios.post('/auth/signup', user, {
      // baseURL: 'http://localhost:8000/api/v1'
      baseURL: 'https://adminbackend-hb4i.onrender.com/api/v1'
    })
      .then(res => {
        new Swal({
          title: 'Success',
          html: `<p style="text-align: center">${res.data.message}</p>                                                      `,
          icon: 'success',
          button: 'Ok'
        })
        console.log(res)
      })
      .catch(err => {
        new Swal({
          title: 'Oops',
          text: err.response.data.message,
          icon: 'error',
          confirmButtonText: 'Try Again'
        })
        console.error('API Error:', err);
      })
  }
  return (
    <div className="authincation h-100 p-meddle">
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-md-6">
            <div className="authincation-content">
              <div className="row no-gutters">
                <div className="col-xl-12">
                  <div className="auth-form">
                    <div className="text-center mb-3">
                      <Link to="/login">
                        <img src={logo} alt="" />
                      </Link>
                    </div>
                    <h4 className="text-center mb-4 ">Sign up your account</h4>

                    <form onSubmit={handleSubmit}>
                      <div className="form-group mb-3">
                        <label htmlFor="username" className="mb-1 ">
                          <strong>Username</strong>
                        </label>
                        <input
                          id="username"
                          ref={usernameRef}
                          type="text"
                          className="form-control"
                          placeholder="username"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="email" className="mb-1 ">
                          <strong>Email</strong>
                        </label>
                        <input
                          id="email"
                          ref={emailRef}
                          className="form-control"
                          placeholder="email"
                        />
                      </div>
                      <div className="form-group mb-3 ">
                        <label htmlFor="pass" className="mb-1 ">
                          <strong>Password</strong>
                        </label>
                        <div className="form-control d-flex align-items-center">
							<input
							  id="pass"
							  ref={passRef}
							  
							  placeholder="password"
							  type={showPass ? "text" : "password"}
							/>
							<FontAwesomeIcon icon={showPass ? 'eye' : 'eye-slash'} onClick={(e) => setShowPass(!showPass)} />
						</div>
                      </div>
                      <div className="form-group mb-3 ">
                        <label htmlFor="cpass" className="mb-1 ">
                          <strong>Confirm Password</strong>
                        </label>
                        <div className="form-control d-flex align-items-center">
							<input
							  id="cpass"
							  ref={cpassRef}
							
							  placeholder="confirm password"
							  type={showCpass ? "text" : "password"}
							/>
							<FontAwesomeIcon icon={showCpass ? 'eye' : 'eye-slash'} onClick={(e) => setShowCpass(!showCpass)} />
						</div>
                      </div>
                      <div className="text-center mt-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          Sign me up
                        </button>
                      </div>
                    </form>
                    <div className="new-account mt-3">
                      <p className="">
                        Already have an account?{" "}
                        <Link className="text-primary" to="/login">
                          Sign in
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
};

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage,
    successMessage: state.auth.successMessage,
    showLoading: state.auth.showLoading,
  };
};

export default connect(mapStateToProps)(Register);



// <form onSubmit={handleSubmit}>
// 			<h1>Registration</h1>

// 			<div>
// 				<label htmlFor='username'>Username</label>
// 				<input ref={usernameRef} id='username' type="text" placeholder='Username' />
// 			</div>
// 			<div>
// 				<label htmlFor='email'>Email</label>
// 				<input ref={emailRef} id='email' type="text" placeholder='Email' />
// 			</div>
// 			<div>
// 				<label htmlFor='pass'>Password</label>
// 				<input ref={passRef} id='pass'
// 					type={showPass ? "text" : "password"}
// 					placeholder='Password' />
// 				<FontAwesomeIcon icon={showPass ? 'eye' : 'eye-slash'} onClick={(e) => setShowPass(!showPass)} />
// 			</div>
// 			<div>
// 				<label htmlFor='cpass'>Confirm Password</label>
// 				<input ref={cpassRef} id='cpass'
// 				type={showPass ? "text" : "password"}
// 				placeholder='Confirm Password' />
// 				<FontAwesomeIcon icon={showPass ? 'eye' : 'eye-slash'} onClick={(e) => setShowPass(!showPass)} />
// 			</div>
// 			<button type="submit">Click</button>
// 		</form>