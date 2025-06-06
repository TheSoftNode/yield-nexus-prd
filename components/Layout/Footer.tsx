import React from 'react';

export const Footer: React.FC = () => {
    const footerLinks = [
        { label: 'GitHub Repository', href: 'https://github.com/emmanuelist/yield-nexus' },
        { label: 'Live App', href: '#app' },
        { label: 'Team', href: '/team' },
        { label: 'Support', href: '/support' }
    ];

    return (
        <footer
            className="border-t"
            style={{
                backgroundColor: '#141E27',
                borderColor: 'rgba(255, 255, 255, 0.1)'
            }}
        >
            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Brand Section */}
                    <div className="flex items-center gap-3">
                        <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold"
                            style={{ backgroundColor: '#F7931A' }}
                        >
                            ₿
                        </div>
                        <span
                            className="text-lg font-bold"
                            style={{ color: '#FFFFFF' }}
                        >
                            sBTC Yield Nexus
                        </span>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap items-center gap-6">
                        {footerLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="text-sm transition-colors duration-300 hover:text-white"
                                style={{ color: '#8C8C8C' }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Powered By & Copyright */}
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="flex items-center gap-2">
                            <span
                                className="text-xs"
                                style={{ color: '#8C8C8C' }}
                            >
                                Powered by:
                            </span>
                            <div className="flex items-center gap-2">
                                <span
                                    className="px-2 py-1 rounded text-xs font-semibold"
                                    style={{
                                        backgroundColor: 'rgba(247, 147, 26, 0.2)',
                                        color: '#F7931A'
                                    }}
                                >
                                    Bitcoin
                                </span>
                                <span
                                    className="px-2 py-1 rounded text-xs font-semibold"
                                    style={{
                                        backgroundColor: 'rgba(85, 70, 255, 0.2)',
                                        color: '#5546FF'
                                    }}
                                >
                                    Stacks
                                </span>
                                <span
                                    className="px-2 py-1 rounded text-xs font-semibold"
                                    style={{
                                        backgroundColor: 'rgba(0, 164, 120, 0.2)',
                                        color: '#00A478'
                                    }}
                                >
                                    sBTC
                                </span>
                            </div>
                        </div>

                        <div
                            className="text-xs"
                            style={{ color: '#8C8C8C' }}
                        >
                            © 2025 sBTC Yield Nexus
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
