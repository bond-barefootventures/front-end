import React, { useState, useEffect } from 'react'
import './style.css'

const index = () => {
    const [click, setClick] = useState(true)

    const handleClick = () => {
        if (click) {
            setClick(false)
        }
    }

    return (
        <div className="">
            <div className="modal animate-opacity" style={{
                display: click ? '' : 'none'
            }}>
                <div className="modal-content">
                    <div className="modal-inner" >
                        <span onClick={handleClick} className="modal-close">&times;</span>
                        <div className="flex items-center w-full">
                            <img className="w-1/2" src="https://static.wixstatic.com/media/9f3353_6e195849eb0143c3ba0ced5345f91ce4~mv2.gif" alt="ani-gif" />
                            <div >
                                <h2 className="py-6">Subscribe to our newsletter</h2>
                                <p className="pb-4">Never miss any job updates</p>
                                <div className="flex flex-col ">
                                    <input className="border-b-2 outline-none" placeholder="Email" type="text" />
                                    <button className="mt-6 text-xl text-white shadow-lg w-28 bg-brand-blue rounded-xl">submit</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </div>
    )
}

export default index
