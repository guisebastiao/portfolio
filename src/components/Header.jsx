import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/navLinks";

export const Header = () => {
  const [active, setActive] = useState(false);
  const [activeNav, setActiveNav] = useState(0);
  const navHeight = 82;

  const handleNavigate = (index) => {
    const page = document.querySelectorAll("[data-page]");
    const { offsetTop } = page[index];
    window.scrollTo({ top: offsetTop - navHeight });
  };

  useEffect(() => {
    const page = document.querySelectorAll("[data-page]");

    const handleScroll = () => {
      Array.from({ length: navLinks.length }).forEach((_, pos) => {
        const { offsetTop, scrollHeight } = page[pos];
        const { scrollY } = window;

        if (
          offsetTop + scrollHeight - navHeight >= Math.ceil(scrollY) &&
          offsetTop - navHeight <= Math.ceil(scrollY)
        ) {
          setActiveNav(pos);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed bg-black z-40 transition-all duration-500 ${
          active ? "bg-opacity-40 inset-0" : "bg-opacity-0"
        }`}
      />
      <header className="fixed w-full h-[82px] bg-gradient-to-b from-zinc-950 max-545:flex items-center justify-start z-50 px-10 hidden max-545:visible">
        <button
          className="relative w-9 h-9 rounded bg-zinc-800"
          onClick={() => setActive((prev) => !prev)}
        >
          <X
            className={`absolute left-0 top-0 text-zinc-50 w-full h-full ${
              active ? "opacity-100" : "opacity-0"
            } transition-all duration-500 px-[5px] py-[5px]`}
          />
          <Menu
            className={`absolute left-0 top-0 text-zinc-50 w-full h-full ${
              !active ? "opacity-100" : "opacity-0"
            } transition-all duration-500 px-[5px] py-[5px] `}
          />
        </button>
        <ul
          className={`fixed top-[65px] flex flex-col items-center bg-zinc-900 gap-2 px-2 py-4 border border-zinc-700 rounded ${
            active ? "opacity-100" : "opacity-0 pointer-events-none"
          } transition-all duration-500`}
        >
          {navLinks.map((value, index) => (
            <li key={index}>
              {index === activeNav ? (
                <button className="px-5 py-[5px] rounded-xl text-zinc-950 font-medium bg-zinc-50 transition-colors duration-500">
                  {value}
                </button>
              ) : (
                <button
                  onClick={() => handleNavigate(index)}
                  className="px-5 py-[5px] rounded-xl text-zinc-400 font-medium transition-colors duration-500"
                >
                  {value}
                </button>
              )}
            </li>
          ))}
        </ul>
      </header>
      <header className="fixed w-full h-[82px] bg-gradient-to-b from-zinc-950 flex items-center justify-center z-50 max-545:hidden">
        <nav className="py-3">
          <ul className="flex items-center justify-center gap-3 px-2 py-2 rounded-2xl border border-zinc-700 bg-zinc-800">
            {navLinks.map((value, index) => (
              <li key={index}>
                {index === activeNav ? (
                  <button className="px-5 py-2 rounded-xl text-zinc-950 font-medium bg-zinc-50 transition-colors duration-500">
                    {value}
                  </button>
                ) : (
                  <button
                    onClick={() => handleNavigate(index)}
                    className="px-5 py-2 rounded-xl text-zinc-400 font-medium transition-colors duration-500"
                  >
                    {value}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};
