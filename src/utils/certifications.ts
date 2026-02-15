import curso_javaScript_typeScript_básico_avançado from "@/assets/certifications/curso_javaScript_typeScript_basico_avançado.pdf";
import desenvolvimento_web_completo from "@/assets/certifications/desenvolvimento_web_completo.pdf";
import networking_essentials from "@/assets/certifications/networking_essentials.pdf";
import react_zero_maestria from "@/assets/certifications/react_zero_maestria.pdf";
import dev_the_devs from "@/assets/certifications/dev_the_devs.pdf";
import psc from "@/assets/certifications/psc_certificate.pdf";
import ms from "@/assets/certifications/ms_certificate.pdf";
import acs from "@/assets/certifications/acs_certificate.pdf";
import acc from "@/assets/certifications/acc_certificate.pdf";
import sdm from "@/assets/certifications/sdm_certificate.pdf";
import udmj from "@/assets/certifications/udmj_certificate.pdf";
import ai from "@/assets/certifications/ai_certificate.pdf";
import gqs from "@/assets/certifications/gqs_certificate.pdf";

export const certifications = [
  {
    name: "Curso de JavaScript e TypeScript do básico ao avançado",
    description: "O curso mais completo sobre todas as nuances do JavaScript você você vai encontrar na atualidade.",
    certificate: curso_javaScript_typeScript_básico_avançado,
  },
  {
    name: "Desenvolvimento Web Completo",
    description: "Curso completo sobre desemvolvimento web",
    certificate: desenvolvimento_web_completo,
  },
  {
    name: "React do Zero a Maestria",
    description: "Curso de React com recursos mais simples até os mais complexos que a biblioteca oferece",
    certificate: react_zero_maestria,
  },
  {
    name: "DEV THE DEVS",
    description: "Capacitação em desenvolvimento Java",
    certificate: dev_the_devs,
  },
  {
    name: "Networking Essentials",
    description: "Capacitação em rede de computadores",
    certificate: networking_essentials,
  },
  {
    name: "Programação de soluções computacionais",
    description: "Unidade curricular concluida da grade de ciência da computação",
    certificate: psc,
  },
  {
    name: "Modelagem de software",
    description: "Unidade curricular concluida da grade de ciência da computação",
    certificate: ms,
  },
  {
    name: "Ambientes computacionais e segurança",
    description: "Unidade curricular concluida da grade de ciência da computação",
    certificate: acs,
  },
  {
    name: "Ambientes computacionais e conectividade",
    description: "Unidade curricular concluida da grade de ciência da computação",
    certificate: acc,
  },
  {
    name: "Sistemas distribuídos e mobile",
    description: "Unidade curricular concluida da grade de ciência da computação",
    certificate: sdm,
  },
  {
    name: "Usabilidade, desenvolvimento web, mobile e jogos",
    description: "Unidade curricular concluida da grade de ciência da computação",
    certificate: udmj,
  },
  {
    name: "Inteligência artificial",
    description: "Unidade curricular concluida da grade de ciência da computação",
    certificate: ai,
  },
  {
    name: "Gestão e qualidade de software",
    description: "Unidade curricular concluida da grade de ciência da computação",
    certificate: gqs,
  },
];

export type CertificationType = (typeof certifications)[number];
