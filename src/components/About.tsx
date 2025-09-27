import { motion, Variants } from "framer-motion";
import { stacks } from "@/utils/stacks";

export const About = () => {
  return (
    <section
      data-container="1"
      className="w-full flex flex-col items-center gap-5 py-3"
    >
      <div className="text-center max-w-2xl space-y-4">
        <motion.h2
          className="text-3xl font-bold"
          variants={titleVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ amount: 0.5 }}
        >
          Sobre Mim
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-sm md:text-base leading-relaxed"
          variants={paragraphVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ amount: 0.5 }}
        >
          Sou desenvolvedor e entusiasta de tecnologia, em constante busca por evolução pessoal e pela qualidade no desenvolvimento de software
        </motion.p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
        <motion.div
          className="bg-zinc-200 dark:bg-zinc-900 border rounded-lg p-6 flex flex-col justify-center gap-6"
          variants={cardLeft}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ amount: 0.5 }}
        >
          <h3 className="text-xl font-semibold">Minha Jornada</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Me chamo Guilherme Fernandes Sebastião, um jovem desenvolvedor de 19 anos, atualmente moro em Tubarão-SC. A minha paixão por computação começou cedo, uma curiosidade que me impulsionou a querer ir além de ser
            um mero espectador e me tornar um criador. Essa motivação me guia em minha atual formação superior, um passo que considero fundamental para adquirir a disciplina e a base de conhecimento necessárias para
            transformar meu interesse em uma carreira. Hoje, aplico essa mesma dedicação para desenvolver aplicações completas, eficientes e intuitivas.
          </p>
          <ul className="space-y-4 text-foreground text-[13px] leading-relaxed">
            <li>🌎 Residente em Tubarão-SC, aberto a oportunidades remotas</li>
            <li>📫 Aberto a um bate-papo sobre tecnologia, projetos e novas ideias</li>
            <li>🚀 Focado em boas práticas de desenvolvimento e código limpo</li>
            <li>🌱 Sempre aprendendo e explorando novas tecnologias em desenvolvimento</li>
            <li>💻 Foco em Desenvolvimento Web com TypeScript, Java e frameworks modernos</li>
          </ul>
          <div className="flex gap-4">
            <div className="w-1/2 p-4 flex items-center justify-center flex-col bg-zinc-300 dark:bg-zinc-800 border rounded-lg">
              <span className="text-blue-500 text-xl font-bold">15+</span>
              <span className="text-xs text-foreground">Repositórios</span>
            </div>
            <div className="w-1/2 p-4 flex items-center justify-center flex-col bg-zinc-300 dark:bg-zinc-800 border rounded-lg">
              <span className="text-blue-500 text-xl font-bold">4+</span>
              <span className="text-xs text-foreground">Projetos Pessoais</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="bg-zinc-200 dark:bg-zinc-900 border rounded-lg p-6 flex flex-col justify-center gap-6"
          variants={cardRight}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ amount: 0.5 }}
        >
          <h3 className="text-xl font-semibold">Stack Tecnológico</h3>
          <div className="space-y-5">
            {Object.entries(stacks).map(([category, items]) => (
              <div
                key={category}
                className="space-y-2"
              >
                <div className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-blue-500" />
                  <h4 className="text-sm font-medium capitalize text-foreground">{category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map(({ name, icon: Icon }) => (
                    <div
                      key={name}
                      className="flex items-center gap-2 px-2 py-1.5 rounded-md border"
                    >
                      <Icon className="size-3.5" />
                      <span className="text-xs text-">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const titleVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
  },
};

const paragraphVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
  },
};

const cardLeft: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    x: -100,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    x: -100,
  },
};

const cardRight: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    x: 100,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    x: 100,
  },
};
