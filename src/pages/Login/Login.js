import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export default function Login() {
	return (
		<div>
			<div className="wrapper">
				<form className="form-signin">
					<div className="pt-4 ">
						<h2 className="form-signin-heading">Log in</h2>
						<div className="flex flex-col justify-center gap-4 py-8">
							<input
								type="text"
								className="form-control focus:outline-none focus:ring"
								name="username"
								placeholder="Email Address"
								required
							/>
							<input
								type="password"
								className="form-control focus:outline-none focus:ring"
								name="password"
								placeholder="Password"
								required
							/>

							<label className="checkbox">
								<input
									type="checkbox"
									value="remember-me"
									id="rememberMe"
									name="rememberMe"
									className="focus:outline-none focus:ring"
								/>{' '}
								Remember me
							</label>

							<label className="checkbox">
								<Link
									to="/signup"
									className="text-sm text-blue-400 hover:opacity-60"
								>
									New to BOND? Sign up here
								</Link>
							</label>
						</div>
						<button
							className="w-full btn focus:outline-none focus:ring"
							type="submit"
						>
							Login
						</button>
						<hr className="w-auto h-px bg-gray-400 my-7" />
						<div className="flex flex-col gap-4 social-login">
							<a
								href="#"
								className="w-full hover:opacity-90 focus:outline-none focus:ring"
							>
								<i className="fa fa-facebook fa-lg"></i>
								Login in with facebook
							</a>
							<a
								href="#"
								className="w-full hover:opacity-90 focus:outline-none focus:ring"
							>
								<i className="fa fa-google-plus fa-lg"></i>
								Log in with Google
							</a>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}
