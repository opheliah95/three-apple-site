import React from 'react'
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import { heroVideo } from '../utils';
gsap.registerPlugin(useGSAP)
const Hero = () => {
    useGSAP(()=> {
        gsap.to(
            "#hero", {
                opacity: 1,
                transition: 2
            }
        )
    }, [])
  return (
    <section className="nav-height w-full bg-black relative">
        <div className="h-5/6 w-full flex-center flex-col">
            <p className="hero-title" id="hero">iPhone 15 Pro</p>
        </div>
        <div className="md:w-10/12 w-9/12">
            <video src={heroVideo}></video>
        </div>
    </section>
  )
}

export default Hero
