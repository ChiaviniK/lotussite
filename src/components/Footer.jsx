import React from 'react';
import { Mail, Phone, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import logo from '../assets/images/logo.png';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-dark text-light py-20 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2 space-y-8">
                        <div className="flex items-center space-x-4">
                            <img src={logo} alt="Lotus Logo" className="h-12 w-12 brightness-0 invert" />
                            <span className="text-3xl font-serif font-black tracking-tighter text-white uppercase italic">Lotus</span>
                        </div>
                        <p className="text-muted text-lg font-light max-w-sm leading-relaxed">
                            Liderando a transformação sustentável através da engenharia de software e consultoria ambiental de alta performance.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="p-3 border border-white/10 rounded-full hover:bg-accent hover:border-accent hover:text-white transition-all duration-300">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="p-3 border border-white/10 rounded-full hover:bg-accent hover:border-accent hover:text-white transition-all duration-300">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold tracking-widest uppercase text-sm">Explorar</h4>
                        <nav className="flex flex-col space-y-4">
                            <a href="#" className="text-muted hover:text-accent transition-colors font-light">Início</a>
                            <a href="#services" className="text-muted hover:text-accent transition-colors font-light">Serviços</a>
                            <a href="#team" className="text-muted hover:text-accent transition-colors font-light">Equipe</a>
                            <a href="#contact" className="text-muted hover:text-accent transition-colors font-light">Contato</a>
                        </nav>
                    </div>

                    {/* Contact Column */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold tracking-widest uppercase text-sm">Escritório</h4>
                        <div className="flex flex-col space-y-4">
                            <div className="flex items-center space-x-3 text-muted">
                                <Mail size={18} className="text-accent" />
                                <span className="font-light">contato@lotusambiental.com.br</span>
                            </div>
                            <div className="flex items-center space-x-3 text-muted">
                                <Phone size={18} className="text-accent" />
                                <span className="font-light">(15) 99797-2481</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-muted/60 text-sm font-light">
                        &copy; {new Date().getFullYear()} Lotus Desenvolvimento & Consultoria. Todos os direitos reservados.
                    </p>
                    <button 
                        onClick={scrollToTop}
                        className="p-4 bg-primary/20 hover:bg-accent rounded-full text-white transition-all duration-300 group"
                    >
                        <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

