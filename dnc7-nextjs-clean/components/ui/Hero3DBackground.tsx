'use client';

import { useRef, useMemo, useEffect, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text3D, Center, Float } from '@react-three/drei';
import * as THREE from 'three';

/* ── Generate "7" shape points procedurally ── */
function generate7Points(count: number, scale: number): Float32Array {
  const pts: number[] = [];
  // "7" shape: horizontal top bar + diagonal stroke
  // Top bar: from (-1, 1.5) to (1, 1.5)
  // Diagonal: from (1, 1.5) to (-0.5, -1.5)
  // Small serif on top-left going down a tiny bit
  const topBarCount = Math.floor(count * 0.35);
  const diagCount = Math.floor(count * 0.55);
  const serifCount = count - topBarCount - diagCount;

  // Top horizontal bar
  for (let i = 0; i < topBarCount; i++) {
    const t = i / topBarCount;
    const x = -1 + t * 2;
    const y = 1.5 + (Math.random() - 0.5) * 0.15;
    const z = (Math.random() - 0.5) * 0.3;
    pts.push(x * scale, y * scale, z * scale);
  }

  // Diagonal stroke
  for (let i = 0; i < diagCount; i++) {
    const t = i / diagCount;
    const x = 1 - t * 1.5 + (Math.random() - 0.5) * 0.12;
    const y = 1.5 - t * 3 + (Math.random() - 0.5) * 0.12;
    const z = (Math.random() - 0.5) * 0.3;
    pts.push(x * scale, y * scale, z * scale);
  }

  // Small crossbar/serif
  for (let i = 0; i < serifCount; i++) {
    const t = i / serifCount;
    const x = -0.2 + t * 0.8 + (Math.random() - 0.5) * 0.1;
    const y = 0.2 + (Math.random() - 0.5) * 0.12;
    const z = (Math.random() - 0.5) * 0.3;
    pts.push(x * scale, y * scale, z * scale);
  }

  return new Float32Array(pts);
}

/* ── Particle "7" that breathes and reacts to mouse ── */
function SevenParticles({ accent }: { accent: string }) {
  const points = useRef<THREE.Points>(null!);
  const matRef = useRef<THREE.ShaderMaterial>(null!);
  const COUNT = 600;
  const SCALE = 1.8;

  const { basePositions, randomOffsets } = useMemo(() => {
    const base = generate7Points(COUNT, SCALE);
    const offsets = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      offsets[i * 3] = (Math.random() - 0.5) * 8;
      offsets[i * 3 + 1] = (Math.random() - 0.5) * 8;
      offsets[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return { basePositions: base, randomOffsets: offsets };
  }, []);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uColor: { value: new THREE.Color(accent) },
    uMorphProgress: { value: 0 },
  }), []);

  useEffect(() => {
    if (matRef.current) matRef.current.uniforms.uColor.value.set(accent);
  }, [accent]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    matRef.current.uniforms.uTime.value = t;
    // Morph in: 0 -> 1 over first 2 seconds
    matRef.current.uniforms.uMorphProgress.value = Math.min(t * 0.5, 1);

    const geo = points.current.geometry;
    const pos = geo.attributes.position.array as Float32Array;
    const morph = matRef.current.uniforms.uMorphProgress.value;

    for (let i = 0; i < COUNT; i++) {
      const i3 = i * 3;
      // Lerp from scattered to "7" shape
      const bx = basePositions[i3];
      const by = basePositions[i3 + 1];
      const bz = basePositions[i3 + 2];
      const ox = randomOffsets[i3];
      const oy = randomOffsets[i3 + 1];
      const oz = randomOffsets[i3 + 2];

      // Breathing
      const breathe = Math.sin(t * 0.8 + i * 0.01) * 0.08;

      pos[i3] = THREE.MathUtils.lerp(ox, bx + breathe, morph);
      pos[i3 + 1] = THREE.MathUtils.lerp(oy, by + Math.sin(t * 0.5 + i * 0.02) * 0.06, morph);
      pos[i3 + 2] = THREE.MathUtils.lerp(oz, bz + Math.cos(t * 0.6 + i * 0.015) * 0.05, morph);
    }
    geo.attributes.position.needsUpdate = true;

    // Slow rotation
    points.current.rotation.y = Math.sin(t * 0.15) * 0.15;
    points.current.rotation.x = Math.sin(t * 0.1) * 0.05;
  });

  const vertexShader = `
    uniform float uTime;
    attribute float aRandom;
    varying float vAlpha;
    void main() {
      vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
      float dist = length(mvPos.xyz);
      vAlpha = smoothstep(8.0, 2.0, dist);
      gl_PointSize = max(2.0, 6.0 / -mvPos.z) * (1.0 + sin(uTime * 2.0 + position.x * 3.0) * 0.3);
      gl_Position = projectionMatrix * mvPos;
    }
  `;

  const fragmentShader = `
    uniform vec3 uColor;
    uniform float uTime;
    varying float vAlpha;
    void main() {
      float d = length(gl_PointCoord - vec2(0.5));
      if (d > 0.5) discard;
      float glow = smoothstep(0.5, 0.0, d);
      vec3 col = mix(uColor, vec3(1.0), glow * 0.4);
      gl_FragColor = vec4(col, glow * vAlpha * 0.9);
    }
  `;

  return (
    <points ref={points} position={[2, 0.2, 0]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[new Float32Array(COUNT * 3), 3]} />
      </bufferGeometry>
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* ── Orbiting rings around "7" ── */
function OrbitRings({ accent }: { accent: string }) {
  const g1 = useRef<THREE.Mesh>(null!);
  const g2 = useRef<THREE.Mesh>(null!);
  const g3 = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    g1.current.rotation.x = t * 0.2;
    g1.current.rotation.y = t * 0.1;
    g2.current.rotation.x = t * 0.15 + 1;
    g2.current.rotation.z = t * 0.12;
    g3.current.rotation.y = t * 0.18;
    g3.current.rotation.z = t * 0.08 + 2;
  });

  return (
    <group position={[2, 0.2, 0]}>
      <mesh ref={g1}>
        <torusGeometry args={[3.5, 0.008, 16, 120]} />
        <meshBasicMaterial color={accent} transparent opacity={0.12} />
      </mesh>
      <mesh ref={g2}>
        <torusGeometry args={[3.0, 0.006, 16, 100]} />
        <meshBasicMaterial color={accent} transparent opacity={0.08} />
      </mesh>
      <mesh ref={g3}>
        <torusGeometry args={[4.0, 0.005, 16, 80]} />
        <meshBasicMaterial color="#999" transparent opacity={0.05} />
      </mesh>
    </group>
  );
}

