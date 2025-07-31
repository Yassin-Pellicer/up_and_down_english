'use client';
import { useTranslation, Trans } from 'react-i18next';
import { Carousel } from '../carousel';

export function Hero() {
  const { t } = useTranslation();
  const items = t('hero.carousel', { returnObjects: true }) || [];

  return (
    <div className="grid gap-4 sm:py-32 py-24">
      <section
        className="flex items-center align-center py-8 w-full text-white text-shadow-xl"
        style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
      >
        <div className="flex flex-row items-center justify-between gap-12 w-full">
          <img
            src="/logo.png"
            alt="Yassin Pellicer Lamla"
            className="w-74 h-74 transition duration-300 lg:flex hidden ease-in-out"
          />
          <div className="flex flex-col gap-4">
            <h1 className="sm:text-6xl text-5xl font-bold tracking-tighter">
              <Trans
                i18nKey="hero.headline"
                components={[
                  <span
                    key="span"
                    className="tracking-tight font-bold"
                    style={{ fontFamily: "Over The Rainbow" }}
                  />,
                ]}
              />
            </h1>
            <p className="sm:text-2xl text-lg bg-black w-fit px-4 py-2">
              <Trans
                i18nKey="hero.intro"
                values={{ name: "Kamil Bużek" }}
                components={[<span key="name" className="font-semibold" />]}
              />
            </p>
            <p className="sm:text-2xl text-lg">{t("hero.description")}</p>
          </div>
        </div>
      </section>
      <Carousel items={items} />
    </div>
  );
}
