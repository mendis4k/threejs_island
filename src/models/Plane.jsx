import React from "react";
import planeScane from "../assets/3d/plane.glb";
import { useGLTF } from "@react-three/drei";

const Plane = ({ isRotating, ...props }) => {
  const { scene, animation } = useGLTF(planeScane);
  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
