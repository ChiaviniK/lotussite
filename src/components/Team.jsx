import React from 'react';
import felipeImg from '../assets/images/felipe.png';
import pauloImg from '../assets/images/paulo.png';
import luizImg from '../assets/images/luizChiavini.png';

const Team = () => {
    const team = [
        {
            name: 'Felipe',
            role: 'Eng. de Produção',
            image: felipeImg,
            bio: 'Especialista em processos produtivos e eficiência operacional sustentável.'
        },
        {
            name: 'Paulo',
            role: 'Biólogo',
            image: pauloImg,
            bio: 'Vasta experiência em estudos de fauna, flora e licenciamento ambiental.'
        },
        {
            name: 'Luiz Jr',
            role: 'Cientista de Dados',
            image: luizImg,
            bio: 'Focado em análise de dados ambientais, modelagem e inteligência de negócios.'
        }
    ];

    return (
        <section id="team" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Nossa Equipe</h2>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Profissionais qualificados e multidisciplinares prontos para atender sua empresa.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {team.map((member, index) => (
                        <div key={index} className="text-center group">
                            <div className="relative mb-6 inline-block">
                                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-100 shadow-lg group-hover:border-primary transition-colors duration-300 mx-auto">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-dark mb-1">{member.name}</h3>
                            <div className="text-primary font-medium mb-3">{member.role}</div>
                            <p className="text-gray-600 px-4">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
