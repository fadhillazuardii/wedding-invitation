import React from "react";
import { motion } from "motion/react";

const DigitalGift = () => {
  return (
    <section>
      <div>
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <p className="text-rose-400 tracking-[03em] text-xs uppercase mb-3 font-light">
            Wedding Gift
          </p>
          <h2 className="text-4xl font-stone-700">Amplop Digital</h2>
          <p className="text-stone-400 text-sm max-w-md mx-auto leading-relaxed">
            Doa restu Anda adalah hadiah terbesar bagi kami. Namun bila berkenan
            memberikan hadiah, Anda dapat mengirimkannya melalui rekening
            berikut.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalGift;
