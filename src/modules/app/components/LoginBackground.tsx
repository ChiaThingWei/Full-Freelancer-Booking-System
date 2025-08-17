import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";


const LoginBackground = () => {

    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
          // 这里加载 slim preset
          await loadSlim(engine);
        }).then(() => {
          setInit(true);
        });
      }, []);
    
      if (!init) {
        return null;
      }
    
      return (
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364]">
        <Particles
  id="tsparticles"
  className="absolute inset-0 -z-10 h-full w-full"
  options={{
    background: {
        color: { value: "transparent" },
    },
    fullScreen: { enable: false }, // 让它受 className 控制
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      number: {
        value: 120,
        density: {
            enable: true,
            width: 800,
            height: 800,
          },
      },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: {
        value: { min: 0.3, max: 0.8 },
        animation: {
          enable: true,
          speed: 1,
          sync: false,
        },
      },
      size: { value: { min: 0.5, max: 2 } },
      move: {
        enable: true,
        speed: 0.2,
        random: true,
        outModes: { default: "out" },
      },
    },
    emitters: [
      {
        position: { x: 50, y: 0 },
        rate: { delay: 5, quantity: 1 },
        particles: {
          move: {
            direction: "bottom-right",
            speed: { min: 15, max: 25 },
            outModes: { default: "destroy" },
          },
          size: { value: { min: 1, max: 2 } },
          opacity: { value: 1 },
          life: { duration: { value: 2 }, count: 1 },
          shape: { type: "circle" },
          color: { value: "#ffffff" },
        },
      },
    ],
  }}
/>
</div>

      )}

export default LoginBackground;
