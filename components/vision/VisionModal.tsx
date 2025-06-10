import React, { useEffect } from 'react';

interface VisionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const VisionModal: React.FC<VisionModalProps> = ({ isOpen, onClose }) => {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const phases = [
        {
            phase: 'Phase 1',
            title: 'Yield Nexus',
            period: '2025 Q1-Q4',
            status: 'In Development',
            chains: ['Bitcoin', 'Stacks'],
            features: ['Yield Nexus strategies', 'Automated portfolio management', 'Risk assessment tools', 'Multi-protocol aggregation'],
            color: '#F7931A'
        },
        {
            phase: 'Phase 2',
            title: 'Ethereum Integration',
            period: '2026 Q1-Q2',
            status: 'Planned',
            chains: ['Ethereum', 'Polygon'],
            features: ['ETH & ERC-20 strategies', 'Layer 2 optimization', 'Cross-chain bridges', 'Unified dashboard'],
            color: '#5546FF'
        },
        {
            phase: 'Phase 3',
            title: 'Multi-Chain Expansion',
            period: '2026 Q3-Q4',
            status: 'Planned',
            chains: ['Solana', 'Arbitrum'],
            features: ['SOL ecosystem integration', 'High-speed transactions', 'Advanced DeFi protocols', 'Cross-chain yield farming'],
            color: '#00A478'
        },
        {
            phase: 'Phase 4',
            title: 'Universal Platform',
            period: '2027+',
            status: 'Vision',
            chains: ['Cosmos', 'Avalanche', 'BSC', 'Cardano'],
            features: ['Universal yield platform', 'AI-powered strategies', 'Institutional features', 'Global expansion'],
            color: '#8C8C8C'
        }
    ];

