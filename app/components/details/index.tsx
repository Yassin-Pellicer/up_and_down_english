"use client";
import { Trans, useTranslation } from "react-i18next";
import VideoWithUnmuteButton from "../video";
import { useState } from "react";
import { InViewSection } from "../motion";

export function Details() {
  const { t } = useTranslation();
  const videos = t('details_one.videos', { returnObjects: true }) as Array<{ name: string; description: string; source: string }>;
  const methods = t('details_two.methods', { returnObjects: true }) as Array<{ name: string; description: string; icon: string }>;
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  const changeVideo = (unit: number) => {
    const currentIndex = videos.findIndex(v => v.name === selectedVideo.name);
    const newIndex = (currentIndex + unit + videos.length) % videos.length;
    setSelectedVideo(videos[newIndex]);
  };

  return (
    <div className="flex flex-col gap-8 px-4">
      <section className="flex align-center sm:py-20 w-full text-black text-shadow-xl" >
        <div className="md:grid flex w-fit md:grid-cols-[auto_60%] flex-col-reverse items-center justify-between sm:gap-12 gap-6 auto-cols-fr">
          <div className="flex flex-col justify-center items-center xl:items-start xl:w-auto w-full">
            <InViewSection triggerKey={selectedVideo.name}>
              <VideoWithUnmuteButton key={selectedVideo.source} source={selectedVideo.source} />
            </InViewSection>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="xl:text-6xl md:text-5xl text-4xl font-bold tracking-tighter">
              <Trans
                i18nKey="details_one.title"
                components={[
                  <span
                    key="span"
                    className="tracking-tight font-bold"
                    style={{ fontFamily: "Shadows Into Light" }}
                  />,
                ]}
              />
            </h1>
            <p className="sm:text-2xl text-lg bg-[#c8aacf] w-fit px-4 py-2">
              <Trans
                i18nKey="details_one.subtitle"
                values={{ name: "@up_and_down_english" }}
                components={[<span key="name" className="font-semibold" />]}
              />
            </p>
            <p className="sm:text-2xl text-lg">{t("details_one.description")}</p>
            <div className="flex justify-between bg-gray-200 rounded-2xl">
              <button
                className="flex w-full hover:bg-gray-900 bg-gray-800 py-2 font-bold tracking-tighter px-4 rounded-l-2xl transition-all hover:cursor-pointer duration-50 items-center align-center justify-center"
                onClick={() => { changeVideo(-1) }}
              >
                <span className="material-symbols-outlined">chevron_left</span> {t("details_one.previous")}
              </button>
              <button
                className="flex w-full hover:bg-blue-900 bg-blue-800 py-2 font-bold tracking-tighter px-4 rounded-r-2xl transition-all hover:cursor-pointer duration-50 items-center align-center justify-center"
                onClick={() => { changeVideo(1) }}
              >
                {t("details_one.next")} <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
            <div className="border-t sm:py-6 pt-6 pb-0 sm:mt-6 mt-3 border-white">
              <p className="text-4xl font-bold mb-2" style={{ fontFamily: "Shadows Into Light" }}>{selectedVideo.name}</p>
              <p className="text-xl">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4 align-center sm:py-20 w-full text-black text-shadow-xl" >
        <h1 className="sm:text-6xl text-4xl font-bold tracking-tighter">
          <Trans
            i18nKey="details_two.title"
            components={[
              <span
                key="span"
                className="tracking-tight font-bold"
                style={{ fontFamily: "Shadows Into Light" }}
              />,
            ]}
          />
        </h1>
        <p className="sm:text-3xl text-lg bg-[#c8aacf] w-fit px-4 py-2" >
          <Trans
            i18nKey="details_two.subtitle"
            components={[<span className="font-semibold" style={{ fontFamily: 'Shadows Into Light' }} />]}
          />
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-6 sm:my-12 my-6">
          {methods.map((method, index) => (
            <div key={index} className="select-none flex justify-center px-6 py-4 rounded-2xl bg-blue-300 shadow-lg hover:shadow-xl flex-col gap-4 transition duration-75">
              <p className="flex flex-row items-center text-4xl font-bold border-b-2 pb-4 border-white" style={{ fontFamily: 'Shadows Into Light' }}>
                <span className="material-symbols-outlined mr-2" style={{ fontSize: '2rem' }}>{method.icon}</span>{method.name}
              </p>
              <p className="text-lg">{method.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* <section className="flex flex-col gap-4 align-center sm:py-20 w-full text-black text-shadow-xl" >
        <h1 className="sm:text-6xl text-5xl font-bold tracking-tighter">
          <Trans
            i18nKey="details_two.title"
            components={[
              <span
                key="span"
                className="tracking-tight font-bold"
                style={{ fontFamily: "Shadows Into Light" }}
              />,
            ]}
          />
        </h1>
        <p className="sm:text-3xl text-lg bg-[#c8aacf] w-fit px-4 py-2" >
          <Trans
            i18nKey="details_two.subtitle"
            components={[<span className="font-semibold" style={{ fontFamily: 'Shadows Into Light' }} />]}
          />
        </p>
      </section> */}
    </div>
  );
}