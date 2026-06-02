import { Environment, Lightformer } from "@react-three/drei";
import React from "react";

const StudioLights = () => {
    return (
        <group name="lights">

            {/* Soft overall illumination */}
            <ambientLight intensity={0.5} />

            <Environment resolution={256}>
                <group>
                    <Lightformer
                        form="rect"
                        intensity={5}
                        position={[-10, 5, 0]}
                        scale={10}
                        rotation={[0,Math.PI / 2, 0]}
                    />
                    <Lightformer
                        form="rect"
                        intensity={5}
                        position={[10, 5, 0]}
                        scale={10}
                        rotation={[0,Math.PI / 2, 0]}
                    />
                    <Lightformer
                        form="rect"
                        intensity={3}
                        position={[0, 3, -10]}
                        scale={8}
                    />
                </group>
            </Environment>
            <spotLight 
                position={[-2, 10, 5]}
                angle={0.15}
                decay={0}
                intensity={Math.PI * 0.2}
            />
            <spotLight 
                position={[8, 8, 8]}
                intensity={5}
                angle={0.4}
                decay={2}
                penumbra={1}
            />
            <spotLight 
                position={[-8, 4,6]}
                angle={0.5}
                decay={2}
                intensity={2}
                penumbra={1}
            />
            <spotLight 
                position={[0, 5, 10]}
                intensity={3}
                angle={0.6}
                decay={2}
                penumbra={1}
            />
        </group>
    )
}
export default StudioLights