import { StripedPattern } from "@/components/ui/striped-pattern";
import { motion, Variants } from "framer-motion";
import { stacks } from "@/utils/stacks";

export const About = () => {
  const handleGetAgeYears = (): number => {
    const birthDate = new Date("2005-12-10");
    const now = new Date();

    const ageMs = now.getTime() - birthDate.getTime();
    return Math.floor(ageMs / (1000 * 60 * 60 * 24 * 365.25));
  };

  return (
    <section data-container="1" className="w-full flex flex-col items-center gap-6 py-8">
      <motion.h2
        className="text-3xl font-bold"
        variants={titleVariant}
        initial="hidden"
        whileInView="visible"
        exit="exit"
      >
        Sobre Mim
      </motion.h2>
      <motion.p
        className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl text-center"
        variants={paragraphVariant}
        initial="hidden"
        whileInView="visible"
        exit="exit"
      >
        Sou desenvolvedor e entusiasta de tecnologia, em constante busca por evolução pessoal e pela qualidade no
        desenvolvimento de software
      </motion.p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
        <motion.div
          className="relative bg-foreground/5 border-2 border-foreground/10 rounded-lg p-5 flex flex-col justify-start gap-6"
          variants={cardLeft}
          initial="hidden"
          whileInView="visible"
          exit="exit"
        >
          <StripedPattern className="size-full opacity-15" />
          <h3 className="text-xl font-semibold">Minha Jornada</h3>
          <p className="text-sm leading-relaxed text-foreground/90">
            Me chamo Guilherme Fernandes Sebastião, um jovem desenvolvedor de {handleGetAgeYears()} anos, atualmente
            moro em Tubarão-SC. A minha paixão por computação começou cedo, uma curiosidade que me impulsionou a querer
            ir além de ser um mero espectador e me tornar um criador. Essa motivação me guia em minha atual formação
            superior, um passo que considero fundamental para adquirir a disciplina e a base de conhecimento necessárias
            para transformar meu interesse em uma carreira. Hoje, aplico essa mesma dedicação para desenvolver
            aplicações completas, eficientes e intuitivas.
          </p>
          <ul className="space-y-4 text-foreground/85 text-[13px] leading-relaxed list-disc list-inside">
            <li>Residente em Tubarão-SC, aberto a oportunidades remotas;</li>
            <li>Aberto a um bate-papo sobre tecnologia, projetos e novas ideias;</li>
            <li>Focado em boas práticas de desenvolvimento e código limpo;</li>
            <li>Sempre aprendendo e explorando novas tecnologias em desenvolvimento;</li>
            <li>Desenvolvimento Web com TypeScript, Java e frameworks modernos;</li>
          </ul>
        </motion.div>
        <motion.div
          className="relative bg-foreground/5 border-2 border-foreground/10  rounded-lg p-5 flex flex-col justify-start gap-6"
          variants={cardRight}
          initial="hidden"
          whileInView="visible"
          exit="exit"
        >
          <StripedPattern className="size-full opacity-15 scale-x-[-1]" />
          <h3 className="text-xl font-semibold">Stack Tecnológico</h3>
          <div className="space-y-5">
            {Object.entries(stacks).map(([category, items]) => (
              <div key={category} className="space-y-2">
                <div className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-blue-500" />
                  <h4 className="text-sm font-medium capitalize text-foreground/90">{category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map(({ name, icon: Icon }) => (
                    <div key={name} className="flex items-center gap-2 px-2 py-1.5 rounded-md border">
                      <Icon className="size-3.5 text-foreground/80" />
                      <span className="text-xs text-foreground/80">{name}</span>
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
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
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
    x: 30,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
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
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
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
