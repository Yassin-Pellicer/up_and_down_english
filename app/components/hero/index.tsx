'use client';
import { useTranslation, Trans } from 'react-i18next';
import { Carousel } from '../carousel/hero';

export function Hero() {
  const { t } = useTranslation();
  const items = t('hero.carousel_one', { returnObjects: true }) || [];
  const features = (t('hero.carousel_two', { returnObjects: true }) as Array<{
    icon: string;
    title: string;
    subtitle: string;
  }>) || [];

  return (
    <div className="grid gap-4 sm:pt-32 pt-24">
      <section
        className="flex items-center align-center py-8 w-full text-black text-shadow-xl"
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
                    style={{ fontFamily: "Shadows Into Light" }}
                  />,
                ]}
              />
            </h1>
            <p className="sm:text-2xl text-lg">{t("hero.description")}</p>
          </div>
        </div>
      </section>
      <Carousel items={items} />
      <div className="grid grid-cols-1 my-4 md:grid-cols-2 xl:grid-cols-3 items-center gap-2 flex-wrap">
        {features.map((item, i) => (
          <div
            key={i}
            className="shadow-lg gap-4 sm:p-6 flex flex-row items-center justify-center bg-[#c8aacf] text-black rounded-2xl relative py-4"
          >
            <div className="flex items-center justify-center sm:text-7xl text-6xl sm:py-4 sm:mb-4">
              {item.icon}
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-2xl sm:text-4xl" style={{ fontFamily: "Shadows Into Light" }}>
                {item.title} 
              </div>
              <p className="">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
