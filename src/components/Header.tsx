import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

const NAV_ITEMS = [
  { label: "Início", id: 0 },
  { label: "Sobre", id: 1 },
  { label: "Projetos", id: 2 },
  { label: "Experiência", id: 3 },
  { label: "Contato", id: 4 },
];

export const Header = () => {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-container]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          const index = Array.from(sections).indexOf(visible.target);
          setActive(index);
        }
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const handleNavigate = (id: number) => {
    setMenuOpen(false);
    const target = document.querySelectorAll("[data-container]")[id] as HTMLElement;
    if (target) {
      const offset = 64;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const storage = localStorage.getItem("theme");
    const html = document.documentElement;

    if (storage) {
      const isDark = JSON.parse(storage);
      setDarkMode(isDark);
      html.classList.toggle("dark", isDark);
    } else {
      html.classList.add("dark");
      setDarkMode(true);
      localStorage.setItem("theme", JSON.stringify(true));
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const newTheme = !darkMode;

    setDarkMode(newTheme);
    html.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", JSON.stringify(newTheme));
  };

  return (
    <header className="fixed w-full h-16 bg-zinc-200 dark:bg-zinc-900 border-b z-50 flex justify-center">
      <div className="flex-1 max-w-7xl flex justify-between items-center px-4">
        <div className="flex items-center gap-2">
          <div className="relative flex items-center justify-center size-8.5 rounded-full overflow-hidden border-2 border-muted-foreground">
            <img
              src={profileImg}
              alt="profile-img"
              className="absolute size-full object-cover"
            />
          </div>
          <h1 className="text-muted-foreground text-[15px] font-semibold">
            <span className="font-black text-foreground">Gui.</span> Sebastião
          </h1>
        </div>
        <div className="flex gap-4 items-center">
          <nav className="hidden md:flex h-full items-center gap-4">
            {NAV_ITEMS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => handleNavigate(id)}
                className={twMerge("relative flex items-center gap-2 px-2 h-9 text-muted-foreground font-medium cursor-pointer", active === id && "text-foreground")}
              >
                <span className="text-sm">{label}</span>
                {active === id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-blue-500 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>
          <button
            className="size-9 flex items-center justify-center relative cursor-pointer hover:border dark:hover:bg-zinc-800 rounded-lg transition"
            onClick={toggleTheme}
          >
            <Sun className={twMerge("absolute size-5", darkMode ? "opacity-100" : "opacity-0")} />
            <Moon className={twMerge("absolute size-5", !darkMode ? "opacity-100" : "opacity-0")} />
          </button>
          <button
            className="md:hidden size-9 flex items-center justify-center relative z-[60]"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <X className={twMerge("absolute", menuOpen ? "opacity-100" : "opacity-0")} />
            <Menu className={twMerge("absolute", !menuOpen ? "opacity-100" : "opacity-0")} />
          </button>
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={sidebarVariants}
                transition={{ type: "spring", stiffness: 30, damping: 20 }}
                className="fixed top-0 left-0 w-full h-screen bg-zinc-200 dark:bg-zinc-900 md:hidden flex justify-center items-center z-50"
                style={{ clipPath: "circle(0px at calc(100% - 40px) 40px)" }}
              >
                <motion.ul
                  className="flex flex-col gap-4 w-9/12 mx-auto"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={navVariants}
                >
                  {NAV_ITEMS.map(({ label, id }) => (
                    <motion.li
                      key={id}
                      variants={itemVariants}
                      className="text-center"
                    >
                      <button
                        onClick={() => handleNavigate(id)}
                        className={twMerge("relative w-full py-3 text-base font-medium text-muted-foreground hover:text-foreground", active === id && "text-foreground font-bold")}
                      >
                        {label}
                      </button>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

const sidebarVariants: Variants = {
  open: {
    clipPath: "circle(140% at calc(100% - 40px) 40px)",
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
    },
  },
  closed: {
    clipPath: "circle(0px at calc(100% - 40px) 40px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 150,
      damping: 20,
    },
  },
};

const navVariants: Variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.3 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
  },
  closed: {
    opacity: 0,
    y: 50,
  },
};
