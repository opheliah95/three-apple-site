import React, { Suspense, useref } from "react";
import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  View,
} from "@react-three/drei";
import Lights from "./Lights";
import * as THREE from "three";
import Iphone  from "./Iphone";
import Loader from "./Loader";
const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? "right-[-100%]" : ""}`}
    >
      <ambientLight intensity={0.3} />
      <Lights />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
        target={new THREE.Vector3(0, 0, 0)}
      />
      <group
        ref={groupRef}
        name={`${index === 1} ? 'small' : 'large`}
        position={[0, 0, 0]}
      >
        <Suspense fallback={<Loader/>}>
          <Iphone
             scale={index === 1 ? [15, 15, 15] : [17, 17, 17]} 
             item={item}
            size={size}/>
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
