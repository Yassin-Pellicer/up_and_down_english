'use client';
import { useTranslation, Trans } from 'react-i18next';
import { Carousel } from '../carousel/hero';

export function Hero() {
  const { t } = useTranslation();
  const items = (t('hero.carousel_one', { returnObjects: true }) as Array<{
    icon: string;
    title: string;
    subtitle: string;
  }>) || [];

  const features = (t('hero.carousel_two', { returnObjects: true }) as Array<{
    icon: string;
    title: string;
    subtitle: string;
  }>) || [];
  const opinions = (t('hero.carousel_three', { returnObjects: true }) as Array<{
    person: string;
    rating: string;
    type: string;
    text: string;
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
      <div className="flex flex-col gap-4 items-center justify-center mt-8">
        <h1 className="sm:text-4xl text-3xl font-bold tracking-tighter">
          <Trans
            i18nKey="hero.headline_two"
            components={[
              <span
                key="span"
                className="tracking-tight font-bold"
                style={{ fontFamily: "Shadows Into Light" }}
              />,
            ]}
          />
        </h1>
        <div className="grid grid-cols-1 my-4 md:grid-cols-2 xl:grid-cols-3 items-center gap-2 flex-wrap">
          {opinions.map((item, i) => (
            <div
              key={i}
              className="shadow-lg gap-4 flex flex-row justify-center border-2 h-full border-[#c8aacf] text-black rounded-2xl relative p-4"
            >
              <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center border-b mb-2 pb-2">
                  <p className="font-bold text-2xl">
                    {item.person}
                  </p>
                  <p className="font-bold text-sm" style={{ fontFamily: "Shadows Into Light" }}>
                    {item.rating}
                  </p>
                </div>
                <p className=" text-gray-500 text-sm mb-2">
                  {item.type}
                </p>
                <p className="italic text-gray-800 text-sm mb-2">
                  "{item.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
        <h2 className="sm:text-4xl text-3xl font-bold tracking-tighter mt-8">
          <Trans
            i18nKey="hero.headline_three"
            components={[
              <span
                key="span"
                className="tracking-tight font-bold"
                style={{ fontFamily: "Shadows Into Light" }}
              />,
            ]}
          />
        </h2>
        <div
          className="flex flex-row gap-1 items-center justify-center bg-[#c8aacf] mt-8 text-black rounded-full px-4 relative py-2 
        hover:cursor-pointer hover:bg-[#a8a8a8] hover:text-white transition duration-100 ease-in-out border-green-700 border-2"
        >
          <div className="bg-green-500 rounded-full h-3 w-3 animate-pulse duration-1000 ease-in-out" />
          <div className="flex items-center justify-center text-4xl">
            {items[0].icon}
          </div>
          <div className="flex flex-col">
            <div className="font-bold  text-sm sm:text-xl">
              {items[0].title}
            </div>
          </div>
        </div>
        <h2 className="text-lg font-bold tracking-tighter mt-4">
          <Trans
            i18nKey="hero.headline_four"
            components={[
              <span
                key="span"
                className="tracking-tight font-bold"
              />,
            ]}
          />
        </h2>
      </div>
    </div>
  );
}
