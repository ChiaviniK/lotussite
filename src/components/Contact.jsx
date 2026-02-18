import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-neutral">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Entre em Contato</h2>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Estamos prontos para ajudar sua empresa a alcançar seus objetivos ambientais.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="bg-primary text-white p-10 rounded-2xl shadow-xl">
                        <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
                        <p className="mb-8 text-green-100">
                            Preencha o formulário ou entre em contato direto através dos nossos canais.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <Mail className="mt-1" size={24} />
                                <div>
                                    <p className="font-bold">Email</p>
                                    <p className="text-green-100">contato@lotusambiental.com.br</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Phone className="mt-1" size={24} />
                                <div>
                                    <p className="font-bold">Telefone</p>
                                    <p className="text-green-100">(XX) XXXXX-XXXX</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <MapPin className="mt-1" size={24} />
                                <div>
                                    <p className="font-bold">Localização</p>
                                    <p className="text-green-100">Endereço da Empresa, Cidade - UF</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-10 rounded-2xl shadow-xl">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                                <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Seu nome" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="seu@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Assunto</label>
                                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                                    <option>Selecione um assunto</option>
                                    <option>Orçamento</option>
                                    <option>Dúvida</option>
                                    <option>Parceria</option>
                                    <option>Outro</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                                <textarea className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all h-32" placeholder="Como podemos ajudar?"></textarea>
                            </div>
                            <button type="button" className="w-full bg-dark hover:bg-black text-white py-4 rounded-lg font-bold transition-colors flex items-center justify-center gap-2">
                                Enviar Mensagem <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
