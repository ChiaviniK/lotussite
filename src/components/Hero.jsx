import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import heroBg from '../assets/images/hero-bg.png';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Dynamic Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Lotus Technology & Nature"
                    className="w-full h-full object-cover scale-105 animate-slow-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark/80"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-sm">
                    <span className="text-accent text-sm font-bold tracking-[0.2em] uppercase">Inovação • Consultoria • Ecossistemas</span>
                </div>
                
                <h1 className="text-5xl md:text-8xl font-serif font-black text-white mb-8 leading-tight tracking-tight">
                    Tecnologia Que <span className="text-gold">Respira</span>
                </h1>
                
                <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-light/80 leading-relaxed font-light">
                    Elevamos o desenvolvimento de software e a consultoria empresarial a um novo patamar de sustentabilidade e excelência.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                    <a
                        href="#contact"
                        className="premium-button-primary group flex items-center gap-3 text-lg"
                    >
                        Iniciar Projeto <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#services"
                        className="text-white hover:text-accent font-semibold tracking-wide flex items-center gap-2 transition-colors border-b-2 border-transparent hover:border-accent pb-1"
                    >
                        Conheça Nossas Soluções
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white/50">
                <ChevronDown size={32} />
            </div>
        </section>
    );
};

export default Hero;

