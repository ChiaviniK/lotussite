import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-32 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 max-w-7xl mx-auto items-center">
                    {/* Brand Info & Vision */}
                    <div className="space-y-12">
                        <div>
                            <span className="text-accent text-sm font-bold tracking-[0.3em] uppercase mb-4 block">Fale Conosco</span>
                            <h2 className="text-4xl md:text-6xl font-serif font-black text-primary leading-tight mb-8">
                                Vamos Projetar o Seu <span className="text-gold italic">Legado</span>
                            </h2>
                            <p className="text-xl text-muted font-light leading-relaxed max-w-lg">
                                Seja para uma consultoria técnica ou para o desenvolvimento de software sob medida, nossa equipe está pronta para integrar soluções sustentáveis ao seu negócio.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-center space-x-6 group">
                                <div className="p-4 bg-light rounded-full text-secondary group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                    <Mail size={24} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold text-muted uppercase tracking-widest">Email</span>
                                    <span className="text-lg font-medium text-primary">contato@lotusambiental.com.br</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-6 group">
                                <div className="p-4 bg-light rounded-full text-secondary group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                    <Phone size={24} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold text-muted uppercase tracking-widest">Telefone</span>
                                    <span className="text-lg font-medium text-primary">(15) 99797-2481</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Card */}
                    <div className="bg-light/40 p-8 md:p-12 rounded-[2rem] border border-gray-100 shadow-2xl relative">
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl"></div>
                        
                        <form className="space-y-8 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1">Nome</label>
                                    <input type="text" className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-200 focus:border-accent outline-none transition-all placeholder:text-muted/40 font-medium" placeholder="Elias Silva" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1">Email</label>
                                    <input type="email" className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-200 focus:border-accent outline-none transition-all placeholder:text-muted/40 font-medium" placeholder="elias@exemplo.com" />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1">Assunto</label>
                                <select className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-200 focus:border-accent outline-none transition-all font-medium appearance-none">
                                    <option>Selecione uma categoria</option>
                                    <option>Software Customizado</option>
                                    <option>Consultoria ESG</option>
                                    <option>Licenciamento Ambiental</option>
                                    <option>GHG / Carbono</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1">Mensagem</label>
                                <textarea className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-200 focus:border-accent outline-none transition-all placeholder:text-muted/40 font-medium h-32 resize-none" placeholder="Conte-nos sobre o seu desafio..."></textarea>
                            </div>

                            <button type="button" className="premium-button-primary w-full group flex items-center justify-center gap-3">
                                Enviar Mensagem <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

