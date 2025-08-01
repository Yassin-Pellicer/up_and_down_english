"use client";
import { Trans, useTranslation } from "react-i18next";
import VideoWithUnmuteButton from "../video";
import { useState } from "react";
import { InViewSection } from "../motion";

export function Details() {
  const { t } = useTranslation();
  const videos = t('details.videos', { returnObjects: true }) as Array<{ name: string; description: string; source: string }>;
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  const changeVideo = (unit: number) => {
    const currentIndex = videos.findIndex(v => v.name === selectedVideo.name);
    const newIndex = (currentIndex + unit + videos.length) % videos.length;
    setSelectedVideo(videos[newIndex]);
  };

  return (
    <div className="grid grid-rows-2 gap-4 sm:px-0 px-4">
      <section className="flex align-center sm:py-20 w-full text-white text-shadow-xl" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.4)' }}>
        <div className="xl:grid flex w-fit xl:grid-cols-2 flex-col-reverse items-center justify-between sm:gap-12 gap-6 auto-cols-fr">
          <div className="flex flex-col justify-center items-center xl:items-start xl:w-auto w-full">
            <InViewSection triggerKey={selectedVideo.name}>
              <VideoWithUnmuteButton key={selectedVideo.source} source={selectedVideo.source} />
            </InViewSection>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="sm:text-6xl text-5xl font-bold tracking-tighter">
              <Trans
                i18nKey="details.title"
                components={[
                  <span
                    key="span"
                    className="tracking-tight font-bold"
                    style={{ fontFamily: "Over The Rainbow" }}
                  />,
                ]}
              />
            </h1>
            <p className="sm:text-2xl text-lg bg-[#c8aacf] w-fit px-4 py-2">
               <Trans
                i18nKey="details.subtitle"
                values={{ name: "@up_and_down_english" }}
                components={[<span key="name" className="font-semibold" />]}
              />
            </p>
            <p className="sm:text-2xl text-lg">{t("details.description")}</p>
            <div className="flex justify-between bg-gray-200 rounded-2xl">
              <button
                className="flex w-full hover:bg-gray-900 bg-gray-800 py-2 font-bold tracking-tighter px-4 rounded-l-2xl transition-all hover:cursor-pointer duration-50 items-center align-center justify-center"
                onClick={() => { changeVideo(-1) }}
              >
                <span className="material-symbols-outlined">chevron_left</span> {t("details.previous")}
              </button>
              <button
                className="flex w-full hover:bg-blue-900 bg-blue-800 py-2 font-bold tracking-tighter px-4 rounded-r-2xl transition-all hover:cursor-pointer duration-50 items-center align-center justify-center"
                onClick={() => { changeVideo(1) }}
              >
                {t("details.next")} <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
            <div className="border-t sm:py-6 pt-6 pb-0 sm:mt-6 mt-3 border-white">
              <p className="text-4xl font-bold mb-2" style={{ fontFamily: 'Over The Rainbow' }}>{selectedVideo.name}</p>
              <p className="text-xl">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}