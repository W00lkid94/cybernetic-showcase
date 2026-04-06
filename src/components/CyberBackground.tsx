import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const GridPlane = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      (ref.current.material as THREE.ShaderMaterial).uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  const shaderMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 } },
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime;
          varying vec2 vUv;
          void main() {
            vec2 uv = vUv * 40.0;
            float lineX = smoothstep(0.0, 0.05, abs(fract(uv.x) - 0.5));
            float lineY = smoothstep(0.0, 0.05, abs(fract(uv.y + uTime * 0.3) - 0.5));
            float grid = 1.0 - min(lineX, lineY);
            float fade = smoothstep(0.0, 0.5, vUv.y) * smoothstep(1.0, 0.6, vUv.y);
            gl_FragColor = vec4(0.4, 0.2, 1.0, grid * 0.15 * fade);
          }
        `,
        transparent: true,
        side: THREE.DoubleSide,
      }),
    []
  );

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -2, 0]} material={shaderMaterial}>
      <planeGeometry args={[30, 30, 1, 1]} />
    </mesh>
  );
};

const PulsingOrbs = () => {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  const orbs = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      position: [
        Math.cos((i / 6) * Math.PI * 2) * 8,
        Math.sin(i * 1.5) * 2,
        Math.sin((i / 6) * Math.PI * 2) * 8,
      ] as [number, number, number],
      scale: 0.3 + Math.random() * 0.4,
      color: i % 2 === 0 ? "#a064ff" : "#ff40c0",
    }));
  }, []);

  return (
    <group ref={ref}>
      {orbs.map((orb, i) => (
        <mesh key={i} position={orb.position}>
          <sphereGeometry args={[orb.scale, 16, 16]} />
          <meshBasicMaterial color={orb.color} transparent opacity={0.15} />
        </mesh>
      ))}
    </group>
  );
};

const FloatingParticles = () => {
  const ref = useRef<THREE.Points>(null);
  const count = 400;

  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = Math.random() * 15 - 3;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
      spd[i] = Math.random() * 0.01 + 0.003;
    }
    return [pos, spd];
  }, []);

  useFrame(() => {
    if (!ref.current) return;
    const posArray = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      posArray[i * 3 + 1] += speeds[i];
      if (posArray[i * 3 + 1] > 12) posArray[i * 3 + 1] = -3;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#a064ff" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

const CyberBackground = () => (
  <div className="fixed inset-0 z-0">
    <Canvas camera={{ position: [0, 3, 8], fov: 60 }} gl={{ alpha: true }} style={{ background: "transparent" }}>
      <ambientLight intensity={0.2} />
      <GridPlane />
      <FloatingParticles />
      <PulsingOrbs />
    </Canvas>
  </div>
);

export default CyberBackground;
