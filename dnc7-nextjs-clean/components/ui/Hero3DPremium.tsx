'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function useIsMobile() {
  const [m, setM] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 900px)');
    const on = () => setM(mq.matches);
    on();
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  return m;
}

/** Halo — elegant cinematic ring behind the subject */
function Halo() {
  const ring1 = useRef<THREE.Mesh>(null!);
  const ring2 = useRef<THREE.Mesh>(null!);
  const ring3 = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ring1.current) {
      ring1.current.rotation.z = t * 0.06;
      (ring1.current.material as THREE.MeshBasicMaterial).opacity = 0.18 + Math.sin(t * 0.5) * 0.04;
    }
    if (ring2.current) {
      ring2.current.rotation.z = -t * 0.04;
    }
    if (ring3.current) {
      ring3.current.rotation.z = t * 0.02;
      ring3.current.rotation.x = Math.sin(t * 0.3) * 0.08;
    }
  });

  return (
    <group position={[3.4, 0.4, -2]}>
      {/* Outer soft glow ring */}
      <mesh ref={ring3} rotation={[0.1, 0, 0]}>
        <ringGeometry args={[2.6, 2.78, 128]} />
        <meshBasicMaterial color="#F97316" transparent opacity={0.12} side={THREE.DoubleSide} />
      </mesh>
      {/* Mid accent ring */}
      <mesh ref={ring2}>
        <ringGeometry args={[2.15, 2.22, 128]} />
        <meshBasicMaterial color="#FCD34D" transparent opacity={0.22} side={THREE.DoubleSide} />
      </mesh>
      {/* Inner thin ring */}
      <mesh ref={ring1}>
        <ringGeometry args={[1.85, 1.87, 128]} />
        <meshBasicMaterial color="#F97316" transparent opacity={0.2} side={THREE.DoubleSide} />
      </mesh>
      {/* Center radial glow */}
      <mesh position={[0, 0, -0.3]}>
        <circleGeometry args={[2.4, 64]} />
        <meshBasicMaterial color="#F97316" transparent opacity={0.035} />
      </mesh>
    </group>
  );
}

/** Light beams — soft cinematic god-rays sweeping across */
function LightBeams({ mobile }: { mobile: boolean }) {
  const group = useRef<THREE.Group>(null!);
  const count = mobile ? 3 : 5;

  const beams = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      x: 2 + i * 1.2,
      rot: -0.35 - i * 0.08,
      h: 14,
      w: 0.35 + (i % 2) * 0.15,
      speed: 0.06 + i * 0.02,
      offset: i * 0.7,
      opacity: 0.035 + (i % 2) * 0.02,
    }));
  }, [count]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    group.current.children.forEach((child, i) => {
      const b = beams[i];
      const mat = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
      mat.opacity = b.opacity + Math.sin(t * b.speed + b.offset) * 0.015;
    });
  });

  return (
    <group ref={group} position={[0, 0, -2]}>
      {beams.map((b, i) => (
        <mesh key={i} position={[b.x, 0, -1]} rotation={[0, 0, b.rot]}>
          <planeGeometry args={[b.w, b.h]} />
          <meshBasicMaterial color={i % 2 === 0 ? '#FCD34D' : '#F97316'} transparent opacity={b.opacity} depthWrite={false} />
        </mesh>
      ))}
    </group>
  );
}

/** Sparkles — delicate, cinematic, concentrated around the subject */
function Sparkles({ count }: { count: number }) {
  const points = useRef<THREE.Points>(null!);

  const { positions, phases, baseSize } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const ph = new Float32Array(count);
    const bs = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      // Concentrate around the photo (right side), gaussian-ish falloff
      const cx = 3.3 + (Math.random() - 0.5) * 5;
      const cy = (Math.random() - 0.5) * 5;
      const cz = (Math.random() - 0.5) * 3 - 0.5;
      pos[i * 3] = cx;
      pos[i * 3 + 1] = cy;
      pos[i * 3 + 2] = cz;
      ph[i] = Math.random() * Math.PI * 2;
      bs[i] = 0.5 + Math.random() * 0.8;
    }
    return { positions: pos, phases: ph, baseSize: bs };
  }, [count]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const pos = points.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] += Math.sin(t * 0.25 + phases[i]) * 0.0025;
      pos[i * 3] += Math.cos(t * 0.18 + phases[i]) * 0.0012;
    }
    points.current.geometry.attributes.position.needsUpdate = true;
    const mat = points.current.material as THREE.PointsMaterial;
    mat.opacity = 0.5 + Math.sin(t * 0.6) * 0.12;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#FCD34D" transparent opacity={0.6} sizeAttenuation depthWrite={false} />
    </points>
  );
}

/** Soft color blobs — painterly background depth */
function SoftBlobs() {
  const group = useRef<THREE.Group>(null!);

  const blobs = useMemo(() => [
    { pos: [4.5, 2, -4] as [number, number, number], color: '#F97316', scale: 2.2, speed: 0.12 },
    { pos: [5.5, -1.5, -5] as [number, number, number], color: '#FCD34D', scale: 2, speed: 0.1 },
    { pos: [2.5, 0, -4.5] as [number, number, number], color: '#FB923C', scale: 1.6, speed: 0.14 },
  ], []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    group.current.children.forEach((child, i) => {
      const b = blobs[i];
      child.position.y = b.pos[1] + Math.sin(t * b.speed + i * 1.5) * 0.6;
      child.position.x = b.pos[0] + Math.cos(t * b.speed * 0.8 + i) * 0.35;
    });
  });

  return (
    <group ref={group}>
      {blobs.map((b, i) => (
        <mesh key={i} position={b.pos} scale={b.scale}>
          <sphereGeometry args={[1, 24, 24]} />
          <meshBasicMaterial color={b.color} transparent opacity={0.04} />
        </mesh>
      ))}
    </group>
  );
}

function CameraRig() {
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.pointer.x * 0.18, 0.008);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.pointer.y * 0.1 + 0.4, 0.008);
    state.camera.lookAt(3, 0, 0);
  });
  return null;
}

export default function Hero3DPremium() {
  const mobile = useIsMobile();
  return (
    <Canvas
      camera={{ position: [0, 0.4, 7], fov: 48 }}
      dpr={[1, mobile ? 1.25 : 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <LightBeams mobile={mobile} />
      <SoftBlobs />
      <Sparkles count={mobile ? 35 : 80} />
      <CameraRig />
    </Canvas>
  );
}
