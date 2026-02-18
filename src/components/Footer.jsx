import React from 'react';
import { Leaf, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark text-neutral py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <Leaf className="h-6 w-6 text-primary" />
                        <span className="text-xl font-bold text-white">Lotus</span>
                    </div>
                    <p className="text-gray-400">
                        Soluções ambientais inteligentes para um futuro sustentável.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-white mb-4">Contato</h3>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-gray-400">
                            <Mail size={18} />
                            <span>contato@lotusambiental.com.br</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400">
                            <Phone size={18} />
                            <span>(XX) XXXXX-XXXX</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-white mb-4">Redes Sociais</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors">LinkedIn</a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Lotus Consultoria Ambiental. Todos os direitos reservados.
            </div>
        </footer>
    );
};

export default Footer;
