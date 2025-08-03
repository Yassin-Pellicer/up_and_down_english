import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";

export function Carousel({ items }: any) {
  const { i18n } = useTranslation();

  const baseX = useMotionValue(0);
  const itemWidth = 300;
  const compensation = 0;
  const totalHeight = items.length * itemWidth;

  useAnimationFrame((t) => {
    baseX.set((t / 20) % (totalHeight + itemWidth / 2 - compensation));
  });

  return (
    <div className="flex relative items-center justify-center h-[340px] overflow-hidden">
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `linear-gradient(to right, 
            rgb(158, 213, 252) 0%, 
            transparent 15%, 
            transparent 85%, 
            rgb(112, 177, 254) 100%)`,
        }}
      />
      {/* Scrolling Items */}
      <motion.div
        className="flex flex-row gap-6"
        style={{
          x: useTransform(baseX, (val) => -(val + itemWidth / 2)),
        }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <div
            key={i}
            className={`grid grid-rows-2 bg-[#c8aacf] text-white h-[300px] w-[300px] rounded-2xl shadow-lg px-6 py-4 relative overflow-hidden`}
            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
          >
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src={item.img}
              alt={item.title}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}