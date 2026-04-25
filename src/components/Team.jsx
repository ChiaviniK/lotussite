import React from 'react';
import felipeImg from '../assets/images/felipe.png';
import luizImg from '../assets/images/luizChiavini.png';

const Team = () => {
    const team = [
        {
            name: 'Felipe',
            role: 'Engenharia de Produção',
            image: felipeImg,
            bio: 'Estrategista em otimização de processos e eficiência operacional com foco em resultados sustentáveis.'
        },

        {
            name: 'Luiz Jr',
            role: 'Data Science & ESG',
            image: luizImg,
            bio: 'Liderança técnica em análise preditiva de dados ambientais e métricas de impacto corporativo.'
        }
    ];

    return (
        <section id="team" className="py-32 bg-light/50 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <span className="text-accent text-sm font-bold tracking-[0.3em] uppercase mb-4 block">Capital Humano</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-black text-primary mb-6">Mentes que <span className="text-gold italic">Transformam</span></h2>
                    <div className="w-24 h-px bg-accent mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
                    {team.map((member, index) => (
                        <div key={index} className="flex flex-col group">
                            <div className="relative mb-8 aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <p className="text-white text-sm font-light leading-relaxed">
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                            
                            <h3 className="text-2xl font-serif font-bold text-primary mb-1 group-hover:text-accent transition-colors">{member.name}</h3>
                            <div className="text-accent text-xs font-bold tracking-widest uppercase mb-4">{member.role}</div>
                            <div className="w-8 h-0.5 bg-primary/10 group-hover:w-full transition-all duration-700"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;

