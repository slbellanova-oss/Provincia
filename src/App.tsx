import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Building2, Menu, X, Home, FileText, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Background Parallax
      gsap.to('.hero-bg', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Hero Content Reveal
      const tl = gsap.timeline();
      tl.from('.hero-title', { y: 50, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.2 })
        .from('.hero-subtitle', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, "-=0.6")
        .from('.hero-btn', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, "-=0.4")
        .from('.hero-tags p', { y: 20, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }, "-=0.4")
        .from('.hero-grid-item', { 
          scale: 0.8, 
          opacity: 0, 
          y: 30,
          duration: 0.8, 
          stagger: 0.15, 
          ease: 'back.out(1.5)' 
        }, "-=1");

      // Services Reveal
      gsap.from('.service-header', {
        scrollTrigger: { trigger: '#services', start: 'top 80%' },
        y: 40, opacity: 0, duration: 0.8, ease: 'power3.out'
      });

      gsap.from('.service-card', {
        scrollTrigger: { trigger: '#services', start: 'top 70%' },
        y: 50, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out'
      });

      // About Section Reveal
      gsap.from('.about-text > *', {
        scrollTrigger: { trigger: '#about', start: 'top 75%' },
        x: -50, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out'
      });

      gsap.from('.about-image', {
        scrollTrigger: { trigger: '#about', start: 'top 75%' },
        scale: 0.9, opacity: 0, duration: 1, ease: 'power3.out'
      });

      // CTA Reveal
      gsap.from('.cta-content > *', {
        scrollTrigger: { trigger: '.cta-section', start: 'top 80%' },
        y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out'
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="min-h-screen bg-[#F8F9FA] font-sans text-[#1A1A1A]">
      {/* Hero Wrapper */}
      <div className="p-4 md:p-8 min-h-screen flex flex-col relative">
        {/* Hero Section */}
        <section className="hero-section relative z-10 flex-1 bg-[#111] text-white flex flex-col hero-shape" style={{ '--cutout-bg': 'white' } as React.CSSProperties}>
          
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0 overflow-hidden rounded-[40px]">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
              alt="Modern building" 
              className="hero-bg w-full h-[120%] object-cover opacity-50 -top-[10%] absolute"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
          </div>

          {/* Navbar - Flex layout with auto-sizing cutouts */}
          <nav className="absolute top-0 left-0 right-0 z-20 flex justify-between items-start">
            {/* Left Cutout (Logo) */}
            <div className="bg-[#F8F9FA] rounded-br-[1.5rem] lg:rounded-br-[2rem] relative flex justify-center items-center px-4 md:px-8 lg:px-14 h-[80px] lg:h-[100px]">
              <div className="text-2xl lg:text-3xl font-black tracking-widest uppercase flex items-center gap-3 text-[#1A1A1A]">
                <Building2 className="text-[#0B3B24] w-8 h-8 lg:w-10 lg:h-10" />
                <span>Провинция</span>
              </div>
              {/* Inner corner right */}
              <div className="absolute top-0 -right-[2rem] w-[2rem] h-[2rem] bg-[#F8F9FA] mask-inner-corner-right hidden lg:block"></div>
              {/* Inner corner bottom */}
              <div className="absolute -bottom-[2rem] left-0 w-[2rem] h-[2rem] bg-[#F8F9FA] mask-inner-corner-bottom-left hidden lg:block"></div>
            </div>
            
            {/* Center Menu - Stretches to fill available space */}
            <div className="hidden lg:flex flex-1 justify-center items-center h-[100px] text-white px-12">
              <div className="flex w-full justify-between text-lg xl:text-xl font-medium">
                <a href="#services" className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left transition-colors">Услуги</a>
                <a href="#about" className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left transition-colors">О компании</a>
                <a href="#team" className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left transition-colors">Команда</a>
                <a href="#news" className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left transition-colors">Новости</a>
                <a href="#contact" className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left transition-colors">Контакты</a>
              </div>
            </div>

            {/* Right Cutout (Phone & Btn) */}
            <div className="bg-[#F8F9FA] rounded-bl-[1.5rem] lg:rounded-bl-[2rem] relative flex justify-center items-center px-4 md:px-8 lg:px-14 h-[80px] lg:h-[100px]">
              {/* Inner corner left */}
              <div className="absolute top-0 -left-[2rem] w-[2rem] h-[2rem] bg-[#F8F9FA] mask-inner-corner-left hidden lg:block"></div>
              {/* Inner corner bottom */}
              <div className="absolute -bottom-[2rem] right-0 w-[2rem] h-[2rem] bg-[#F8F9FA] mask-inner-corner-bottom-right hidden lg:block"></div>
              
              <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-[#1A1A1A]">
                <a href="tel:+79122832027" className="text-lg lg:text-xl font-black tracking-wide whitespace-nowrap relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-[#1A1A1A] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left transition-colors">+7 (912) 283-20-27</a>
                <button className="bg-[#0B3B24] text-white hover:bg-[#0a2e1c] px-8 xl:px-10 py-4 xl:py-5 rounded-full text-lg xl:text-xl font-medium transition-all flex items-center justify-center gap-3 whitespace-nowrap">
                  <span className="leading-none mt-[2px]">Заявка</span> <ArrowRight size={24} />
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <button 
                className="lg:hidden p-2 text-[#1A1A1A] -mr-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>

          {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-[#0B3B24] flex flex-col items-center justify-center space-y-8 text-xl font-medium lg:hidden">
            <button 
              className="absolute top-6 right-6 p-2 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Услуги</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>О компании</a>
            <a href="#team" onClick={() => setIsMenuOpen(false)}>Команда</a>
            <a href="#news" onClick={() => setIsMenuOpen(false)}>Новости</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Контакты</a>
            <div className="pt-8 flex flex-col items-center space-y-4">
              <a href="tel:+79122832027" className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left transition-colors">+7 (912) 283-20-27</a>
              <button className="bg-white text-[#0B3B24] px-6 py-3 rounded-full text-base font-bold">
                Оставить заявку
              </button>
            </div>
          </div>
        )}

        {/* Main Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col pt-[120px] lg:pt-[140px]">
          <div className="container mx-auto px-6 flex-1 flex flex-col lg:pb-16 xl:pb-20">
            {/* Left Column */}
            <div className="flex flex-col flex-1 relative z-30 lg:w-1/2">
              <div className="space-y-6 md:space-y-8 lg:my-auto">
                <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-medium leading-[1.05] tracking-tight">
                  Полное<br />
                  сопровождение<br />
                  сделок с<br />
                  недвижимостью<br />
                  в Провинции
                </h1>
                <p className="hero-subtitle text-lg md:text-xl text-gray-300 max-w-md font-light">
                  от подбора квартиры до одобрения ипотеки и передачи ключей
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - The Grid */}
          <div className="relative lg:absolute lg:bottom-8 lg:right-8 xl:bottom-10 xl:right-10 w-full max-w-[400px] lg:max-w-[400px] xl:max-w-[500px] aspect-square lg:aspect-square mx-auto md:ml-auto md:mr-6 lg:mx-0 z-20 px-6 md:px-0 pb-12 lg:pb-0 mt-8 lg:mt-0 flex items-end">
            <div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-5 w-full h-full">
                {/* Top Left - Empty */}
                <div className="rounded-[32px] md:rounded-[40px]"></div>
                
                {/* Top Right - 2 (Now Text) */}
                <div className="hero-grid-item bg-white rounded-[32px] md:rounded-[40px] p-4 sm:p-6 lg:p-8 flex flex-col justify-center shadow-xl overflow-hidden">
                  <p className="text-[#0B3B24] text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-tight sm:leading-snug break-words">
                    Берем на себя все этапы — вы получаете результат без лишних рисков и стресса.
                  </p>
                </div>
                
                {/* Bottom Left - 4 (Now List) */}
                <div className="hero-grid-item bg-white rounded-[32px] md:rounded-[40px] p-4 sm:p-6 lg:p-8 flex flex-col justify-center gap-2 md:gap-4 shadow-xl overflow-hidden">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-[#0B3B24] shrink-0"></div>
                    <span className="text-[#0B3B24] text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-tight">Работа по договору</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-[#0B3B24] shrink-0"></div>
                    <span className="text-[#0B3B24] text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-tight">Банки-партнёры</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-[#0B3B24] shrink-0"></div>
                    <span className="text-[#0B3B24] text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-tight">Бесплатные консультации</span>
                  </div>
                </div>
                
                {/* Bottom Right - Text */}
                <div className="hero-grid-item bg-[#0B3B24] rounded-[32px] md:rounded-[40px] p-4 sm:p-6 lg:p-8 flex flex-col justify-center shadow-xl overflow-hidden">
                  <p className="text-white text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-tight sm:leading-snug break-words">
                    Покупка, продажа, новостройки, ипотека, рефинансирование и юридическая проверка
                  </p>
                </div>
              </div>
            </div>
        </div>
      </section>
    </div>

      {/* Services Section */}
      <section id="services" className="-mt-4 md:-mt-8 pt-4 md:pt-8 pb-24 bg-white relative z-20">
        <div className="container mx-auto px-6">
          <div className="service-header flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
            <div className="relative z-30">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B3B24] mb-4">Наши услуги</h2>
              <div className="text-gray-600 max-w-xl text-lg">
                <p className="mb-2">Наши услуги включают:</p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0B3B24] mt-1">•</span>
                    <span>Комплексный подход к решению любых задач в сфере недвижимости</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0B3B24] mt-1">•</span>
                    <span>Переезд</span>
                  </li>
                </ul>
              </div>
            </div>
            <button className="text-[#0B3B24] font-medium flex items-center gap-2 hover:gap-4 transition-all">
              Все услуги <ArrowRight size={20} />
            </button>
          </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Home, title: 'Покупка и продажа', desc: 'Вторичный рынок и загородная недвижимость' },
                { icon: Building2, title: 'Новостройки', desc: 'Подбор квартир от надежных застройщиков без комиссии' },
                { icon: FileText, title: 'Ипотека', desc: 'Одобрение по сниженным ставкам от банков-партнеров' },
                { icon: ShieldCheck, title: 'Юридическое сопровождение', desc: 'Проверка чистоты объекта и безопасные расчеты' },
              ].map((service, idx) => (
                <div key={idx} className="service-card relative bg-[#F8F9FA] p-8 rounded-[40px] hover:bg-[#0B3B24] hover:text-white transition-colors duration-300 group cursor-pointer overflow-hidden">
                  <div className="mb-6 bg-white text-[#0B3B24] w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                    <service.icon size={28} />
                  </div>
                  <div className="">
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-lg text-gray-600 group-hover:text-gray-300 transition-colors">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Stats/About Section */}
      <section id="about" className="py-24 bg-[#0B3B24] text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="about-text">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Почему выбирают нас</h2>
              <p className="text-lg text-white/80 mb-8 font-light leading-relaxed">
                Мы не просто продаем квартиры, мы помогаем найти дом вашей мечты или выгодно инвестировать средства. Наш опыт и знание рынка позволяют решать задачи любой сложности.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <div className="text-5xl font-bold mb-2">10+</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Лет на рынке</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">5k+</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Успешных сделок</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">20+</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Банков-партнеров</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">100%</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Гарантия безопасности</div>
                </div>
              </div>
            </div>
            <div className="about-image relative h-[300px] md:h-[450px] lg:h-[600px] rounded-[32px] md:rounded-[40px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop" 
                alt="Real estate agent" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="relative bg-[#F8F9FA] rounded-[32px] md:rounded-[40px] rounded-tl-none p-8 md:p-20 text-center max-w-5xl mx-auto cta-content overflow-hidden" style={{ '--cutout-bg': 'white' } as React.CSSProperties}>
            <div className="cutout-tl w-24 h-24">
               <div className="absolute top-6 left-6 bg-white text-[#0B3B24] w-14 h-14 rounded-full flex items-center justify-center shadow-sm">
                 <Building2 size={24} />
               </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0B3B24] mb-6 mt-4">Готовы обсудить вашу задачу?</h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут для бесплатной консультации.
            </p>
            <form className="max-w-md mx-auto space-y-4">
              <input 
                type="text" 
                placeholder="Ваше имя" 
                className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:border-[#0B3B24] bg-white"
              />
              <input 
                type="tel" 
                placeholder="Номер телефона" 
                className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:border-[#0B3B24] bg-white"
              />
              <button className="w-full bg-[#0B3B24] text-white px-6 py-4 rounded-full font-bold text-lg hover:bg-[#0a2e1d] transition-colors">
                Получить консультацию
              </button>
              <p className="text-xs text-gray-500 mt-4">
                Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111] text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold tracking-wider uppercase flex items-center gap-2 mb-6">
                <Building2 className="text-[#0B3B24]" />
                <span>Провинция</span>
              </div>
              <p className="text-gray-400 max-w-sm">
                Надежное агентство недвижимости. Помогаем покупать, продавать и инвестировать с умом.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (912) 283-20-27</p>
                <p>info@provinciya.ru</p>
                <p>Сысерть, ул. Орджоникидзе, 58</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <div className="space-y-2 text-gray-400 flex flex-col">
                <a href="#services" className="hover:text-white transition-colors">Услуги</a>
                <a href="#about" className="hover:text-white transition-colors">О компании</a>
                <a href="#news" className="hover:text-white transition-colors">Новости</a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© 2026 Агентство недвижимости «Провинция». Все права защищены.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Договор оферты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
