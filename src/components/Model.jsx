import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ModelView from "./ModelView";
import { models, sizes } from "../constants";
import * as THREE from "three";
import { Canvas } from '@react-three/fiber';
import { View } from "@react-three/drei";

gsap.registerPlugin(useGSAP);
const Model = () => {
  const [size, setSize] = useState(sizes[0]);
  const [model, setModel] = useState(models[0]);

  // camera control
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  // model size
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());
  // rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);
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
            <ModelView
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />
            <ModelView
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />
            <Canvas
              className="w-full h-full"
              eventSource={document.getElementById("root")}
              style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: "hidden",
              }}
            >
              <View.Port />
            </Canvas>
          </div>
          <div className="mx-auto w-full">
            <p className="mb-5 text-sm font-light text-center">{model.title}</p>
            <div className="flex-center">
                <ul className="color-container">
                    {
                        (models).map((val ,i)=> (
                            <li key={i} 
                            className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                            style={{backgroundColor: val.color[0]}}
                            onClick={()=>setModel(val)}>

                            </li>
                        ))
                    }
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
