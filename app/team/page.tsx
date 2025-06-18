"use client"

import React from 'react';

const TeamPage: React.FC = () => {
    const teamMembers = [
        {
            id: 1,
            name: 'Emmanuel Paul',
            role: 'Smart Contract Engineer & Co-Founder',
            bio: 'Smart contract engineer with 1+ years experience in DeFi and Backend development. Specialized in smart contract  and backend architecture and security.',
            avatar: '👨‍💻',
            skills: ['Smart Contracts', 'Clarity', 'Rust', 'Node.js'],
            contact: {
                email: 'emmanuelpaul152@gmail com',
                phone: '+2348164860634',
                linkedin: 'https://linkedin.com/in/emmanuel-paul-39108922/',
                github: 'https://github.com/emmanuelist',
                twitter: 'https://twitter.com/emmanuelcesc'
            },
            experience: [
                { company: 'Emergency Response Africa', role: 'Backend Engineer', period: '2022-2023' },
                { company: 'Krystal Digital', role: 'Software Engineer', period: '2021-2022' }
            ]
        },
        {
            id: 2,
            name: 'Theophilus Uchechukwu',
            role: 'Fullstack Engineer & Co-Founder',
            bio: 'Senior Fullstack Engineer with over 4 years buiding web2 technologies and 1 year building in Web3. Passionate about blockchain innovation and developing solutions in the Stacks ecosystem.',
            avatar: '👩‍💻',
            skills: ['React', 'Nextjs', 'TypeScript', 'Python', 'Django', 'Nestjs', 'Nodejs', 'Web3 Integration', 'Mobile Development', 'Clarity (stacks)', 'Rust'],
            contact: {
                email: 'thesoftnode@gmail.com',
                phone: '+2349038726950',
                linkedin: 'https://www.linkedin.com/in/theophilus-uchechukwu/',
                github: 'https://github.com/TheSoftNode',
                twitter: 'https://x.com/TheSoft_Theo'
            },
            experience: [
                { company: 'HitoAI', role: 'Developers Lead', period: '2024 - present' },
                { company: 'ALX', role: 'Bankend Engineer', period: '2023-2024' },
                { company: 'IPT', role: 'Lead IT support Engineer', period: '2021-2023' }
            ]
        }
    ];

    const companyValues = [
        {
            title: 'Innovation',
            description: 'Pushing the boundaries of DeFi with cutting-edge solutions',
            icon: '🚀'
        },
        {
            title: 'Security',
            description: 'Security-first approach in everything we build',
            icon: '🔐'
        },
        {
            title: 'Transparency',
            description: 'Open source development and clear communication',
            icon: '🔍'
        },
        {
            title: 'Collaboration',
            description: 'Working together as equals to build something extraordinary',
            icon: '🤝'
        }
    ];

    const projectHighlights = [
        {
            title: 'Cross-Chain Focus',
            description: 'Building bridges between Bitcoin and Stacks ecosystem',
            icon: '🌉'
        },
        {
            title: 'Yield Optimization',
            description: 'Maximizing returns through intelligent DeFi strategies',
            icon: '📈'
        },
        {
            title: 'User Experience',
            description: 'Making complex DeFi accessible to everyone',
            icon: '✨'
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-8">
            {/* Header */}
            <div className="text-center mb-8">
                <h1
                    className="text-3xl font-bold mb-3"
                    style={{
                        background: 'linear-gradient(135deg, #5546FF, #141E27)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}
                >
                    Meet Our Team
                </h1>
                <p className="text-base text-gray-600 max-w-3xl mx-auto">
                    We're a collaborative team of developers building the future of cross-chain yield generation.
                    Working together as equals, we're creating sBTC Yield Nexus to bridge Bitcoin and DeFi ecosystems.
                </p>
            </div>

            {/* Team Members */}
            <div className="mb-10">
                <h2 className="text-xl font-bold mb-6" style={{ color: '#262626' }}>
                    👥 Core Team
                </h2>

                <div className="grid lg:grid-cols-2 gap-6">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="p-6 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1"
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                borderColor: 'rgba(85, 70, 255, 0.2)',
                                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 15px 40px rgba(85, 70, 255, 0.2)';
                                e.currentTarget.style.borderColor = 'rgba(85, 70, 255, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.05)';
                                e.currentTarget.style.borderColor = 'rgba(85, 70, 255, 0.2)';
                            }}
                        >
                            {/* Profile Header */}
                            <div className="flex items-start gap-4 mb-4">
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                                    style={{ backgroundColor: 'rgba(247, 147, 26, 0.1)' }}
                                >
                                    {member.avatar}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold mb-1" style={{ color: '#262626' }}>
                                        {member.name}
                                    </h3>
                                    <p className="text-sm font-semibold mb-2" style={{ color: '#F7931A' }}>
                                        {member.role}
                                    </p>
                                    <p className="text-sm leading-relaxed" style={{ color: '#8C8C8C' }}>
                                        {member.bio}
                                    </p>
                                </div>
                            </div>

                            {/* Skills */}
                            <div className="mb-4">
                                <h4 className="font-semibold text-sm mb-2" style={{ color: '#262626' }}>
                                    🔧 Core Skills
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {member.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 rounded-lg text-xs font-medium"
                                            style={{
                                                backgroundColor: 'rgba(85, 70, 255, 0.1)',
                                                color: '#5546FF'
                                            }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Experience */}
                            <div className="mb-4">
                                <h4 className="font-semibold text-sm mb-2" style={{ color: '#262626' }}>
                                    💼 Experience
                                </h4>
                                <div className="space-y-1">
                                    {member.experience.map((exp, index) => (
                                        <div key={index} className="text-xs">
                                            <div className="font-semibold" style={{ color: '#262626' }}>
                                                {exp.role} at {exp.company}
                                            </div>
                                            <div style={{ color: '#8C8C8C' }}>{exp.period}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div>
                                <h4 className="font-semibold text-sm mb-2" style={{ color: '#262626' }}>
                                    📞 Contact
                                </h4>
                                <div className="space-y-1 mb-3">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm">📧</span>
                                        <a
                                            href={`mailto:${member.contact.email}`}
                                            className="text-xs text-blue-600 hover:underline"
                                        >
                                            {member.contact.email}
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm">📱</span>
                                        <a
                                            href={`tel:${member.contact.phone.replace(/\D/g, '')}`}
                                            className="text-xs text-blue-600 hover:underline"
                                        >
                                            {member.contact.phone}
                                        </a>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="flex gap-2">
                                    <a
                                        href={member.contact.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors duration-200"
                                        style={{ backgroundColor: 'rgba(0, 119, 181, 0.1)' }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = 'rgba(0, 119, 181, 0.2)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = 'rgba(0, 119, 181, 0.1)';
                                        }}
                                    >
                                        💼
                                    </a>
                                    <a
                                        href={member.contact.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors duration-200"
                                        style={{ backgroundColor: 'rgba(51, 51, 51, 0.1)' }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = 'rgba(51, 51, 51, 0.2)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = 'rgba(51, 51, 51, 0.1)';
                                        }}
                                    >
                                        🐙
                                    </a>
                                    <a
                                        href={member.contact.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors duration-200"
                                        style={{ backgroundColor: 'rgba(29, 161, 242, 0.1)' }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = 'rgba(29, 161, 242, 0.2)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = 'rgba(29, 161, 242, 0.1)';
                                        }}
                                    >
                                        🐦
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Focus */}
            <div className="mb-8">
                <h2 className="text-xl font-bold mb-6" style={{ color: '#262626' }}>
                    🎯 Project Focus
                </h2>

                <div className="grid md:grid-cols-3 gap-4">
                    {projectHighlights.map((highlight, index) => (
                        <div
                            key={index}
                            className="p-4 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1"
                            style={{
                                backgroundColor: 'rgba(85, 70, 255, 0.05)',
                                border: '2px solid rgba(85, 70, 255, 0.2)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(85, 70, 255, 0.1)';
                                e.currentTarget.style.borderColor = 'rgba(85, 70, 255, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(85, 70, 255, 0.05)';
                                e.currentTarget.style.borderColor = 'rgba(85, 70, 255, 0.2)';
                            }}
                        >
                            <div className="text-2xl mb-2">{highlight.icon}</div>
                            <h3 className="font-bold text-sm mb-1" style={{ color: '#262626' }}>
                                {highlight.title}
                            </h3>
                            <p className="text-xs" style={{ color: '#8C8C8C' }}>
                                {highlight.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Company Values */}
            <div className="mb-8">
                <h2 className="text-xl font-bold mb-6" style={{ color: '#262626' }}>
                    💫 Our Values
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {companyValues.map((value, index) => (
                        <div
                            key={index}
                            className="p-4 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1"
                            style={{
                                backgroundColor: 'rgba(247, 147, 26, 0.05)',
                                border: '2px solid rgba(247, 147, 26, 0.2)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(247, 147, 26, 0.1)';
                                e.currentTarget.style.borderColor = 'rgba(247, 147, 26, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(247, 147, 26, 0.05)';
                                e.currentTarget.style.borderColor = 'rgba(247, 147, 26, 0.2)';
                            }}
                        >
                            <div className="text-2xl mb-2">{value.icon}</div>
                            <h3 className="font-bold text-sm mb-1" style={{ color: '#262626' }}>
                                {value.title}
                            </h3>
                            <p className="text-xs" style={{ color: '#8C8C8C' }}>
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Development Status */}
            <div
                className="p-6 rounded-2xl text-center"
                style={{
                    background: 'linear-gradient(135deg, rgba(85, 70, 255, 0.08), rgba(102, 126, 234, 0.04))',
                    border: '2px solid rgba(85, 70, 255, 0.15)'
                }}
            >
                <h2 className="text-xl font-bold mb-3" style={{ color: '#262626' }}>
                    🚧 Currently in Development
                </h2>
                <p className="text-base mb-4" style={{ color: '#6B7280' }}>
                    We're actively building sBTC Yield Nexus as a focused team.
                    Our collaborative approach ensures every decision is made together as we work towards
                    creating the best cross-chain yield generation platform.
                </p>
                <div className="flex justify-center">
                    <a
                        href="mailto:hello@yieldnexus.io"
                        className="px-5 py-2 rounded-xl font-bold text-white transition-all duration-300 hover:-translate-y-1 text-sm"
                        style={{ backgroundColor: '#5546FF' }}
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TeamPage;