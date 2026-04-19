import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Início', href: '#', isScroll: true },
        { name: 'Serviços', href: '#services', isScroll: true },
        { name: 'Equipe', href: '#team', isScroll: true },
        { name: 'Contato', href: '#contact', isScroll: true },
    ];

    const handleNavigation = (e, item) => {
        e.preventDefault();
        setIsOpen(false);

        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                if (item.href === '#') {
                    window.scrollTo(0, 0);
                } else {
                    const element = document.querySelector(item.href);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            if (item.href === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const element = document.querySelector(item.href);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <header className={`${scrolled ? 'glass-header' : 'bg-transparent'} fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 shadow-lg' : 'py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-3 group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img src={logo} alt="Lotus Logo" className={`transition-all duration-300 ${scrolled ? 'h-10 w-10' : 'h-14 w-14'}`} />
                    <span className={`text-2xl font-serif font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-primary'}`}>
                        LOTUS
                    </span>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center space-x-10">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => handleNavigation(e, item)}
                            className={`text-sm tracking-widest uppercase font-semibold transition-all duration-300 hover:text-accent relative overflow-hidden group ${scrolled ? 'text-dark' : 'text-primary'}`}
                        >
                            {item.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                    <a 
                        href="#contact" 
                        onClick={(e) => handleNavigation(e, { href: '#contact' })}
                        className="premium-button-primary scale-90 px-6 py-2"
                    >
                        Contato
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden focus:outline-none transition-colors duration-300 ${scrolled ? 'text-dark' : 'text-primary'}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-xl h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center space-y-8">
                    <button className="absolute top-6 right-6 text-dark" onClick={() => setIsOpen(false)}>
                        <X size={32} />
                    </button>
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-2xl font-serif font-bold text-dark hover:text-accent transition-colors"
                            onClick={(e) => handleNavigation(e, item)}
                        >
                            {item.name}
                        </a>
                    ))}
                    <a 
                        href="#contact" 
                        onClick={(e) => handleNavigation(e, { href: '#contact' })}
                        className="premium-button-primary"
                    >
                        Fale Conosco
                    </a>
                </div>
            )}
        </header>
    );
};

export default Header;

