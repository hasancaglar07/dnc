'use client';

import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/* ── Floating morphing sphere ── */
function MorphSphere({ accent }: { accent: string }) {
  const mesh = useRef<THREE.Mesh>(null!);
  const mat = useRef<THREE.ShaderMaterial>(null!);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uColor: { value: new THREE.Color(accent) },
    uMouse: { value: new THREE.Vector2(0, 0) },
  }), []);

  // Update color on accent change
  useEffect(() => {
    if (mat.current) {
      mat.current.uniforms.uColor.value.set(accent);
    }
  }, [accent]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    mat.current.uniforms.uTime.value = t;
    mesh.current.rotation.x = Math.sin(t * 0.15) * 0.3;
    mesh.current.rotation.y = t * 0.08;
  });

  const vertexShader = `
    uniform float uTime;
    uniform vec2 uMouse;
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying float vDisplacement;
    
    // Simplex noise
    vec3 mod289(vec3 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
    
    float snoise(vec3 v) {
      const vec2 C = vec2(1.0/6.0, 1.0/3.0);
      const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i = floor(v + dot(v, C.yyy));
      vec3 x0 = v - i + dot(i, C.xxx);
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min(g.xyz, l.zxy);
      vec3 i2 = max(g.xyz, l.zxy);
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      i = mod289(i);
      vec4 p = permute(permute(permute(
        i.z + vec4(0.0, i1.z, i2.z, 1.0))
        + i.y + vec4(0.0, i1.y, i2.y, 1.0))
        + i.x + vec4(0.0, i1.x, i2.x, 1.0));
      float n_ = 0.142857142857;
      vec3 ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_);
      vec4 x = x_ * ns.x + ns.yyyy;
      vec4 y = y_ * ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4(x.xy, y.xy);
      vec4 b1 = vec4(x.zw, y.zw);
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
      vec3 p0 = vec3(a0.xy, h.x);
      vec3 p1 = vec3(a0.zw, h.y);
      vec3 p2 = vec3(a1.xy, h.z);
      vec3 p3 = vec3(a1.zw, h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
      p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot(m*m, vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
    }
    
    void main() {
      vNormal = normal;
      vPosition = position;
      
      float noise1 = snoise(position * 1.5 + uTime * 0.3) * 0.35;
      float noise2 = snoise(position * 3.0 + uTime * 0.5) * 0.15;
      float noise3 = snoise(position * 6.0 + uTime * 0.2) * 0.05;
      float displacement = noise1 + noise2 + noise3;
      vDisplacement = displacement;
      
      vec3 newPos = position + normal * displacement;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float uTime;
    uniform vec3 uColor;
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying float vDisplacement;
    
    void main() {
      // Fresnel effect
      vec3 viewDir = normalize(cameraPosition - vPosition);
      float fresnel = pow(1.0 - max(dot(viewDir, vNormal), 0.0), 3.0);
      
      // Color based on displacement
      vec3 baseColor = uColor;
      vec3 highlightColor = mix(uColor, vec3(1.0), 0.5);
      vec3 color = mix(baseColor, highlightColor, vDisplacement * 1.5 + 0.5);
      
      // Add fresnel glow
      color = mix(color, vec3(1.0), fresnel * 0.6);
      
      // Alpha with fresnel edge glow
      float alpha = mix(0.15, 0.6, fresnel) + vDisplacement * 0.15;
      
      gl_FragColor = vec4(color, alpha);
    }
  `;

  return (
    <mesh ref={mesh} position={[2.5, 0, -1]} scale={2.2}>
      <icosahedronGeometry args={[1, 64]} />
      <shaderMaterial
        ref={mat}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

/* ── Floating particles ── */
function Particles({ accent, count = 200 }: { accent: string; count?: number }) {
  const points = useRef<THREE.Points>(null!);
  
  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      vel[i * 3] = (Math.random() - 0.5) * 0.005;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.005;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.003;
    }
    return { positions: pos, velocities: vel };
  }, [count]);

  useFrame(() => {
    const geo = points.current.geometry;
    const pos = geo.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      pos[i * 3] += velocities[i * 3];
      pos[i * 3 + 1] += velocities[i * 3 + 1];
      pos[i * 3 + 2] += velocities[i * 3 + 2];
      // Wrap around
      if (Math.abs(pos[i * 3]) > 10) velocities[i * 3] *= -1;
      if (Math.abs(pos[i * 3 + 1]) > 6) velocities[i * 3 + 1] *= -1;
      if (Math.abs(pos[i * 3 + 2]) > 5) velocities[i * 3 + 2] *= -1;
    }
    geo.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color={accent}
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/* ── Wireframe ring ── */
function WireRing({ accent }: { accent: string }) {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    mesh.current.rotation.x = t * 0.1 + Math.PI * 0.3;
    mesh.current.rotation.z = t * 0.05;
  });

  return (
    <mesh ref={mesh} position={[2.5, 0, -1]} scale={3.2}>
      <torusGeometry args={[1, 0.01, 16, 100]} />
      <meshBasicMaterial color={accent} transparent opacity={0.15} />
    </mesh>
  );
}

/* ── Grid floor ── */
function GridFloor({ accent }: { accent: string }) {
  const grid = useRef<THREE.GridHelper>(null!);

  useFrame(() => {
    if (grid.current) {
      grid.current.position.z = -3;
      grid.current.position.y = -3;
    }
  });

  return (
    <gridHelper
      ref={grid}
      args={[30, 30, accent, '#cccccc']}
      rotation={[0, 0, 0]}
      material-opacity={0.05}
      material-transparent
    />
  );
}

/* ── Mouse-following light ── */
function MouseLight() {
  const light = useRef<THREE.PointLight>(null!);
  const { viewport } = useThree();

  useFrame((state) => {
    const x = (state.pointer.x * viewport.width) / 2;
    const y = (state.pointer.y * viewport.height) / 2;
    light.current.position.set(x, y, 3);
  });

  return <pointLight ref={light} intensity={0.5} distance={10} color="#ffffff" />;
}

/* ── Camera rig ── */
function CameraRig() {
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      state.pointer.x * 0.5,
      0.02
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      state.pointer.y * 0.3 + 0.5,
      0.02
    );
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ── Main export ── */
export default function Hero3DBackground({ accentColor }: { accentColor: string }) {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0.5, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.4} />
        <MouseLight />
        <MorphSphere accent={accentColor} />
        <WireRing accent={accentColor} />
        <Particles accent={accentColor} count={150} />
        <GridFloor accent={accentColor} />
        <CameraRig />
      </Canvas>
    </div>
  );
}
