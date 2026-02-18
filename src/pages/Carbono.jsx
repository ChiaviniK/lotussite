import React, { useEffect } from 'react';
import { ArrowLeft, Sprout, Trees, Globe, TrendingUp, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Carbono = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-neutral min-h-screen pb-20">
            {/* Hero Section */}
            <section className="relative h-[400px] flex items-center justify-center text-white">
                <div className="absolute inset-0 z-0 bg-primary">
                    {/* Optional: Add a subtle pattern or image overlay here */}
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Resgate de Carbono no Solo</h1>
                    <p className="text-xl max-w-2xl mx-auto text-green-50">
                        Transformando práticas agrícolas em sustentabilidade e rentabilidade através do sequestro de carbono.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 -mt-10 relative z-20">
                <Link to="/" className="inline-flex items-center text-white bg-dark/80 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-dark transition-colors mb-8">
                    <ArrowLeft size={18} className="mr-2" /> Voltar para Início
                </Link>

                {/* Strategies Section */}
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-8 border-b pb-4">Estratégias de Resgate</h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="flex flex-col h-full">
                            <div className="flex items-center mb-4">
                                <div className="bg-green-100 p-3 rounded-full mr-4">
                                    <Sprout className="text-primary w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-dark">Cobertura do Solo (Cover Crops)</h3>
                            </div>
                            <p className="text-gray-600 flex-grow">
                                Plantar culturas de cobertura em épocas sem cultivo principal é fundamental.
                                Essa prática protege o solo, previne a erosão e adiciona biomassa que se decompõe,
                                transformando-se em carbono orgânico estável no solo via humificação.
                            </p>
                        </div>

                        <div className="flex flex-col h-full">
                            <div className="flex items-center mb-4">
                                <div className="bg-blue-100 p-3 rounded-full mr-4">
                                    <Trees className="text-secondary w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-dark">Integração Lavoura-Pecuária-Floresta (ILPF)</h3>
                            </div>
                            <p className="text-gray-600 flex-grow">
                                Sistemas integrados combinando árvores, pastagem e lavoura.
                                Aumentam significativamente a biomassa acima e abaixo do solo, elevando as reservas de carbono
                                e melhorando a resiliência do ecossistema como um todo.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Global Examples Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-dark mb-8 text-center">Casos de Sucesso Global</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* India */}
                        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-accent">
                            <div className="flex items-center mb-4">
                                <Globe className="text-gray-400 mr-2" size={20} />
                                <h3 className="text-lg font-bold">Índia</h3>
                            </div>
                            <h4 className="text-xl font-bold mb-2 text-primary">Agricultura Climaticamente Consciente</h4>
                            <p className="text-gray-600 text-sm">
                                Fazendeiros reduziram emissões e aumentaram estoque de carbono usando plantio direto e cultivo zero-till.
                                Créditos são medidos e negociados no mercado voluntário.
                            </p>
                        </div>

                        {/* Australia */}
                        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-secondary">
                            <div className="flex items-center mb-4">
                                <Globe className="text-gray-400 mr-2" size={20} />
                                <h3 className="text-lg font-bold">Austrália</h3>
                            </div>
                            <h4 className="text-xl font-bold mb-2 text-primary">Fazenda Carbon-Neutral</h4>
                            <p className="text-gray-600 text-sm">
                                Uso intensivo de pastagens diversificadas e manejo regenerativo levou a um aumento de ~40% em carbono do solo,
                                contribuindo para um balanço positivo de emissões.
                            </p>
                        </div>

                        {/* USA */}
                        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-primary">
                            <div className="flex items-center mb-4">
                                <Globe className="text-gray-400 mr-2" size={20} />
                                <h3 className="text-lg font-bold">EUA</h3>
                            </div>
                            <h4 className="text-xl font-bold mb-2 text-primary">Pecuaristas (Ranchers)</h4>
                            <p className="text-gray-600 text-sm">
                                <em>Regenerative grazing</em> e técnicas como <em>no-till</em> mantêm mais carbono no solo.
                                Empresas como Grassroots Carbon medem e geram créditos vendidos a grandes compradores corporativos.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-primary rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <Calendar className="w-16 h-16 mx-auto mb-6 text-green-200" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Cronograma de Ações e Prioridades</h2>
                        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                            Quer implementar essas práticas na sua propriedade? Elaboramos um cronograma personalizado com as principais ações e próximos passos.
                        </p>
                        <Link to="/#contact" className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-colors inline-block">
                            Fale Conosco
                        </Link>
                    </div>
                    {/* Decorative circles */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
                </div>
            </div>
        </div>
    );
};

export default Carbono;
