import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { rightImg, watchImg } from "../utils";

const Highlight = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
      duration: 1,
    });
    gsap.to(".link", {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.25
      });
  }, []);
  return (
    <section
      id="highlight"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width mb-12 md:flex w-full item-end justify-between">
        <h1 id="title" className="section-heading">
          Get the highlights
        </h1>
        <div className="flex flex-wrap item-end justify-between gap-5">
           <p className="link"> Watch the film
            <img src={watchImg} alt="watch" className="ml-2" />
           </p>
           <p className="link"> Watch the event
            <img src={rightImg} alt="watch" className="ml-2" />
           </p>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
