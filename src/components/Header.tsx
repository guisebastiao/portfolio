import { useState, useEffect, useRef, MouseEvent } from "react";
import { twMerge } from "tailwind-merge";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const containers = useRef<NodeListOf<Element>>(undefined);
  const [isActiveContainer, setActiveContainer] = useState<number>(0);
  const [menuIsOpen, setMenuOpen] = useState(false);
  const margin = 64;

  useEffect(() => {
    containers.current = document.querySelectorAll("[data-container]");
  }, []);

  const handleScroll = () => {
    if (!containers.current) {
      return;
    }

    containers.current?.forEach((container, index) => {
      const rect = container.getBoundingClientRect();

      if (rect.top <= window.innerHeight - margin && rect.bottom >= margin) {
        setActiveContainer(index);
      }
    });
  };

  const handleResize = () => {
    if (window.innerWidth > 400) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavigate = (event: MouseEvent<HTMLButtonElement>) => {
    const btnValue = Number(event.currentTarget.dataset.btnContainer);

    setMenuOpen(false);

    if (isNaN(btnValue)) {
      return;
    }

    const container = containers.current?.[btnValue].getBoundingClientRect();

    if (!container) {
      return;
    }

    window.scrollTo({
      top: container?.top + window.scrollY - margin,
    });
  };

  useEffect(() => {
    const bodyStyle = document.body.style;

    menuIsOpen
      ? (bodyStyle.overflow = "hidden")
      : (bodyStyle.overflow = "auto");
  }, [menuIsOpen]);

  return (
    <header className="fixed w-full h-16 flex justify-center items-center bg-zinc-950 z-[10000]">
      <nav className="flex items-center h-9/12 bg-zinc-900 border border-zinc-700 rounded-xl py-1 px-1 @max-md:hidden">
        <ul className="inline-flex text-zinc-400 h-full">
          <li
            className={twMerge(
              "w-full h-full transition-all px-2.5 rounded-lg",
              isActiveContainer === 0 && "bg-zinc-300 text-zinc-950"
            )}
          >
            <button
              className="min-w-18 flex items-center justify-center gap-2 h-full cursor-pointer"
              data-btn-container="0"
              onClick={handleNavigate}
            >
              <span>Início</span>
            </button>
          </li>
          <li
            className={twMerge(
              "w-full h-full transition-all px-2.5 rounded-lg",
              isActiveContainer === 1 && "bg-zinc-300 text-zinc-950"
            )}
          >
            <button
              className="min-w-18 flex items-center justify-center gap-2 h-full cursor-pointer"
              data-btn-container="1"
              onClick={handleNavigate}
            >
              <span>Sobre</span>
            </button>
          </li>
          <li
            className={twMerge(
              "w-full h-full transition-all px-2.5 rounded-lg",
              isActiveContainer === 2 && "bg-zinc-300 text-zinc-950"
            )}
          >
            <button
              className="min-w-18 flex items-center justify-center gap-2 h-full cursor-pointer"
              data-btn-container="2"
              onClick={handleNavigate}
            >
              <span>Projetos</span>
            </button>
          </li>
          <li
            className={twMerge(
              "w-full h-full transition-all px-2.5 rounded-lg",
              isActiveContainer === 3 && "bg-zinc-300 text-zinc-950"
            )}
          >
            <button
              className="min-w-18 flex items-center justify-center gap-2 h-full cursor-pointer"
              data-btn-container="3"
              onClick={handleNavigate}
            >
              <span>Contato</span>
            </button>
          </li>
        </ul>
      </nav>
      <nav className="w-full h-full flex items-center justify-start px-4 bg-zinc-950 z-[10000] @min-md:hidden">
        <button
          className="size-8.5 bg-zinc-300 rounded-md flex items-center justify-center cursor-pointer hover:bg-zinc-50 transition"
          onClick={() => setMenuOpen(!menuIsOpen)}
        >
          {menuIsOpen ? <X /> : <Menu />}
        </button>
      </nav>
      <div
        className={twMerge(
          "fixed top-16 w-full transition-all duration-500",
          menuIsOpen
            ? "h-screen bg-zinc-950 animate-in slide-in-from-top flex items-start justify-center"
            : "h-16 bg-gradient-to-t to-zinc-950 from-transparent slide-out-to-top"
        )}
      >
        <ul
          className={twMerge(
            "flex flex-col gap-3.5 w-9/12 py-4",
            menuIsOpen
              ? "transition-all delay-150 opacity-100 visible"
              : "opacity-0 invisible"
          )}
        >
          <li>
            <button
              className={twMerge(
                "w-full h-full border rounded-lg bg-zinc-900 border-zinc-700 text-zinc-400 px-5 py-2.5 cursor-pointer",
                isActiveContainer === 0 &&
                  "bg-zinc-200 text-zinc-950 border-transparent"
              )}
              data-btn-container="0"
              onClick={handleNavigate}
            >
              <span>Início</span>
            </button>
          </li>
          <li>
            <button
              className={twMerge(
                "w-full h-full border rounded-lg bg-zinc-900 border-zinc-700 text-zinc-400 px-5 py-2.5 cursor-pointer",
                isActiveContainer === 1 && "bg-zinc-300 text-zinc-950"
              )}
              data-btn-container="1"
              onClick={handleNavigate}
            >
              <span>Sobre</span>
            </button>
          </li>
          <li>
            <button
              className={twMerge(
                "w-full h-full border rounded-lg bg-zinc-900 border-zinc-700 text-zinc-400 px-5 py-2.5 cursor-pointer",
                isActiveContainer === 2 && "bg-zinc-300 text-zinc-950"
              )}
              data-btn-container="2"
              onClick={handleNavigate}
            >
              <span>Projetos</span>
            </button>
          </li>
          <li>
            <button
              className={twMerge(
                "w-full h-full border rounded-lg bg-zinc-900 border-zinc-700 text-zinc-400 px-5 py-2.5 cursor-pointer",
                isActiveContainer === 3 && "bg-zinc-300 text-zinc-950"
              )}
              data-btn-container="3"
              onClick={handleNavigate}
            >
              <span>Contato</span>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};
