import { VscVscodeInsiders } from "react-icons/vsc";
import { TbBrandOauth } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import * as SiIcons from "react-icons/si";

export const stacks = {
  linguagens: [
    {
      name: "JavaScript",
      type: "Language",
      icon: SiIcons.SiJavascript,
    },
    {
      name: "TypeScript",
      type: "Language",
      icon: SiIcons.SiTypescript,
    },
    {
      name: "Java",
      type: "Language",
      icon: FaJava,
    },
    {
      name: "Python",
      type: "Language",
      icon: SiIcons.SiPython,
    },
  ],
  frontend: [
    {
      name: "React",
      type: "Library",
      icon: SiIcons.SiReact,
    },
    {
      name: "NextJS",
      type: "Framework",
      icon: SiIcons.SiNextdotjs,
    },
    {
      name: "HTML",
      type: "Markup",
      icon: SiIcons.SiHtml5,
    },
    {
      name: "CSS",
      type: "Style",
      icon: SiIcons.SiCss3,
    },
    {
      name: "Tailwind",
      type: "CSS Framework",
      icon: SiIcons.SiTailwindcss,
    },
    {
      name: "TanStack Query",
      type: "Library",
      icon: SiIcons.SiReactquery,
    },
    {
      name: "Redux",
      type: "Library",
      icon: SiIcons.SiRedux,
    },
    {
      name: "Zod",
      type: "Library",
      icon: SiIcons.SiZod,
    },
    {
      name: "React Hook Form",
      type: "Library",
      icon: SiIcons.SiReacthookform,
    },
    {
      name: "React Router",
      type: "Library",
      icon: SiIcons.SiReactrouter,
    },
    {
      name: "Shadcn/ui",
      type: "UI Library",
      icon: SiIcons.SiShadcnui,
    },
  ],
  backend: [
    {
      name: "SpringBoot",
      type: "Framework",
      icon: SiIcons.SiSpringboot,
    },
    {
      name: "SpringSecurity",
      type: "Security",
      icon: SiIcons.SiSpringsecurity,
    },
    {
      name: "NodeJS",
      type: "Runtime",
      icon: SiIcons.SiNodedotjs,
    },
    {
      name: "NestJS",
      type: "Framework",
      icon: SiIcons.SiNestjs,
    },
    {
      name: "Express",
      type: "Framework",
      icon: SiIcons.SiExpress,
    },
    {
      name: "Fastify",
      type: "Framework",
      icon: SiIcons.SiFastify,
    },
    {
      name: "Prisma",
      type: "ORM",
      icon: SiIcons.SiPrisma,
    },
    {
      name: "Sequelize",
      type: "ORM",
      icon: SiIcons.SiSequelize,
    },
    {
      name: "Auth0",
      type: "Auth",
      icon: SiIcons.SiAuth0,
    },
    {
      name: "OAuth2",
      type: "Auth",
      icon: TbBrandOauth,
    },
    {
      name: "JWT",
      type: "Auth",
      icon: SiIcons.SiJsonwebtokens,
    },
  ],

  database: [
    {
      name: "MySQL",
      type: "Database",
      icon: SiIcons.SiMysql,
    },
    {
      name: "PostgreSQL",
      type: "Database",
      icon: SiIcons.SiPostgresql,
    },
    {
      name: "MongoDB",
      type: "Database",
      icon: SiIcons.SiMongodb,
    },
  ],

  ferramentas: [
    {
      name: "VSCode",
      type: "IDE",
      icon: VscVscodeInsiders,
    },
    {
      name: "IntelliJ",
      type: "IDE",
      icon: SiIcons.SiIntellijidea,
    },
    {
      name: "Postman",
      type: "API Tool",
      icon: SiIcons.SiPostman,
    },
    {
      name: "Docker",
      type: "Container",
      icon: SiIcons.SiDocker,
    },
    {
      name: "Vite",
      type: "Bundler",
      icon: SiIcons.SiVite,
    },
    {
      name: "NPM",
      type: "Package Manager",
      icon: SiIcons.SiNpm,
    },
    {
      name: "PNPM",
      type: "Package Manager",
      icon: SiIcons.SiPnpm,
    },
    {
      name: "Figma",
      type: "Design",
      icon: SiIcons.SiFigma,
    },
    {
      name: "Git",
      type: "Versioning",
      icon: SiIcons.SiGit,
    },
    {
      name: "GitHub",
      type: "Repository",
      icon: SiIcons.SiGithub,
    },
  ],
};
