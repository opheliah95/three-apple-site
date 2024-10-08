import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
const Model = () => {
  useGSAP(() => {
    gsap.to("#heading", {
        opacity: 1,
        duration:2,
        y:0
    })
  }, []);
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look
        </h1>
      </div>
    </section>
  );
};

export default Model;
