import React from 'react'

import {Banner, Carousel, HomeInfo} from '../components'
import "./styling/Home.css"


export default function Home() {
    return (
        <div>
            <Carousel />
            <Banner />
            <HomeInfo />
        </div>
    )
}