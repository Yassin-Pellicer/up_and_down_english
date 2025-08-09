"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOverlay, setMenuOverlay] = useState(false);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.innerWidth < 1280 || window.scrollY > 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOverlay ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOverlay]);

  const navItems = [
    { key: "landing", icon: "star" },
    { key: "about", icon: "info" },
    { key: "offer", icon: "library_books" },
    { key: "enroll", icon: "person_add" },
    { key: "blog", icon: "rss_feed" },
    { key: "contact", icon: "phone" },
  ];

  return (
    <>
      <header className={`${isScrolled ? "bg-black/20 backdrop-blur-lg" : "bg-transparent"} 
        flex flex-row justify-between gap-x-4 py-4 xl:h-24 h-fit z-[50] text-black w-full px-8 transition-all duration-300 fixed top-0`}>
        <img
          src="/logo.png"
          alt="Yassin Pellicer Lamla"
          className={`xl:w-42 xl:h-42 h-16 w-16 transition duration-300 ease-in-out ${isScrolled ? "opacity-100" : "opacity-0"}`}
        />
        <div className="lg:flex flex-row gap-8 hidden">
          {navItems.map(({ key, icon }) => (
            <button key={key} className="flex px-4 cursor-pointer select-none btn btn-primary gap-2 items-center text-xl rounded-2xl hover:bg-blue-500 transition duration-300">
              <span className="material-symbols-outlined">{icon}</span>
              {t(`header.nav.${key}`)}
            </button>
          ))}
          <div className="flex flex-row gap-4 items-center">
            <span onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'pl' : 'en')}
              className="material-symbols-outlined hover:cursor-pointer" style={{ fontSize: '2rem' }}>
              {t("header.translate")}
            </span>
          </div>
        </div>
        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex flex-row gap-8">
          <div className="flex flex-row gap-4 items-center">
            <span
              className="material-symbols-outlined hover:cursor-pointer z-[1000] relative" onClick={() => setMenuOverlay(!menuOverlay)} style={{ fontSize: '2rem' }}>
              menu
            </span>
          </div>
        </div>
      </header>

      {menuOverlay && (
        <div className="fixed top-0 left-0 w-full h-screen z-[100] bg-black/50 backdrop-blur-sm" onClick={() => setMenuOverlay(false)}>
          <div className="flex flex-col gap-2 divide-y-2 divide-white/30  h-full" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-end gap-4 px-8 h-24 items-center">
              <span
                className="material-symbols-outlined hover:cursor-pointer text-black z-[1000] relative" onClick={() => setMenuOverlay(!menuOverlay)} style={{ fontSize: '2rem' }}>
                {menuOverlay ? 'close' : 'menu'}
              </span>
            </div>
            {navItems.map(({ key, icon }) => (
              <button key={key} className="flex px-6 py-3 cursor-pointer select-none btn btn-primary gap-2 items-center text-2xl text-black">
                <span className="material-symbols-outlined">{icon}</span>
                {t(`header.nav.${key}`)}
              </button>
            ))}
            <div className="flex px-4 flex-row gap-4 items-center mt-4">
              <span onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'pl' : 'en')}
                className="material-symbols-outlined hover:cursor-pointer text-black" style={{ fontSize: '2rem' }}>
                {t("header.translate")}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
