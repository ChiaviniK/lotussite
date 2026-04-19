import React from 'react';
import { FileText, Cloud, Monitor, Sprout, Briefcase, ClipboardCheck, Megaphone, ArrowRight, Code, ShieldCheck, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    const pillars = [
        {
            title: "Desenvolvimento & Software",
            icon: <Code className="text-accent" size={32} />,
            services: [
                {
                    title: "Software de Gestão Ambiental",
                    description: "Plataformas customizadas para monitoramento em tempo real de KPIs de sustentabilidade.",
                    icon: <Monitor size={24} />,
                    link: null
                },
                {
                    title: "GHG / Carbon Data",
                    description: "Engine de cálculo para inventários de emissões e inteligência de dados climáticos.",
                    icon: <Cloud size={24} />,
                    link: "/carbono"
                }
            ]
        },
        {
            title: "Consultoria Estratégica",
            icon: <ShieldCheck className="text-accent" size={32} />,
            services: [
                {
                    title: "Diagnóstico & Auditoria",
                    description: "Análise profunda de conformidade ESG e mitigação de riscos operacionais.",
                    icon: <Briefcase size={24} />,
                    link: null
                },
                {
                    title: "Marketing Ambiental",
                    description: "Posicionamento de marca através de narrativas sustentáveis autênticas.",
                    icon: <Megaphone size={24} />,
                    link: null
                }
            ]
        },
        {
            title: "Ambiente & Ecossistemas",
            icon: <Globe className="text-accent" size={32} />,
            services: [
                {
                    title: "Licenciamento & Regularização",
                    description: "Gestão completa de processos junto a órgãos reguladores.",
                    icon: <FileText size={24} />,
                    link: null
                },
                {
                    title: "Gestão de Fazenda & Solo",
                    description: "Otimização de recursos e regeneração de ecossistemas produtivos.",
                    icon: <Sprout size={24} />,
                    link: null
                },
                {
                    title: "Laudo de Vegetação",
                    description: "Inventários técnicos e planos de manejo florestal de alta precisão.",
                    icon: <ClipboardCheck size={24} />,
                    link: null
                }
            ]
        }
    ];

    return (
        <section id="services" className="py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-serif font-black text-primary mb-6">Equilíbrio entre <span className="text-accent italic">Bit</span> & <span className="text-secondary">Átomo</span></h2>
                        <p className="text-lg text-muted font-light leading-relaxed">
                            Integramos tecnologia de ponta com expertise ambiental para criar soluções que geram valor econômico e regenerativo.
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <div className="w-32 h-px bg-accent"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {pillars.map((pillar, pIndex) => (
                        <div key={pIndex} className="space-y-8">
                            <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
                                {pillar.icon}
                                <h3 className="text-xl font-bold uppercase tracking-widest text-primary font-sans">{pillar.title}</h3>
                            </div>
                            
                            <div className="space-y-6">
                                {pillar.services.map((service, sIndex) => (
                                    <div key={sIndex} className="group cursor-default">
                                        {service.link ? (
                                            <Link to={service.link} className="block">
                                                <div className="p-6 rounded-2xl border border-gray-100 bg-light/30 hover:bg-white hover:shadow-xl hover:shadow-primary/5 hover:border-accent/30 transition-all duration-500">
                                                    <div className="flex items-start justify-between mb-4">
                                                        <div className="p-3 bg-secondary/10 rounded-lg text-secondary group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                                                            {service.icon}
                                                        </div>
                                                        <ArrowRight size={18} className="text-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                                    </div>
                                                    <h4 className="text-lg font-serif font-bold mb-2 text-primary group-hover:text-accent transition-colors">{service.title}</h4>
                                                    <p className="text-sm text-muted leading-relaxed font-light">{service.description}</p>
                                                </div>
                                            </Link>
                                        ) : (
                                            <div className="p-6 rounded-2xl border border-gray-100 bg-light/30 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
                                                <div className="p-3 bg-primary/5 rounded-lg text-primary mb-4 w-fit group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                                                    {service.icon}
                                                </div>
                                                <h4 className="text-lg font-serif font-bold mb-2 text-primary">{service.title}</h4>
                                                <p className="text-sm text-muted leading-relaxed font-light">{service.description}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

