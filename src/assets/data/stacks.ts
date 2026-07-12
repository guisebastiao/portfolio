import { TbBrandOauth, TbBrandReactNative } from "react-icons/tb";
import { VscVscodeInsiders } from "react-icons/vsc";
import type { IconType } from "react-icons/lib";
import * as SiIcons from "react-icons/si";
import { FaJava } from "react-icons/fa";

export type Stack = {
  name: string;
  icon: IconType;
};

export type Stacks = {
  type: "frontend" | "backend" | "database" | "tools";
  stacks: Stack[];
};

export const DEV_STACKS: Stacks[] = [
  {
    type: "frontend",
    stacks: [
      { name: "TypeScript", icon: SiIcons.SiTypescript },
      { name: "HTML", icon: SiIcons.SiHtml5 },
      { name: "CSS", icon: SiIcons.SiCss },
      { name: "React", icon: SiIcons.SiReact },
      { name: "React Native", icon: TbBrandReactNative },
      { name: "NextJS", icon: SiIcons.SiNextdotjs },
      { name: "Tailwind", icon: SiIcons.SiTailwindcss },
      { name: "TanStack", icon: SiIcons.SiReactquery },
      { name: "Redux", icon: SiIcons.SiRedux },
      { name: "Axios", icon: SiIcons.SiAxios },
      { name: "Zod", icon: SiIcons.SiZod },
      { name: "React Hook Form", icon: SiIcons.SiReacthookform },
      { name: "React Router", icon: SiIcons.SiReactrouter },
      { name: "Shadcn/ui", icon: SiIcons.SiShadcnui },
    ],
  },
  {
    type: "backend",
    stacks: [
      { name: "Java", icon: FaJava },
      { name: "TypeScript", icon: SiIcons.SiTypescript },
      { name: "NodeJS", icon: SiIcons.SiNodedotjs },
      { name: "NestJS", icon: SiIcons.SiNestjs },
      { name: "Express", icon: SiIcons.SiExpress },
      { name: "Fastify", icon: SiIcons.SiFastify },
      { name: "SpringBoot", icon: SiIcons.SiSpringboot },
      { name: "SpringSecurity", icon: SiIcons.SiSpringsecurity },
      { name: "Prisma", icon: SiIcons.SiPrisma },
      { name: "Sequelize", icon: SiIcons.SiSequelize },
      { name: "OAuth2", icon: TbBrandOauth },
      { name: "Swagger", icon: SiIcons.SiSwagger },
      { name: "JWT", icon: SiIcons.SiJsonwebtokens },
    ],
  },
  {
    type: "database",
    stacks: [
      { name: "MySQL", icon: SiIcons.SiMysql },
      { name: "PostgreSQL", icon: SiIcons.SiPostgresql },
      { name: "H2Database", icon: SiIcons.SiH2Database },
      { name: "MongoDB", icon: SiIcons.SiMongodb },
      { name: "RabbitMQ", icon: SiIcons.SiRabbitmq },
      { name: "Vercel", icon: SiIcons.SiVercel },
      { name: "Neon", icon: SiIcons.SiNeon },
    ],
  },
  {
    type: "tools",
    stacks: [
      { name: "VSCode", icon: VscVscodeInsiders },
      { name: "IntelliJ", icon: SiIcons.SiIntellijidea },
      { name: "DBeaver", icon: SiIcons.SiDbeaver },
      { name: "PGAdmin", icon: SiIcons.SiPostgresql },
      { name: "Postman", icon: SiIcons.SiPostman },
      { name: "Docker", icon: SiIcons.SiDocker },
      { name: "Vite", icon: SiIcons.SiVite },
      { name: "NPM", icon: SiIcons.SiNpm },
      { name: "PNPM", icon: SiIcons.SiPnpm },
      { name: "Figma", icon: SiIcons.SiFigma },
      { name: "Git", icon: SiIcons.SiGit },
      { name: "GitHub", icon: SiIcons.SiGithub },
    ],
  },
];
