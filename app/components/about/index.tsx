"use client";
import { Trans, useTranslation } from "react-i18next";
import VideoWithUnmuteButton from "../video";
import { useState } from "react";
import { InViewSection } from "../motion";

export function About() {
  const { t } = useTranslation();
  const info = t('about.cards', { returnObjects: true }) as Array<{ title: string; description: string; img: string, icon: string, details: Array<string> }>;
  const [selectedCard, setSelectedCard] = useState(info[0]);

  const changeVideo = (unit: number) => {
    const currentIndex = info.findIndex(v => v.title === selectedCard.title);
    const newIndex = (currentIndex + unit + info.length) % info.length;
    setSelectedCard(info[newIndex]);
  };

  return (
    <div className="grid gap-4 sm:py-32 py-24">
      <h1 className="sm:text-6xl text-3xl font-bold tracking-tighter w-full text-black bg-[#c8aacf] px-4 py-2 mb-4">
        <Trans
          i18nKey="about.subtitle"
        />
      </h1>
      <section className="flex align-center w-full text-black text-shadow-xl" >
        <div className="lg:grid flex w-fit lg:grid-cols-2 align-center flex-col items-center justify-between sm:gap-16 gap-6 auto-cols-fr">

          <div className="flex flex-col gap-4">
            <p className="sm:text-2xl text-lg bg-[#c8aacf] w-fit px-4 py-2">
              <Trans
                i18nKey="about.details"
                components={[<span key="name" className="font-semibold" />]}
              />
            </p>
            <p className="sm:text-2xl text-lg h-fit">{selectedCard.description}</p>

            <div className="flex justify-between divide-x divide-gray-500 bg-gray-200 rounded-2xl">
              {info.map((item, index) => (
                <button
                  key={index}
                  className={`flex w-full text-4xl ${selectedCard.title == item.title ? "bg-blue-800" : "bg-gray-800"
                    } hover:${selectedCard.title == item.title ? "bg-blue-900" : "bg-gray-900"
                    } py-2 font-bold tracking-tighter px-4 ${index == 0 ? "rounded-l-2xl" : index == info.length - 1 ? "rounded-r-2xl" : ""
                    } transition duration-100 ease-in-out hover:cursor-pointer items-center justify-center`}
                  onClick={() => setSelectedCard(item)}
                >
                  {item.icon}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col align-center items-center justify-center h-full">
            <img src="/about/all.png" alt="logo" className="w-full rounded-4xl" />
            {/* <div className="sm:flex hidden justify-between bg-gray-200 rounded-2xl">
              <button
                className="flex w-full hover:bg-gray-900 bg-gray-800 py-2 font-bold tracking-tighter px-4 rounded-l-2xl transition-all hover:cursor-pointer duration-50 items-center align-center justify-center"
                onClick={() => { changeVideo(-1) }}
              >
                <span className="material-symbols-outlined">chevron_left</span> {t("about.previous")}
              </button>
              <button
                className="flex w-full hover:bg-blue-900 bg-blue-800 py-2 font-bold tracking-tighter px-4 rounded-r-2xl transition-all hover:cursor-pointer duration-50 items-center align-center justify-center"
                onClick={() => { changeVideo(1) }}
              >
                {t("about.next")} <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
            <InViewSection triggerKey={selectedCard.img}>
              <img src={selectedCard.img} alt="logo" className="w-full rounded-4xl shadow-2xl mt-8" />
              <ul className="flex flex-col text-2xl sm:text-2xl tracking-wide mt-2" style={{ fontFamily: "Shadows Into Light" }}>
                {selectedCard.details.map((item, index) => (
                  <li className="mt-2" key={index}>{item}</li>
                ))}
              </ul>
            </InViewSection> */}
          </div>
        </div>
      </section>
    </div>
  );
}