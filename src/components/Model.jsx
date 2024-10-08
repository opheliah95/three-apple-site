import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ModelView from "./ModelView";
import { models, sizes } from "../constants";
gsap.registerPlugin(useGSAP);
const Model = () => {
  const [size, setSize] = useState(sizes[0]);
  const [model, setModel] = useState(models[0]);
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();
  const small = useRef(new THREE.Group())
  useGSAP(() => {
    gsap.to("#heading", {
      opacity: 1,
      duration: 2,
      y: 0,
    });
  }, []);
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look
        </h1>
        <div className="flex flex-col item-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelView />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
