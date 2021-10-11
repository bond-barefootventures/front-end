import React from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'

export default function Signup() {
	return (
		<div>
			<div className="wrapper">
				<form className="form-signin">
					<div className="pt-4 ">
						<h2 className="form-signin-heading">Sign up</h2>
						<div className="flex flex-col justify-center gap-4 mt-8">
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
							<input
								type="password"
								className="form-control focus:outline-none focus:ring"
								name="password"
								placeholder="Confirm password"
								required
							/>
							<label className="checkbox text-sm">
								<input
									type="checkbox"
									value="remember-me"
									id="rememberMe"
									name="rememberMe"
									className="focus:outline-none focus:ring"
								/>
								{'  '}I accept the{' '}
								<Link to="#" className="text-blue-400">
									Terms of Use
								</Link>{' '}
								&{' '}
								<Link to="#" className="text-blue-400">
									Privacy Policy
								</Link>
							</label>
							<label className="my-2 checkbox">
								<Link
									to="/login"
									className="text-sm text-blue-400 hover:opacity-60"
								>
									Already have an account? Log in here
								</Link>
							</label>
							<button
								className="w-full btn focus:outline-none focus:ring"
								type="submit"
							>
								Sign up
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}