/* ── Background floating particles ── */
function BgParticles({ count = 120 }: { count?: number }) {
  const points = useRef<THREE.Points>(null!);

  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 3;
      vel[i * 3] = (Math.random() - 0.5) * 0.003;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.003;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.002;
    }
    return { positions: pos, velocities: vel };
  }, [count]);

  useFrame(() => {
    const pos = points.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      pos[i * 3] += velocities[i * 3];
      pos[i * 3 + 1] += velocities[i * 3 + 1];
      pos[i * 3 + 2] += velocities[i * 3 + 2];
      if (Math.abs(pos[i * 3]) > 12) velocities[i * 3] *= -1;
      if (Math.abs(pos[i * 3 + 1]) > 7) velocities[i * 3 + 1] *= -1;
      if (Math.abs(pos[i * 3 + 2]) > 6) velocities[i * 3 + 2] *= -1;
    }
    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#aaa" transparent opacity={0.3} sizeAttenuation depthWrite={false} />
    </points>
  );
}

/* ── Accent glow sphere behind "7" ── */
function GlowOrb({ accent }: { accent: string }) {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    mesh.current.scale.setScalar(2.5 + Math.sin(t * 0.5) * 0.3);
  });

  return (
    <mesh ref={mesh} position={[2, 0.2, -2]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial color={accent} transparent opacity={0.06} />
    </mesh>
  );
}

/* ── Mouse-following light ── */
function MouseLight() {
  const light = useRef<THREE.PointLight>(null!);
  const { viewport } = useThree();

  useFrame((state) => {
    const x = (state.pointer.x * viewport.width) / 2;
    const y = (state.pointer.y * viewport.height) / 2;
    light.current.position.set(x, y, 4);
  });

  return <pointLight ref={light} intensity={0.8} distance={12} color="#ffffff" />;
}

/* ── Camera rig with mouse parallax ── */
function CameraRig() {
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      state.pointer.x * 0.8,
      0.015
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      state.pointer.y * 0.4 + 0.5,
      0.015
    );
    state.camera.lookAt(1.5, 0, 0);
  });

  return null;
}

/* ── Main export ── */
export default function Hero3DBackground({ accentColor }: { accentColor: string }) {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0.5, 7], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={0.3} />
        <MouseLight />
        <SevenParticles accent={accentColor} />
        <OrbitRings accent={accentColor} />
        <GlowOrb accent={accentColor} />
        <BgParticles count={100} />
        <CameraRig />
      </Canvas>
    </div>
  );
}
