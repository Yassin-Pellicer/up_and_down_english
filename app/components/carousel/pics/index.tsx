import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";

export function Carousel({ items }: any) {
  const { i18n } = useTranslation();

  const baseX = useMotionValue(0);
  const itemWidth = 160; // Smaller so more fit in constrained width
  const itemHeight = 260; // Fixed height for images
  const compensation = -60;
  const totalWidth = items.length * itemWidth;

  useAnimationFrame((t) => {
    baseX.set((t / 20) % (totalWidth + itemWidth / 2 - compensation));
  });

  return (
    <div className="relative flex items-center justify-center overflow-hidden w-full lg:max-w-[800px] md:max-w-[500px] max-w-[300px] h-[300px]">
      {/* Gradient fade edges */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `linear-gradient(to right, 
            rgb(255, 255, 255) 0%, 
            transparent 10%, 
            transparent 90%, 
            rgb(255, 255, 255) 100%)`,
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
            className="relative rounded-lg shadow-lg overflow-hidden flex-shrink-0 group hover:cursor-pointer"
            style={{
              width: itemWidth,
              height: itemHeight,
              backgroundColor: "#c8aacf",
            }}
            onClick={() => window.open(item.link, "_blank")}
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.link}
              className="w-full h-full object-cover"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 sm:bg-black/40 sm:opacity-0 opacity-100 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
              <span
                className="material-symbols-outlined text-white drop-shadow-lg"
                style={{ fontSize: "3rem" }}
              >
                play_arrow
              </span>
            </div>
          </div>

        ))}
      </motion.div>
    </div>
  );
}
