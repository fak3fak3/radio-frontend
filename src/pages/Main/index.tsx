import React, { useRef } from "react";
import {
    Text,
    Bvh,
    PerspectiveCamera,
    OrbitControls,
    Edges,
    Billboard,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
    DepthOfField,
    EffectComposer,
    Scanline,
} from "@react-three/postprocessing";
import { Player } from "../../components";
import { useUnit } from "effector-react";
import { $geometry, $material } from "../../store/3d";

const MainPage = () => {
    const geometry = useUnit($geometry);
    const material = useUnit($material);

    if (!geometry || !material) {
        return null;
    }

    return (
        <div className="content">
            <Player />
            {!geometry || !material ? null : (
                <Canvas
                    flat
                    dpr={[1, 1.5]}
                    gl={{ antialias: false }}
                    style={{ background: "#111" }}
                >
                    <ambientLight intensity={1.5 * Math.PI} />
                    <PerspectiveCamera
                        makeDefault
                        position={[0, 0, 1.38]}
                        fov={160}
                        near={0.01}
                        far={10000}
                    />
                    <OrbitControls
                        zoomSpeed={0.1}
                        rotateSpeed={0.1}
                        panSpeed={0.1}
                    />

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
                                {/* <Pixelation granularity={10} /> */}
                            </EffectComposer>
                            <mesh
                                geometry={geometry.geometry as any}
                                rotation={[1.7, 2, 0]}
                                material={material}
                            >
                                <Edges threshold={5} color="black" />
                            </mesh>
                        </group>
                        <Billboard>
                            <Text
                                fontSize={0.7}
                                position={[0, 1.5, 1]}
                                color="white"
                            >
                                HELLO
                            </Text>
                            <Text
                                fontSize={0.7}
                                position={[0, 0.5, 1]}
                                color="white"
                            >
                                THIS IS
                            </Text>
                            <Text
                                fontSize={0.7}
                                position={[0, -0.5, 1]}
                                color="white"
                            >
                                RADIO
                            </Text>
                            <Text
                                fontSize={0.7}
                                position={[0, -1.5, 1]}
                                color="white"
                            >
                                ACHKHOTI
                            </Text>
                        </Billboard>
                    </Bvh>
                </Canvas>
            )}
        </div>
    );
};

export default MainPage;
