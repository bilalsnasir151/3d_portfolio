import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
	const computer = useGLTF("./f1_2022_generic_free/scene.gltf");

	return (
		<mesh>
			{/* Ambient light */}
			<ambientLight intensity={0.5} />

			{/* Directional light (simulates sunlight) */}
			<directionalLight
				position={[5, 10, 5]}
				intensity={1}
				castShadow
				shadow-mapSize={{ width: 1024, height: 1024 }}
			/>

			{/* Point light (additional fill light) */}
			<pointLight
				position={[0, 5, 0]}
				intensity={0.5}
				distance={10}
				decay={2}
			/>
			<primitive
				object={computer.scene}
				scale={isMobile ? 0.5 : 1.5}
				position={isMobile ? [0, -1, 0] : [0, -2, 0]}
				rotation={[-0.01, -0.2, -0.1]}
			/>
		</mesh>
	);
};

const ComputersCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		// Add a listener for changes to the screen size
		const mediaQuery = window.matchMedia("(max-width: 500px)");

		// Set the initial value of the `isMobile` state variable
		setIsMobile(mediaQuery.matches);

		// Define a callback function to handle changes to the media query
		const handleMediaQueryChange = (event) => {
			setIsMobile(event.matches);
		};

		// Add the callback function as a listener for changes to the media query
		mediaQuery.addEventListener("change", handleMediaQueryChange);

		// Remove the listener when the component is unmounted
		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);

	return (
		<Canvas
			frameloop="demand"
			shadows
			dpr={[1, 2]}
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					minPolarAngle={Math.PI / 2.5} // Minimum vertical rotation (in radians)
					maxPolarAngle={Math.PI - Math.PI / 2.5} // Maximum vertical rotation (in radians)
				/>

				<Computers isMobile={isMobile} />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default ComputersCanvas;
