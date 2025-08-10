// import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";

export function Carousel({ items }: any) {
  const { i18n } = useTranslation();

  // const baseX = useMotionValue(0);
  const itemWidth = 300;
  const compensation = 0;
  const totalHeight = items.length * itemWidth;

  // useAnimationFrame((t) => {
  //   baseX.set((t / 20) % (totalHeight + itemWidth / 2 - compensation));
  // });

  return (
    <div className="flex flex-row flex-wrap relative sm:justify-between justify-center overflow-hidden gap-2 mb-8 sm:mb-0">
      {/* Scrolling Items */}
      {/* <motion.div
        className="flex flex-row gap-6"
        style={{
          x: useTransform(baseX, (val) => -(val + itemWidth / 2)),
        }}
      > */}
      <div
        className="flex flex-row gap-1 items-center justify-center bg-[#c8aacf] text-black rounded-full px-4 relative py-2 
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
      <div className=" flex flex-row items-center gap-2 flex-wrap">
        {[...items].slice(-3).map((item, i) => (
          <div
            key={i}
            className="flex sm:flex-row flex-col px-6 items-center justify-center bg-[#c8aacf] text-black sm:rounded-full rounded-2xl relative py-2 hover:cursor-pointer hover:bg-[#a8a8a8] hover:text-white transition duration-100 ease-in-out"
          >
            <div className="flex items-center justify-center text-4xl">
              {item.icon}
            </div>
            <div className="flex flex-col">
              <div className="font-bold  text-sm sm:text-xl">
                {item.title}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* </motion.div> */}
    </div>
  );
}