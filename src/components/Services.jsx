import React from 'react';
import { FileText, Cloud, Monitor, Sprout, Briefcase, ClipboardCheck, Megaphone, ArrowRight, Code, ShieldCheck, Globe, TrendingUp, Box, BarChart3, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    const pillars = [
        {
            title: "Gestão Estratégica",
            icon: <Briefcase className="text-accent" size={32} />,
            services: [
                {
                    title: "Diagnóstico Empresarial",
                    description: "Análise 360º para identificação de gargalos e oportunidades de otimização operacional.",
                    example: "MVP: Dashboard de saúde organizacional com KPIs críticos.",
                    icon: <Monitor size={24} />,
                    link: null
                },
                {
                    title: "Gestão Financeira e Custos",
                    description: "Controle de fluxo de caixa e reestruturação de custos para maximizar a lucratividade.",
                    example: "MVP: Simulador de margem e projeção de caixa em tempo real.",
                    icon: <TrendingUp size={24} />,
                    link: null
                },
                {
                    title: "Organização de Processos",
                    description: "Modelagem e automação de fluxos de trabalho visando máxima eficiência e padronização.",
                    example: "MVP: Blueprint de processos automatizado com ferramentas de BPM.",
                    icon: <ClipboardCheck size={24} />,
                    link: null
                },
                {
                    title: "Gestão de Estoque e Logística",
                    description: "Otimização da cadeia de suprimentos e controle rigoroso de inventário.",
                    example: "MVP: Algoritmo de previsão de demanda e reposição inteligente.",
                    icon: <Box size={24} />,
                    link: null
                }
            ]
        },
        {
            title: "Tecnologia & Dados",
            icon: <Code className="text-accent" size={32} />,
            services: [
                {
                    title: "Implantação de Sistemas e Indicadores",
                    description: "Desenvolvimento de Dashboards e BI para decisões baseadas em dados reais.",
                    example: "MVP: Painel de Business Intelligence personalizado com alertas de desvio.",
                    icon: <BarChart3 size={24} />,
                    link: null
                },
                {
                    title: "Gestão de Carbono",
                    description: "Estratégias para transição net-zero e valorização de ativos ambientais.",
                    example: "MVP: Plataforma de monitoramento de créditos de carbono.",
                    icon: <Sprout size={24} />,
                    link: "/carbono"
                },
                {
                    title: "Inventário de Emissões (GHG Protocol)",
                    description: "Relatórios técnicos de emissões de gases de efeito estufa em conformidade global.",
                    example: "MVP: Gerador automático de inventário Escopo 1, 2 e 3.",
                    icon: <Cloud size={24} />,
                    link: null
                }
            ]
        },
        {
            title: "Engenharia Ambiental",
            icon: <Globe className="text-accent" size={32} />,
            services: [
                {
                    title: "PGRS",
                    description: "Plano de Gerenciamento de Resíduos Sólidos com foco em economia circular.",
                    example: "MVP: Sistema de rastreabilidade e destinação final de resíduos.",
                    icon: <RotateCcw size={24} />,
                    link: null
                },
                {
                    title: "Atendimento a Órgãos Ambientais",
                    description: "Gestão técnica de licenciamento e conformidade (ex: CETESB, IBAMA).",
                    example: "MVP: Fluxo automatizado de renovação de licenças e monitoramento de condicionantes.",
                    icon: <ShieldCheck size={24} />,
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
                                        <div className="p-6 rounded-2xl border border-gray-100 bg-light/30 hover:bg-white hover:shadow-xl hover:shadow-primary/5 hover:border-accent/30 transition-all duration-500 group/card h-full flex flex-col">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="p-3 bg-secondary/10 rounded-lg text-secondary group-hover/card:bg-accent group-hover/card:text-white transition-colors duration-500">
                                                    {service.icon}
                                                </div>
                                                <ArrowRight size={18} className="text-muted opacity-0 group-hover/card:opacity-100 group-hover/card:translate-x-1 transition-all" />
                                            </div>
                                            <h4 className="text-lg font-serif font-bold mb-2 text-primary group-hover/card:text-accent transition-colors">{service.title}</h4>
                                            <p className="text-sm text-muted leading-relaxed font-light mb-4 flex-grow">{service.description}</p>
                                            
                                            {service.example && (
                                                <div className="mt-auto pt-4 border-t border-gray-100/50">
                                                    <div className="bg-accent/5 rounded-xl p-3 border border-accent/10">
                                                        <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-1">Exemplo de Aplicação</p>
                                                        <p className="text-xs text-primary/70 font-medium italic">{service.example}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </Link>
                                ) : (
                                    <div className="p-6 rounded-2xl border border-gray-100 bg-light/30 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 h-full flex flex-col group/card">
                                        <div className="p-3 bg-primary/5 rounded-lg text-primary mb-4 w-fit group-hover/card:bg-primary group-hover/card:text-white transition-colors duration-500">
                                            {service.icon}
                                        </div>
                                        <h4 className="text-lg font-serif font-bold mb-2 text-primary">{service.title}</h4>
                                        <p className="text-sm text-muted leading-relaxed font-light mb-4 flex-grow">{service.description}</p>
                                        
                                        {service.example && (
                                            <div className="mt-auto pt-4 border-t border-gray-100/50">
                                                <div className="bg-primary/5 rounded-xl p-3 border border-primary/10">
                                                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary/50 mb-1">Exemplo de Aplicação</p>
                                                    <p className="text-xs text-primary/70 font-medium italic">{service.example}</p>
                                                </div>
                                            </div>
                                        )}
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

