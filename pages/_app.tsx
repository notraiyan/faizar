import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { Engine } from 'tsparticles-engine';

const App = ({ Component, pageProps }: AppProps) => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: any) => {
        await console.log(container);
    }, []);

    return (
      <>
        <Component {...pageProps} />
        {/* <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "repulse",
                },
                onHover: {
                  enable: true,
                  mode: "bubble"
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 150,
                  duration: 0.4,
                },
                bubble: {
                  distance: 200,
                  size: 20,
                  duration: 2,
                  opacity: 8,
                  speed: 3
                }
              },
            },
            particles: {
              color: {
                value: ["#1abc9c","#3498db","#9b59b6","#f1c40f","#e74c3c"]
              },
              links: {
                color: "#fff",
                distance: 100,
                enable: true,
                opacity: 0.5,
                width: 5,
                shadow: {
                    enable: true,
                    color: "#333333",
                    blur: 5
                }
              },
              collisions: {
                enable: true,
              },
              move: {
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 0.6,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 70,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "triangle",
              },
              size: {
                value: 40,
                random: true
              },
            },
            detectRetina: true,
          }}
          style={{ position: "absolute",
          width: "100%",
          zIndex: -1,
          top: 0,
          left: 0,
          opacity: 1, }}
        /> */}
      </>
    );
};

export default App;
