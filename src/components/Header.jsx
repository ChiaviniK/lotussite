import React, { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

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
            // If not on home page, navigate to home then scroll
            navigate('/');
            // Use timeout to allow navigation to complete before scrolling
            setTimeout(() => {
                if (item.href === '#') {
                    window.scrollTo(0, 0);
                } else {
                    const element = document.querySelector(item.href);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            // If already on home page, just scroll
            if (item.href === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const element = document.querySelector(item.href);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <Leaf className="h-8 w-8 text-primary" />
                    <span className="text-2xl font-bold text-primary">Lotus</span>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => handleNavigation(e, item)}
                            className="text-dark hover:text-primary transition-colors font-medium cursor-pointer"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-dark focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t">
                    <nav className="flex flex-col p-4 space-y-4">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-dark hover:text-primary font-medium cursor-pointer"
                                onClick={(e) => handleNavigation(e, item)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
