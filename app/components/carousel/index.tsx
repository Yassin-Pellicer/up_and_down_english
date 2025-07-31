import i18n from "@/app/lib/18n";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";

export function Carousel({ items }: any) {

  const baseX = useMotionValue(0);
  const itemWidth = i18n.language === 'pl' ? 360 : 300;
  const compensation = i18n.language === 'pl' ? -200 : 0;
  const totalHeight = items.length * itemWidth;

  useAnimationFrame((t) => {
    baseX.set((t / 20) % (totalHeight + itemWidth / 2 - compensation));
  });

  return (
    <div className="flex relative items-center justify-center h-[300px] overflow-hidden">
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `linear-gradient(to right, 
            rgb(103, 166, 255) 0%, 
            transparent 5%, 
            transparent 95%, 
            rgb(61, 131, 255) 100%)`,
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
            className={`grid grid-rows-2 bg-blue-600 text-white h-[300px] w-[${i18n.language === 'pl' ? 400 : 300}px] rounded-lg shadow-xl px-6 py-4 relative`}
          >
            <div className="text-8xl mb-4 text-center border-b border-white pb-4">
              {item.icon}
            </div>
            <div className="flex flex-col">
              <div className="text-3xl font-bold">
                {item.title}
              </div>
              <div className="text-lg">
                {item.subtitle}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}