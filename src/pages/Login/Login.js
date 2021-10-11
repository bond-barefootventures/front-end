import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
export default function Login() {
    return (
        <div>
            <div className="wrapper">
                <form className="form-signin">
                    <div className="pt-4 ">
                        <h2 className="form-signin-heading">Please login</h2>
                        <div className="flex flex-col justify-center gap-4 py-8">
                            <input type="text" className="form-control" name="username" placeholder="Email Address" required />
                            <input type="password" className="form-control" name="password" placeholder="Password" required />

                            <label className="checkbox">
                                <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /> Remember me
                            </label>

                            <label className="checkbox">
                                <Link to="/signup" className="text-sm text-blue-400 hover:opacity-60">If you dont have account? Click here to sign up</Link>
                            </label>
                        </div>
                        <button className="w-full btn " type="submit">Login</button>
                        <h3 className="py-4 text-center">Or</h3>
                        <div className="flex flex-col gap-4 social-login">
                            <a href="#" className="w-full hover:opacity-90 ">
                                <i className="fa fa-facebook fa-lg"></i>
                                Login in with facebook
                            </a>
                            <a href="#" className="w-full hover:opacity-90 ">
                                <i className="fa fa-google-plus fa-lg"></i>
                                log in with Google
                            </a>
                        </div>

                    </div>
                </form >
            </div >
        </div >
    )
}


