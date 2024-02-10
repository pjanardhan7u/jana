import Typewriter from 'typewriter-effect';

export default function TypeEffect() {
  const strings = [
    `Jana`,
    '<Lt/>A Full-Stack Developer.',
    '<Lt/>An Ambivert',
    '<Lt/>A Multilingual.',
    'A Complete Linux User',
    'A Nature & Science Enthusiast.',
  ];


  return (


      <Typewriter
        options={{
          autoStart: true,
          loop: true,
          delay: 70,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(strings[0])
            .pauseFor(2000)
            .deleteAll()
            .pauseFor(1000)
            .typeString(strings[1])
            .pauseFor(2000)
            .deleteAll()
            .pauseFor(1000)
            .typeString(strings[2])
            .pauseFor(2000)
            .deleteAll()
            .pauseFor(1000)
            .typeString(strings[3])
            .pauseFor(2000)
            .deleteAll()
            .pauseFor(1000)
            .start();
        }}
        
      />
 
  );
};

