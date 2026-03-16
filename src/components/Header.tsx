import { motion } from 'motion/react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-white/80 backdrop-blur-md">
      <div className="text-2xl font-bold tracking-tighter">ПРОВИНЦИЯ</div>
      <nav className="flex gap-6 text-sm font-medium">
        <a href="#" className="hover:text-emerald-600">Объекты</a>
        <a href="#" className="hover:text-emerald-600">Услуги</a>
        <a href="#" className="hover:text-emerald-600">Контакты</a>
      </nav>
      <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-emerald-600 transition">
        Оставить заявку
      </button>
    </header>
  );
}
