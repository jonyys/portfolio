import { motion } from "framer-motion";
import AnimatedLetter from "./AnimatedLetter";

const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className={`
        h-screen w-screen p-8 max-w-screen-2xl mx-auto
        flex flex-col items-start justify-center
      `}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = () => {
  return (
    <div className="flex flex-col w-screen">
      <AboutSection />
      <SkillsSection />
      <Section>
        <h1 className="text-3xl font-bold">Projects</h1>
      </Section>
      <ContactSection />
    </div>
  );
};

const isLetter = (char) => {
  return /[a-zA-Z]/.test(char);
};

const AboutSection = () => {
  const name = "Jonathan";
  const hiIm = "Hi, I'm";
  const developer = "Developer";

  return (
    <Section>
      <h1 className="text-8xl font-extrabold leading-snug">
        <span className="text-7xl font-bold">
          {hiIm
            .split("")
            .map((letter, index) =>
              isLetter(letter) ? (
                <AnimatedLetter key={index} letter={letter} />
              ) : (
                <span key={index}>{letter}</span>
              )
            )}
        </span>
        <br />
        <span className="bg-white px-6 italic">
          {name
            .split("")
            .map((letter, index) =>
              isLetter(letter) ? (
                <AnimatedLetter key={index} letter={letter} />
              ) : (
                <span key={index}>{letter}</span>
              )
            )}
        </span>
      </h1>
      <motion.p
        className="text-4xl mt-4 text-gray-400"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        {developer
          .split("")
          .map((letter, index) =>
            isLetter(letter) ? (
              <AnimatedLetter key={index} letter={letter} />
            ) : (
              <span key={index}>{letter}</span>
            )
          )}
      </motion.p>
      <motion.button
        className={`
          bg-indigo-600 text-white py-4 px-8
          rounded-lg font-bold text-lg mt-16
        `}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        Contact me
      </motion.button>
    </Section>
  );
};

const skills = [
  {
    title: "Java",
    level: 80,
  },
  {
    title: "HTML, CSS, JS",
    level: 80,
  },
  {
    title: "React",
    level: 60,
  },
  {
    title: "MySQL / Mongo",
    level: 70,
  },
  {
    title: "Kotlin",
    level: 60,
  },
  {
    title: "Phyton",
    level: 60,
  },
  {
    title: "Git",
    level: 70,
  },
];
const languages = [
  {
    title: "Spanish",
    level: 100,
  },
  {
    title: "English",
    level: 80,
  },
];

const SkillsSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"}>
        <h2 className="text-5xl font-bold">Skills</h2>
        <div className="mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-64" key={index}>
              <motion.h3
                className="text-xl font-bold text-gray-800"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-indigo-500 rounded-full"
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold mt-10">Languages</h2>
        <div className="mt-8 space-y-4">
          {languages.map((language, index) => (
            <div className="w-64" key={index}>
              <motion.h3
                className="text-xl font-bold text-gray-800"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 2 + index * 0.2,
                    },
                  },
                }}
              >
                {language.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-indigo-500 rounded-full"
                  style={{ width: `${language.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 2 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

const ContactSection = () => {
  return (
    <Section>
      <h2 className="text-5xl font-bold">Contact me</h2>
      <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
        <form>
          <label for="name" className="font-medium text-gray-900 block mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className=" block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1"
          />
          <label for="email" className="font-medium text-gray-900 block mt-8">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className=" block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1"
          />
          <label for="email" className="font-medium text-gray-900 block mt-8">
            Message
          </label>
          <textarea
            type="message"
            name="message"
            id="message"
            className=" h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1"
          />
          <button
            className={`
          bg-indigo-600 text-white py-2 px-8
            rounded-lg font-bold text-lg mt-16`}
          >
            Submit
          </button>
        </form>
      </div>
    </Section>
  );
};
