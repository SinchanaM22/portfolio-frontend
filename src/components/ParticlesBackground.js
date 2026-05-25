import Particles from "react-tsparticles";

function ParticlesBackground() {

  return (

    <Particles
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1
        },

        background: {
          color: {
            value: "#0f172a"
          }
        },

        particles: {
          number: {
            value: 50
          },

          color: {
            value: "#38bdf8"
          },

          links: {
            enable: true,
            color: "#38bdf8",
            distance: 150
          },

          move: {
            enable: true,
            speed: 1
          },

          size: {
            value: 2
          }
        }
      }}
    />

  );
}

export default ParticlesBackground;