import React, { useRef } from "react";
import { useUnit } from "effector-react";
import { $geometry, $material } from "../../store/3d";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import {
    Billboard,
    Bvh,
    Edges,
    OrbitControls,
    PerspectiveCamera,
    Text,
} from "@react-three/drei";
import {
    DepthOfField,
    EffectComposer,
    Scanline,
    Vignette,
} from "@react-three/postprocessing";

const FixedText = () => {
    const { camera } = useThree();
    const group = useRef<THREE.Group>(null!);

    useFrame(() => {
        if (!group.current) return;

        const vFOV = THREE.MathUtils.degToRad((camera as any).fov);
        const height = 2 * Math.tan(vFOV / 2) * camera.position.z;
        const scaleFactor = height / 5;

        group.current.scale.setScalar(scaleFactor);
    });

    return (
        <group ref={group} position={[0, 0, 1]}>
            <Billboard>
                {["HELLO", "THIS IS", "RADIO", "ACHKHOTI"].map((text, i) => (
                    <Text
                        key={text}
                        fontSize={0.7}
                        position={[0, 1.5 - i * 1, 0]}
                        color="#000"
                    >
                        {text}
                    </Text>
                ))}
            </Billboard>
        </group>
    );
};

const Scene = () => {
    const geometry = useUnit($geometry);
    const material = useUnit($material);

    if (!geometry || !material) {
        return null;
    }

    return (
        <Canvas
            flat
            dpr={[1, 1.5]}
            gl={{ antialias: false }}
            onCreated={({ scene }) => {
                scene.background = new THREE.Color("#ffffff");
            }}
        >
            <ambientLight intensity={1.5 * Math.PI} />
            <PerspectiveCamera
                makeDefault
                position={[0, 0, 1.38]}
                fov={160}
                near={0.01}
                far={10000}
            />
            <OrbitControls zoomSpeed={0.1} rotateSpeed={0.1} panSpeed={0.1} />

            <Bvh firstHitOnly>
                <group>
                    <EffectComposer>
                        <Scanline
                            density={0.7}
                            color="#000000"
                            opacity={0.2}
                            delay={0.5}
                            speed={0.5}
                        />
                        <DepthOfField
                            focusDistance={0.5}
                            focalLength={5}
                            bokehScale={10}
                            height={480}
                            width={640}
                        />
                        {/* <Vignette offset={0.3} darkness={0.6} /> */}
                    </EffectComposer>
                    <mesh
                        geometry={(geometry as any).geometry as any}
                        rotation={[1.7, 2, 0]}
                        material={material}
                    >
                        <Edges threshold={5} color="black" />
                    </mesh>
                </group>
            </Bvh>
        </Canvas>
    );
};

export default Scene;
