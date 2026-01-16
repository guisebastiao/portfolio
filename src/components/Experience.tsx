import { certifications } from "@/utils/certifications";
import { graduations } from "@/utils/graduations";
import { Spinner } from "@/components/ui/spinner";
import { motion, Variants } from "framer-motion";
import { Document, Page } from "react-pdf";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  BookmarkCheck,
  GraduationCap,
  MapPin,
  SquareArrowOutUpRight,
} from "lucide-react";

export const Experience = () => {
  return (
    <section
      className="w-full flex flex-col items-center gap-5 py-3"
      data-container="3"
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
          Experiência Profissional
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-sm md:text-base leading-relaxed"
          variants={paragraphVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ amount: 0.5 }}
        >
          Minha caminhada no desenvolvimento e na construção da minha carreira.
        </motion.p>
      </div>
      <div className="w-full space-y-3">
        <motion.div
          className="w-full h-min bg-zinc-200 dark:bg-zinc-900 border rounded-lg space-y-5 p-6"
          variants={card1}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ amount: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <GraduationCap />
            <h1 className="text-lg font-bold">Formação Acadêmica</h1>
          </div>
          {graduations.map((grad, index) => (
            <div key={index} className="space-y-3">
              <div className="space-y-2">
                <h2 className="font-semibold">{grad.course}</h2>
                <p className="text-foreground text-sm leading-relaxed">
                  {grad.institution}
                </p>
                <div className="flex items-center gap-2">
                  <span className="block size-2 rounded-full bg-emerald-500" />
                  <span className="text- text-[13px] leading-relaxed">
                    {grad.status}
                  </span>
                </div>
              </div>
              <div className="space-y-1.5">
                <h3 className="font-medium tracking-wide">Localização</h3>
                <div className="flex items-center gap-1">
                  <MapPin className="size-4 text-blue-500" />
                  <span className="text-muted-foreground text-[13px]">
                    {grad.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        <motion.div
          className="w-full h-min bg-zinc-200 dark:bg-zinc-900 border rounded-lg space-y-5 p-6"
          variants={card2}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ amount: 0.25 }}
        >
          <div className="flex items-center gap-2">
            <BookmarkCheck />
            <h1 className="text-lg font-bold">Conquistas & Certificações</h1>
          </div>
          <div className="space-y-1">
            {certifications.map((certification, index) => (
              <div
                key={index}
                className="flex items-center border border-transparent hover:border-zinc-500/60 dark:hover:border-zinc-800/60 hover:bg-zinc-400/70 dark:hover:bg-zinc-950/70 py-1.5 px-3 rounded-lg transition"
              >
                <div className="space-y-0.5 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="aspect-square size-2 rounded-full bg-blue-500" />
                    <h2 className="text-foreground text-[15px] font-semibold">
                      {certification.name}
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed pl-4">
                    {certification.description}
                  </p>
                </div>
                {certification.certificate && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="flex items-center justify-center size-9 rounded-full transition cursor-pointer text-muted-foreground hover:scale-120 hover:text-primary">
                        <SquareArrowOutUpRight className="size-4.5" />
                      </button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="line-clamp-1">
                          {certification.name}
                        </DialogTitle>
                        <DialogDescription>
                          {certification.description}
                        </DialogDescription>
                      </DialogHeader>
                      <Document
                        file={certification.certificate}
                        loading={
                          <div className="w-full aspect-[1.35/1] flex items-center justify-center">
                            <Spinner />
                          </div>
                        }
                      >
                        <div className="rounded-lg overflow-hidden">
                          <Page
                            pageNumber={1}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                          />
                        </div>
                      </Document>
                    </DialogContent>
                  </Dialog>
                )}
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

const card1: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    x: -100,
    scale: 0.9,
  },
};

const card2: Variants = {
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
