import React from 'react';
import { FileText, Cloud, Monitor, Sprout, Briefcase, ClipboardCheck, Megaphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            icon: <FileText size={40} />,
            title: "Licenciamento Ambiental",
            description: "Regularização de empreendimentos junto aos órgãos competentes com agilidade e técnica.",
            link: null
        },
        {
            icon: <Cloud size={40} />,
            title: "GHG / Carbon Data",
            description: "Inventários de emissões, gestão de pegada de carbono e estratégias de descarbonização.",
            link: "/carbono" // Link specifically for this service
        },
        {
            icon: <Monitor size={40} />,
            title: "Software de Gestão Ambiental",
            description: "Tecnologia própria para monitoramento e controle de indicadores ambientais.",
            link: null
        },
        {
            icon: <Sprout size={40} />,
            title: "Gestão de Fazenda",
            description: "Soluções integradas para sustentabilidade e produtividade no agronegócio.",
            link: null
        },
        {
            icon: <Briefcase size={40} />,
            title: "Consultoria & Auditoria",
            description: "Diagnósticos precisos e auditorias de conformidade legal e normativa.",
            link: null
        },
        {
            icon: <ClipboardCheck size={40} />,
            title: "Laudo de Vegetação",
            description: "Caracterização de flora, inventários florestais e autorizações de supressão.",
            link: null
        },
        {
            icon: <Megaphone size={40} />,
            title: "Marketing Ambiental",
            description: "Comunicação estratégica de ações sustentáveis para valorizar sua marca.",
            link: null
        }
    ];

    return (
        <section id="services" className="py-20 bg-neutral">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Nossos Serviços</h2>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Oferecemos um portfólio completo de soluções para atender às demandas ambientais do seu negócio.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="h-full">
                            {service.link ? (
                                <Link to={service.link} className="block h-full">
                                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-green-100 hover:border-primary group h-full relative overflow-hidden">
                                        <div className="absolute top-0 right-0 bg-primary text-white text-xs px-2 py-1 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                            Saiba Mais
                                        </div>
                                        <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-dark group-hover:text-primary transition-colors flex items-center">
                                            {service.title} <ArrowRight size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </Link>
                            ) : (
                                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group h-full">
                                    <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-dark group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
