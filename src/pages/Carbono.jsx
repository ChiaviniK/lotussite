import React, { useEffect } from 'react';
import { ArrowLeft, Sprout, Trees, Globe, TrendingUp, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/images/hero-bg.png';

const Carbono = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-light min-h-screen pb-32">
            {/* Minimalist Hero */}
            <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="Nature background"
                        className="w-full h-full object-cover scale-110"
                    />
                    <div className="absolute inset-0 bg-dark/70 backdrop-blur-[2px]"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="text-accent text-sm font-bold tracking-[0.3em] uppercase mb-4 block">Especialidade</span>
                    <h1 className="text-4xl md:text-7xl font-serif font-black text-white mb-6 leading-tight">
                        Resgate de <span className="text-gold italic">Carbono</span> no Solo
                    </h1>
                    <p className="text-xl max-w-2xl mx-auto text-light/80 font-light leading-relaxed">
                        Engenharia regenerativa: transformando o passivo ambiental em ativos estratégicos para o agronegócio global.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-6 -mt-20 relative z-20">
                <Link to="/" className="inline-flex items-center text-white bg-primary/20 backdrop-blur-md px-6 py-3 rounded-full hover:bg-accent transition-all duration-300 mb-12 border border-white/10 group">
                    <ArrowLeft size={20} className="mr-3 group-hover:-translate-x-1 transition-transform" /> 
                    <span className="text-sm font-bold tracking-widest uppercase">Voltar ao Início</span>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content Card */}
                    <div className="lg:col-span-2 space-y-12">
                        <div className="bg-white rounded-[2rem] shadow-2xl p-10 md:p-16 border border-gray-100">
                            <h2 className="text-3xl md:text-4xl font-serif font-black text-primary mb-12 flex items-center gap-4">
                                Estratégias de <span className="text-gold italic">Impacto</span>
                                <div className="flex-grow h-px bg-gray-100"></div>
                            </h2>

                            <div className="space-y-16">
                                <div className="flex flex-col md:flex-row gap-8 group">
                                    <div className="bg-light p-6 rounded-3xl text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0 h-fit">
                                        <Sprout size={40} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-serif font-bold text-primary mb-4">Cobertura do Solo (Cover Crops)</h3>
                                        <p className="text-muted leading-relaxed font-light text-lg">
                                            A proteção do solo através de culturas de cobertura não é apenas uma prática agrícola; é a base da **humificação**. Adicionamos biomassa estável que captura carbono da atmosfera e o fixa nas camadas profundas do solo.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row gap-8 group text-right md:text-left">
                                    <div className="bg-light p-6 rounded-3xl text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0 h-fit md:order-1">
                                        <Trees size={40} />
                                    </div>
                                    <div className="md:order-2">
                                        <h3 className="text-2xl font-serif font-bold text-primary mb-4 text-left">Integração ILPF</h3>
                                        <p className="text-muted leading-relaxed font-light text-lg text-left">
                                            A sinergia entre lavoura, pecuária e floresta maximiza a fotossíntese por metro quadrado. É a engenharia biológica em sua forma mais pura, elevando a resiliência térmica e hídrica da propriedade.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Success Cases Grid */}
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { country: "Índia", detail: "Agricultura Regenerativa", accent: "border-accent" },
                                { country: "Austrália", detail: "Carbon-Neutral Ranching", accent: "border-secondary" },
                                { country: "EUA", detail: "Regenerative Grazing", accent: "border-primary" }
                            ].map((caseItem, idx) => (
                                <div key={idx} className={`bg-white p-8 rounded-2xl shadow-lg border-t-4 ${caseItem.accent} hover:-translate-y-2 transition-all duration-500`}>
                                    <div className="flex items-center gap-2 mb-4 text-muted/50">
                                        <Globe size={16} />
                                        <span className="text-xs font-bold uppercase tracking-[0.2em]">{caseItem.country}</span>
                                    </div>
                                    <h4 className="text-lg font-serif font-bold text-primary leading-tight">{caseItem.detail}</h4>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar / CTA */}
                    <div className="lg:col-span-1">
                        <div className="bg-primary p-12 rounded-[2rem] text-white sticky top-32 shadow-2xl overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                            
                            <Calendar className="w-12 h-12 mb-8 text-accent" />
                            <h2 className="text-3xl font-serif font-bold mb-6 italic text-gold">Próximos Passos</h2>
                            <p className="text-light/80 font-light leading-relaxed mb-10">
                                Deseja implementar um cronograma personalizado de resgate de carbono e gerar créditos certificáveis?
                            </p>
                            
                            <Link to="/#contact" className="premium-button-primary bg-white text-primary ring-0 hover:bg-accent hover:text-white flex items-center justify-center gap-3">
                                Consultar Agora <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carbono;

