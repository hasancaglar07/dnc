import { CursorDrivenParticleTypography } from "@/components/ui/cursor-driven-particles-typography";

export default function ParticlesDemo() {
  return (
    <div className="w-full min-h-screen bg-black text-white flex items-center justify-center">
      <CursorDrivenParticleTypography
        text="Design"
        fontSize={160}
        particleDensity={5}
        dispersionStrength={20}
        color="#F97316"
      />
    </div>
  );
}