    const benefits = [
        {
            title: 'Unified Experience',
            description: 'Single platform for all your cross-chain yield strategies',
            icon: '🎯'
        },
        {
            title: 'Optimal Returns',
            description: 'AI-driven allocation across the best opportunities on any chain',
            icon: '📈'
        },
        {
            title: 'Risk Management',
            description: 'Comprehensive risk assessment across all supported blockchains',
            icon: '🛡️'
        },
        {
            title: 'Seamless Migration',
            description: 'Easy movement of assets between chains for maximum efficiency',
            icon: '🌉'
        }
    ];

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
            style={{
                backgroundColor: 'rgba(20, 30, 39, 0.8)',
                backdropFilter: 'blur(10px)'
            }}
            onClick={onClose}
        >
            <div
                className="w-full max-w-6xl rounded-3xl p-8 relative max-h-[95vh] overflow-y-auto"
                style={{
                    backgroundColor: '#FFFFFF',
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.3)'
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 border-none cursor-pointer text-lg"
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        color: '#8C8C8C',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(247, 147, 26, 0.1)';
                        e.currentTarget.style.color = '#F7931A';
                        e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                        e.currentTarget.style.color = '#8C8C8C';
                        e.currentTarget.style.transform = 'scale(1)';
                    }}
                >
                    ×
                </button>

                {/* Header */}
                <div className="text-center mb-6 pb-4" style={{ borderBottom: '2px solid rgba(247, 147, 26, 0.3)' }}>
                    <h2
                        className="text-3xl font-extrabold mb-2"
                        style={{
                            background: 'linear-gradient(135deg, #5546FF, #141E27)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}
                    >
                        Yield Nexus Platform Vision
                    </h2>
                    <p className="text-base mb-3" style={{ color: '#8C8C8C' }}>
                        Yield Nexus as the foundation for multi-chain expansion
                    </p>
                    <div className="flex justify-center gap-3">
                        <span
                            className="px-3 py-1 rounded-full text-sm font-semibold"
                            style={{ backgroundColor: 'rgba(247, 147, 26, 0.1)', color: '#F7931A' }}
                        >
                            Current: Yield Nexus
                        </span>
                        <span
                            className="px-3 py-1 rounded-full text-sm font-semibold"
                            style={{ backgroundColor: 'rgba(85, 70, 255, 0.1)', color: '#5546FF' }}
                        >
                            Target: 10+ Blockchains
                        </span>
                    </div>
                </div>

                {/* Vision Statement */}
                <div
                    className="p-4 rounded-2xl mb-6"
                    style={{ backgroundColor: 'rgba(0, 164, 120, 0.05)', border: '2px solid rgba(0, 164, 120, 0.2)' }}
                >
                    <h3 className="text-lg font-bold mb-2" style={{ color: '#00A478' }}>
                        🌟 Our Vision
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#8C8C8C' }}>
                        Yield Nexus will become the definitive platform for cross-chain yield generation. Starting with
                        <strong> Yield Nexus</strong> as our proven foundation, we're building architecture that scales
                        to create the most comprehensive multi-chain yield ecosystem in DeFi.
                    </p>
                </div>

                {/* Expansion Phases */}
                <div className="mb-6">
                    <h3 className="text-xl font-bold mb-4" style={{ color: '#262626' }}>
                        🗺️ Expansion Roadmap
                    </h3>
                    <div className="grid gap-4">
                        {phases.map((phase, index) => (
                            <div
                                key={index}
                                className="border-2 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1"
                                style={{
                                    backgroundColor: `${phase.color}05`,
                                    borderColor: `${phase.color}30`
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = `0 15px 40px ${phase.color}20`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                                            style={{ backgroundColor: phase.color }}
                                        >
                                            {index + 1}
                                        </div>
                                        <div>
                                            <h4 className="text-base font-bold" style={{ color: '#262626' }}>
                                                {phase.title}
                                            </h4>
                                            <p className="text-sm" style={{ color: '#8C8C8C' }}>
                                                {phase.period}
                                            </p>
                                        </div>
                                    </div>
                                    <span
                                        className="px-2 py-1 rounded-full text-xs font-semibold"
                                        style={{
                                            backgroundColor: phase.color,
                                            color: 'white'
                                        }}
                                    >
                                        {phase.status}
                                    </span>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <h5 className="font-semibold text-sm mb-2" style={{ color: '#262626' }}>
                                            Supported Blockchains:
                                        </h5>
                                        <div className="flex flex-wrap gap-2">
                                            {phase.chains.map((chain, chainIndex) => (
                                                <span
                                                    key={chainIndex}
                                                    className="px-2 py-1 rounded-lg text-xs font-medium"
                                                    style={{
                                                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                                        color: phase.color,
                                                        border: `1px solid ${phase.color}40`
                                                    }}
                                                >
                                                    {chain}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h5 className="font-semibold text-sm mb-2" style={{ color: '#262626' }}>
                                            Key Features:
                                        </h5>
                                        <ul className="space-y-1">
                                            {phase.features.map((feature, featureIndex) => (
                                                <li
                                                    key={featureIndex}
                                                    className="text-xs pl-3 relative"
                                                    style={{ color: '#8C8C8C' }}
                                                >
                                                    <span
                                                        className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full"
                                                        style={{ backgroundColor: phase.color }}
                                                    />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="mb-6">
                    <h3 className="text-xl font-bold mb-4" style={{ color: '#262626' }}>
                        💎 Platform Benefits
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="p-3 rounded-xl transition-all duration-300 hover:-translate-y-1"
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
                                    border: '1px solid rgba(85, 70, 255, 0.1)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(85, 70, 255, 0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.05)';
                                }}
                            >
                                <div className="flex items-start gap-3">
                                    <span className="text-xl">{benefit.icon}</span>
                                    <div>
                                        <h4 className="font-bold text-sm mb-1" style={{ color: '#262626' }}>
                                            {benefit.title}
                                        </h4>
                                        <p className="text-xs" style={{ color: '#8C8C8C' }}>
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="text-center pt-4" style={{ borderTop: '1px solid rgba(0, 0, 0, 0.1)' }}>
                    <p className="text-sm mb-3" style={{ color: '#8C8C8C' }}>
                        Join us in building the future of cross-chain yield generation
                    </p>
                    <button
                        className="px-6 py-2 rounded-full font-bold text-white transition-all duration-300 hover:-translate-y-1"
                        style={{ backgroundColor: '#5546FF' }}
                    >
                        Follow Our Progress
                    </button>
                </div>
            </div>
        </div>
    );
};
