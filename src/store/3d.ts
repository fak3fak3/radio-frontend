import { Gltf } from "@react-three/drei";
import { createEffect, createEvent, createStore } from "effector";
import { Material, Mesh, Object3D, Object3DEventMap } from "three";
import { GLTFLoader } from "three-stdlib";

const loader = new GLTFLoader();

type GLTFResult = {
    nodes: Record<string, Mesh>;
    materials: Record<string, Material>;
};

export const loadGLTF = (url: string): Promise<GLTFResult> => {
    const loader = new GLTFLoader();

    return new Promise((resolve, reject) => {
        loader.load(
            url,
            (gltf) => {
                const nodes: Record<string, Mesh> = {};
                const materials: Record<string, Material> = {};

                gltf.scene.traverse((obj) => {
                    if ((obj as Mesh).isMesh) {
                        const mesh = obj as Mesh;
                        if (mesh.name) nodes[mesh.name] = mesh;

                        const mat = mesh.material;

                        console.log("mat", mat);

                        if (Array.isArray(mat)) {
                            mat.forEach((m) => {
                                if (m.name) materials[m.name] = m;
                            });
                        } else if (mat.name) {
                            materials[mat.name] = mat;
                        } else {
                            materials["material"] = mat;
                        }
                    }
                });

                resolve({ nodes, materials });
            },
            undefined,
            reject
        );
    });
};

const $geometry = createStore<Object3D<Object3DEventMap> | null>(null);
const $material = createStore<Material | null>(null);

const setGeometry = createEvent<Object3D<Object3DEventMap>>();
const setMaterial = createEvent<Material>();

export const loadModelFx = createEffect(async (url: string) => {
    const { nodes, materials } = await loadGLTF(url);

    console.log("nodes", nodes);
    console.log("materials", materials);

    setGeometry(nodes["mesh_0"]);
    setMaterial(materials["material"]);
});

$geometry.on(setGeometry, (_, geometry) => geometry);
$material.on(setMaterial, (_, material) => material);

loadModelFx("./room.glb");

export { $geometry, $material, setGeometry, setMaterial };
