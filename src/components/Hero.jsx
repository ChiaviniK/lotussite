import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-[600px] flex items-center justify-center text-white">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1542601906990-24d4c16419d9?q=80&w=2674&auto=format&fit=crop"
                    alt="Nature background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Soluções Ambientais Integradas
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
                    Consultoria, tecnologia e gestão inteligente para transformar desafios ambientais em oportunidades sustentáveis.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="#contact"
                        className="bg-primary hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition-colors flex items-center justify-center gap-2"
                    >
                        Fale Conosco <ArrowRight size={20} />
                    </a>
                    <a
                        href="#services"
                        className="bg-transparent border-2 border-white hover:bg-white hover:text-dark text-white px-8 py-3 rounded-full font-medium transition-all"
                    >
                        Nossos Serviços
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
