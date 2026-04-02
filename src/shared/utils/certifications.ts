import { Language } from "@/i18n";

export type Certification = {
  name: string;
  description: string;
  certificate?: string;
};

export const certifications: Record<Language, Certification[]> = {
  pt: [
    {
      name: "Curso de JavaScript e TypeScript do básico ao avançado",
      description:
        "O curso mais completo sobre todas as nuances do JavaScript você você vai encontrar na atualidade.",
      certificate: "/curso_javaScript_typeScript_básico_avançado.pdf",
    },
    {
      name: "Desenvolvimento Web Completo",
      description: "Curso completo sobre desemvolvimento web",
      certificate: "/desenvolvimento_web_completo.pdf",
    },
    {
      name: "React do Zero a Maestria",
      description:
        "Curso de React com recursos mais simples até os mais complexos que a biblioteca oferece",
      certificate: "/react_zero_maestria.pdf",
    },
    {
      name: "DEV THE DEVS",
      description: "Capacitação em desenvolvimento Java",
      certificate: "/dev_the_devs.pdf",
    },
    {
      name: "Networking Essentials",
      description: "Capacitação em rede de computadores",
      certificate: "/networking_essentials.pdf",
    },
    {
      name: "Programação de soluções computacionais",
      description:
        "Unidade curricular concluida da grade de ciência da computação",
      certificate: "/psc_certificate.pdf",
    },
    {
      name: "Modelagem de software",
      description:
        "Unidade curricular concluida da grade de ciência da computação",
      certificate: "/ms_certificate.pdf",
    },
    {
      name: "Ambientes computacionais e segurança",
      description:
        "Unidade curricular concluida da grade de ciência da computação",
      certificate: "/acs_certificate.pdf",
    },
    {
      name: "Ambientes computacionais e conectividade",
      description:
        "Unidade curricular concluida da grade de ciência da computação",
      certificate: "/acc_certificate.pdf",
    },
    {
      name: "Sistemas distribuídos e mobile",
      description:
        "Unidade curricular concluida da grade de ciência da computação",
      certificate: "/sdm_certificate.pdf",
    },
    {
      name: "Usabilidade, desenvolvimento web, mobile e jogos",
      description:
        "Unidade curricular concluida da grade de ciência da computação",
      certificate: "/udmj_certificate.pdf",
    },
    {
      name: "Inteligência artificial",
      description:
        "Unidade curricular concluida da grade de ciência da computação",
      certificate: "/ai_certificate.pdf",
    },
    {
      name: "Gestão e qualidade de software",
      description:
        "Unidade curricular concluida da grade de ciência da computação",
      certificate: "/gqs_certificate.pdf",
    },
  ],
  en: [
    {
      name: "JavaScript and TypeScript Course from Basic to Advanced",
      description:
        "The most complete course covering all the nuances of JavaScript currently available.",
      certificate: "/curso_javaScript_typeScript_básico_avançado.pdf",
    },
    {
      name: "Complete Web Development",
      description: "Comprehensive course on web development.",
      certificate: "/desenvolvimento_web_completo.pdf",
    },
    {
      name: "React from Zero to Mastery",
      description:
        "React course covering everything from basic concepts to advanced features offered by the library.",
      certificate: "/react_zero_maestria.pdf",
    },
    {
      name: "DEV THE DEVS",
      description: "Training program focused on Java development.",
      certificate: "/dev_the_devs.pdf",
    },
    {
      name: "Networking Essentials",
      description: "Training in computer networking fundamentals.",
      certificate: "/networking_essentials.pdf",
    },
    {
      name: "Computational Solutions Programming",
      description:
        "Completed course unit from the Computer Science curriculum.",
      certificate: "/psc_certificate.pdf",
    },
    {
      name: "Software Modeling",
      description:
        "Completed course unit from the Computer Science curriculum.",
      certificate: "/ms_certificate.pdf",
    },
    {
      name: "Computing Environments and Security",
      description:
        "Completed course unit from the Computer Science curriculum.",
      certificate: "/acs_certificate.pdf",
    },
    {
      name: "Computing Environments and Connectivity",
      description:
        "Completed course unit from the Computer Science curriculum.",
      certificate: "/acc_certificate.pdf",
    },
    {
      name: "Distributed and Mobile Systems",
      description:
        "Completed course unit from the Computer Science curriculum.",
      certificate: "/sdm_certificate.pdf",
    },
    {
      name: "Usability, Web, Mobile and Game Development",
      description:
        "Completed course unit from the Computer Science curriculum.",
      certificate: "/udmj_certificate.pdf",
    },
    {
      name: "Artificial Intelligence",
      description:
        "Completed course unit from the Computer Science curriculum.",
      certificate: "/ai_certificate.pdf",
    },
    {
      name: "Software Quality and Management",
      description:
        "Completed course unit from the Computer Science curriculum.",
      certificate: "/gqs_certificate.pdf",
    },
  ],
};
