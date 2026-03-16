import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center p-6 pt-32">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-8xl font-bold tracking-tighter leading-none"
      >
        Недвижимость<br />
        <span className="text-emerald-600">с характером</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-6 text-xl text-zinc-600 max-w-lg"
      >
        Подбираем объекты, которые становятся домом или выгодной инвестицией.
      </motion.p>
    </section>
  );
}
