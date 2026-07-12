import desenvolvimento_web_completo from "@/assets/images/certificates/desenvolvimento_web_completo.webp";
import curso_js_ts_basico_avancado from "@/assets/images/certificates/curso_js_ts_basico_avancado.webp";
import networking_essentials from "@/assets/images/certificates/networking_essentials.webp";
import react_zero_maestria from "@/assets/images/certificates/react_zero_maestria.webp";
import udmj_certificate from "@/assets/images/certificates/udmj_certificate.webp";
import psc_certificate from "@/assets/images/certificates/psc_certificate.webp";
import acs_certificate from "@/assets/images/certificates/acs_certificate.webp";
import acc_certificate from "@/assets/images/certificates/acc_certificate.webp";
import sdm_certificate from "@/assets/images/certificates/sdm_certificate.webp";
import gqs_certificate from "@/assets/images/certificates/gqs_certificate.webp";
import ai_certificate from "@/assets/images/certificates/ai_certificate.webp";
import ms_certificate from "@/assets/images/certificates/ms_certificate.webp";
import dev_the_devs from "@/assets/images/certificates/dev_the_devs.webp";

export const CERTIFICATIONS = [
  {
    name: "certifications.js-ts.name",
    description: "certifications.js-ts.description",
    certificate: curso_js_ts_basico_avancado,
  },
  {
    name: "certifications.web-dev.name",
    description: "certifications.web-dev.description",
    certificate: desenvolvimento_web_completo,
  },
  {
    name: "certifications.react.name",
    description: "certifications.react.description",
    certificate: react_zero_maestria,
  },
  {
    name: "certifications.java.name",
    description: "certifications.java.description",
    certificate: dev_the_devs,
  },
  {
    name: "certifications.network.name",
    description: "certifications.network.description",
    certificate: networking_essentials,
  },
  {
    name: "certifications.psc.name",
    description: "certifications.psc.description",
    certificate: psc_certificate,
  },
  {
    name: "certifications.ms.name",
    description: "certifications.ms.description",
    certificate: ms_certificate,
  },
  {
    name: "certifications.acs.name",
    description: "certifications.acs.description",
    certificate: acs_certificate,
  },
  {
    name: "certifications.acc.name",
    description: "certifications.acc.description",
    certificate: acc_certificate,
  },
  {
    name: "certifications.sdm.name",
    description: "certifications.sdm.description",
    certificate: sdm_certificate,
  },
  {
    name: "certifications.udmj.name",
    description: "certifications.udmj.description",
    certificate: udmj_certificate,
  },
  {
    name: "certifications.ai.name",
    description: "certifications.ai.description",
    certificate: ai_certificate,
  },
  {
    name: "certifications.gqs.name",
    description: "certifications.gqs.description",
    certificate: gqs_certificate,
  },
] as const;

export type Certification = (typeof CERTIFICATIONS)[number];
