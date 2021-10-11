import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
export default function Signup() {
    return (
        <div>
            <div className="wrapper">
                <form className="form-signin">
                    <div className="pt-4 ">
                        <h2 className="form-signin-heading">Signup form</h2>
                        <div className="flex flex-col justify-center gap-4 py-8">
                            <input type="text" className="form-control" name="username" placeholder="Email Address" required />
                            <input type="password" className="form-control" name="password" placeholder="Password" required />
                            <input type="password" className="form-control" name="password" placeholder="Confirm password" required />
                            <label className="checkbox">
                                <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /> I accept the <span className="text-blue-300">Terms of Use</span> & <span className="text-blue-300">Privacy Policy</span>
                            </label>
                            <label className="py-2 checkbox">
                                <Link to="/login" className="text-sm text-blue-400 hover:opacity-60">Already have an account? Click here to login</Link>
                            </label>
                        </div>

                        <button className="w-full btn " type="submit">Sign up</button>


                    </div>
                </form >
            </div >
        </div >
    )
}


