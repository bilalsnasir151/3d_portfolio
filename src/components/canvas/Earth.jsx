import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
	const earth = useGLTF("./sw/scene.gltf");

	return (
    
		<primitive
			object={earth.scene}
			scale={0.1}
			position-y={0}
			rotation-y={0}
			rotation={[0, 0, 0]}
		/>
    
	);
};

const EarthCanvas = () => {
	return (
		<Canvas
			shadows
			frameloop="demand"
			dpr={[1, 2]}
			gl={{ preserveDrawingBuffer: true }}
			camera={{
				fov: 45,
				near: 0.1,
				far: 200,
				position: [0, 10, 20],
			}}>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
        autoRotate
        autoRotateSpeed={2}
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				{/* Add Ambient Light */}
				<ambientLight intensity={0.9} />
				{/* Add Directional Light */}
				<directionalLight
					intensity={5} // Adjust the light's intensity
					castShadow // Enable shadows
					shadow-mapSize-width={1024}
					shadow-mapSize-height={1024}
				/>
        

				<Earth />

				<Preload all />
			</Suspense>
		</Canvas>
	);
};

export default EarthCanvas;
