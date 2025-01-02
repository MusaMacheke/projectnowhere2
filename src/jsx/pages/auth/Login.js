import React, { useRef, useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { loadingToggleAction, loginAction } from '../../../store/actions/AuthActions';
import Swal from 'sweetalert2';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// image and css
import logo from "../../../images/logo-full.png";
import loginbg from "../../../images/pic1.png";
import './style.css'

// import axios from 'axios';

library.add(faEyeSlash, faEye)

function Login(props) {
	const emailRef = useRef(null)
	const passRef = useRef(null)
	const [showPass, setShowPass] = useState(false)
	//  email: demo@example.com
	//  123456

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault()
		const user = {
			email: emailRef.current.value,
			pass: passRef.current.value
		}

		if (!user.email || !user.pass)
			return new Swal('Oops', 'Please fill up all the fields', 'error')
		dispatch(loadingToggleAction(true));
		dispatch(loginAction(user.email, user.pass, navigate));
		
	}

	return (
		<div className="authincation d-flex flex-column flex-lg-row flex-column-fluid">
			<div className="login-aside text-center  d-flex flex-column flex-row-auto">
				<div className="d-flex flex-column-auto flex-column pt-lg-40 pt-15">
					<div className="text-center mb-4 pt-5">
						<img src={logo} alt="" />
					</div>
					<h3 className="mb-2">Welcome back!</h3>
					<p>User Experience & Interface Design <br />Strategy SaaS Solutions</p>
				</div>
				<div className="aside-image" style={{ backgroundImage: "url(" + loginbg + ")" }}></div>
			</div>
			<div className="container flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto">
				<div className="d-flex justify-content-center h-100 align-items-center">
					<div className="authincation-content style-2">
						<div className="row no-gutters">
							<div className="col-xl-12 tab-content">
								<div id="sign-in" className="auth-form   form-validation">
									{props.errorMessage && (
										<div className='bg-red-300 text-red-900 border border-red-900 p-1 my-2'>
											{props.errorMessage}
										</div>
									)}
									{props.successMessage && (
										<div className='bg-green-300 text-green-900 border border-green-900 p-1 my-2'>
											{props.successMessage}
										</div>
									)}
									<form onSubmit={handleSubmit} className="form-validate">
										<h3 className="text-center mb-4 text-black">Sign in your account</h3>
										<div className="form-group mb-3">
											<label className="mb-1" htmlFor="email"><strong>Email</strong></label>
											<div>
												<input
													className="form-control"
													ref={emailRef}
													id='email'
													type="text"
													placeholder="Type Your Email Address" />
											</div>
										</div>
										<div className="form-group mb-3">
											<label htmlFor='pass' className="mb-1"><strong>Password</strong></label>
											<div className='form-control d-flex align-items-center'>
												<input
													ref={passRef}
													id='pass'
													// className="form-control "
													type={showPass ? 'text' : 'password'}
													placeholder='Type Your Password'
												/>
												<FontAwesomeIcon icon={showPass ? 'eye' : 'eye-slash'} onClick={(e) => setShowPass(!showPass)} />
											</div>
										</div>
										<div className="form-row d-flex justify-content-between mt-4 mb-2">
											<div className="form-group mb-3">
												<div className="custom-control custom-checkbox ml-1">
													<input type="checkbox" className="form-check-input" id="basic_checkbox_1" />
													<label className="form-check-label" htmlFor="basic_checkbox_1">Remember my preference</label>
												</div>
											</div>
										</div>
										<div className="text-center form-group mb-3">
											<button type="submit" className="btn btn-primary btn-block">
												Sign In
											</button>
										</div>
									</form>
									<div className="new-account mt-3">
										<p>Don't have an account? <Link className="text-primary" to="/page-register">Sign up</Link></p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	);
};

const mapStateToProps = (state) => {
	return {
		errorMessage: state.auth.errorMessage,
		successMessage: state.auth.successMessage,
		showLoading: state.auth.showLoading,
	};
};
export default connect(mapStateToProps)(Login);





// const emailRef = useRef(null)
// 	const passRef = useRef(null)
// 	const [showPass, setShowPass] = useState(false)

// 	const navigate = useNavigate();
// 	const dispatch = useDispatch();

// 	const handleSubmit = (e) => {
// 		e.preventDefault()
// 		const user = {
// 			email: emailRef.current.value,
// 			pass: passRef.current.value
// 		}

// 		if (!user.email || !user.pass)
// 			return new Swal('Oops', 'Please fill up all the fields', 'error')

// 		axios.post('/auth/login', user, {
// 			baseURL: 'http://localhost:8000/api/v1'
// 		})
// 			.then(res => console.log(res))
// 			.catch(err => {
// 				return new Swal({
// 					title: 'Oops',
// 					text: err.response.data.message,
// 					icon: 'error',
// 					confirmButtonText: 'Try Again'
// 				})
// 			})
// 		dispatch(loadingToggleAction(true));
// 		dispatch(loginAction(user.email, user.pass, navigate));
// 		console.log("Hola")

// 	}




// return new Swal({
		// 	title: 'Oops',
		// 	// text: err.response.data.message,
		// 	text: 'error message',
		// 	icon: 'error',
		// 	confirmButtonText: 'Try Again'
		// })
		// dispatch(loadingToggleAction(true));
		// dispatch(loginAction(user.email, user.pass, navigate));