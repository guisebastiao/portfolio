import ecommerceApiCover from "@/assets/images/projects/ecommerce_api_cover.webp";
import flappyBirdCover from "@/assets/images/projects/flappy_bird_cover.webp";
import memoryGameCover from "@/assets/images/projects/memory_game_cover.webp";
import ticTacToeCover from "@/assets/images/projects/tic_tac_toe_cover.webp";
import snakeGameCover from "@/assets/images/projects/snake_game_cover.webp";
import ecommerceCover from "@/assets/images/projects/ecommerce_cover.webp";
import todoListCover from "@/assets/images/projects/todo_list_cover.webp";
import termoCover from "@/assets/images/projects/termo_cover.webp";

export const PROJECTS = [
  {
    name: "Ecommerce",
    description: "project:front-ecommerce.description",
    cover: ecommerceCover,
    link: "https://github.com/guisebastiao/ecommerce",
    stacks: ["TypeScript", "React", "Tailwind", "ShadCn"],
  },
  {
    name: "Ecommerce API",
    description: "project:back-ecommerce.description",
    cover: ecommerceApiCover,
    link: "https://github.com/guisebastiao/ecommerce-api",
    stacks: ["Java", "SpringBoot", "Spring Security", "Postgres", "RabbitMQ", "Docker"],
  },
  {
    name: "ToDoList",
    description: "project:to-do-list.description",
    cover: todoListCover,
    link: "https://github.com/guisebastiao/to-do-list",
    stacks: ["React", "Tailwind", "Fastify", "Prisma", "Postgres"],
  },
  {
    name: "Jogo da Velha",
    description: "project:tic-tac-toe.description",
    cover: ticTacToeCover,
    link: "https://github.com/guisebastiao/jogo-da-velha",
    stacks: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Flappy Bird",
    description: "project:flappy-bird.description",
    cover: flappyBirdCover,
    link: "https://github.com/guisebastiao/flappy-bird",
    stacks: ["HTML", "CSS", "JavaScript", "Canvas"],
  },
  {
    name: "Termo",
    description: "project:termo.description",
    cover: termoCover,
    link: "https://github.com/guisebastiao/termo",
    stacks: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Jogo da Cobrinha",
    description: "project:snake-game.description",
    cover: snakeGameCover,
    link: "https://github.com/guisebastiao/jogo-da-cobrinha",
    stacks: ["HTML", "CSS", "JavaScript", "Canvas"],
  },
  {
    name: "Jogo da Memória",
    description: "project:memory-game.description",
    cover: memoryGameCover,
    link: "https://github.com/guisebastiao/jogo-da-cobrinha",
    stacks: ["HTML", "CSS", "JavaScript"],
  },
] as const;

export type Project = (typeof PROJECTS)[number];
