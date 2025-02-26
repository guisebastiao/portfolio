import lifeshotsBackground from "@/assets/projects-backgrounds/lifeshots.png";
import todoBackground from "@/assets/projects-backgrounds/todo.png";
import shoppingCartBackground from "@/assets/projects-backgrounds/shoppingCart.png";
import ticTacToeBackground from "@/assets/projects-backgrounds/ticTacToe.png";
import flappyBirdBackground from "@/assets/projects-backgrounds/flappyBird.png";
import termoBackground from "@/assets/projects-backgrounds/termo.png";
import snakeGameBackground from "@/assets/projects-backgrounds/snakeGame.png";
import memoryGameBackground from "@/assets/projects-backgrounds/memoryGame.png";

export const projects = [
  {
    name: "LifeShots",
    description:
      "LifeShots é uma rede social simples. Ela permite aos usuários publicar stories e publicações, interagir com curtidas e comentários, além de construir conexões de seguidores.",
    cover: lifeshotsBackground,
    link: "https://github.com/guisebastiao/lifeshots",
    tecs: ["React", "Tailwind", "ChadCn", "Express", "SQL"],
    favorite: true,
  },
  {
    name: "ToDoList",
    description:
      "Este projeto é uma aplicação de lista de tarefas (To-Do), criada com React e Fastify junto com o MySQL.",
    cover: todoBackground,
    link: "https://github.com/guisebastiao/To-Do",
    tecs: ["React", "ChadCN", "Tailwind", "Fastify", "Prisma", "SQL"],
    favorite: false,
  },
  {
    name: "Shopping Cart",
    description:
      "ShoppingCart é um carrinho de compras feito com ReactJS e tailwind, utilizando a API do mercado livre.",
    cover: shoppingCartBackground,
    link: "https://github.com/guisebastiao/shoppingCart",
    tecs: ["React", "JavaScript"],
    favorite: false,
  },
  {
    name: "Jogo da Velha",
    description:
      "O famoso e clássico jogo da velha, contruido com HTML, CSS e JavaScript.",
    cover: ticTacToeBackground,
    link: "https://github.com/guisebastiao/jogoDaVelha",
    tecs: ["HTML", "CSS", "JavaScript"],
    favorite: false,
  },
  {
    name: "Flappy Bird",
    description:
      "Este projeto contém o clone do famoso jogo Flappy Bird, construido com apenas HTML, CSS e javascript.",
    cover: flappyBirdBackground,
    link: "https://github.com/guisebastiao/flappyBird",
    tecs: ["HTML", "CSS", "JavaScript", "Canvas"],
    favorite: false,
  },
  {
    name: "Termo",
    description:
      "Este projeto contém um clone do popular jogo de palavras Termo.",
    cover: termoBackground,
    link: "https://github.com/guisebastiao/termo",
    tecs: ["HTML", "CSS", "JavaScript"],
    favorite: false,
  },
  {
    name: "Jogo da Cobrinha",
    description:
      "Esse projeto contém o jogo da cobrinha famoso Snake Game, construido com apenas HTML, CSS e javascript.",
    cover: snakeGameBackground,
    link: "https://github.com/guisebastiao/jogoDaCobrinha",
    tecs: ["HTML", "CSS", "JavaScript", "Canvas"],
    favorite: false,
  },
  {
    name: "Jogo da Memória",
    description:
      "Projeto do clássico jogo da memória, construido com apenas HTML, CSS e javascript.",
    cover: memoryGameBackground,
    link: "https://github.com/guisebastiao/jogoDaCobrinha",
    tecs: ["HTML", "CSS", "JavaScript"],
    favorite: false,
  },
];
